import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, MessageSquare, Activity, Check, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/SiteChrome";
import { motion } from "framer-motion";
import contactHero from "@/assets/dbs/contact-hero.jpg";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <PageShell>
            <section className="relative h-[80vh] min-h-[650px] overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    <img src={contactHero} alt="DBS Contact Hero" className="w-full h-full object-cover object-center" />
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
                            {"Contact Our Team for ".split("").map((char, i) => (
                                <motion.span key={`c1-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.04 }}>
                                    {char}
                                </motion.span>
                            ))}
                            <br />
                            {"Seamless".split("").map((char, i) => (
                                <motion.span
                                    key={`c2-${i}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + 21 * 0.04 + i * 0.04 }}
                                    className="bg-gradient-to-r from-[var(--brand-accent)] via-amber-300 to-[var(--brand-accent)] bg-clip-text text-transparent"
                                >
                                    {char}
                                </motion.span>
                            ))}
                            {" Support".split("").map((char, i) => (
                                <motion.span key={`c3-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + 29 * 0.04 + i * 0.04 }}>
                                    {char}
                                </motion.span>
                            ))}
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-primary-foreground/85 leading-relaxed max-w-2xl drop-shadow">
                            We are here to help with shipment estimates, partnership enquiries, and any logistics challenge you are facing. Our team responds within hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-start overflow-hidden">
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[var(--brand-blue)]/5 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "7s" }} />
                <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-[var(--brand-accent)]/3 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "9s" }} />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7 }}
                    className="rounded-[3rem] border border-slate-100/80 bg-white/70 backdrop-blur-md p-8 sm:p-10 shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--brand-blue)]/5 blur-3xl group-hover:bg-[var(--brand-blue)]/10 transition-colors duration-500 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center mb-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--brand-blue)] shadow-sm shadow-blue-500/5">
                                <Activity className="h-3.5 w-3.5 animate-pulse text-[var(--brand-blue)]" /> Get in touch
                            </div>
                        </div>
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-[var(--brand-navy)] text-left">Send a Message</h2>
                        <p className="mt-2 text-sm text-muted-foreground text-left">Fill out the form below, and our support team will get back to you shortly.</p>

                        <form
                            className="mt-8 space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const fd = new FormData(e.target);
                                const text = `*New Contact Request*\n\n*Name:* ${fd.get("firstName")} ${fd.get("lastName")}\n*Phone:* ${fd.get("phone")}\n*Email:* ${fd.get("email")}\n\n*Message:*\n${fd.get("message")}`;
                                const waUrl = `https://wa.me/919527931492?text=${encodeURIComponent(text)}`;
                                window.open(waUrl, "_blank");
                                setIsSubmitted(true);
                            }}
                        >
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="rounded-[2rem] bg-emerald-50/70 backdrop-blur border border-emerald-200/50 p-8 text-center text-emerald-800"
                                >
                                    <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                                        <Check className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">Message Sent Successfully!</h3>
                                    <p className="text-sm text-emerald-700 mt-2">Thank you for contacting DBS Express Cargo. Our representative will contact you shortly.</p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <Field label="First Name" placeholder="John" name="firstName" />
                                        <Field label="Last Name" placeholder="Doe" name="lastName" />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <Field label="Phone Number" placeholder="+91 00000 00000" type="tel" name="phone" />
                                        <Field label="Email Address" placeholder="you@example.com" type="email" name="email" />
                                    </div>
                                    <div className="text-left">
                                        <label className="text-sm font-semibold text-[var(--brand-navy)]">Message</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            placeholder="Tell us about your shipment details or partnership enquiries..."
                                            className="mt-2 w-full rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/10 transition-all resize-none shadow-sm"
                                            required
                                        />
                                    </div>
                                    <label className="flex items-start gap-2.5 text-xs text-muted-foreground select-none cursor-pointer text-left">
                                        <input type="checkbox" className="mt-0.5 accent-[var(--brand-blue)] cursor-pointer" required />
                                        <span>I agree to the DBS Terms of Service and Privacy Policy regarding data transmission.</span>
                                    </label>
                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-navy)] text-primary-foreground py-4 font-bold shadow-lg shadow-[var(--brand-blue)]/20 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border-none outline-none"
                                    >
                                        <Send className="h-4 w-4" /> Send Message
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </motion.div>

                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="rounded-[3rem] border border-slate-100/80 bg-white/70 backdrop-blur-md p-8 sm:p-10 shadow-2xl relative overflow-hidden group text-left"
                    >
                        <div className="absolute -left-10 -bottom-10 h-32 w-32 bg-[var(--brand-blue)]/[0.02] rounded-tr-full pointer-events-none" />

                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-xl bg-[var(--brand-blue)]/10 border border-[var(--brand-blue)]/20 text-[var(--brand-blue)] flex items-center justify-center shrink-0">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-serif text-3xl font-bold tracking-tight text-[var(--brand-navy)]">Our Headquarters</h3>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    DBS Express Cargo, Futuready Trade Tower, Morwadi Ct Rd, opposite Gharonda Hotel, Pimpri-Chinchwad, Maharashtra 411018
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid sm:grid-cols-3 gap-5">
                            <Info Icon={Phone} title="Phone Number" value="+91 95279 31492" theme="rose" />
                            <Info Icon={Mail} title="Email Address" value="pune@dbsexpresscargo.com" theme="blue" />
                            <Info Icon={Globe} title="Our Website" value="www.dbsexpresscargo.com" theme="emerald" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="rounded-[3rem] overflow-hidden border border-slate-200/50 bg-slate-900/5 p-2 shadow-2xl relative group"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            <iframe
                                title="DBS Express Cargo Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60490.179128262!2d73.77129860445447!3d18.635426214800972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84400000001%3A0xa7fcd60f14c5ec6f!2sDBS%20Express%20Cargo!5e0!3m2!1sen!2sin!4v1781603053541!5m2!1sen!2sin"
                                className="w-full h-80 border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="p-5 flex items-center justify-between text-left">
                            <div>
                                <div className="text-sm font-bold text-[var(--brand-navy)]">Pimpri-Chinchwad, Maharashtra</div>
                                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Corporate Headquarters</div>
                            </div>
                            <a
                                href="https://maps.google.com/?q=DBS+Express+Cargo+Futuready+Trade+Tower+Pimpri+Maharashtra+411018"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-slate-100 hover:bg-[var(--brand-blue)] hover:text-white px-4 py-2 text-xs font-bold text-[var(--brand-blue)] transition-all flex items-center gap-1 cursor-pointer"
                            >
                                Directions <ArrowRight className="h-3 w-3" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageShell>
    );
}

function Field({ label, placeholder, type = "text", name }) {
    return (
        <div className="text-left">
            <label className="text-sm font-semibold text-[var(--brand-navy)]">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required
                className="mt-2 w-full rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/10 transition-all shadow-sm"
            />
        </div>
    );
}

function Info({ Icon, title, value, theme }) {
    const themes = {
        rose: "text-rose-500 bg-rose-500/10 border-rose-500/20",
        blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
        emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    };

    return (
        <div className="rounded-2xl border border-slate-100 p-5 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden text-left flex flex-col justify-between h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div className={`h-8 w-8 rounded-lg border flex items-center justify-center mb-3 ${themes[theme]}`}>
                        <Icon className="h-4 w-4" />
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{title}</div>
                </div>
                <div className="text-xs font-bold mt-3 break-all text-[var(--brand-navy)]">{value}</div>
            </div>
        </div>
    );
}
