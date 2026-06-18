import { useEffect } from "react";
import { MapPin, Phone, Globe, Zap, ArrowRight } from "lucide-react";
import { TopBar, Nav, Footer } from "@/components/site/SiteChrome";
import { motion } from "framer-motion";
import logisticsBanner from "@/assets/dbs/img10.jpg";
import { Link } from "react-router-dom"

const stations = [
    {
        city: "Ahmedabad",
        address: "Godown No. 40, Vikash Estate Near Aslali Police Station, Aslali, Ahmedabad",
        contact: "9558494365"
    },
    {
        city: "Baddi",
        address: "Pinjor Baddi Road, Nava Nagar, Distt. Panchkulla (Haryana)",
        contact: "9736039460"
    },
    {
        city: "Ballabhgarh",
        address: "Shop No. 10, Opp. Plot No. 82, Near Bharat Dharam Kanta, Sector-25, Faridabad, Ballabhgarh",
        contact: "8287944864"
    },
    {
        city: "Bangalore",
        address: "DBS Express Cargo Pvt Ltd, Chetan Complex, Plot No. 36/37, Adakamaranhalli Village, Dasanpura Hobli, Makali Post, Behind Himalaya Drug Company, Bangalore North - 562123",
        contact: "9740757111"
    },
    {
        city: "Barodra",
        address: "Express Cargo Containers D8, D9 Maruti Estate, Golden Chokadi Near Halol Toll, Vadodara - 390022",
        contact: "8448394628"
    },
    {
        city: "Bawal",
        address: "Near Bajaj Service Agencies, Rewari Road, Bawal (Haryana)",
        contact: "9812117883"
    },
    {
        city: "Bhiwandi",
        address: "Gala No-3, Wanmala Compound, Opp. Amul Warehouse, Near Mayur Kata, Rehnal, Bhiwandi - 421302",
        contact: "7769854630"
    },
    {
        city: "Chakan",
        address: "Pradesh Vasti, Chakan, Near Pradesh Ware House, Pune-Nasik Highway, Chimbli Phata, Pune - 410501",
        contact: "9850809181"
    },
    {
        city: "Chandigarh",
        address: "Village Dariya, Near H.P. Gas Agency, Old Makkhan Majra Road, Chandigarh - 160101",
        contact: "8448394630"
    },
    {
        city: "Chennai",
        address: "Plot No. 30, Padma Complex, Quans Town, VGP Industrial Complex, Chennai Bangalore Highway, Chettipetu Village, Chennai - 600124",
        contact: "9362755999"
    },
    {
        city: "Delhi",
        address: "Plot No. 141, Najafgarh Gurgaon Road, Opp. Sarvodaya Vidhyala, Kapashera, New Delhi - 110087",
        contact: ["011-32531174", "9310031174"]
    },
    {
        city: "Dharuhera",
        address: "Ward No. 5, Shop No. 7, Near Hanuman Mandir, Sohna Road, Dharuhera (Haryana)",
        contact: "9466755807"
    },
    {
        city: "Faridabad",
        address: "Plot No. 604/472, Gali No. 7, Near Sec-29, By Pass Road, Baselwa Colony, Old Faridabad",
        contact: ["0129-2505259", "8010351826"]
    },
    {
        city: "Fursungi",
        address: "SR No. 133/3/4, Bhadale Wasti, Pune-Saswad Road, Near Laxmi Hotel, Uruli Devachi, Fursungi, Pune - 412308",
        contact: "9130097289"
    },
    {
        city: "Gurgaon",
        address: "Plot No. 165/184, Kherki Dhaula, Near Jarshi India Co., Gurgaon - 122001",
        contact: ["0124-3209441", "9810627461"]
    },
    {
        city: "Haridwar",
        address: "Near Barrier No. 06, Rewali Mahdood Road, Bahadrabad, Haridwar - 247449",
        contact: "9359284640"
    },
    {
        city: "Halol",
        address: "UM Auto Comp Pvt Ltd, Shed No.1, GMC Compound, Near Rinki Chowadi Dunia, Halol, Gujarat - 389350",
        contact: "8168010256"
    },
    {
        city: "Hyderabad",
        address: "Plot No. 11/2, Opp. Manjeera Water Works, Bandlaguda, Ramchandra Puram, Patancheru, Medak Dist.",
        contact: "9014161211"
    },
    {
        city: "Jaipur",
        address: "N.H.8, Bhardhana Mandi, Near Milan Cinema, Road No.14, VKI Industrial Area, Jaipur - 302013",
        contact: ["9468368723", "7339968723"]
    },
    {
        city: "Ludhiana",
        address: "Plot No.3576 ST, No.5, Heera Nagar, Near Arora Clinic, Ludhiana - 141007",
        contact: "8448394629"
    },
    {
        city: "Nasik",
        address: "Shop No.3, Nirmans Ashiyana Building A, Near Swaraj Tractor House, Behind Nivrutti Complex, Dwarka, Nasik - 422001",
        contact: "9881500606"
    },
    {
        city: "Noida",
        address: "Plot No.35, Village Habibipur, Toy City, Greater Noida - 201306",
        contact: ["8010351818", "9910941992", "0120-3261339"]
    },
    {
        city: "Noida 63",
        address: "D-247/47, Village Chjarshi, Noida Sector 63 - 201301",
        contact: "7529998918"
    },
    {
        city: "Okhla",
        address: "Plot No.98, Coca Cola Building, Tekhand Phase-I, Okhla, New Delhi - 110020",
        contact: "8130189878"
    },
    {
        city: "Puducherry",
        address: "Plot No.9, Second Cross Street, Sabri Nagar Dharumapuri, Puducherry - 9",
        contact: "9362157999"
    },
    {
        city: "Pune",
        address: "4th Floor, D C Chamber, Opp. KSB Pump Ltd, Mumbai-Pune Road, Pimpri - 411018",
        contact: ["9822435702", "9370690424", "020-32402878", "32609565"]
    },
    {
        city: "Ranjangaon",
        address: "Near I B P Petrol Pump, Ranjangaon-Shikarpur Road, Ranjangaon - 412209",
        contact: "9763431106"
    },
    {
        city: "Rohtak",
        address: "Jind Bye Pass Road, Rohtak, Haryana - 124001",
        contact: "9813086558"
    },
    {
        city: "Rudrapur",
        address: "Chawla Compound, Chawla Cinema, Kashipur Road, Rudrapur - 263153",
        contact: ["9358645783", "9358645183"]
    },
    {
        city: "Sahibabad",
        address: "Bld. No. 281/1, Village Karkar Mora, Industrial Area, Site-4, Sahibabad - 201010",
        contact: "8882219737"
    },
    {
        city: "Sonipat",
        address: "Main GT Road, Near Bank of Baroda, Dahiya Market, Shop No.20, Kundli, Sonipat (HR)",
        contact: "9215045777"
    },
    {
        city: "Tikri Border",
        address: "Plot No. 58/20/1, Near Shree Ram Dharam Kanta, Main PUC Road, Tikri Border, Delhi - 110041",
        contact: "9015488042"
    },
    {
        city: "Vadodara",
        address: "D-8, D-9, Maruti Estate, Near Halol Highway Toll Naka, Golden Chokdi, Harni Road, Vadodara - 390022",
        contact: "8072746326"
    },
    {
        city: "Vapi",
        address: "Off 309, 3rd Floor, Arihant Complex, Near Vishal Mega Mart, Fuwara Chowk, GIDC, Vapi - 396195 (Gujarat)",
        contact: ["0260-2425747", "3096382"]
    }
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

            {/* Stations Grid */}
            <ScrollReveal>
                <section className="bg-slate-50 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Station Network</div>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--brand-navy)] mb-4">Our Stations</h2>
                            <p className="text-lg text-muted-foreground">
                                {stations.length} stations across India — from metros to industrial corridors, we're always close to your cargo.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {stations.map((station, i) => (
                                <motion.div
                                    key={station.city}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.03, duration: 0.4 }}
                                    whileHover={{ y: -4 }}
                                    className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[var(--brand-blue)]/30 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-[var(--brand-navy)] text-base">{station.city}</h3>
                                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{station.address}</p>
                                            <div className="mt-3 flex items-start gap-2 text-sm font-medium text-[var(--brand-blue)]">
                                                <Phone className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                                <span>
                                                    {Array.isArray(station.contact)
                                                        ? station.contact.join(" / ")
                                                        : station.contact}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
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
