'use client'
import { useState } from 'react'

const BRAND = {
  primary: '#2563EB',
  secondary: '#059669',
  accent: '#F97316',
  slate: '#1E293B',
  light: '#F1F5F9',
}

function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 22L24 8l18 14v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V22z" fill={BRAND.primary} opacity="0.18"/>
        <path d="M24 8 6 22v16a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V22L24 8Z" stroke={BRAND.primary} strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 34h16V24H16v10Z" stroke={BRAND.secondary} strokeWidth="2"/>
        <circle cx="20" cy="28" r="1.5" fill={BRAND.secondary}/>
        <circle cx="28" cy="30.5" r="1.5" fill={BRAND.secondary}/>
        <path d="M20 28c2.5-2.4 4.5-1.4 6.2.2 1 .9 1.7 1.4 1.8 2.3" stroke={BRAND.secondary} strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
      <span className="text-2xl font-bold" style={{ color: BRAND.slate }}>PropIntel</span>
    </div>
  )
}

export default function Page() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      if (!endpoint) {
        setSubmitted(true)
        return
      }
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!resp.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch (err: any) {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Logo />
          <a href="#waitlist" className="px-5 py-2 rounded-xl font-semibold text-white shadow" style={{ backgroundColor: BRAND.primary }}>
            Join Early Access
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Invest smarter. Underwrite deals in <span style={{ color: BRAND.primary }}>minutes</span>, not hours.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Built by real estate investors, for real estate investors. PropIntel uses AI to instantly score properties,
              predict motivated sellers, and generate deal sheets you can trust.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#waitlist" className="px-6 py-3 rounded-2xl font-semibold text-white" style={{ backgroundColor: BRAND.primary }}>Get Early Access</a>
              <a href="#how" className="px-6 py-3 rounded-2xl font-semibold border" style={{ borderColor: BRAND.primary, color: BRAND.primary }}>How it works</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">No spam. Cancel anytime.</div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border p-6">
            <div className="flex items-center gap-3">
              <Logo className="h-7" />
              <span className="text-sm font-semibold text-gray-500">Dashboard Preview</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-4 border bg-gradient-to-b from-white to-gray-50">
                <div className="text-xs text-gray-500">Property</div>
                <div className="font-semibold">123 Main St</div>
                <div className="mt-2 text-xs text-gray-500">Score</div>
                <div className="text-2xl font-bold" style={{ color: BRAND.secondary }}>92</div>
                <div className="text-xs text-gray-500">Strong Buy</div>
              </div>
              <div className="rounded-2xl p-4 border bg-gradient-to-b from-white to-gray-50">
                <div className="text-xs text-gray-500">ARV</div>
                <div className="text-xl font-bold">$425,000</div>
                <div className="text-xs text-gray-500 mt-1">Rent Yield</div>
                <div className="text-lg font-semibold">8.5%</div>
              </div>
              <div className="rounded-2xl p-4 border col-span-2 bg-gradient-to-b from-white to-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500">Motivated Seller Probability</div>
                    <div className="text-xl font-bold" style={{ color: BRAND.accent }}>78%</div>
                  </div>
                  <button className="px-4 py-2 rounded-xl font-semibold text-white" style={{ backgroundColor: BRAND.secondary }}>Export Deal Sheet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders' Note */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border p-8 bg-gradient-to-b from-white to-gray-50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">From the Founder</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I built PropIntel because, as a real estate investor, I kept hitting the same walls: wasting hours underwriting deals with
              scattered data, guessing at true condition from photos, chasing unreliable rent estimates, and struggling to identify motivated
              sellers. PropIntel is the tool I wish I had years ago — a fast, trustworthy underwriting assistant that brings the most important
              answers together in one place.
            </p>
            <p className="mt-4 text-gray-700">
              If this resonates with you, join the early access list. I’d love your input on which features help you win more and waste less time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The problem (you’ll relate to this)</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-10 text-gray-700">
            <ul className="space-y-3">
              <li>Wasting hours underwriting deals with scattered data.</li>
              <li>Not knowing which sellers are truly motivated.</li>
              <li>Unclear property condition without visiting in person.</li>
              <li>Guessing fair market value — as-is vs after-repair.</li>
            </ul>
            <ul className="space-y-3">
              <li>Rental estimates that don’t match reality.</li>
              <li>Off-market deals spread across many sites & groups.</li>
              <li>Outdated or missing seller contact info.</li>
              <li>Hunting for funding sources that actually fit your deal.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" id="how">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The solution: PropIntel</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { t: 'Instant scoring', d: 'As-is value, ARV, rental yield, ROI in seconds.' },
              { t: 'Motivation signal', d: 'Data-driven probability of seller discounting.' },
              { t: 'Condition analysis', d: 'AI reads photos & descriptions to flag repairs.' },
              { t: 'Off-market aggregation', d: 'Consolidates auctions, groups, and niche brokers.' },
              { t: 'Funding match', d: 'Lender options by property type & location.' },
              { t: 'One-click deal sheet', d: 'Export polished investor PDFs instantly.' },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold" style={{ color: BRAND.primary }}>{card.t}</div>
                <p className="mt-2 text-gray-600">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Join the early access waitlist</h2>
          <p className="mt-4 text-gray-600">Be among the first to transform how deals are found, analyzed, and closed.</p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 w-full sm:w-96 rounded-2xl border focus:outline-none focus:ring-2"
              style={{ borderColor: BRAND.primary }}
            />
            <button type="submit" className="px-6 py-3 rounded-2xl font-semibold text-white shadow" style={{ backgroundColor: BRAND.primary }}>
              Get Early Access
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-700 font-medium">Thanks! You’re on the list — we’ll be in touch.</p>
          )}
          {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
          {[
            { q: 'Which markets will you support first?', a: 'We’ll launch pilots in 1–2 metros, then expand based on demand (Boston & Atlanta are front-runners).' },
            { q: 'Do I need MLS access?', a: 'No — you can paste a listing link or address. Partner MLS access will improve data depth where available.' },
            { q: 'Can I export a deal sheet?', a: 'Yes. One click creates a PDF with comps, ARV, rent, ROI, and notes.' },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border p-6">
              <div className="font-semibold" style={{ color: BRAND.slate }}>{f.q}</div>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <Logo />
          <div className="flex items-center gap-6">
            <a href="#how" className="hover:underline">How it works</a>
            <a href="#waitlist" className="hover:underline">Join waitlist</a>
            <span>© 2025 PropIntel</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
