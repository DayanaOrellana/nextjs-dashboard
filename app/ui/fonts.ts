import { Inter, Lusitana } from 'next/font/google';

// Fuente principal
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Fuente secundaria (Lusitana)
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
