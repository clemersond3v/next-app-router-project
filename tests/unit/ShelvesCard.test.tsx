import React from 'react';
import { render, screen } from '@testing-library/react';
import ShelvesCard from '@/app/components/ShelvesCard/ShelvesCard';

const mockProduct = {
  documentId: '12345',
  productName: 'Tênis de Corrida',
  slug: 'tenis-de-corrida',
  price: 299.9,
  oldPrice: 399.9,
  installments: 10,
  actived: true,
  stock: 5,
  description: "Produto top",
  images: [
    {
      name: "Imagem Produto",
      alternativeText: "Tênis de Corrida",
      width: 500,
      height: 500,
      url: "/produto-imagem.jpg"
    }
  ],
  category: {
    name: "Corrida"
  }
};

describe('ShelvesCard', () => {
  it('renderiza corretamente as informações do produto', () => {
    render(<ShelvesCard product={mockProduct} />);

    // Verifica se o nome do produto está na tela
    expect(screen.getByText('Tênis de Corrida')).toBeInTheDocument();

    // Verifica se a categoria está na tela
    expect(screen.getByText('Corrida')).toBeInTheDocument();

    // Verifica se o preço está correto
    expect(screen.getByText('R$ 299,90')).toBeInTheDocument();

    // Verifica se o preço antigo também aparece
    expect(screen.getByText('R$ 399,90')).toBeInTheDocument();

    // Verifica se o botão "Comprar" existe
    expect(screen.getByText('Comprar')).toBeInTheDocument();
  });
});
