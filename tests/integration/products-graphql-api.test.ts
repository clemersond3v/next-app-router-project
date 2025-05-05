describe('GraphQL API - Products Query', () => {
    it('deve retornar uma lista de produtos', async () => {
      const response = await fetch('http://localhost:3000/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              products {
                documentId
                productName
                price
              }
            }
          `,
        }),
      });
  
      expect(response.status).toBe(200);
  
      const { data, errors } = await response.json();
  
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      expect(Array.isArray(data.products)).toBe(true);
      expect(data.products.length).toBeGreaterThan(0);
      expect(data.products[0]).toHaveProperty('documentId');
      expect(data.products[0]).toHaveProperty('productName');
      expect(data.products[0]).toHaveProperty('price');
    });
  });
  