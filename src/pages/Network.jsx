import { useEffect } from "react";
import { MapPin, Globe, Zap, ArrowRight } from "lucide-react";
import { TopBar, Nav, Footer } from "@/components/site/SiteChrome";
import { motion } from "framer-motion";
import logisticsBanner from "@/assets/dbs/img10.jpg";
import { Link } from "react-router-dom"

const CITIES = [
    { name: "Pune", state: "Maharashtra", tag: "Headquarters", priority: true },
    { name: "Mumbai", state: "Maharashtra", tag: "Priority Hub", priority: true },
    { name: "Delhi", state: "National Capital Territory", tag: "Priority Hub", priority: true },
    { name: "Bengaluru", state: "Karnataka", tag: "Priority Hub", priority: true },
    { name: "Hyderabad", state: "Telangana", tag: "Priority Hub", priority: true },
    { name: "Ahmedabad", state: "Gujarat", tag: "Priority Hub", priority: true },
    { name: "Chennai", state: "Tamil Nadu", tag: "Active Hub", priority: false },
    { name: "Kolkata", state: "West Bengal", tag: "Active Hub", priority: false },
    { name: "Jaipur", state: "Rajasthan", tag: "Active Hub", priority: false },
    { name: "Chandigarh", state: "Punjab", tag: "Active Hub", priority: false },
    { name: "Lucknow", state: "Uttar Pradesh", tag: "Active Hub", priority: false },
    { name: "Nagpur", state: "Maharashtra", tag: "Active Hub", priority: false },
    { name: "Surat", state: "Gujarat", tag: "Active Hub", priority: false },
    { name: "Indore", state: "Madhya Pradesh", tag: "Active Hub", priority: false },
    { name: "Coimbatore", state: "Tamil Nadu", tag: "Active Hub", priority: false },
    { name: "Kochi", state: "Kerala", tag: "Active Hub", priority: false },
    { name: "Bhopal", state: "Madhya Pradesh", tag: "Active Hub", priority: false },
    { name: "Patna", state: "Bihar", tag: "Active Hub", priority: false },
    { name: "Vadodara", state: "Gujarat", tag: "Active Hub", priority: false },
    { name: "Nashik", state: "Maharashtra", tag: "Active Hub", priority: false },
];

const REGIONS = [
    {
        name: "West India",
        color: "var(--brand-blue)",
        cities: ["Pune", "Mumbai", "Ahmedabad", "Surat", "Vadodara", "Nashik"],
    },
    {
        name: "North India",
        color: "var(--brand-accent)",
        cities: ["Delhi", "Jaipur", "Chandigarh", "Lucknow"],
    },
    {
        name: "South India",
        color: "#10b981",
        cities: ["Bengaluru", "Hyderabad", "Chennai", "Coimbatore", "Kochi"],
    },
    {
        name: "Central & East India",
        color: "#8b5cf6",
        cities: ["Nagpur", "Indore", "Bhopal", "Patna", "Kolkata"],
    },
];

function ScrollReveal({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
}

export default function Network() {
    useEffect(() => {
        document.title = "Network - DBS Express Cargo";
    }, []);

    return (
        <div className="min-h-screen text-foreground">
            <TopBar />
            <Nav />

            {/* Hero */}
            <section className="relative h-[80vh] min-h-[650px] overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    <img src={logisticsBanner} alt="Network" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)]/90 via-[var(--brand-navy)]/70 to-[var(--brand-navy)]/30" />
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />

                <div className="relative mx-auto max-w-7xl px-6 w-full text-primary-foreground z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl text-left"
                    >
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white drop-shadow-lg">
                            {"Connecting India's ".split("").map((char, i) => (
                                <motion.span key={`n1-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.04 }}>
                                    {char}
                                </motion.span>
                            ))}
                            <br />
                            {"Key Cities".split("").map((char, i) => (
                                <motion.span
                                    key={`n2-${i}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + 19 * 0.04 + i * 0.04 }}
                                    className="bg-gradient-to-r from-[var(--brand-accent)] via-amber-300 to-[var(--brand-accent)] bg-clip-text text-transparent"
                                >
                                    {char}
                                </motion.span>
                            ))}
                            {" We Serve".split("").map((char, i) => (
                                <motion.span key={`n3-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + 29 * 0.04 + i * 0.04 }}>
                                    {char}
                                </motion.span>
                            ))}
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-primary-foreground/85 leading-relaxed max-w-2xl drop-shadow">
                            DBS Express Cargo operates across 20+ major cities spanning every region of India — with dedicated fleets, priority lanes, and real-time tracking at every hub.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* City Grid */}
            <ScrollReveal>
                <section className="bg-slate-50 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">City Network</div>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--brand-navy)] mb-4">Cities We Serve</h2>
                            <p className="text-lg text-muted-foreground">
                                From metros to emerging business hubs — our network ensures your cargo reaches every demand centre with predictable SLAs.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px flex-1 bg-slate-200" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 px-3">Priority Hubs</span>
                            <div className="h-px flex-1 bg-slate-200" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                            {CITIES.filter((c) => c.priority).map((city, i) => (
                                <motion.div
                                    key={city.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06, duration: 0.4 }}
                                    whileHover={{ y: -6, scale: 1.03 }}
                                    className="group bg-white border border-[var(--brand-blue)]/20 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-[var(--brand-blue)]/50 transition-all text-center"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div className="font-bold text-[var(--brand-navy)] text-sm">{city.name}</div>
                                    <div className="text-xs text-muted-foreground mt-1">{city.state}</div>
                                    <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                                        {city.tag}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px flex-1 bg-slate-200" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 px-3">Active Hubs</span>
                            <div className="h-px flex-1 bg-slate-200" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
                            {CITIES.filter((c) => !c.priority).map((city, i) => (
                                <motion.div
                                    key={city.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                    whileHover={{ y: -5, scale: 1.03 }}
                                    className="group bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all text-center"
                                >
                                    <div className="h-8 w-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-2 group-hover:bg-[var(--brand-blue)]/10 group-hover:text-[var(--brand-blue)] transition-all">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <div className="font-semibold text-[var(--brand-navy)] text-sm">{city.name}</div>
                                    <div className="text-[11px] text-muted-foreground mt-0.5">{city.state}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Regional breakdown */}
            <ScrollReveal>
                <section className="bg-white py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Coverage by Region</div>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--brand-navy)] mb-4">Pan-India Reach</h2>
                            <p className="text-lg text-muted-foreground">
                                Our multi-modal logistics network spans all four regions of India, ensuring complete national coverage.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {REGIONS.map((region, i) => (
                                <motion.div
                                    key={region.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl transition-all"
                                >
                                    <div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6 text-white" style={{ backgroundColor: region.color }}>
                                        <Globe className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-[var(--brand-navy)] mb-4">{region.name}</h3>
                                    <ul className="space-y-2">
                                        {region.cities.map((city) => (
                                            <li key={city} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: region.color }} />
                                                {city}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
                <section className="bg-gradient-to-br from-[var(--brand-navy)] via-[#04102a] to-[#0c2f6f] py-16 sm:py-24 text-white">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wider uppercase text-white/80 mb-8">
                            <Zap className="h-4 w-4 text-[var(--brand-accent)]" /> Ready to Ship?
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 max-w-2xl mx-auto leading-tight">
                            Ship to Any City in Our Network
                        </h2>
                        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
                            Get a quote for your shipment and let us handle everything from pickup to delivery — safely and on time.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.div

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--brand-accent)] text-white font-bold shadow-xl shadow-orange-500/20 hover:opacity-90 transition-all"
                            >
                                <Link to="/quote" className="inline-flex items-center gap-2">
                                    Get a Quote <ArrowRight className="h-5 w-5" />
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all"
                            >
                                <Link to="/contact" className="inline-flex items-center gap-2">
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </div>
    );
}
