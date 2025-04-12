import type { Metadata } from 'next';
import './globals.css';
import Container from '@/components/container';

export const metadata: Metadata = {
  title: 'Torch App',
  description:
    'Torch makes data analysis easy for everyone. Visualise key metrics, track performance, and discover trends without needing a data science background.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-bg text-white`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
