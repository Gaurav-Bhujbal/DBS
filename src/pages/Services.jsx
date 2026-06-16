import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Plane, Warehouse, Zap, Recycle, Lightbulb, Leaf, Cpu, ShieldCheck, Network, CheckCircle2 } from "lucide-react";
import { TopBar, Nav, Footer } from "@/components/site/SiteChrome";
import { motion } from "framer-motion";
import dbsLogo from "@/assets/dbs/DBSLogo.png";
import servicesHero from "@/assets/dbs/services-hero.jpg";
import roadImg from "@/assets/dbs/road.jpg";
import railImg from "@/assets/dbs/img20.jpg";
import airImg from "@/assets/dbs/air.jpg";
import packaging from "@/assets/dbs/packaging.jpg";
import homeDelivery from "@/assets/dbs/home-delivery.jpg";
import fastFreight from "@/assets/dbs/img9.jpg";
import packageImg from "@/assets/dbs/package.jpg";

const FEATURES = [
    { Icon: Plane, t: "Freight Forwarding", d: "Integrated multi-modal freight forwarding — road, rail, and air — with complete documentation, compliance support, and tracking across every leg of the journey." },
    { Icon: Warehouse, t: "Warehousing & Distribution", d: "Secure, strategically located facilities with inventory management, pick-and-pack, and distribution services tailored to your supply chain." },
    { Icon: Truck, t: "Last-Mile Delivery", d: "Dedicated last-mile fleet ensuring reliable doorstep delivery with real-time tracking, proof of delivery, and consistent on-time performance." },
    { Icon: Network, t: "Supply Chain Solutions", d: "End-to-end supply chain management from procurement logistics to final delivery — reducing costs and improving efficiency at every stage." },
];

const SERVICES = [
    { img: fastFreight, t: "Freight Forwarding", d: "Integrated road, rail, and air freight forwarding with full documentation, customs compliance, and real-time tracking across every leg of your shipment." },
    { img: packaging, t: "Warehousing & Distribution", d: "Strategically located, secure warehousing with inventory management, pick-and-pack services, and distribution aligned to your supply chain needs." },
    { img: roadImg, t: "Road Transportation", d: "Extensive door-to-door road network connecting all major cities and tier-2 destinations across India — safe, reliable, and always on schedule." },
    { img: railImg, t: "Rail Transportation", d: "High-capacity, cost-effective rail freight for bulk consignments with consistent transit times and careful end-to-end cargo handling." },
    { img: airImg, t: "Air Cargo Services", d: "Priority air freight for time-critical and high-value shipments, with express booking, customs clearance support, and next-day delivery options." },
    { img: homeDelivery, t: "Last-Mile Delivery", d: "Dedicated last-mile fleet ensuring reliable doorstep delivery with real-time tracking and verified proof of delivery to any location." },
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

export default function Services() {
    useEffect(() => {
        document.title = "Services - DBS Express Cargo";
    }, []);

    return (
        <div className="min-h-screen text-foreground">
            <TopBar />
            <Nav />

            <section className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src={servicesHero} alt="Services" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)]/90 via-[var(--brand-navy)]/70 to-[var(--brand-navy)]/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/60 via-transparent to-transparent" />
                </div>
                <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >

                        <img
                            src={dbsLogo}
                            alt="DBS Express Cargo Logo"
                            className="h-24 w-auto object-contain mb-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20"
                        />
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white drop-shadow-lg">
                            {"End-to-End ".split("").map((char, i) => (
                                <motion.span key={`s1-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.04 }}>
                                    {char}
                                </motion.span>
                            ))}
                            <br />
                            {"Logistics Solutions".split("").map((char, i) => (
                                <motion.span
                                    key={`s2-${i}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + 11 * 0.04 + i * 0.04 }}
                                    className="bg-gradient-to-r from-[var(--brand-accent)] via-amber-300 to-[var(--brand-accent)] bg-clip-text text-transparent"
                                >
                                    {char}
                                </motion.span>
                            ))}
                            {" for Businesses".split("").map((char, i) => (
                                <motion.span key={`s3-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + 30 * 0.04 + i * 0.04 }}>
                                    {char}
                                </motion.span>
                            ))}
                        </h1>
                        <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-lg drop-shadow">
                            Every great journey begins with a spark of inspiration, and ours ignited in the heart of the bustling logistics industry - passion, perseverance, and excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            <ScrollReveal>
                <section className="bg-white py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <img
                                src={dbsLogo}
                                alt="DBS Express Cargo Logo"
                                className="mx-auto h-20 w-auto object-contain mb-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-md border border-slate-100"
                            />
                            <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Why DBS Express</div>
                            <h2 className="font-serif text-4xl md:text-5xl text-[var(--brand-navy)] mb-6">Core Capabilities</h2>
                            <p className="text-lg text-muted-foreground">End-to-end logistics solutions built for speed, transparency, and reliability.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {FEATURES.map(({ Icon, t, d }, i) => (
                                <motion.div
                                    key={t}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="h-16 w-16 rounded-2xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center mb-6 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all shadow-inner">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--brand-navy)] mb-4">{t}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#040b1c] via-[#030715] to-[#01030a] text-white">
                    <div
                        className="absolute inset-0 opacity-[0.15]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.4), transparent 45%), radial-gradient(circle at 80% 0%, rgba(236,181,64,0.35), transparent 40%)",
                        }}
                    />
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-[0.25em] uppercase text-white/80 mb-6">
                                <ShieldCheck className="h-4 w-4 text-[var(--brand-accent)]" /> Our Services
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4">End-to-End Logistics Solutions</h2>
                            <p className="text-slate-300 mt-5 text-lg">Designed for speed, safety, and reliability across every shipment.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {SERVICES.map((s, i) => (
                                <motion.article
                                    key={s.t}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 p-4 transition-all hover:shadow-2xl hover:border-[var(--brand-blue)]/30"
                                >
                                    <div className="relative h-56 overflow-hidden rounded-[2rem] mb-6">
                                        <img src={s.img} alt={s.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>
                                    <div className="px-4 pb-4">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--brand-accent)] transition-colors">{s.t}</h3>
                                        <p className="text-white/60 leading-relaxed mb-6 text-sm">{s.d}</p>
                                        <a href="#" className="inline-flex items-center gap-2 text-[var(--brand-accent)] font-bold group/link">
                                            Learn More
                                            <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-2" />
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mt-8 group rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 hover:border-[var(--brand-blue)]/30 transition-all duration-300"
                        >
                            <div className="flex flex-col lg:flex-row">
                                <div className="relative h-64 lg:h-auto lg:w-96 flex-shrink-0 overflow-hidden">
                                    <img src={packageImg} alt="Supply Chain Solutions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#040b1c]/80 via-[#040b1c]/30 to-transparent" />
                                </div>
                                <div className="flex-1 p-8 lg:p-12 text-left">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/20 text-[var(--brand-accent)] text-xs font-bold uppercase tracking-widest mb-5">
                                        End-to-End
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--brand-accent)] transition-colors">Supply Chain Solutions</h3>
                                    <p className="text-white/60 leading-relaxed text-base mb-8 max-w-2xl">
                                        Comprehensive supply chain management — from procurement logistics and inventory control to distribution and final delivery. We help businesses reduce costs, eliminate delays, and maintain full visibility at every stage of the supply chain.
                                    </p>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                                        {["Procurement Logistics", "Inventory Management", "Distribution Planning", "Route Optimisation", "Real-Time Visibility", "Cost Reduction"].map((point) => (
                                            <div key={point} className="flex items-center gap-2 text-sm text-white/80 font-medium">
                                                <CheckCircle2 className="h-4 w-4 text-[var(--brand-accent)] flex-shrink-0" />
                                                {point}
                                            </div>
                                        ))}
                                    </div>
                                    <a href="#" className="inline-flex items-center gap-2 text-[var(--brand-accent)] font-bold group/link">
                                        Learn More <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-2" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className="bg-white py-24 relative overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Green Logistics</div>
                            <h2 className="font-serif text-4xl md:text-5xl text-[var(--brand-navy)] mb-6">Sustainable Initiatives</h2>
                            <p className="text-lg text-muted-foreground">Building a greener future with every shipment we move.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { Icon: Recycle, t: "Material Reuse & Recycling", d: "Responsible recycling across all operations." },
                                { Icon: Lightbulb, t: "Energy-Efficient Warehousing", d: "Solar-powered, LED-lit modern facilities." },
                                { Icon: Leaf, t: "Carbon Reduction", d: "Route optimization cutting emissions 40%." },
                                { Icon: Cpu, t: "Digital-First Operations", d: "Paperless workflows and smart automation." },
                            ].map(({ Icon, t, d }, i) => (
                                <motion.div
                                    key={t}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
                                >
                                    <div className="mx-auto h-16 w-16 rounded-2xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center mb-6 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all shadow-inner">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--brand-navy)] mb-3">{t}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-gradient-to-br from-[var(--brand-navy)] via-[#051533] to-[var(--brand-blue)] text-white p-6 sm:p-12 md:p-16 border border-white/10 shadow-2xl">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,181,64,0.15),transparent_60%)]" />
                            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                                        Ready to Move Your <br />
                                        <span className="text-[var(--brand-accent)]">Next Shipment?</span>
                                    </h2>
                                    <p className="text-xl text-white/70 max-w-md">Get a tailored logistics plan from our expert team in minutes.</p>
                                </div>
                                <div className="flex flex-wrap md:justify-end gap-3 sm:gap-4">
                                    <Link
                                        to="/contact"
                                        className="rounded-2xl bg-[var(--brand-accent)] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold shadow-lg shadow-black/30 transition hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                                    >
                                        Contact Us <ArrowRight className="h-5 w-5" />
                                    </Link>
                                    <Link to="/quote" className="rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white transition hover:bg-white/20 hover:border-white/50">
                                        Schedule a Pickup
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="hidden sm:block relative group"
                    >
                        <div className="absolute inset-0 bg-[var(--brand-blue)]/5 rounded-2xl filter blur-2xl group-hover:scale-105 transition-transform duration-500" />
                        <img
                            src={packageImg}
                            alt="Packages"
                            className="rounded-2xl w-full object-cover shadow-[0_20px_50px_rgba(20,28,60,0.12)] hover:shadow-[0_25px_60px_rgba(20,28,60,0.18)] transition-all duration-500 relative z-10"
                            loading="lazy"
                        />
                    </motion.div>

                    <div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-blue)] font-bold mb-3">Got Questions?</div>
                            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight leading-tight">Frequently Asked Questions</h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed text-sm">Find quick answers to common questions about our cargo and logistics services.</p>
                        </motion.div>

                        <div className="mt-8 space-y-4">
                            {[
                                { q: "What types of transportation services do you provide?", a: "Road, rail, and air freight forwarding along with FTL, packaging, warehousing, and home delivery." },
                                { q: "Do you offer logistics support for small businesses?", a: "Yes, our solutions are designed for businesses of all sizes - especially growing enterprises that need flexible, affordable services." },
                                { q: "How quickly can I get a shipment quote?", a: "Our team typically responds with a tailored quote within a few business hours of receiving your details." },
                                { q: "Is real-time tracking available for all shipments?", a: "Yes, every consignment receives a unique LR number for end-to-end tracking via web or phone." },
                            ].map((f, i) => (
                                <motion.details
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 open:shadow-xl"
                                >
                                    <summary className="cursor-pointer font-bold flex items-center justify-between text-base select-none text-[var(--brand-navy)] list-none [&::-webkit-details-marker]:hidden">
                                        <span>{f.q}</span>
                                        <span className="h-8 w-8 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] flex items-center justify-center text-xl group-open:rotate-45 group-open:bg-[var(--brand-blue)] group-open:text-primary-foreground transition-all duration-300 font-light">
                                            +
                                        </span>
                                    </summary>
                                    <div className="mt-4 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4 group-open:animate-fade-in">
                                        {f.a}
                                    </div>
                                </motion.details>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </div>
    );
}
