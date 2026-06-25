import calcTruck from "@/assets/dbs/img5.jpg";
import { PageShell } from "@/components/site/SiteChrome";
import { motion } from "framer-motion";

function RadioGroup({ label, options, name }) {
    return (
        <div>
            <div className="font-medium mb-2">{label}</div>
            <div className="space-y-2">
                {options.map((o, i) => (
                    <label key={o} className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                        <input type="radio" name={name} value={o} defaultChecked={i === 0} className="accent-[var(--brand-blue)]" /> {o}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default function Quote() {
    return (
        <PageShell>
            <section className="relative h-[80vh] min-h-[650px] overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    <img src={calcTruck} alt="DBS Express Cargo Fleet" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)]/90 via-[var(--brand-navy)]/70 to-[var(--brand-navy)]/30" />
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />

                <div className="relative mx-auto max-w-7xl px-6 w-full text-primary-foreground z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl text-left"
                    >
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white drop-shadow-lg">
                            {"Get an Instant ".split("").map((char, i) => (
                                <motion.span key={`q1-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.04 }}>
                                    {char}
                                </motion.span>
                            ))}
                            <br />
                            {"Freight".split("").map((char, i) => (
                                <motion.span
                                    key={`q2-${i}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + 16 * 0.04 + i * 0.04 }}
                                    className="bg-gradient-to-r from-[var(--brand-accent)] via-amber-300 to-[var(--brand-accent)] bg-clip-text text-transparent"
                                >
                                    {char}
                                </motion.span>
                            ))}
                            {" Estimate".split("").map((char, i) => (
                                <motion.span key={`q3-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + 23 * 0.04 + i * 0.04 }}>
                                    {char}
                                </motion.span>
                            ))}
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-primary-foreground/85 leading-relaxed max-w-2xl drop-shadow">
                            Calculate transportation costs for your cargo in seconds. Fill in your shipment details and get a tailored estimate from our logistics team.
                        </p>
                    </motion.div>
                </div>
            </section>
            <section id="quote" className="bg-slate-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="relative hidden sm:block">
                            <div className="absolute inset-0 bg-[var(--brand-blue)]/10 rounded-[2rem] sm:rounded-[3rem] -rotate-3" />
                            <img src={calcTruck} alt="Cargo truck" className="relative z-10 rounded-[2rem] sm:rounded-[3rem] w-full object-cover shadow-2xl shadow-slate-200" />
                        </div>
                        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-14 shadow-2xl shadow-slate-200 border border-slate-100">
                            <div className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm mb-4">Rate Estimator</div>
                            <h3 className="font-serif text-3xl md:text-4xl text-[var(--brand-navy)] mb-8">Transport Calculator</h3>

                            <form className="space-y-8" onSubmit={(e) => {
                                e.preventDefault();
                                const fd = new FormData(e.target);
                                const text = `*New Quote Request*\n\n*Source/Destination:* ${fd.get("sourceDest")}\n*Weight:* ${fd.get("weight")} KG\n*Mode:* ${fd.get("mode")}\n*Service:* ${fd.get("extra")}\n*Coverage:* ${fd.get("country")}`;
                                const waUrl = `https://wa.me/919527931492?text=${encodeURIComponent(text)}`;
                                window.open(waUrl, "_blank");
                            }}>
                                <div>
                                    <label className="text-sm font-bold text-[var(--brand-navy)] mb-2 block">Source / Destination</label>
                                    <input
                                        name="sourceDest"
                                        required
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20 focus:border-[var(--brand-blue)] transition-all"
                                        placeholder="Enter city name..."
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-[var(--brand-navy)] mb-2 block">Weight (KG)</label>
                                    <input
                                        name="weight"
                                        required
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20 focus:border-[var(--brand-blue)] transition-all"
                                        placeholder="e.g. 500"
                                    />
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <RadioGroup label="Mode" options={["Road", "Rail", "Air"]} name="mode" />
                                    <RadioGroup label="Service" options={["Standard", "Express"]} name="extra" />
                                    <RadioGroup label="Coverage" options={["Basic", "Full"]} name="country" />
                                </div>
                                <button type="submit" className="w-full rounded-2xl bg-[var(--brand-blue)] text-white py-5 text-lg font-bold shadow-xl shadow-[var(--brand-blue)]/20 transition hover:scale-[1.02] active:scale-[0.98]">
                                    Calculate Estimate
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
