import { useState } from "react";

const NAV_ITEMS = [
  { icon: "⊞", label: "Dashboard" },
  { icon: "📣", label: "Campaigns" },
  { icon: "👥", label: "Segments" },
  { icon: "📅", label: "Journeys" },
  { icon: "🔍", label: "Analytics" },
];

const SETTINGS_ITEMS = [
  "Websites", "Apps", "Geofence", "Webhooks", "FTP", "Integrations", "Events", "Email domain", "Target audience", "Countdown timer"
];

const MOCK_WABAS = [
  { id: "WABA-IN-001", name: "Netcore Marketing", phone: "+91 98765 43210", status: "Active" },
  { id: "WABA-IN-002", name: "Netcore Support", phone: "+91 98765 43211", status: "Active" },
];

// -- Colour tokens lifted from the screenshots --------------------------------
const C = {
  navBg: "#1a1d2e",
  navAccent: "#ff6b35",
  blue: "#2563eb",
  blueLight: "#eff6ff",
  blueBorder: "#bfdbfe",
  green: "#16a34a",
  greenBg: "#dcfce7",
  amber: "#d97706",
  amberBg: "#fffbeb",
  amberBorder: "#fde68a",
  border: "#e5e7eb",
  gray100: "#f9fafb",
  gray200: "#f3f4f6",
  gray400: "#9ca3af",
  gray600: "#4b5563",
  gray700: "#374151",
  gray900: "#111827",
  white: "#ffffff",
};

// -- Tiny icon components ------------------------------------------------------
const WaIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#25D366" />
    <path d="M20 6C12.27 6 6 12.27 6 20c0 2.48.68 4.8 1.86 6.79L6 34l7.39-1.83A13.94 13.94 0 0020 34c7.73 0 14-6.27 14-14S27.73 6 20 6zm7.44 19.08c-.31.87-1.82 1.66-2.5 1.7-.65.05-1.26.3-4.25-.89-3.57-1.4-5.86-5.02-6.04-5.25-.18-.24-1.48-1.97-1.48-3.75s.93-2.67 1.27-3.04c.34-.37.74-.46.99-.46l.71.01c.23 0 .54-.09.84.64l1.2 2.92c.1.24.17.52.02.83-.15.31-.22.5-.44.77-.21.26-.45.58-.64.78-.22.22-.44.46-.19.9.25.44 1.1 1.82 2.37 2.95 1.63 1.45 3 1.9 3.44 2.1.43.22.68.18.93-.11.25-.29 1.06-1.24 1.34-1.67.29-.43.58-.36.97-.22.4.14 2.52 1.19 2.95 1.4.43.22.72.33.82.51.1.18.1 1.05-.2 1.92z" fill="white" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#16a34a" />
    <path d="M4.5 8L7 10.5L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SpinnerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: "spin 1s linear infinite" }}>
    <circle cx="8" cy="8" r="6" stroke="#9ca3af" strokeWidth="2" />
    <path d="M8 2a6 6 0 016 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// -- Shared layout shell -------------------------------------------------------
function Shell({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Inter', 'Segoe UI', sans-serif", background: C.gray100, fontSize: 13 }}>
      {/* Left nav */}
      <div style={{ width: 52, background: C.navBg, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 12, flexShrink: 0 }}>
        <div style={{ width: 32, height: 32, background: C.navAccent, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14, marginBottom: 20 }}>N</div>
        {NAV_ITEMS.map((n, i) => (
          <div key={i} title={n.label} style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", marginBottom: 4, color: i === 0 ? C.navAccent : "#6b7280", fontSize: 16, background: i === 0 ? "rgba(255,107,53,0.12)" : "transparent" }}>
            {n.icon}
          </div>
        ))}
      </div>

      {/* Settings sidebar */}
      <div style={{ width: 176, background: C.white, borderRight: `1px solid ${C.border}`, padding: "16px 0", flexShrink: 0 }}>
        <div style={{ padding: "0 16px 12px", fontWeight: 600, color: C.gray700, fontSize: 14 }}>Settings</div>
        {SETTINGS_ITEMS.map((s, i) => (
          <div key={i} style={{ padding: "7px 16px", cursor: "pointer", color: s === "Integrations" ? C.blue : C.gray600, background: s === "Integrations" ? C.blueLight : "transparent", borderRight: s === "Integrations" ? `3px solid ${C.blue}` : "3px solid transparent", fontWeight: s === "Integrations" ? 600 : 400 }}>
            {s}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflow: "auto" }}>
        {/* Top bar */}
        <div style={{ height: 48, background: C.white, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, color: C.gray400, textTransform: "uppercase" }}>Customer Engagement</span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button style={{ background: C.blue, color: "white", border: "none", borderRadius: 6, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>⚡ CREATE</button>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>👤</div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

// -- Step 1: Integrations catalogue -------------------------------------------
function IntegrationsGrid({ onSelect }) {
  const integrations = {
    "Messaging apps": [
      { name: "Viber", desc: "Engage customers with rich messaging, synced across all devices.", icon: "💬", color: "#7360f2" },
      { name: "Google RCS", desc: "Elevate your communications with interactive rich media.", icon: "💙", color: "#1a73e8" },
      { name: "Limechat", desc: "Create WhatsApp specific flows and content using events data.", icon: "🟢", color: "#52b043" },
      { name: "WhatsApp", desc: "Connect your existing WhatsApp number. Keep your BSP — get Netcore's full power from Day One.", icon: "wa", color: "#25D366", isNew: true },
    ],
    "Customer data platform": [
      { name: "Twilio Segment", desc: "Unleash the power of clean, consented customer data for real-time insights.", icon: "🔴", sub: "Powered by Amazon EventBridge", color: "#e11d48" },
    ],
  };

  return (
    <div style={{ padding: 24 }}>
      {Object.entries(integrations).map(([section, items]) => (
        <div key={section} style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.gray400, marginBottom: 14, textTransform: "uppercase", letterSpacing: 0.5 }}>{section}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {items.map((item) => (
              <div key={item.name} onClick={() => onSelect(item)} style={{ background: C.white, border: `1px solid ${item.isNew ? C.blueBorder : C.border}`, borderRadius: 10, padding: "18px 20px", cursor: "pointer", position: "relative", transition: "box-shadow 0.15s", boxShadow: item.isNew ? "0 0 0 2px #bfdbfe" : "none" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = item.isNew ? "0 0 0 2px #bfdbfe" : "none"}
              >
                {item.isNew && (
                  <span style={{ position: "absolute", top: 12, right: 12, background: C.blue, color: "white", fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 20, letterSpacing: 0.5 }}>NEW</span>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  {item.icon === "wa" ? <WaIcon size={36} /> : (
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: item.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{item.icon}</div>
                  )}
                  <div>
                    <div style={{ fontWeight: 600, color: C.gray900, fontSize: 14 }}>{item.name}</div>
                    {item.sub && <div style={{ fontSize: 10, color: C.gray400 }}>{item.sub}</div>}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: C.gray600, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// -- Step 2: Side panel overview ----------------------------------------------
function WhatsAppPanel({ onClose, onActivate }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 40 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 560, background: C.white, boxShadow: "-4px 0 24px rgba(0,0,0,0.12)", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ padding: "16px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 600, fontSize: 16, color: C.gray900 }}>Integration</span>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 12, color: C.blue, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>▶ Learn how to integrate with WhatsApp</span>
            <span onClick={onClose} style={{ cursor: "pointer", color: C.gray400, fontSize: 20, lineHeight: 1 }}>×</span>
          </div>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflow: "auto", padding: 24 }}>
          {/* Title block */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <WaIcon size={56} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 22, color: C.gray900 }}>WhatsApp</div>
              <div style={{ fontSize: 13, color: C.gray600 }}>Powered by Netcore CPaaS</div>
            </div>
          </div>

          {/* Value prop banner */}
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "14px 16px", marginBottom: 20 }}>
            <div style={{ fontWeight: 600, color: "#166534", fontSize: 13, marginBottom: 4 }}>Zero Migration. Full Power. Day One.</div>
            <div style={{ fontSize: 12, color: "#166534", lineHeight: 1.6 }}>
              You don't need to leave your existing BSP or migrate your WhatsApp number. The moment you connect, Netcore's full suite -- campaigns, journeys, and analytics -- goes live on your existing number.
            </div>
          </div>

          <div style={{ fontWeight: 600, fontSize: 14, color: C.gray900, marginBottom: 8 }}>Overview</div>
          <div style={{ fontSize: 13, color: C.gray600, lineHeight: 1.7, marginBottom: 20 }}>
            Netcore's WhatsApp connector works with your existing WhatsApp Business Account (WABA) and BSP setup. Simply provide your Netcore CPaaS API key -- Netcore will auto-discover all WABAs linked to your account and make them available for campaigns, journeys, and analytics immediately, with no number migration required.
          </div>

          <div style={{ fontWeight: 600, fontSize: 14, color: C.gray900, marginBottom: 12 }}>What you can do</div>
          {[
            "Run campaigns and journeys on your existing WhatsApp number",
            "Manage multiple WABAs from a single Netcore panel",
            "Keep your current BSP billing and relationship unchanged",
            "Access 10 years of Netcore features from Day One",
          ].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
              <span style={{ color: "#16a34a", marginTop: 1, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 13, color: C.gray600 }}>{f}</span>
            </div>
          ))}

          <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 20, paddingTop: 16 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: C.gray900, marginBottom: 10 }}>Related links</div>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ fontSize: 13, color: C.blue }}>- Learn about WhatsApp connector</a>
              <a href="#" style={{ fontSize: 13, color: C.blue }}>- How to integrate?</a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "16px 24px", borderTop: `1px solid ${C.border}`, display: "flex", gap: 12 }}>
          <button onClick={onActivate} style={{ flex: 1, background: C.blue, color: "white", border: "none", borderRadius: 8, padding: "10px 0", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Activate Integration
          </button>
          <button onClick={onClose} style={{ flex: 1, background: C.white, color: C.gray700, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 0", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// -- Step 3: Configuration page ------------------------------------------------
function WhatsAppConfig({ onBack }) {
  const [apiKey, setApiKey] = useState("");
  const [connName, setConnName] = useState("");
  const [validating, setValidating] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [wabas, setWabas] = useState([]);
  const [selectedWabas, setSelectedWabas] = useState([]);
  const [saved, setSaved] = useState(false);

  function handleValidate() {
    if (!apiKey.trim()) { setError("Please enter your Netcore CPaaS API key."); return; }
    setError(""); setValidating(true); setValidated(false); setWabas([]);
    setTimeout(() => {
      setValidating(false);
      setValidated(true);
      setWabas(MOCK_WABAS);
      setSelectedWabas(MOCK_WABAS.map(w => w.id));
      if (!connName) setConnName("whatsapp_" + Date.now().toString().slice(-6));
    }, 1800);
  }

  function toggleWaba(id) {
    setSelectedWabas(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  function handleSave() {
    setSaved(true);
  }

  if (saved) return <ActivatedView onBack={onBack} wabas={wabas.filter(w => selectedWabas.includes(w.id))} connName={connName} apiKey={apiKey} />;

  return (
    <div style={{ padding: 24 }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, fontSize: 13, color: C.gray400 }}>
        <span onClick={onBack} style={{ cursor: "pointer", color: C.blue }}>← Integrations</span>
        <span>/</span>
        <span style={{ color: C.gray700, fontWeight: 500 }}>WhatsApp</span>
      </div>

      <div style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.border}`, maxWidth: 680, padding: 32 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28, paddingBottom: 20, borderBottom: `1px solid ${C.border}` }}>
          <WaIcon size={44} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 18, color: C.gray900 }}>WhatsApp Connector Setup</div>
            <div style={{ fontSize: 12, color: C.gray400, marginTop: 2 }}>Enter your API key to connect your existing WhatsApp number</div>
          </div>
        </div>

        {/* Connection name */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.gray700, marginBottom: 6 }}>
            Connection name
          </label>
          <input
            value={connName}
            onChange={e => setConnName(e.target.value)}
            placeholder="e.g. whatsapp_prod_2026"
            style={{ width: "100%", padding: "9px 12px", border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 13, color: C.gray900, outline: "none", boxSizing: "border-box" }}
          />
          <div style={{ fontSize: 11, color: C.gray400, marginTop: 4 }}>{connName.length}/100</div>
        </div>

        {/* API Key */}
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 600, fontSize: 13, color: C.gray700, marginBottom: 6 }}>
            Netcore CPaaS API key
            <span title="This is your Netcore CPaaS panel API key. It is used to discover and connect your WhatsApp Business Accounts." style={{ width: 16, height: 16, borderRadius: "50%", background: C.gray200, color: C.gray600, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, cursor: "help" }}>i</span>
          </label>
          <div style={{ display: "flex", gap: 10 }}>
            <input
              value={apiKey}
              onChange={e => { setApiKey(e.target.value); setValidated(false); setWabas([]); setError(""); }}
              placeholder="Paste your CPaaS API key here"
              type="password"
              style={{ flex: 1, padding: "9px 12px", border: `1px solid ${error ? "#ef4444" : validated ? "#16a34a" : C.border}`, borderRadius: 8, fontSize: 13, color: C.gray900, outline: "none", fontFamily: "monospace" }}
            />
            <button
              onClick={handleValidate}
              disabled={validating}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", border: `1px solid ${C.blue}`, borderRadius: 8, background: validated ? C.white : C.blueLight, color: C.blue, fontWeight: 600, fontSize: 13, cursor: validating ? "not-allowed" : "pointer", whiteSpace: "nowrap", opacity: validating ? 0.7 : 1 }}
            >
              {validating ? <><SpinnerIcon /> Validating…</> : validated ? <><CheckIcon /> Validated</> : "⟳  Validate"}
            </button>
          </div>
          {error && <div style={{ fontSize: 12, color: "#ef4444", marginTop: 6 }}>⚠ {error}</div>}
          {validating && (
            <div style={{ fontSize: 12, color: C.gray400, marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
              <SpinnerIcon /> Connecting to Netcore CPaaS and discovering WhatsApp accounts…
            </div>
          )}
          {validated && (
            <div style={{ fontSize: 12, color: "#16a34a", marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
              <CheckIcon /> API key verified -- {wabas.length} WhatsApp account{wabas.length !== 1 ? "s" : ""} discovered
            </div>
          )}
        </div>

        {/* WABA list after validation */}
        {validated && wabas.length > 0 && (
          <div style={{ marginTop: 24, marginBottom: 8 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: C.gray700, marginBottom: 4 }}>
              WhatsApp accounts discovered
            </div>
            <div style={{ fontSize: 12, color: C.gray400, marginBottom: 12 }}>Select the accounts you want to activate in this CE panel.</div>
            {wabas.map(w => (
              <div key={w.id} onClick={() => toggleWaba(w.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", border: `1px solid ${selectedWabas.includes(w.id) ? "#86efac" : C.border}`, borderRadius: 8, marginBottom: 8, cursor: "pointer", background: selectedWabas.includes(w.id) ? "#f0fdf4" : C.white, transition: "all 0.15s" }}>
                <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${selectedWabas.includes(w.id) ? "#16a34a" : C.gray400}`, background: selectedWabas.includes(w.id) ? "#16a34a" : "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {selectedWabas.includes(w.id) && <span style={{ color: "white", fontSize: 11, lineHeight: 1 }}>✓</span>}
                </div>
                <WaIcon size={28} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: C.gray900 }}>{w.name}</div>
                  <div style={{ fontSize: 12, color: C.gray400 }}>{w.phone} · WABA ID: {w.id}</div>
                </div>
                <span style={{ fontSize: 11, background: C.greenBg, color: C.green, padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>{w.status}</span>
              </div>
            ))}
          </div>
        )}

        {/* Info note */}
        <div style={{ background: C.amberBg, border: `1px solid ${C.amberBorder}`, borderRadius: 8, padding: "12px 14px", marginTop: 20, marginBottom: 24, fontSize: 12, color: C.amber, lineHeight: 1.6 }}>
          ℹ Your existing WhatsApp number and BSP relationship remain unchanged. Netcore will not migrate or modify your current setup.
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={handleSave}
            disabled={!validated || selectedWabas.length === 0}
            style={{ flex: 1, background: (!validated || selectedWabas.length === 0) ? C.gray200 : C.blue, color: (!validated || selectedWabas.length === 0) ? C.gray400 : "white", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 600, fontSize: 14, cursor: (!validated || selectedWabas.length === 0) ? "not-allowed" : "pointer" }}
          >
            Save & Activate
          </button>
          <button onClick={onBack} style={{ flex: 1, background: C.white, color: C.gray700, border: `1px solid ${C.border}`, borderRadius: 8, padding: "11px 0", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// -- Step 4: Activated / view-only state --------------------------------------
function ActivatedView({ onBack, wabas, connName, apiKey }) {
  const [copied, setCopied] = useState(false);
  const callbackUrl = "https://go7symud92.execute-api.us-east-1.amazonaws.com/prod-in/whatsapp";

  return (
    <div style={{ padding: 24 }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span onClick={onBack} style={{ cursor: "pointer", color: C.gray400, fontSize: 18 }}>‹</span>
          <span style={{ fontWeight: 700, fontSize: 17, color: C.gray900 }}>WhatsApp</span>
          <span style={{ background: C.greenBg, color: C.green, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, border: "1px solid #86efac" }}>ACTIVATED</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 13, color: C.blue, cursor: "pointer" }}>ℹ Learn how to integrate with WhatsApp</span>
          <button style={{ background: C.white, color: C.gray700, border: `1px solid ${C.border}`, borderRadius: 8, padding: "7px 16px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>EDIT INTEGRATION</button>
        </div>
      </div>

      <div style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.border}`, maxWidth: 720 }}>
        {/* View-only banner */}
        <div style={{ background: C.amberBg, border: `1px solid ${C.amberBorder}`, borderRadius: "10px 10px 0 0", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, color: C.amber }}>⚠ You are in view only mode.</span>
          <button style={{ background: C.white, color: C.blue, border: `1px solid ${C.blueBorder}`, borderRadius: 6, padding: "5px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>VIEW DOCUMENTATION</button>
        </div>

        <div style={{ padding: "24px 28px" }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: C.gray900, marginBottom: 18 }}>Basic details</div>

          <Field label="Connection name" value={connName || "whatsapp_prod_2026"} />
          <Field label="Netcore CPaaS API key" value={apiKey.slice(0, 8) + "••••••••••••••••••••••••••••••"} mono />

          {/* Validated WABAs */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: C.gray700, marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
              Connected WhatsApp accounts
              <span style={{ fontSize: 11, background: C.greenBg, color: C.green, padding: "1px 8px", borderRadius: 20, fontWeight: 700 }}>{wabas.length} active</span>
            </div>
            {wabas.map(w => (
              <div key={w.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", border: `1px solid #bbf7d0`, borderRadius: 8, marginBottom: 8, background: "#f0fdf4" }}>
                <WaIcon size={26} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: C.gray900 }}>{w.name}</div>
                  <div style={{ fontSize: 12, color: C.gray400 }}>{w.phone} · {w.id}</div>
                </div>
                <CheckIcon />
              </div>
            ))}
          </div>

          {/* Callback endpoint */}
          <div style={{ marginBottom: 8 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 600, fontSize: 13, color: C.gray700, marginBottom: 6 }}>
              Reporting callback endpoint
              <span title="Configure this URL in your BSP to ensure Netcore receives delivery reports." style={{ width: 16, height: 16, borderRadius: "50%", background: C.gray200, color: C.gray600, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, cursor: "help" }}>i</span>
            </label>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1, padding: "9px 12px", background: C.gray100, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12, color: C.gray600, fontFamily: "monospace" }}>{callbackUrl}</div>
              <button onClick={() => { navigator.clipboard?.writeText(callbackUrl); setCopied(true); setTimeout(() => setCopied(false), 2000); }} style={{ padding: "9px 16px", border: `1px solid ${C.border}`, borderRadius: 8, background: C.white, color: C.blue, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                {copied ? "✓ Copied" : "⧉ COPY"}
              </button>
            </div>
            <div style={{ fontSize: 11, color: C.gray400, marginTop: 6, display: "flex", alignItems: "flex-start", gap: 4 }}>
              <span>ℹ</span>
              <span>Note: Failure to configure the callback endpoint will result in disabled report tracking capabilities.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, mono }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.gray700, marginBottom: 6 }}>{label}</label>
      <div style={{ padding: "9px 12px", background: C.gray100, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 13, color: C.gray600, fontFamily: mono ? "monospace" : "inherit" }}>{value}</div>
    </div>
  );
}

// -- Root app -----------------------------------------------------------------
export default function App() {
  const [view, setView] = useState("grid"); // grid | panel | config
  const [selected, setSelected] = useState(null);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        input:focus { border-color: #2563eb !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
        button:hover:not(:disabled) { opacity: 0.9; }
      `}</style>
      <Shell>
        {view === "config" ? (
          <WhatsAppConfig onBack={() => setView("grid")} />
        ) : (
          <>
            <IntegrationsGrid onSelect={(item) => { setSelected(item); if (item.name === "WhatsApp") setView("panel"); }} />
            {view === "panel" && selected?.name === "WhatsApp" && (
              <WhatsAppPanel onClose={() => setView("grid")} onActivate={() => setView("config")} />
            )}
          </>
        )}
      </Shell>
    </>
  );
}
