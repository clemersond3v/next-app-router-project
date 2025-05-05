import { gql } from "@apollo/client";
import client from "@/apollo/apolloClient";
import Link from "next/link";
import notFound from "../not-found";

// Tipo para os produtos
interface Product {
  documentId: string;
  productName: string;
  slug: string;
  price: number;
  oldPrice?: number;
  category: {
    slug: string;
    name: string;
  };
}

// Query GraphQL para buscar todos os produtos
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      documentId
      productName
      slug
      price
      oldPrice
      category {
        slug
        name
      }
    }
  }
`;

// **🔹 Função para buscar produtos por categoria**
async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS,
      fetchPolicy: "no-cache",
    });

    if (!data?.products) {
      return [];
    }

    return data.products.filter((p: Product) => p.category.slug === categorySlug);
  } catch (error) {
    console.error("❌ Erro ao buscar os produtos:", error);
    return [];
  }
}

// **🔹 Página de Departamento (Server Component)**
type Params = Promise<{ slug: string }>; // Garantimos que `params` seja tratado como uma Promise

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params; // ✅ Aguardamos `params` antes de usá-lo

  if (!slug || typeof slug !== "string") {
    return notFound();
  }

  return <CategoryPageServer slug={slug} />;
}

// **🔹 Criamos um Server Component separado para buscar os produtos da categoria**
async function CategoryPageServer({ slug }: { slug: string }) {
  const products = await getProductsByCategory(slug);

  if (products.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold capitalize">{slug}</h1>
        <p className="text-gray-500">Nenhum produto encontrado nesta categoria.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize">{products[0].category.name}</h1>
      <ul className="mt-4">
        {products.map((product) => (
          <li key={product.documentId} className="border-b py-4">
            <Link href={`/${product.slug}/p`} className="text-blue-500 hover:underline">
              {product.productName}
            </Link>
            <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
