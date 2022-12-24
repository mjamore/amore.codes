import { Quicksand } from '@next/font/google';
import '../styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Providers } from './utils/providers';
import cn from 'classnames';

const quicksand = Quicksand({
  variable: '--font-inter',
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={quicksand.className}>
      <head />
      <body className={cn('bg-dark-green-transparent bg-[url("/images/circuit-board.svg")]')}>
        <Providers>
          <Header />
          <div className={cn('relative mx-auto flex w-full max-w-page flex-col justify-center bg-neutral-900 px-8 py-16 opacity-90')}>
            <main className={cn('flex min-h-screen flex-col')}>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
