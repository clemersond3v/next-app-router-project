// jest.setup.ts
import React from 'react';
import '@testing-library/jest-dom';
import 'whatwg-fetch';

// Mock do next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock do next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => {
    return <a {...props}>{children}</a>;
  },
}));
