import { gql } from "@apollo/client";
import client from "@/apollo/apolloClient";
import { notFound } from "next/navigation";

// Tipo principal do Produto
interface Product {
  documentId: string;
  productName: string;
  slug: string;
  price: number;
  oldPrice?: number;
  installments: number;
  actived: boolean;
  stock: number;
  description: string;
}

// Query GraphQL para buscar **todos os produtos** (já que a API não suporta `where`)
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      documentId
      productName
      slug
      price
      oldPrice
      installments
      actived
      stock
      description
      images {
        name
        alternativeText
        width
        height
        url
      }
      category {
        slug
        name
      }
    }
  }
`;

// Função para buscar todos os produtos e filtrar pelo slug
async function getProduct(slug: string): Promise<Product | null> {
  console.log("🔍 Buscando produto com slug:", slug);
  
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS, // Buscar todos os produtos
      fetchPolicy: "no-cache",
    });

    if (!data?.products) {
      console.warn("⚠️ Nenhum produto retornado pela API.");
      return null;
    }

    const product = data.products.find((p: Product) => p.slug === slug) || null;

    if (!product) {
      console.warn(`⚠️ Produto não encontrado para o slug: ${slug}`);
    }

    return product;
  } catch (error) {
    console.error("❌ Erro ao buscar o produto:", error);
    return null;
  }
}

// **🔹 Página do Produto (Server Component)**
type Params = Promise<{ slug: string }>; // Garantimos que `params` seja tratado como uma Promise

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params; // Aguardamos `params` antes de usá-lo

  console.log("📌 Parâmetros recebidos:", slug);

  if (!slug || typeof slug !== "string") {
    return notFound();
  }

  return <ProductPageServer slug={slug} />;
}

// **🔹 Criamos um Server Component separado para buscar o produto**
async function ProductPageServer({ slug }: { slug: string }) {
  const product = await getProduct(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.productName}</h1>
      <p className="text-gray-600">{product.description.replace(/<[^>]+>/g, "")}</p>
      <p className="text-2xl font-semibold text-blue-600">R$ {product.price.toFixed(2)}</p>
      {product.oldPrice && (
        <p className="text-gray-500 line-through">De: R$ {product.oldPrice.toFixed(2)}</p>
      )}
      <p className="text-sm text-gray-700">Estoque: {product.stock}</p>
    </div>
  );
}
