import { useEffect, useState } from "react";
import {
    MapPin,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Globe,
    Users,
    Headphones,
    ShieldCheck,
    Zap,
    Boxes,
    TrendingUp,
    LifeBuoy,
    Star,
    HeartHandshake,
    Map as MapIcon,
} from "lucide-react";
import { TopBar, Nav, Footer } from "@/components/site/SiteChrome";
import { motion } from "framer-motion";
import heroTruck from "@/assets/dbs/hero-truck.jpg";
import heroWorker from "@/assets/dbs/hero-worker.jpg";
import heroTrain from "@/assets/dbs/hero-train.jpg";
import airImg from "@/assets/dbs/air.jpg";
import roadImg from "@/assets/dbs/road.jpg";
import railImg from "@/assets/dbs/img20.jpg";
import calcTruck from "@/assets/dbs/img5.jpg";
import logisticsBanner from "@/assets/dbs/img10.jpg";
import whyTruck from "@/assets/dbs/img9.jpg";
import specialBg from "@/assets/dbs/special.jpg";
import blog1 from "@/assets/dbs/blog1.jpg";
import blog2 from "@/assets/dbs/blog2.jpg";
import blog3 from "@/assets/dbs/blog3.jpg";

const cities = ["Ahmedabad", "Chandigarh", "Delhi", "Pune", "Mumbai", "Hyderabad", "Jaipur"];
const homeCardHover =
    "card-lift shadow-sm transition duration-300 ease-out will-change-transform hover:-translate-y-2 hover:shadow-[var(--shadow-card)]";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                setProgress((window.scrollY / totalScroll) * 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-accent)] to-[var(--brand-blue)] z-[100] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
        />
    );
}

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

export default function Home() {
    return (
        <div className="min-h-screen text-foreground">
            <ScrollProgress />
            <TopBar />
            <Nav />
            <Hero />
            <ScrollReveal>
                <CompanyIntro />
            </ScrollReveal>
            <ScrollReveal>
                <ManageLogistics />
            </ScrollReveal>
            <ScrollReveal>
                <CitiesStrip />
            </ScrollReveal>
            <ScrollReveal>
                <TrustStats />
            </ScrollReveal>
            <ScrollReveal>
                <Calculator />
            </ScrollReveal>
            <ScrollReveal>
                <MovesBanner />
            </ScrollReveal>
            <ScrollReveal>
                <WhyChooseUs />
            </ScrollReveal>
            <ScrollReveal>
                <SpecialCards />
            </ScrollReveal>
            <ScrollReveal>
                <KeyFeatures />
            </ScrollReveal>
            <ScrollReveal>
                <Blog />
            </ScrollReveal>
            <ScrollReveal>
                <Testimonials />
            </ScrollReveal>
            <Footer />
        </div>
    );
}

const heroSlides = [heroTruck, heroWorker, heroTrain];
const heroHeadings = [
    { line1: "Delivering ", highlight: "Excellence", line2: "Across Every Mile" },
    { line1: "Smart Logistics ", highlight: "Solutions", line2: "for Businesses" },
    { line1: "Contact Our Team for ", highlight: "Seamless", line2: "Support" },
    { line1: "We Excel In ", highlight: "Delivery", line2: "Services" },
];

function TypewriterLine({ text, className, baseDelay }) {
    return (
        <>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: baseDelay + i * 0.04 }}
                    className={className}
                >
                    {char}
                </motion.span>
            ))}
        </>
    );
}

function Hero() {
    const [current, setCurrent] = useState(0);
    const [headingIndex, setHeadingIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
            setHeadingIndex((prev) => (prev + 1) % heroHeadings.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden min-h-[100vh] flex items-center justify-center">
            {heroSlides.map((slide, i) => (
                <motion.div
                    key={i}
                    initial={false}
                    animate={{ opacity: i === current ? 1 : 0, scale: i === current ? 1.05 : 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img src={slide} alt={`Slide ${i + 1}`} className="w-full h-full object-cover object-center" />
                </motion.div>
            ))}

            <div className="absolute inset-0 z-[1] bg-[var(--brand-navy)]/70" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:py-20 text-center">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-bold text-white mb-6 shadow-lg"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-accent)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--brand-accent)]"></span>
                        </span>
                        India&#39;s Trusted Logistics Partner
                    </motion.div>

                    <motion.h1
                        key={headingIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white drop-shadow-lg"
                    >
                        <TypewriterLine text={heroHeadings[headingIndex].line1} baseDelay={0.3} />
                        <TypewriterLine
                            text={heroHeadings[headingIndex].highlight}
                            className="bg-gradient-to-r from-[var(--brand-accent)] via-amber-300 to-[var(--brand-accent)] bg-clip-text text-transparent"
                            baseDelay={0.3 + heroHeadings[headingIndex].line1.length * 0.04}
                        />
                        <br />
                        <TypewriterLine
                            text={heroHeadings[headingIndex].line2}
                            className="italic font-light text-white/90"
                            baseDelay={
                                0.3 +
                                (heroHeadings[headingIndex].line1.length + heroHeadings[headingIndex].highlight.length) * 0.04
                            }
                        />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
                    >
                        From pickup to delivery, DBS Express Cargo ensures your shipments move safely and on time - powered by 30+ years of expertise in road, rail & air logistics.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mt-10 flex flex-wrap justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.06, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-[var(--brand-accent)] text-white px-10 py-4 text-base font-bold shadow-xl shadow-orange-500/30 transition-all"
                        >
                            Get a Quote
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.06, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm px-10 py-4 text-base font-bold text-white shadow-lg hover:bg-white/15 transition-all"
                        >
                            Track Shipment
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.7 }}
                        className="mt-10 sm:mt-12 inline-flex flex-wrap justify-center items-center gap-6 sm:gap-10 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl px-8 py-5"
                    >
                        {[
                            { num: "30+", label: "Years Experience" },
                            { num: "5k+", label: "Monthly Deliveries" },
                            { num: "20+", label: "Cities Covered" },
                            { num: "99%", label: "On-Time Rate" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center px-2">
                                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.num}</div>
                                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-[var(--brand-accent)]" : "w-2 bg-white/40 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2"
            >
                <span className="text-xs text-white/50 uppercase tracking-widest [writing-mode:vertical-lr]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent"
                />
            </motion.div>
        </section>
    );
}

function CompanyIntro() {
    return (
        <section className="bg-slate-50 py-12 sm:py-24 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    <div className="lg:w-1/2">
                        <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">About Our Company</div>
                        <h2 className="font-serif text-4xl md:text-5xl text-[var(--brand-navy)] leading-tight mb-8">
                            The Best Transportation <br />
                            Company In Our State
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            Reliable logistics solutions that move your shipments safely, swiftly, and smartly across locations. We ensure timely pickup and delivery with complete shipment safety, so your cargo reaches its destination without delays or damage.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:border-[var(--brand-blue)]/30 hover:bg-gradient-to-br hover:from-white hover:via-slate-50 hover:to-[var(--brand-blue)]/5"
                            >
                                <div className="h-12 w-12 rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <div className="text-2xl font-bold text-[var(--brand-navy)] transition-colors duration-300 group-hover:text-[var(--brand-blue)]">Efficiency</div>
                                <p className="text-sm text-muted-foreground mt-2">Optimized routes for faster delivery.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:border-[var(--brand-accent)]/30 hover:bg-gradient-to-br hover:from-white hover:via-slate-50 hover:to-[var(--brand-accent)]/5"
                            >
                                <div className="h-12 w-12 rounded-xl bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[var(--brand-accent)] group-hover:text-[var(--brand-navy)]">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <div className="text-2xl font-bold text-[var(--brand-navy)] transition-colors duration-300 group-hover:text-[var(--brand-accent)]">Network</div>
                                <p className="text-sm text-muted-foreground mt-2">Connected across 20+ major cities.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
                            <img src={whyTruck} alt="Logistics Support" className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 text-white">
                                <div className="text-5xl font-bold mb-2">30+</div>
                                <div className="text-xl opacity-90">Years of Professional Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ManageLogistics() {
    const modes = [
        { n: "01", img: roadImg, t: "Road Transport", desc: "Fast and reliable door-to-door road delivery across India." },
        { n: "02", img: railImg, t: "Rail Transport", desc: "Cost-effective and high-capacity rail logistics solutions." },
        { n: "03", img: airImg, t: "Air Transport", desc: "Priority air shipping for your most time-sensitive cargo." },
        { n: "04", img: heroWorker, t: "Warehousing", desc: "Secure storage with tech-enabled inventory and picking support." },
        { n: "05", img: calcTruck, t: "Last-Mile Delivery", desc: "Dedicated fleets for seamless, on-time city deliveries." },
    ];
    const [visibleCount, setVisibleCount] = useState(3);
    const maxIndex = Math.max(0, modes.length - visibleCount);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            if (window.innerWidth < 640) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        updateCount();
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);

    useEffect(() => {
        setStartIndex((i) => Math.min(i, maxIndex));
    }, [maxIndex]);

    const handlePrev = () => setStartIndex((i) => Math.max(0, i - 1));
    const handleNext = () => setStartIndex((i) => Math.min(maxIndex, i + 1));

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Our Core Services</div>
                        <h2 className="font-serif text-4xl md:text-5xl text-[var(--brand-navy)] leading-tight">
                            Integrated Logistics Solutions <br />
                            For Your Business
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                            className="h-14 w-14 rounded-full border border-slate-200 bg-white/80 text-[var(--brand-blue)] shadow-sm backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] disabled:opacity-40"
                            aria-label="Previous"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={startIndex === maxIndex}
                            className="h-14 w-14 rounded-full border border-slate-200 bg-white/80 text-[var(--brand-blue)] shadow-sm backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] disabled:opacity-40"
                            aria-label="Next"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}
                    >
                        {modes.map((m) => (
                            <div key={m.n} style={{ width: `${100 / visibleCount}%` }} className="flex-shrink-0 px-4">
                                <motion.article
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 p-4 transition-all hover:shadow-2xl hover:shadow-slate-200/50"
                                >
                                    <div className="relative h-64 overflow-hidden rounded-[2rem] mb-8">
                                        <img src={m.img} alt={m.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl text-xl font-black text-[var(--brand-blue)] shadow-sm">
                                            {m.n}
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-3 group-hover:text-[var(--brand-blue)] transition-colors">{m.t}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">{m.desc}</p>
                                        <a href="#" className="inline-flex items-center gap-2 text-[var(--brand-blue)] font-bold group/link">
                                            Learn More
                                            <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-2" />
                                        </a>
                                    </div>
                                </motion.article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CitiesStrip() {
    return (
        <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#040b1c] via-[#030715] to-[#01030a] text-white">
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.4), transparent 45%), radial-gradient(circle at 80% 0%, rgba(236,181,64,0.35), transparent 40%), linear-gradient(120deg, rgba(59,130,246,0.08), rgba(2,6,23,0.9))",
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid lg:grid-cols-[1.05fr_1.2fr] gap-10 lg:gap-16 items-center">
                    <div className="space-y-8">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
                            <MapPin className="h-4 w-4 text-[var(--brand-accent)]" /> Network Reach
                        </span>
                        <div>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">Connecting 20+ Key Indian Cities</h2>
                            <p className="text-slate-300 mt-5 max-w-xl text-lg">
                                Our multi-modal network ensures your freight can reach any demand center with predictable SLAs, live tracking, and proactive support.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Active Hubs</p>
                                <p className="text-4xl font-serif mt-3">20+</p>
                                <p className="text-sm text-white/70">Metro & tier-2 cities</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Avg. linehaul</p>
                                <p className="text-4xl font-serif mt-3">650 km</p>
                                <p className="text-sm text-white/70">Daily national coverage</p>
                            </div>
                        </div>
                        <ul className="flex flex-wrap gap-4 text-slate-300 text-sm">
                            <li className="inline-flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-blue)]" /> Dedicated fleet
                            </li>
                            <li className="inline-flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-accent)]" /> Real-time control towers
                            </li>
                            <li className="inline-flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-white/70" /> Rapid linehaul transfers
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-[2.5rem] border border-white/10 bg-white/5/70 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] p-8">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm uppercase tracking-[0.35em] text-white/60">City matrix</p>
                            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">Live status</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {cities.map((city, index) => (
                                <motion.div
                                    key={city}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-[var(--brand-blue)]/50"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-2xl bg-[var(--brand-blue)]/30 text-[var(--brand-accent)] flex items-center justify-center">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold text-white">{city}</p>
                                            <p className="text-xs uppercase tracking-wide text-white/60">Priority lane</p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[var(--brand-blue)]/20 via-transparent to-transparent transition-opacity" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TrustStats() {
    const stats = [
        { Icon: Users, n: "100+", l: "Employees Across India" },
        { Icon: Star, n: "30+", l: "Years of Experience" },
        { Icon: HeartHandshake, n: "250+", l: "Clients Served" },
        { Icon: MapIcon, n: "41+", l: "Branches Nationwide" },
    ];
    const proofPoints = [
        { Icon: ShieldCheck, label: "Insurance-backed shipments" },
        { Icon: HeartHandshake, label: "Dedicated relationship managers" },
        { Icon: Zap, label: "Live tracking & instant alerts" },
        { Icon: LifeBuoy, label: "24/7 customer support" },
    ];

    return (
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[var(--brand-blue)]/15 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[var(--brand-accent)]/10 blur-[150px] translate-y-1/2" />
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-sm font-semibold uppercase tracking-[0.2em]">
                            <ShieldCheck className="h-4 w-4" /> Proven Reliability
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--brand-navy)] leading-tight">
                            Why Our Customers <span className="text-[var(--brand-blue)]">Trust</span> Us
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            Decades of domain expertise, proprietary tech, and a people-first support model help us deliver consistency at scale for enterprises of every size.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {proofPoints.map((point, index) => (
                                <motion.div
                                    key={point.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                                >
                                    <point.Icon className="h-5 w-5 text-[var(--brand-blue)]" />
                                    <span className="text-sm font-semibold text-[var(--brand-navy)]">{point.label}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-8 pt-2">
                            <div>
                                <div className="text-5xl font-serif text-[var(--brand-blue)]">97%</div>
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">On-Time Deliveries</p>
                            </div>
                            <div>
                                <div className="text-5xl font-serif text-[var(--brand-navy)]">4.9/5</div>
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">CSAT Score</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--brand-navy)] via-[#051533] to-[var(--brand-blue)] opacity-60 blur-2xl" />
                        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#071633] via-[#04102a] to-[#0c2f6f] text-white p-10 md:p-12 border border-white/10 shadow-2xl shadow-[var(--brand-navy)]/40">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">Performance</p>
                                    <p className="text-3xl font-semibold">2024 Snapshot</p>
                                </div>
                                <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold">Live</span>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((s, idx) => (
                                    <motion.div
                                        key={s.l}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors"
                                    >
                                        <s.Icon className="h-8 w-8 text-[var(--brand-accent)] mb-3" />
                                        <div className="text-4xl font-semibold">{s.n}</div>
                                        <div className="text-xs uppercase tracking-[0.3em] text-white/60 mt-2">{s.l}</div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-10 rounded-2xl bg-white/10 border border-white/10 p-6 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-[var(--brand-accent)]/20 text-[var(--brand-accent)] flex items-center justify-center">
                                    <Star className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">Client retention</p>
                                    <p className="text-2xl font-semibold">92% of customers renew annually</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Calculator() {
    return (
        <section className="bg-slate-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="relative hidden sm:block">
                        <div className="absolute inset-0 bg-[var(--brand-blue)]/10 rounded-[2rem] sm:rounded-[3rem] -rotate-3" />
                        <img src={calcTruck} alt="Cargo truck" className="relative z-10 rounded-[2rem] sm:rounded-[3rem] w-full object-cover shadow-2xl shadow-slate-200" />
                    </div>
                    <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-14 shadow-2xl shadow-slate-200 border border-slate-100">
                        <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Rate Estimator</div>
                        <h3 className="font-serif text-3xl md:text-4xl text-[var(--brand-navy)] mb-8">Transport Calculator</h3>

                        <div className="space-y-8">
                            <div>
                                <label className="text-sm font-bold text-[var(--brand-navy)] mb-2 block">Source / Destination</label>
                                <input
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20 focus:border-[var(--brand-blue)] transition-all"
                                    placeholder="Enter city name..."
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-[var(--brand-navy)] mb-2 block">Weight (KG)</label>
                                <input
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20 focus:border-[var(--brand-blue)] transition-all"
                                    placeholder="e.g. 500"
                                />
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <RadioGroup label="Mode" options={["Road", "Rail", "Air"]} name="mode" />
                                <RadioGroup label="Service" options={["Standard", "Express"]} name="extra" />
                                <RadioGroup label="Coverage" options={["Basic", "Full"]} name="country" />
                            </div>
                            <button className="w-full rounded-2xl bg-[var(--brand-blue)] text-white py-5 text-lg font-bold shadow-xl shadow-[var(--brand-blue)]/20 transition hover:scale-[1.02] active:scale-[0.98]">
                                Calculate Estimate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RadioGroup({ label, options, name }) {
    return (
        <div>
            <div className="font-medium mb-2">{label}</div>
            <div className="space-y-2">
                {options.map((o) => (
                    <label key={o} className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                        <input type="radio" name={name} className="accent-[var(--brand-blue)]" /> {o}
                    </label>
                ))}
            </div>
        </div>
    );
}

function MovesBanner() {
    return (
        <section className="relative min-h-[450px] sm:min-h-0 sm:h-[600px] flex items-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-fixed bg-center transition-transform duration-[10s] hover:scale-110"
                style={{
                    backgroundImage: `linear-gradient(rgba(15,23,42,0.7), rgba(15,23,42,0.7)), url(${logisticsBanner})`,
                }}
            />
            <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-blue)]/20 text-[var(--brand-blue)] backdrop-blur-md border border-white/10 mb-6 text-sm font-bold">
                            <Zap className="h-4 w-4" /> Fast & Efficient
                        </div>
                        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 sm:mb-8">
                            Logistics That <br />
                            <span className="text-[var(--brand-accent)]">Moves</span> With You
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-md">
                            Our expert logistics team handles your shipments with military precision so you can focus on growing your business.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[var(--brand-blue)] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-[var(--brand-blue)]/20 transition-all hover:opacity-95"
                            >
                                Book Shipment
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all"
                            >
                                Contact Sales
                            </motion.button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Domestic Cargo", img: roadImg },
                                { label: "Express Delivery", img: airImg },
                                { label: "Warehousing", img: heroWorker },
                                { label: "Door-to-Door", img: heroTruck },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="relative h-40 group overflow-hidden rounded-[2rem] border border-white/10 shadow-xl transition-all hover:scale-[1.02]"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className="h-10 w-10 rounded-xl bg-[var(--brand-blue)]/20 backdrop-blur-md flex items-center justify-center text-[var(--brand-blue)] mb-3 group-hover:scale-110 transition-all border border-white/10">
                                            <ShieldCheck className="h-5 w-5" />
                                        </div>
                                        <div className="text-white font-bold text-lg leading-tight">{item.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyChooseUs() {
    const items = [
        { Icon: Globe, t: "Global Network", d: "Connecting your business to every corner of the country." },
        { Icon: Users, t: "Expert Team", d: "30+ years of professional logistics expertise at your service." },
        { Icon: Headphones, t: "24/7 Support", d: "Always available to track and manage your shipments." },
        { Icon: ShieldCheck, t: "Safety First", d: "100% secure handling with comprehensive insurance options." },
    ];
    return (
        <section className="bg-white py-16 sm:py-24 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
                    <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Core Advantages</div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--brand-navy)] mb-6">Why Industry Leaders Choose DBS</h2>
                    <p className="text-base sm:text-lg text-muted-foreground">We don&#39;t just move cargo; we move your business forward with precision, safety, and unmatched reliability.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    <div className="space-y-8 sm:space-y-10">
                        {items.slice(0, 2).map((it) => (
                            <div key={it.t} className="flex gap-4 sm:gap-6 group">
                                <div className="flex-shrink-0 h-14 w-14 sm:h-16 sm:w-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 text-[var(--brand-blue)] flex items-center justify-center group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all duration-300">
                                    <it.Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[var(--brand-navy)] mb-2">{it.t}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{it.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative hidden sm:block sm:col-span-2 lg:col-span-1 order-first lg:order-none">
                        <div className="absolute inset-0 bg-[var(--brand-blue)]/20 rounded-full blur-[100px] animate-pulse" />
                        <img
                            src={whyTruck}
                            alt="Logistics excellence"
                            className="relative z-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl w-full object-cover h-[280px] sm:h-[350px] lg:h-[500px]"
                        />
                    </div>

                    <div className="space-y-8 sm:space-y-10">
                        {items.slice(2).map((it) => (
                            <div key={it.t} className="flex lg:flex-row-reverse gap-4 sm:gap-6 group lg:text-right">
                                <div className="flex-shrink-0 h-14 w-14 sm:h-16 sm:w-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 text-[var(--brand-blue)] flex items-center justify-center group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all duration-300">
                                    <it.Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[var(--brand-navy)] mb-2">{it.t}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{it.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Feature({ Icon, t }) {
    return (
        <div className={`rounded-xl border border-border p-5 bg-card ${homeCardHover}`}>
            <Icon className="h-8 w-8 text-[var(--brand-blue)]" />
            <h3 className="mt-3 font-semibold">{t}</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                We are believed to be the best in catering to any transportation requirement across the country with fast, efficient and express logistics services.
            </p>
        </div>
    );
}

function SpecialCards() {
    const cards = [
        { t: "Specialized Enterprise Solutions", d: "Tailored logistics for large scale industrial operations." },
        { t: "All-India Logistics Network", d: "Unmatched reach across every state and union territory." },
    ];
    return (
        <section className="bg-white py-8 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 gap-6 sm:gap-8">
                {cards.map((c, i) => (
                    <motion.div
                        key={c.t}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -8 }}
                        className="group relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden h-[240px] sm:h-[300px] flex items-end shadow-xl hover:shadow-2xl transition-all"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{
                                backgroundImage: `linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.2)), url(${specialBg})`,
                            }}
                        />
                        <div className="relative p-10 w-full">
                            <h3 className="font-serif text-3xl text-white mb-3 max-w-xs">{c.t}</h3>
                            <p className="text-slate-300 mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{c.d}</p>
                            <a href="#" className="inline-flex items-center gap-2 text-[var(--brand-accent)] font-bold group/btn">
                                Discover More
                                <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function KeyFeatures() {
    const f = [
        { Icon: Zap, t: "Real-time Tracking", d: "Monitor your cargo&#39;s journey in real-time with our advanced GPS systems." },
        { Icon: Boxes, t: "Secure Warehousing", d: "State-of-the-art storage facilities with 24/7 surveillance and inventory management." },
        { Icon: TrendingUp, t: "Business Growth", d: "Scalable logistics solutions that grow alongside your expanding enterprise." },
        { Icon: LifeBuoy, t: "Expert Support", d: "Dedicated account managers to handle all your complex shipping requirements." },
    ];
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Core Technology</div>
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--brand-navy)] mb-6">Built For High-Growth Business</h2>
                    <p className="text-lg text-muted-foreground">Our modern infrastructure combines speed with digital transparency for the ultimate logistics experience.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {f.map((it, i) => (
                        <motion.div
                            key={it.t}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center mb-6 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all shadow-inner">
                                <it.Icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--brand-navy)] mb-4">{it.t}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">{it.d}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Blog() {
    const posts = [
        { img: blog1, t: "The Future of Smart Logistics in 2026", d: "How AI and automation are reshaping global supply chains." },
        { img: blog2, t: "Optimizing Your Supply Chain Costs", d: "Practical strategies to reduce shipping overheads while improving speed." },
        { img: blog3, t: "Sustainable Shipping: Green Initiatives", d: "DBS Express&#39;s commitment to reducing carbon footprint in transportation." },
    ];
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Latest Insights</div>
                        <h2 className="font-serif text-4xl md:text-5xl text-[var(--brand-navy)] leading-tight">Discover Our Blog & Articles</h2>
                    </div>
                    <button className="text-[var(--brand-blue)] font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                        View All Insights <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                    {posts.map((p, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-all border border-slate-100"
                        >
                            <div className="relative h-56 sm:h-72 overflow-hidden rounded-[2rem] mb-6">
                                <img src={p.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-[var(--brand-navy)] shadow-sm">Logistics</span>
                                </div>
                            </div>
                            <div className="px-4 pb-4">
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-3">March 15, 2026 - 5 Min Read</div>
                                <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-4 group-hover:text-[var(--brand-blue)] transition-colors leading-tight">
                                    {p.t}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">{p.d}</p>
                                <div className="inline-flex items-center gap-2 text-[var(--brand-blue)] font-bold group/link">
                                    Read Article <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-2" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    const testimonials = [
        {
            name: "Ram Singhania",
            role: "CEO, Singhania Group",
            text: "DBS Express has transformed our logistics. Their reliability and real-time tracking have given us the confidence to scale our operations nationwide without any shipping delays.",
        },
        {
            name: "Ananya Sharma",
            role: "Logistics Manager, TechHub",
            text: "Exceptional service and professional team. They handled our most sensitive hardware cargo with extreme care and delivered ahead of schedule.",
        },
        {
            name: "Vikram Malhotra",
            role: "Founder, Malhotra Exports",
            text: "The best transportation partner we&#39;ve ever worked with. Their transparent pricing and excellent support make them stand out in the Indian logistics industry.",
        },
    ];
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Testimonials</div>
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--brand-navy)] mb-6">Trusted By Industry Leaders</h2>
                    <p className="text-lg text-muted-foreground">
                        Hear from the businesses that rely on DBS Express Cargo for their daily logistics and transportation needs.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="relative group rounded-[2.5rem] border border-slate-100 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[var(--brand-blue)]/30"
                        >
                            <div className="absolute -top-6 left-10 h-12 w-12 rounded-2xl bg-[var(--brand-blue)] text-white flex items-center justify-center text-2xl font-serif shadow-lg shadow-[var(--brand-blue)]/20 group-hover:scale-110 transition-transform">
                                &quot;
                            </div>
                            <p className="text-lg leading-relaxed italic mb-8 pt-4 text-muted-foreground group-hover:text-[var(--brand-navy)] transition-colors">
                                {t.text}
                            </p>
                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <div className="h-14 w-14 rounded-2xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] grid place-content-center font-bold text-xl uppercase group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-colors">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-[var(--brand-navy)] group-hover:text-[var(--brand-blue)] transition-colors">{t.name}</div>
                                    <div className="text-sm text-slate-400 font-medium">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
