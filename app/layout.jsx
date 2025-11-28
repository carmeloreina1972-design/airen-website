export const metadata = {
  title: "AIRen – Ecosistema 2050",
  description: "La piattaforma madre. Visione, progetti, IA e la Direttrice ARYA."
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <header>
          <div className="container">
            <h1>AIRen</h1>
            <p>Il Contatto che Resta</p>
          </div>
        </header>

        {children}

        <footer>
          AIRen © 2025 – Tutti i diritti riservati
        </footer>
      </body>
    </html>
  )
}
