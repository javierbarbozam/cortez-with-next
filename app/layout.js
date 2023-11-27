import { Providers } from './providers';
import Header from './components/header';
import Footer from './components/footer';

export const metadata = {
  title: 'Cortez Amarillo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div style={{ width: '100%', height: '5px', backgroundColor: '#FFE047' }}>
            {children}
          </div>
          <Footer />
          <div style={{ fontSize: '10px', width: '100%', height: '30px', color: 'white', backgroundColor: '#1F2A2D' }}>
            <p>Terminos y condiciones</p>
          </div>
        </Providers>
      </body>
    </html>
  );
}
