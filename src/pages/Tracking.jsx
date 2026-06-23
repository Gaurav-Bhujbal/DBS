import { useState } from "react";
import { PageShell } from "@/components/site/SiteChrome";
import { FileText, Package, Truck, MapPin, RotateCw, ExternalLink } from "lucide-react";

const TRACKING_URL = "http://117.248.110.22/DBSEXP/CSM/TRACKLR.ASPX";
const PROXY_URL = "/api/tracking";

function LabelValue({ label, value }) {
    return (
        <div className="flex border-b border-gray-200 last:border-0">
            <span
                className="text-[12px] text-gray-600 font-medium shrink-0 py-[5px] px-2 border-r border-gray-200"
                style={{ width: "38%" }}
            >
                {label}
            </span>
            <span className="text-[12px] text-gray-800 py-[5px] px-2">{value || " "}</span>
        </div>
    );
}

function SectionHeader({ icon: Icon, title }) {
    return (
        <div
            className="flex items-center gap-2 px-4 py-2 border-2 text-white mt-4"
            style={{ background: "#050505", borderColor: "#090909" }}
        >
            <Icon className="h-4 w-4" />
            <h3 className="text-[14px] font-semibold">{title}</h3>
        </div>
    );
}

function openExternal(cnNo) {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = TRACKING_URL;
    form.target = "_blank";
    [
        ["txtCnNo", cnNo],
        ["btnSubmit", "Proceed"],
    ].forEach(([name, value]) => {
        const inp = document.createElement("input");
        inp.type = "hidden";
        inp.name = name;
        inp.value = value;
        form.appendChild(inp);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}

// The external page lives here — used to correctly resolve relative paths.
const PAGE_ORIGIN = "http://117.248.110.22";
const PAGE_BASE   = PAGE_ORIGIN + "/DBSEXP/CSM/TRACKLR.ASPX";

function extractText(doc, id) {
    return doc.getElementById(id)?.textContent?.trim() ?? "";
}

// Convert any URL (relative, absolute, or javascript:PopupCenter) to a
// proxy-relative path (/DBSEXP/…) so the browser sends the session cookie.
function toProxyUrl(href) {
    if (!href) return href;
    if (href.startsWith("data:") || href.startsWith("#")) return href;

    if (href.startsWith("javascript:")) {
        // Extract the image path from PopupCenter('path', …) calls
        const match = href.match(/PopupCenter\s*\(\s*['"]([^'"]+)['"]/i);
        if (match) {
            try {
                return new URL(match[1], PAGE_BASE).href.replace(PAGE_ORIGIN, "");
            } catch { /**/ }
        }
        return "#";
    }

    if (href.startsWith("http")) {
        return href.startsWith(PAGE_ORIGIN) ? href.replace(PAGE_ORIGIN, "") : href;
    }

    try {
        return new URL(href, PAGE_BASE).href.replace(PAGE_ORIGIN, "");
    } catch {
        return href;
    }
}

function rewriteUrls(el) {
    const clone = el.cloneNode(true);
    clone.querySelectorAll("img[src]").forEach((img) => {
        img.setAttribute("src", toProxyUrl(img.getAttribute("src")));
        img.style.maxWidth = "100%";
        img.style.height = "auto";
    });
    clone.querySelectorAll("a[href]").forEach((a) => {
        const rewritten = toProxyUrl(a.getAttribute("href"));
        a.setAttribute("href", rewritten);
        if (rewritten !== "#") {
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener noreferrer");
        }
    });
    return clone.innerHTML;
}

function extractSectionHtml(doc, id) {
    const el = doc.getElementById(id);
    if (!el) return "";
    return rewriteUrls(el);
}

// The ASP.NET page renders the movement table into divTracking and the POD
// image section into the anonymous <div> inside div1. Combine both.
function extractMovementHtml(doc) {
    const tracking = doc.getElementById("divTracking");
    const div1Inner = doc.querySelector("#div1 > div");
    const parts = [tracking, div1Inner]
        .filter((el) => el && el.innerHTML.trim())
        .map(rewriteUrls);
    return parts.join("");
}

export default function Tracking() {
    const [cnNo, setCnNo] = useState("");
    const [loading, setLoading] = useState(false);
    const [cnData, setCnData] = useState(null);
    const [movementHtml, setMovementHtml] = useState("");
    const [gpsHtml, setGpsHtml] = useState("");
    const [corsBlocked, setCorsBlocked] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    const handleTrack = async (e) => {
        e.preventDefault();
        const cn = cnNo.trim();
        if (!cn) return;

        setLoading(true);
        setCnData(null);
        setMovementHtml("");
        setGpsHtml("");
        setCorsBlocked(false);
        setFetchError(false);

        const parser = new DOMParser();

        try {
            // Step 1: GET the page to obtain ASP.NET form tokens and session cookie.
            // Without __VIEWSTATE / __EVENTVALIDATION the server ignores the submitted CN.
            const getResp = await fetch(PROXY_URL, { credentials: "include" });
            if (!getResp.ok) throw new Error("GET failed");

            const getDoc = parser.parseFromString(await getResp.text(), "text/html");

            const viewState      = getDoc.getElementById("__VIEWSTATE")?.value ?? "";
            const viewStateGen   = getDoc.getElementById("__VIEWSTATEGENERATOR")?.value ?? "";
            const eventValidation = getDoc.getElementById("__EVENTVALIDATION")?.value ?? "";

            // Step 2: POST with the tokens + CN number so the server renders data.
            const body = new URLSearchParams({
                __VIEWSTATE: viewState,
                __VIEWSTATEGENERATOR: viewStateGen,
                __EVENTVALIDATION: eventValidation,
                txtCnNo: cn,
                btnSubmit: "Proceed",
            });

            const postResp = await fetch(PROXY_URL, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
            });

            if (!postResp.ok) throw new Error("POST failed");

            const doc = parser.parseFromString(await postResp.text(), "text/html");

            // Branch is a <select> — find the selected option text.
            const branchSelect = doc.getElementById("drpbranch");
            const branch = branchSelect
                ? ([...branchSelect.options].find((o) => o.selected)?.text ?? branchSelect.options[0]?.text ?? "")
                : "";

            setCnData({
                branch,
                cnNo:       extractText(doc, "CNNO"),
                pkgs:       extractText(doc, "Pkgs"),
                actualWt:   extractText(doc, "ActWt"),
                incNo:      extractText(doc, "IncNo"),
                ewayBillNo: extractText(doc, "EwayBillNo"),
                payType:    extractText(doc, "PayType"),
                cnRemark:   extractText(doc, "CnRemark"),
                date:        extractText(doc, "Date"),
                origin:      extractText(doc, "Origin"),
                destination: extractText(doc, "Destination"),
                units:       extractText(doc, "Units"),
                chargeWt:    extractText(doc, "ChargeWt"),
                poNo:        extractText(doc, "PONO"),
                excIncNo:    extractText(doc, "ExcIncNo"),
            });

            setMovementHtml(extractMovementHtml(doc));
            setGpsHtml(extractSectionHtml(doc, "pnlGPS"));
        } catch (err) {
            const isCors = err instanceof TypeError && err.message.includes("Failed to fetch");
            if (isCors) {
                setCorsBlocked(true);
            } else {
                setFetchError(true);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageShell>
            <div className="min-h-screen" style={{ background: "#f0f0f0" }}>
                <div className="mx-auto px-4 py-6" style={{ maxWidth: 1080 }}>
                    {/* Main card */}
                    <div className="bg-white rounded-sm shadow">
                        {/* Outer box padded */}
                        <div className="p-4">
                            <div className="border border-gray-200 rounded-sm">
                                {/* Black title bar */}
                                <div
                                    className="flex items-center gap-2 px-4 py-2 text-white border-2"
                                    style={{ background: "#050505", borderColor: "#090909" }}
                                >
                                    <FileText className="h-4 w-4" />
                                    <h3 className="text-[14px] font-semibold">Track CN</h3>
                                </div>

                                {/* CN input row */}
                                <div className="px-4 py-3 border-b border-gray-200">
                                    <form onSubmit={handleTrack}>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <label className="text-[13px] text-gray-600 font-medium w-16 shrink-0">
                                                CN NO
                                            </label>
                                            <input
                                                type="text"
                                                value={cnNo}
                                                onChange={(e) => setCnNo(e.target.value)}
                                                placeholder="Enter CN NO"
                                                className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-gray-500"
                                                style={{ width: 280 }}
                                            />
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="flex items-center gap-1.5 px-4 py-1.5 text-sm text-white rounded transition-colors disabled:opacity-60"
                                                style={{ background: "#111111" }}
                                            >
                                                {loading && <RotateCw className="h-3 w-3 animate-spin" />}
                                                Proceed
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* CORS / error notice */}
                                {corsBlocked && (
                                    <div className="px-4 py-3 bg-amber-50 border-b border-amber-200 flex flex-wrap items-center gap-3 text-sm text-amber-800">
                                        <span>
                                            Browser security blocked the direct request. Click below to open the
                                            tracking result in a new tab.
                                        </span>
                                        <button
                                            onClick={() => openExternal(cnNo)}
                                            className="flex items-center gap-1.5 px-3 py-1 rounded text-white text-xs"
                                            style={{ background: "#111" }}
                                        >
                                            <ExternalLink className="h-3 w-3" />
                                            Open Tracking Page
                                        </button>
                                    </div>
                                )}
                                {fetchError && (
                                    <div className="px-4 py-3 bg-red-50 border-b border-red-200 text-sm text-red-700">
                                        Failed to fetch tracking data. Please try again.
                                    </div>
                                )}

                                {/* CN details two-column grid */}
                                {cnData && (
                                    <div className="flex flex-col sm:flex-row border-b border-gray-200">
                                        <div className="flex-1 border-r border-gray-200">
                                            <LabelValue label="Branch" value={cnData.branch} />
                                            <LabelValue label="CN NO" value={cnData.cnNo} />
                                            <LabelValue label="Pkgs" value={cnData.pkgs} />
                                            <LabelValue label="Actual Wt." value={cnData.actualWt} />
                                            <LabelValue label="Inc. No" value={cnData.incNo} />
                                            <LabelValue label="Eway bill No." value={cnData.ewayBillNo} />
                                            <LabelValue label="Pay Type" value={cnData.payType} />
                                            <LabelValue label="Cn Remark" value={cnData.cnRemark} />
                                        </div>
                                        <div className="flex-1">
                                            <LabelValue label="Date" value={cnData.date} />
                                            <LabelValue label="Origin" value={cnData.origin} />
                                            <LabelValue label="Destination" value={cnData.destination} />
                                            <LabelValue label="Units" value={cnData.units} />
                                            <LabelValue label="Charge Wt." value={cnData.chargeWt} />
                                            <LabelValue label="PO./ Shpmt No." value={cnData.poNo} />
                                            <LabelValue label="Exc. Inc. No." value={cnData.excIncNo} />
                                        </div>
                                    </div>
                                )}

                                {/* MOVEMENT DETAILS */}
                                <SectionHeader icon={Package} title="MOVEMENT DETAILS" />
                                {movementHtml ? (
                                    <div
                                        className="tracking-html-section overflow-x-auto p-2"
                                        dangerouslySetInnerHTML={{ __html: movementHtml }}
                                    />
                                ) : (
                                    <div className="min-h-[48px]" />
                                )}

                                {/* FREIGHT TIGER */}
                                <SectionHeader icon={Truck} title="Freight Tiger MOVEMENT DETAILS" />
                                <div className="min-h-[48px]" />

                                {/* GPS MOVEMENT DETAILS */}
                                <SectionHeader icon={MapPin} title="GPS MOVEMENT DETAILS" />
                                {gpsHtml ? (
                                    <div
                                        className="tracking-html-section overflow-x-auto p-2"
                                        dangerouslySetInnerHTML={{ __html: gpsHtml }}
                                    />
                                ) : (
                                    <div className="min-h-[48px]" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageShell>
    );
}
