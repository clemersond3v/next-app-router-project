import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
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
`;
