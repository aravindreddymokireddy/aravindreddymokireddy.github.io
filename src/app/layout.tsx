import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aravind Reddy Mokireddy',
  description: 'Front-end developer, Flutter developer, Freelancer',
  icons: {
    icon: '/images/icons/lambda.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
