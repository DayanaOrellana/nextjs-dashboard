import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';

export const metadata = {
  title: {
    template: '%s | Next.js Dashboard',
    default: 'Next.js Dashboard',
  },
  description: 'The official Next.js Learn Dashboard app built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.className}`}>
        {children}
      </body>
    </html>
  );
}
