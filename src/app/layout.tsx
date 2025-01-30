import './globals.css';
import { Be_Vietnam_Pro } from 'next/font/google';

const vietnam = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={vietnam.className}>
      <body>
        <header className='sr-only'>Manage Landing Page</header>
        {children}
      </body>
    </html>
  );
}
