
import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';
import Header from '@/components/Header';
//import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const theme = {
  token: {
    colorPrimary: '#5928E5',
    borderRadius: 8,
  },
};

export const metadata = {
  title: 'GameComics - Tu tienda de videojuegos y cómics',
  description: 'Encuentra los mejores videojuegos, cómics, manga y merchandising.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
            <Header />
            <main className="flex-grow pt-24">
              {children}
            </main>
      </body>
    </html>
  );
}