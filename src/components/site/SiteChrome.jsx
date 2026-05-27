import { Link, NavLink } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    LogIn,
    Facebook,
    Instagram,
    MessageCircle,
    Menu,
    X,
    ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/dbs/DBSLogo.png";
import logoFooter from "@/assets/dbs/logo-footer.jpg";

const NAV = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "Network" },
    { label: "Tracking" },
    { label: "Trace LR" },
];

export function TopBar() {
    return (
        <div className="hidden md:block bg-[var(--brand-navy)] text-white/90">
            <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between text-[13px] font-medium">
                <div className="flex items-center gap-6">
                    <a href="tel:+919527931493" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone className="h-4 w-4 text-[var(--brand-accent)]" />
                        <span>+91 9527931493</span>
                    </a>
                    <div className="h-3 w-px bg-white/20" />
                    <a href="mailto:pune@dbsexpresscargo.com" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Mail className="h-4 w-4 text-[var(--brand-accent)]" />
                        <span>pune@dbsexpresscargo.com</span>
                    </a>
                </div>
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[var(--brand-accent)]" />
                        <span>D. C. Chambers, Pimpri, Pune</span>
                    </span>
                    <div className="h-3 w-px bg-white/20" />
                    <div className="flex items-center gap-3">
                        <a href="#" className="hover:text-[var(--brand-accent)] transition-colors">
                            <Facebook className="h-4 w-4" />
                        </a>
                        <a href="#" className="hover:text-[var(--brand-accent)] transition-colors">
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a href="#" className="hover:text-[var(--brand-accent)] transition-colors">
                            <MessageCircle className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isCompact = scrolled && !mobileOpen;

    return (
        <div className="sticky top-0 z-50 flex justify-center pointer-events-none">
            <header className="pointer-events-auto w-full" style={{ position: "sticky", top: 0 }}>
                <div
                    className="mx-auto bg-white/95 text-slate-800 border border-slate-200/60 px-4 md:px-6 transition-all duration-300 backdrop-blur-xl"
                    style={{
                        margin: isCompact ? "8px clamp(10px, 2.5vw, 24px)" : "12px clamp(12px, 3vw, 32px)",
                        borderRadius: isCompact ? "9999px" : "24px",
                        paddingTop: isCompact ? "12px" : "16px",
                        paddingBottom: isCompact ? "12px" : "16px",
                        boxShadow: isCompact
                            ? "0 16px 48px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.14)"
                            : "0 8px 32px rgba(0,0,0,0.14), 0 2px 10px rgba(0,0,0,0.09)",
                    }}
                >
                    <div className="flex items-center justify-between gap-4">
                        <Link to="/" className="flex-shrink-0 px-3 py-1">
                            <img
                                src={logo}
                                alt="DBS Express Cargo"
                                style={{ height: isCompact ? 28 : 36 }}
                                className="w-auto object-contain transition-all duration-300"
                            />
                        </Link>

                        <nav className="hidden lg:flex items-center gap-1">
                            {NAV.map((item) =>
                                item.to ? (
                                    <NavLink
                                        key={item.label}
                                        to={item.to}
                                        end={item.to === "/"}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "px-4 py-2 text-[14px] font-bold text-[var(--brand-blue)] rounded-full bg-[var(--brand-blue)]/8"
                                                : "px-4 py-2 text-[14px] font-bold text-slate-600 hover:text-[var(--brand-blue)] hover:bg-slate-100 rounded-full transition-colors"
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ) : (
                                    <button
                                        key={item.label}
                                        type="button"
                                        className="px-4 py-2 text-[14px] font-bold text-slate-600 hover:text-[var(--brand-blue)] hover:bg-slate-100 rounded-full transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                ),
                            )}
                        </nav>

                        <div className="hidden sm:flex items-center gap-2">
                            <button className="px-5 py-2.5 text-sm font-bold text-slate-700 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                                Tracking
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-black text-white rounded-full bg-[var(--brand-blue)] shadow-lg shadow-[var(--brand-blue)]/30 hover:bg-[var(--brand-navy)] transition-colors">
                                <LogIn className="h-4 w-4" />
                                Log In
                            </button>
                        </div>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>

                    {mobileOpen && (
                        <div className="lg:hidden">
                            <div className="pt-4 pb-2 border-t border-slate-100 mt-3 space-y-1">
                                {NAV.map((item) =>
                                    item.to ? (
                                        <NavLink
                                            key={item.label}
                                            to={item.to}
                                            end={item.to === "/"}
                                            onClick={() => setMobileOpen(false)}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-bold text-[var(--brand-blue)] bg-[var(--brand-blue)]/10"
                                                    : "flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-bold text-slate-700 hover:text-[var(--brand-blue)] hover:bg-slate-50 transition-all"
                                            }
                                        >
                                            {item.label}
                                            <ArrowRight className="h-4 w-4 text-slate-300" />
                                        </NavLink>
                                    ) : (
                                        <button
                                            key={item.label}
                                            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-bold text-slate-700 hover:text-[var(--brand-blue)] hover:bg-slate-50 transition-all"
                                        >
                                            {item.label}
                                            <ArrowRight className="h-4 w-4 text-slate-300" />
                                        </button>
                                    ),
                                )}
                                <div className="pt-3 pb-1 grid grid-cols-2 gap-3">
                                    <button className="h-12 rounded-2xl border border-slate-200 font-bold text-slate-700 text-sm hover:bg-slate-50 transition-colors">
                                        Tracking
                                    </button>
                                    <button className="h-12 rounded-2xl bg-[var(--brand-blue)] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-[var(--brand-blue)]/20">
                                        <LogIn className="h-4 w-4" /> Log In
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export function Footer() {
    const cols = [
        {
            h: "Solutions",
            links: [
                ["Road Transport", "/services"],
                ["Rail Transport", "/services"],
                ["Air Transport", "/services"],
                ["Warehousing", "/services"],
            ],
        },
        {
            h: "Company",
            links: [
                ["About Us", "/about"],
                ["Our Network", "/services"],
                ["Careers", "/about"],
                ["Contact Us", "/contact"],
            ],
        },
        {
            h: "Support",
            links: [
                ["Track Shipment", "/"],
                ["Trace LR", "/"],
                ["Help Center", "/contact"],
                ["FAQs", "/about"],
            ],
        },
        {
            h: "Legal",
            links: [
                ["Privacy Policy", "/"],
                ["Terms of Service", "/"],
                ["Cookie Policy", "/"],
                ["Safety Protocols", "/"],
            ],
        },
    ];

    return (
        <footer className="bg-[#050916] text-white pt-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12 pb-20 border-b border-white/10">
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-8">
                            <img
                                src={logoFooter}
                                alt="DBS Express Cargo"
                                className="h-24 w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                            />
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                            India's fastest growing fully-integrated logistics player. We build the operating system for cargo through advanced technology and reliable infrastructure.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[var(--brand-blue)] transition-all"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {cols.map((c) => (
                        <div key={c.h}>
                            <h4 className="font-bold text-lg mb-8">{c.h}</h4>
                            <ul className="space-y-4 text-slate-400">
                                {c.links.map(([l, to]) => (
                                    <li key={l}>
                                        <Link to={to} className="hover:text-[var(--brand-accent)] transition-colors">
                                            {l}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-[var(--brand-accent)]">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Customer Support</div>
                                <div className="font-bold">+91 9527931493</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-[var(--brand-accent)]">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email Inquiry</div>
                                <div className="font-bold">pune@dbsexpresscargo.com</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-slate-500 text-sm font-medium">(c) 2026 DBS Express Cargo. All Rights Reserved.</div>
                </div>
            </div>

            <div className="h-2 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-accent)] to-[var(--brand-blue)]" />
        </footer>
    );
}

export function WhatsAppFab() {
    const phone = "919527931493";
    const message = encodeURIComponent(
        "Hi DBS Express Cargo, I would like to enquire about your logistics services.",
    );
    const href = `https://wa.me/${phone}?text=${message}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 ring-4 ring-white/30 transition hover:scale-110 active:scale-95"
        >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
            <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden="true">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.821.74 5.57 2.145 7.99L0 32l8.273-2.113A15.86 15.86 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.657 22.629c-.324.914-1.91 1.734-2.62 1.842-.669.099-1.492.141-2.409-.15-.557-.176-1.269-.41-2.191-.801-3.859-1.675-6.37-5.596-6.562-5.861-.191-.266-1.566-2.084-1.566-3.976 0-1.892 1.002-2.824 1.358-3.213.357-.389.777-.486 1.037-.486.259 0 .518.003.747.013.242.012.56-.091.877.668.324.778 1.102 2.692 1.199 2.889.098.195.162.422.034.688-.129.266-.194.43-.385.661-.194.23-.407.514-.582.688-.194.193-.397.403-.171.792.227.389 1.007 1.655 2.165 2.677 1.489 1.326 2.74 1.74 3.129 1.933.388.194.613.162.84-.097.227-.259.966-1.122 1.223-1.507.259-.389.518-.323.877-.194.357.129 2.247 1.059 2.626 1.251.388.194.646.291.743.454.097.162.097.937-.227 1.851z" />
            </svg>
        </a>
    );
}

export function PageShell({ children }) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <TopBar />
            <Nav />
            {children}
            <Footer />
        </div>
    );
}

export function PageHero({ title, subtitle, image }) {
    return (
        <section className="relative">
            <div className="absolute inset-0">
                <img src={image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[var(--brand-navy)]/70" />
            </div>
            <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 md:py-32 text-primary-foreground">
                <div className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">DBS Express Cargo</div>
                <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-6xl leading-tight">{title}</h1>
                {subtitle && <p className="mt-4 max-w-2xl text-primary-foreground/85">{subtitle}</p>}
            </div>
        </section>
    );
}
