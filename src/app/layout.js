import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import './components.css';

export const metadata = {
  title: 'CS India | Luxury Interior Design & Turnkey Architecture',
  description: 'CS India is an award-winning interior architecture firm specializing in luxury commercial offices, turnkey corporate spaces, and bespoke residential residences across India.',
  keywords: 'CS India, interior design, corporate interiors, turnkey solutions, commercial architecture, office interior India, luxury residences',
  authors: [{ name: 'CS India' }],
  openGraph: {
    title: 'CS India | Luxury Interior Design & Turnkey Architecture',
    description: 'Transforming commercial and luxury residential spaces across India with bespoke design and turnkey precision.',
    siteName: 'CS India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
