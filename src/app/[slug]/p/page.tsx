import { gql } from "@apollo/client";
import client from "@/apollo/apolloClient";
import { notFound } from "next/navigation";

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

// Definir a query GraphQL para buscar um produto pelo slug
const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug {
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
  try {
    const { data } = await client.query({
      query: GET_PRODUCT_BY_SLUG,
      fetchPolicy: "no-cache",
    });

    if (!data || !data.products) {
      return null;
    }

    return data.products.find((p: Product) => p.slug === slug) || null;
  } catch (error) {
    console.error("❌ Erro ao buscar o produto:", error);
    return null;
  }
}

// **Página do Produto**
export default async function ProductPage({ params }: { params: { slug?: string } }) {
  if (!params?.slug) {
    return notFound();
  }

  const product = await getProduct(params.slug);

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
