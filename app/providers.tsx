'use client';

import { client } from '@/lib/client/client.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

type ProvidersProps = Readonly<{
  children: ReactNode;
}>;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

client.setConfig({
  baseUrl: 'http://localhost:3000',
  headers: {
    Origin: 'http://localhost:3001',
    'Content-Type': 'application/json',
  },
});

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
