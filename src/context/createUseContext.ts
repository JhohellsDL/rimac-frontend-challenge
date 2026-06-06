import { useContext } from 'react';
import type React from 'react';

export function createUseContext<T>(
  Context: React.Context<T | undefined>,
  name: string
): () => T {
  return () => {
    const ctx = useContext(Context);
    if (!ctx) {
      throw new Error(`use${name} debe usarse dentro de ${name}Provider`);
    }
    return ctx;
  };
}
