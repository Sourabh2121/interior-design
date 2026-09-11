import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import './components.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
