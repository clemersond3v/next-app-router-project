import { gql } from "@apollo/client";
import client from "@/apollo/apolloClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

// Definir a query GraphQL para buscar um produto pelo slug
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




// Função para buscar um produto pelo slug
async function getProduct(slug: string) {
  console.log("🔍 Buscando produto com slug:", slug);
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS, // Buscar todos os produtos
      fetchPolicy: "no-cache",
    });

    console.log("📌 Todos os produtos recebidos:", data.products);

    // Filtra o produto pelo slug correto
    const product = data?.products?.find((p: any) => p.slug === slug) || null;

    if (!product) {
      console.warn(`⚠️ Produto não encontrado para o slug: ${slug}`);
    }

    return product;
  } catch (error: any) {
    console.error("❌ Erro ao buscar o produto:", error.message || error);
    return null;
  }
}



// **Página do Produto**
export default async function ProductPage({ params }: PageProps) {
  console.log("📌 Parâmetros recebidos:", params);

  if (!params || typeof params?.slug !== "string") {
    return notFound();
  }

  console.log("🔍 Buscando produto pelo slug:", params.slug);
  const product = await getProduct(params.slug); // Agora pegamos diretamente

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

