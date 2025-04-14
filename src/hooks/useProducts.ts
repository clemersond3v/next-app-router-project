import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
    const res = await fetch("/api/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
                query Products {
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
            `,
        }),
    });

    const { data } = await res.json();
    return data?.products || [];
};

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"], // Nome único para cache
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5, // Cache válido por 5 minutos
        gcTime: 1000 * 60 * 10, // Mantenha no cache por 10 minutos
        refetchOnWindowFocus: false, // Evita refetch desnecessário ao mudar de aba
    });
};
