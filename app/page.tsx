
'use client';
const WAITLIST_URL = 'mailto:info@shoppilot.ai'; // replace with Tally/Typeform/Beehiiv
export default function Page() {
  return (
    <main>
      <section style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24, alignItems: 'center', marginTop: 24 }}>
        <div>
          <h1 style={{ fontSize: 44, lineHeight: 1.1, marginBottom: 12 }}>Your AI Copilot for E‑Commerce</h1>
          <p style={{ fontSize: 18, color: '#444', marginBottom: 16 }}>Generate product descriptions, translations and SEO keywords in seconds. Push to Shopify with one click.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href={WAITLIST_URL} style={{ background: 'black', color: 'white', padding: '12px 18px', borderRadius: 10, textDecoration: 'none' }}>Join the waitlist</a>
            <a href="#features" style={{ padding: '12px 18px', border: '1px solid #ddd', borderRadius: 10, textDecoration: 'none', color: 'black' }}>See features</a>
          </div>
          <p style={{ fontSize: 12, color: '#666', marginTop: 8 }}>No spam. Early access for first 100 stores.</p>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 16, padding: 16 }}>
          <div style={{ background: '#f7f7f7', borderRadius: 12, padding: 16 }}>
            <p style={{ margin: 0, fontWeight: 600 }}>How it works</p>
            <ol style={{ color: '#444', lineHeight: 1.6 }}>
              <li>Upload your products (CSV) or connect Shopify.</li>
              <li>AI creates SEO descriptions and translations.</li>
              <li>Push to your store in one click.</li>
            </ol>
          </div>
        </div>
      </section>
      <section id="features" style={{ marginTop: 48 }}>
        <h2>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          <Card title="AI Descriptions" desc="High-converting, SEO-friendly product copy in 20+ languages." />
          <Card title="Translations" desc="Auto translate to EN/IT/FR/ES/DE with consistent tone." />
          <Card title="One‑click Shopify push" desc="Publish directly to your product pages." />
          <Card title="Bulk actions" desc="Upload CSV, review, export or publish in bulk." />
          <Card title="Keyword suggestions" desc="5–8 keywords per product, ready for SEO." />
          <Card title="Privacy‑first" desc="We only process product data, no PII." />
        </div>
      </section>
      <section id="pricing" style={{ marginTop: 48 }}>
        <h2>Pricing</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          <PriceCard name="Starter" price="€29/mo" bullets={['1 store', '1,000 generations/mo', 'Email support']} />
          <PriceCard name="Pro" price="€59/mo" bullets={['3 stores', '5,000 generations/mo', 'Priority support']} highlight />
          <PriceCard name="Agency" price="€99/mo" bullets={['10 stores', '20,000 generations/mo', 'SLA support']} />
        </div>
        <div style={{ marginTop: 16 }}>
          <a href={WAITLIST_URL} style={{ background: 'black', color: 'white', padding: '12px 18px', borderRadius: 10, textDecoration: 'none' }}>Join the waitlist</a>
        </div>
      </section>
      <section style={{ marginTop: 48 }}>
        <h2>FAQ</h2>
        <details style={{ marginBottom: 8 }}><summary>Is there a free trial?</summary><p>Yes, 7 days free trial on launch. Early adopters get extended credits.</p></details>
        <details style={{ marginBottom: 8 }}><summary>Which platforms do you support?</summary><p>Shopify at launch. WooCommerce and Amazon listings next.</p></details>
        <details><summary>Do you store my data?</summary><p>We process product data to generate copy; we don’t store PII. See our Privacy.</p></details>
      </section>
    </main>
  );
}
function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: '#444' }}>{desc}</p>
    </div>
  );
}
function PriceCard({ name, price, bullets, highlight = false }: { name: string; price: string; bullets: string[]; highlight?: boolean }) {
  return (
    <div style={{ border: highlight ? '2px solid black' : '1px solid #eee', borderRadius: 12, padding: 16, background: highlight ? '#fafafa' : 'white' }}>
      <h3 style={{ marginTop: 0 }}>{name}</h3>
      <p style={{ fontSize: 28, margin: '4px 0 12px' }}>{price}</p>
      <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
    </div>
  );
}
