import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../apollo/queries/products';

export const useProducts = () => {
    const { data, loading, error } = useQuery(GET_PRODUCTS);

    return {
        products: data?.products || [],
        loading,
        error,
    };
};
