
export const metadata = {
  title: 'Shoppilot.ai — Your AI Copilot for E‑Commerce',
  description: 'Product descriptions, translations and SEO — in one click.',
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit' }}>
              <img src="/favicon.svg" alt="logo" width="28" height="28" />
              <strong>Shoppilot.ai</strong>
            </a>
            <nav style={{ display: 'flex', gap: 16 }}>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="/(legal)/privacy">Privacy</a>
            </nav>
          </header>
          {children}
          <footer style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #eee', fontSize: 12, color: '#666' }}>
            © {new Date().getFullYear()} Shoppilot.ai — All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
