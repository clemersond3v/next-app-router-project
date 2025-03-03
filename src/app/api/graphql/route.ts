import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import fs from "fs";
import path from "path";

// 🔹 Ajustar o caminho correto do JSON (incluindo "src/")
const dbPath = path.join(process.cwd(), "src", "data", "products.json");

console.log("📂 Caminho do JSON:", dbPath);

// 🔹 Verificar se o arquivo JSON existe
if (!fs.existsSync(dbPath)) {
  console.error("❌ Arquivo JSON NÃO encontrado!");
} else {
  console.log("✅ Arquivo JSON encontrado!");
}

// Função para ler os dados do JSON
const readData = () => {
  try {
    if (!fs.existsSync(dbPath)) {
      console.error("❌ Arquivo JSON não encontrado!");
      return { products: [] };
    }
    const jsonData = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("❌ Erro ao ler o arquivo JSON:", error);
    return { products: [] };
  }
};

// Definição do Schema GraphQL
const typeDefs = gql`
  type Image {
    name: String
    alternativeText: String
    width: Int
    height: Int
    url: String
  }

  type Category {
    slug: String
    name: String
  }

  type Product {
    documentId: ID!
    productName: String!
    slug: String!
    price: Float!
    oldPrice: Float
    installments: Int
    actived: Boolean!
    stock: Int!
    description: String
    images: [Image]
    category: Category
  }

  type Query {
    products: [Product!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    products: () => {
      console.log("🔍 Buscando produtos...");
      const data = readData();
      console.log(`🛒 ${data.products.length} produtos carregados.`);
      return data.products;
    },
  },
};

// Criando servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Criando handler para Next.js App Router
const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
