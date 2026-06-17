import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    ArrowRight,
    Globe,
    Network,
    ShieldCheck,
    Headphones,
    CheckCircle2,
    Target,
    Eye,
    Activity,
    Award,
    MapPin,
    Users,
    Truck,
    UserCheck,
    TrendingUp,
} from "lucide-react";
import { PageShell } from "@/components/site/SiteChrome";
import { motion } from "framer-motion";

import dbsLogo from "@/assets/dbs/DBSLogo.png";
import aboutHero from "@/assets/dbs/about-hero.jpg";
import indiaMap from "@/assets/dbs/india-map.jpg";
import driverImg from "@/assets/dbs/driver.jpg";
import roadImg from "@/assets/dbs/road.jpg";
import railImg from "@/assets/dbs/img20.jpg";
import airImg from "@/assets/dbs/air.jpg";
import packageImg from "@/assets/dbs/package.jpg";
import logisticsBg from "@/assets/dbs/img10.jpg";
import heroWorker from "@/assets/dbs/hero-worker.jpg";
import calcTruck from "@/assets/dbs/img5.jpg";

export default function About() {
    const modes = [
        { n: "01", img: roadImg, t: "Freight Forwarding", desc: "Integrated road, rail, and air freight forwarding with complete documentation, customs compliance, and real-time tracking across every leg of your shipment's journey." },
        { n: "02", img: packageImg, t: "Warehousing & Distribution", desc: "Strategically located, secure warehousing with inventory management, pick-and-pack services, and distribution aligned to your supply chain — keeping stock always within reach." },
        { n: "03", img: airImg, t: "Air Cargo Services", desc: "Priority air freight for time-critical and high-value shipments, with express booking, customs clearance support, and next-day delivery options across India and beyond." },
        { n: "04", img: railImg, t: "Rail Transportation", desc: "High-capacity, cost-effective rail freight solutions for bulk consignments with reliable transit schedules and careful end-to-end cargo handling." },
        { n: "05", img: calcTruck, t: "Last-Mile Delivery", desc: "Dedicated last-mile fleet ensuring reliable doorstep delivery to every corner of India — with real-time tracking, live updates, and verified proof of delivery." },
    ];


    return (
        <PageShell>
            <section className="relative h-[80vh] min-h-[650px] overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    <img src={aboutHero} alt="DBS Express Cargo Hero" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)]/90 via-[var(--brand-navy)]/70 to-[var(--brand-navy)]/30" />
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />

                <div className="relative mx-auto max-w-7xl px-6 w-full text-primary-foreground z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:col-span-7 text-left"
                        >
                            <img
                                src={dbsLogo}
                                alt="DBS Express Cargo Logo"
                                className="h-24 w-auto object-contain mb-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20"
                            />
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white drop-shadow-lg">
                                {"Smart Logistics ".split("").map((char, i) => (
                                    <motion.span key={`a1-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.04 }}>
                                        {char}
                                    </motion.span>
                                ))}
                                <br />
                                {"Solutions".split("").map((char, i) => (
                                    <motion.span
                                        key={`a2-${i}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 + 16 * 0.04 + i * 0.04 }}
                                        className="bg-gradient-to-r from-[var(--brand-accent)] via-amber-300 to-[var(--brand-accent)] bg-clip-text text-transparent"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {" for Businesses".split("").map((char, i) => (
                                    <motion.span key={`a3-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + 25 * 0.04 + i * 0.04 }}>
                                        {char}
                                    </motion.span>
                                ))}
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl drop-shadow">
                                A specialized logistics platform designed to support businesses with reliable cargo movement, efficient delivery management, and smooth supply chain operations.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                <a
                                    href="#about-stats"
                                    className="rounded-full bg-[var(--brand-blue)] text-primary-foreground px-6 py-3.5 text-sm font-bold shadow-lg shadow-[var(--brand-blue)]/40 hover:shadow-xl hover:shadow-[var(--brand-blue)]/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                                >
                                    Discover More <ArrowRight className="h-4 w-4" />
                                </a>
                                <Link
                                    to="/contact"
                                    className="rounded-full bg-white/10 backdrop-blur border border-white/20 text-primary-foreground px-6 py-3.5 text-sm font-bold shadow-lg shadow-black/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center cursor-pointer"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="hidden lg:block lg:col-span-5 relative group"
                        >
                            <div className="absolute inset-0 bg-[var(--brand-blue)]/20 rounded-[2.5rem] filter blur-3xl group-hover:scale-105 transition-all duration-500 scale-95 opacity-60 pointer-events-none" />

                            <div className="relative rounded-[2.5rem] bg-[#0c122d]/85 border border-white/10 p-8 shadow-2xl backdrop-blur-md overflow-hidden text-left">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                                    <div>
                                        <h3 className="text-sm font-bold tracking-wider text-white uppercase">DBS Control Tower</h3>
                                        <p className="text-[10px] text-white/50 mt-0.5">Live Operations Feed</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Online</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between items-center text-[10px] text-white/60 mb-2 font-medium">
                                            <span>Active Route: PNE-BOM-INTL</span>
                                            <span className="text-[var(--brand-accent)] font-bold">In Transit</span>
                                        </div>

                                        <div className="relative flex items-center justify-between mt-4">
                                            <div className="absolute left-0 right-0 h-1 bg-white/10 rounded-full z-0" />

                                            <motion.div
                                                className="absolute h-2 w-2 rounded-full bg-[var(--brand-accent)] z-10 shadow-[0_0_10px_var(--brand-accent)]"
                                                animate={{ left: ["0%", "100%"] }}
                                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                            />

                                            <div className="relative z-10 flex flex-col items-center">
                                                <div className="h-4 w-4 rounded-full bg-[var(--brand-blue)] border-2 border-white flex items-center justify-center shadow">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                                                </div>
                                                <span className="text-[9px] font-bold text-white mt-1.5">Pune</span>
                                            </div>

                                            <div className="relative z-10 flex flex-col items-center">
                                                <div className="h-4 w-4 rounded-full bg-white/20 border-2 border-white/20 flex items-center justify-center shadow">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                                                </div>
                                                <span className="text-[9px] font-bold text-white/60 mt-1.5">Mumbai</span>
                                            </div>

                                            <div className="relative z-10 flex flex-col items-center">
                                                <div className="h-4 w-4 rounded-full bg-white/20 border-2 border-white/20 flex items-center justify-center shadow">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                                                </div>
                                                <span className="text-[9px] font-bold text-white/60 mt-1.5">Overseas</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                            <div className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Fleet Active</div>
                                            <div className="text-2xl font-black text-white mt-1">
                                                142 <span className="text-emerald-400 text-xs font-bold font-sans">up</span>
                                            </div>
                                            <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                                <motion.div className="h-full bg-emerald-400" animate={{ width: "80%" }} transition={{ duration: 1.5 }} />
                                            </div>
                                        </div>

                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                            <div className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Avg transit time</div>
                                            <div className="text-2xl font-black text-[var(--brand-accent)] mt-1">4.2 hrs</div>
                                            <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                                <motion.div className="h-full bg-[var(--brand-accent)]" animate={{ width: "92%" }} transition={{ duration: 1.5 }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-black/40 rounded-2xl p-4 border border-white/5 font-mono text-[10px] text-emerald-400/90 leading-relaxed overflow-hidden h-24">
                                        <motion.div animate={{ y: [0, -100] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="space-y-1.5">
                                            <div>[08:24] SYSTEM initialized... ok</div>
                                            <div>[08:26] Morwadi HQ connected to cloud API</div>
                                            <div>[08:28] Container #DBS-9204 loaded - PNE</div>
                                            <div>[08:32] Truck #204 departed Delhi Hub</div>
                                            <div>[08:35] Air freight flight #DBS-883 arrived</div>
                                            <div>[08:39] Dispatched last-mile fleet: Bangalore</div>
                                            <div>[08:42] Container #DBS-3310 scanned - BOM</div>
                                            <div>[08:45] SYSTEM status check: 100% clean</div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="about-stats" className="mx-auto max-w-7xl px-6 py-12 sm:py-20 relative z-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 items-center">
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                        <StatBlock n="95%" t="On-time delivery performance" d="Ensuring shipments reach destinations as scheduled." delay={0.1} />
                        <StatBlock n="98%" t="Customer satisfaction" d="Achieved through secure and dependable cargo handling." delay={0.2} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="rounded-[2.5rem] border border-slate-100 p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden group"
                    >
                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--brand-blue)]/5 blur-3xl group-hover:bg-[var(--brand-blue)]/10 transition-colors duration-500" />
                        <div className="text-5xl font-black text-[var(--brand-blue)] tracking-tight">4.9/5</div>
                        <div className="flex justify-center mt-3 text-amber-400 text-lg tracking-widest">*****</div>
                        <p className="mt-3 text-sm font-bold text-[var(--brand-navy)] uppercase tracking-wider">Rated from 600+ happy clients</p>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">Trusted enterprise-grade service across industries.</p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-secondary/30 py-20 border-y border-border/50 relative overflow-hidden">
                <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-[var(--brand-blue)]/5 blur-3xl pointer-events-none" />

                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl"
                        >
                            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-blue)] font-bold mb-3">Superior Standards</div>
                            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">Why We Move Better</h2>
                        </motion.div>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-[var(--brand-blue)] text-primary-foreground px-6 py-3.5 text-sm font-bold hover:opacity-95 shadow-lg shadow-[var(--brand-blue)]/20 hover:shadow-xl transition-all inline-flex items-center gap-2"
                        >
                            Get Started <ArrowRight className="h-4 w-4" />
                        </motion.button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { Icon: Network, t: "Pan-India Network", d: "Spanning across India with multiple regional offices and robust touchpoints to handle cargo of any volume." },
                            { Icon: ShieldCheck, t: "Efficient Operations", d: "Optimized dispatch protocols and real-time support routes that keep delays down and safety high." },
                            { Icon: CheckCircle2, t: "Policy Compliance", d: "Rigorous alignment with regulatory bodies, standards of carrier compliance, and transparent auditing." },
                        ].map(({ Icon, t, d }, index) => (
                            <motion.div
                                key={t}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 h-32 w-32 bg-[var(--brand-blue)]/[0.02] rounded-bl-full group-hover:bg-[var(--brand-blue)]/[0.04] transition-colors" />
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

            <section className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 overflow-hidden rounded-[3rem] my-10 bg-slate-50/40 border border-slate-100/80 shadow-2xl backdrop-blur-3xl">
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[var(--brand-blue)]/10 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "6s" }} />
                <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-[var(--brand-accent)]/5 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-60" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-100/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--brand-blue)] mb-5 shadow-sm shadow-blue-500/5">
                            <Activity className="h-3.5 w-3.5 animate-pulse text-[var(--brand-blue)]" /> Enterprise Logistics
                        </div>

                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight font-bold tracking-tight text-[var(--brand-navy)]">
                            Your trusted partner for <br className="hidden sm:inline" />
                            <span className="relative inline-block mt-1">
                                <span className="bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-navy)] to-[var(--brand-blue)] bg-clip-text text-transparent">
                                    global logistics
                                </span>
                                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-[var(--brand-blue)]/40 to-transparent rounded-full" />
                            </span>{" "}
                            excellence
                        </h2>

                        <p className="mt-5 text-muted-foreground leading-relaxed text-base max-w-xl">
                            We specialize in delivering comprehensive transportation and logistics solutions businesses can rely on. With a global network and advanced tracking systems, we keep your cargo moving smoothly.
                        </p>

                        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {[
                                { n: "30+", t: "Years of Experience", i: Award, c: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
                                { n: "41+", t: "Branches Nationwide", i: MapPin, c: "text-rose-500 bg-rose-500/10 border-rose-500/20" },
                                { n: "250+", t: "Clients Served", i: Users, c: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
                                { n: "150+", t: "Fleet & Vehicles", i: Truck, c: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
                                { n: "100+", t: "Employees Across India", i: UserCheck, c: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
                                { n: "5000+", t: "Deliveries Every Month", i: TrendingUp, c: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
                            ].map(({ n, t, i: Icon, c }, index) => (
                                <motion.div
                                    key={t}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.06 }}
                                    whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 30px -10px rgba(12,18,45,0.08)" }}
                                    className="group relative rounded-2xl border border-slate-100/80 p-5 bg-white/70 backdrop-blur-md shadow-sm hover:border-[var(--brand-blue)]/30 hover:bg-white transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col items-start text-left">
                                        <div className={`h-9 w-9 rounded-xl border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 ${c}`}>
                                            <Icon className="h-4 w-4" />
                                        </div>

                                        <div className="text-3xl font-black text-[var(--brand-navy)] tracking-tight group-hover:text-[var(--brand-blue)] transition-colors duration-300">{n}</div>
                                        <div className="text-xs font-semibold text-muted-foreground mt-1.5 leading-tight group-hover:text-[var(--brand-navy)] transition-colors duration-300">{t}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-[var(--brand-blue)]/8 rounded-3xl filter blur-2xl group-hover:blur-3xl transition-all duration-500 scale-95 opacity-60 animate-pulse" style={{ animationDuration: "4s" }} />

                        <div className="relative rounded-3xl overflow-hidden border border-slate-200/50 bg-slate-900/5 p-2 shadow-[0_20px_50px_rgba(20,28,60,0.12)] hover:shadow-[0_30px_60px_rgba(20,28,60,0.18)] transition-all duration-500 group-hover:scale-[1.01]">
                            <motion.img src={indiaMap} alt="India network map" className="relative rounded-2xl w-full object-cover" loading="lazy" />

                            <div className="absolute top-[32%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20 group/beacon">
                                <div className="relative flex h-5 w-5 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 border border-white"></span>
                                </div>
                                <span className="absolute left-1/2 -translate-x-1/2 bottom-6 scale-0 transition-all rounded bg-slate-950 px-2 py-1 text-[9px] font-bold text-white group-hover/beacon:scale-100 shadow-md">Delhi Hub</span>
                            </div>

                            <div className="absolute top-[60%] left-[32%] -translate-x-1/2 -translate-y-1/2 z-20 group/beacon">
                                <div className="relative flex h-5 w-5 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 border border-white"></span>
                                </div>
                                <span className="absolute left-1/2 -translate-x-1/2 bottom-6 scale-0 transition-all rounded bg-slate-950 px-2 py-1 text-[9px] font-bold text-white group-hover/beacon:scale-100 shadow-md">Mumbai Hub</span>
                            </div>

                            <div className="absolute top-[78%] left-[40%] -translate-x-1/2 -translate-y-1/2 z-20 group/beacon">
                                <div className="relative flex h-5 w-5 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
                                </div>
                                <span className="absolute left-1/2 -translate-x-1/2 bottom-6 scale-0 transition-all rounded bg-slate-950 px-2 py-1 text-[9px] font-bold text-white group-hover/beacon:scale-100 shadow-md">Bengaluru Hub</span>
                            </div>

                            <div className="absolute top-[52%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-20 group/beacon">
                                <div className="relative flex h-5 w-5 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500 border border-white"></span>
                                </div>
                                <span className="absolute left-1/2 -translate-x-1/2 bottom-6 scale-0 transition-all rounded bg-slate-950 px-2 py-1 text-[9px] font-bold text-white group-hover/beacon:scale-100 shadow-md">Kolkata Hub</span>
                            </div>

                            <div className="absolute top-[80%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 group/beacon">
                                <div className="relative flex h-5 w-5 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 border border-white"></span>
                                </div>
                                <span className="absolute left-1/2 -translate-x-1/2 bottom-6 scale-0 transition-all rounded bg-slate-950 px-2 py-1 text-[9px] font-bold text-white group-hover/beacon:scale-100 shadow-md">Chennai Hub</span>
                            </div>

                            <LiveHudWidget />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-10 sm:py-20 text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-md mb-12"
                >
                    <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-blue)] font-bold mb-3">Our Core Services</div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight leading-tight">End-to-End Logistics Solutions for Every Business Need</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modes.map((m, i) => (
                        <motion.article
                            key={m.n}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 p-4 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-200/50"
                        >
                            <div className="relative h-64 overflow-hidden rounded-[2rem] mb-8">
                                <img src={m.img} alt={m.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl text-xl font-black text-[var(--brand-blue)] shadow-sm">
                                    {m.n}
                                </div>
                            </div>
                            <div className="px-4 pb-4">
                                <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-3 group-hover:text-[var(--brand-blue)] transition-colors">{m.t}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">{m.desc}</p>
                                <a href="#" className="inline-flex items-center gap-2 text-[var(--brand-blue)] font-bold group/link">
                                    Read More
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-2" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section className="bg-secondary/30 py-20 border-y border-border/50 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[var(--brand-blue)]/5 blur-3xl pointer-events-none" />

                <div className="mx-auto max-w-7xl px-6 relative z-10 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mb-12"
                    >
                        <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-blue)] font-bold mb-3">Versatile Solutions</div>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight leading-tight">Industries We Serve Across Diverse Business Sectors</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed text-base">
                            Providing reliable logistics solutions across multiple industries with safe and timely deliveries.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "E-Commerce & Retail",
                            "Industrial Goods & Machinery",
                            "Pharmaceuticals & Healthcare",
                            "Electronics & Appliances",
                            "Automotive & Manufacturing",
                            "SMEs & Regional Businesses",
                            "Textiles & Apparel",
                            "FMCG & Consumer Goods",
                        ].map((i, index) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{
                                    y: -4,
                                    borderColor: "var(--brand-blue)",
                                    boxShadow: "0 12px 30px -10px rgba(59,130,246,0.15)",
                                    transition: { duration: 0.2 },
                                }}
                                className="rounded-xl bg-white border border-slate-100 p-6 shadow-sm flex items-center justify-between transition-all duration-300"
                            >
                                <div className="text-sm font-bold text-[var(--brand-navy)] leading-tight">{i}</div>
                                <div className="h-2 w-2 rounded-full bg-[var(--brand-blue)] animate-pulse" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <img
                        src={dbsLogo}
                        alt="DBS Express Cargo Logo"
                        className="h-20 w-auto object-contain mx-auto mb-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-md border border-slate-100"
                    />
                    <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand-blue)] font-bold mb-3">Who We Are</div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                        Connecting Businesses, Delivering Success Across the Nation
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed text-base max-w-2xl mx-auto">
                        Built on a foundation of trust, speed, and reliability — every shipment we handle is backed by a commitment to excellence that has earned us the confidence of 600+ businesses across India.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <ValueCard Icon={Target} title="Our Mission" body="To provide businesses of every size with reliable, fast, and cost-efficient logistics solutions — from first-mile pickup to last-mile delivery — ensuring every shipment reaches its destination safely and on time across India and beyond." delay={0.1} />
                    <ValueCard Icon={Eye} title="Our Vision" body="To become India's most trusted logistics partner by building a seamless pan-India cargo network powered by modern technology, transparent operations, and a relentless focus on delivering value to our clients." delay={0.2} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="rounded-[2.5rem] bg-white border border-slate-100 p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group text-left"
                >
                    <div className="absolute top-0 right-0 h-48 w-48 bg-[var(--brand-blue)]/[0.02] rounded-bl-full group-hover:bg-[var(--brand-blue)]/[0.04] transition-colors" />

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-16 w-16 rounded-2xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all shadow-inner">
                            <Award className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--brand-navy)]">Our Core Values</h3>
                            <p className="text-sm text-muted-foreground mt-1">The principles that guide every decision we make</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { label: "Integrity", desc: "We operate with full transparency — no hidden charges, no surprises. Honest communication is the cornerstone of every client relationship." },
                            { label: "Reliability", desc: "Consistent, on-time performance across every route, every season. Our clients can count on us when it matters most." },
                            { label: "Customer First", desc: "Every solution we build starts with understanding the client's needs. Your success is our success — we go the extra mile, literally." },
                            { label: "Speed", desc: "Express logistics without compromise. We move fast while maintaining the safety and security of every consignment." },
                            { label: "Innovation", desc: "We embrace modern logistics technology — real-time tracking, digital documentation, and smart route optimisation." },
                            { label: "Excellence", desc: "We hold ourselves to the highest standards in service delivery, fleet maintenance, and customer support across all 41+ branches." },
                        ].map(({ label, desc }, idx) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="rounded-2xl bg-slate-50 border border-slate-100 p-5 hover:border-[var(--brand-blue)]/30 hover:bg-blue-50/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-blue)] flex-shrink-0" />
                                    <span className="text-sm font-bold text-[var(--brand-navy)]">{label}</span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section
                className="relative bg-cover bg-center overflow-hidden py-16 sm:py-28 text-left"
                style={{ backgroundImage: `linear-gradient(rgba(12,18,45,0.85), rgba(12,18,45,0.85)), url(${logisticsBg})` }}
            >
                <div className="absolute -left-20 top-0 h-72 w-72 bg-[var(--brand-blue)]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="mx-auto max-w-7xl px-6 relative z-10 text-primary-foreground grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 font-bold mb-3">Professional Logistics</div>
                        <h2 className="font-serif text-3xl md:text-5xl leading-tight font-bold tracking-tight">
                            Driving growth & efficiency through professional, tailored solutions.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        whileHover={{ y: -8 }}
                        className="rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300 text-left"
                    >
                        <div className="h-56 overflow-hidden relative">
                            <img src={driverImg} alt="Driver" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-3 text-sm font-bold text-left">
                                <Headphones className="h-4 w-4 text-[var(--brand-accent)]" /> 24/7 Customer Assistance
                            </div>
                            <p className="mt-3 text-xs text-primary-foreground/70 leading-relaxed text-left">
                                Connecting businesses with fast, secure, and dependable cargo transportation solutions across every single state.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -8 }}
                        className="rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-2xl hover:border-white/20 transition-all duration-300 text-left"
                    >
                        <Globe className="h-10 w-10 text-[var(--brand-accent)] animate-pulse" />
                        <h3 className="mt-6 font-bold text-lg leading-snug">Strong Domestic & International Logistics Network</h3>
                        <div className="mt-4 flex items-baseline gap-2">
                            <span className="text-4xl font-black text-[var(--brand-accent)] tracking-tight">100+</span>
                            <span className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold">Delivery Routes Covered</span>
                        </div>
                        <ul className="mt-6 space-y-3.5 text-sm text-left">
                            <li className="flex gap-3 items-center">
                                <CheckCircle2 className="h-4 w-4 text-[var(--brand-accent)] flex-shrink-0" />
                                <span className="text-primary-foreground/90 font-medium">Reliable & On-Time Delivery</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <CheckCircle2 className="h-4 w-4 text-[var(--brand-accent)] flex-shrink-0" />
                                <span className="text-primary-foreground/90 font-medium">Experienced Logistics Team</span>
                            </li>
                        </ul>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-accent)] hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                            Explore Services <ArrowRight className="h-4 w-4" />
                        </span>
                    </motion.div>
                </div>
            </section>

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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-blue)] font-bold mb-3">Got Questions?</div>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight leading-tight">Frequently Asked Questions</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed text-sm">Find quick answers to common questions about our cargo and logistics services.</p>
                    </motion.div>

                    <div className="mt-8 space-y-4">
                        {[
                            {
                                q: "What types of transportation services do you provide?",
                                a: "We provide road, rail, and air freight forwarding along with FTL, packaging, and warehousing solutions tailored to businesses of every size.",
                            },
                            {
                                q: "Do you offer logistics support for small businesses?",
                                a: "Yes, our logistics solutions are specifically designed to support businesses of all sizes, especially growing enterprises that need flexible, affordable services.",
                            },
                            {
                                q: "How do I track my shipment in real-time?",
                                a: "Every shipment receives a unique LR number that you can trace from our website or by contacting our 24/7 support team.",
                            },
                            {
                                q: "What areas in India do you cover?",
                                a: "Our network spans 41+ branches across major Indian cities and 100+ delivery routes - including remote tier-2 and tier-3 destinations.",
                            },
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
        </PageShell>
    );
}

function StatBlock({ n, t, d, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-[2.5rem] border border-slate-100 p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group text-left"
        >
            <div className="absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-[var(--brand-blue)]/5 blur-xl group-hover:bg-[var(--brand-blue)]/10 transition-colors" />
            <div className="text-5xl font-black text-[var(--brand-blue)] tracking-tight">{n}</div>
            <div className="mt-3 font-bold text-lg text-[var(--brand-navy)]">{t}</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
        </motion.div>
    );
}

function ValueCard({ Icon, title, body, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -8 }}
            className="rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative group overflow-hidden text-left"
        >
            <div className="absolute top-0 right-0 h-32 w-32 bg-[var(--brand-blue)]/[0.02] rounded-bl-full group-hover:bg-[var(--brand-blue)]/[0.04] transition-colors" />
            <div className="h-16 w-16 rounded-2xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center mb-6 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all shadow-inner">
                <Icon className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-4">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
        </motion.div>
    );
}

function LiveHudWidget() {
    const [shipmentIndex, setShipmentIndex] = useState(0);
    const shipments = [
        { lr: "LR-928471", route: "Delhi -> Mumbai", status: "In Transit", eta: "8 hrs" },
        { lr: "LR-381048", route: "Kolkata -> Chennai", status: "Out for Delivery", eta: "1 hr" },
        { lr: "LR-829402", route: "Bengaluru -> Delhi", status: "Dispatched", eta: "14 hrs" },
        { lr: "LR-104928", route: "Mumbai -> Bengaluru", status: "In Transit", eta: "5 hrs" },
        { lr: "LR-759203", route: "Ahmedabad -> Kolkata", status: "Arrived at Hub", eta: "2 hrs" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setShipmentIndex((prev) => (prev + 1) % shipments.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const current = shipments[shipmentIndex];

    return (
        <div className="absolute bottom-4 left-4 z-20 w-56 sm:w-64 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 p-3.5 text-white shadow-2xl text-left transition-all duration-300 hover:bg-slate-950">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2 mb-2">
                <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Live Operations</span>
                </div>
                <span className="text-[9px] font-bold text-[var(--brand-accent)] bg-[var(--brand-accent)]/10 px-1.5 py-0.5 rounded">Active</span>
            </div>

            <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium">
                    <span>Tracking ID:</span>
                    <span className="text-white font-mono font-semibold">{current.lr}</span>
                </div>
                <div className="text-xs font-bold text-slate-100 flex items-center justify-between">
                    <span>Route:</span>
                    <span className="text-[var(--brand-blue)]">{current.route}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-medium">
                    <span>Status:</span>
                    <span className="text-emerald-400 font-semibold">{current.status}</span>
                </div>
            </div>
        </div>
    );
}
