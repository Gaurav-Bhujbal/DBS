const TARGET = "http://117.248.110.22/DBSEXP/CSM/TRACKLR.ASPX";

function getRawBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on("data", (c) => chunks.push(c));
        req.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
        req.on("error", reject);
    });
}

export default async function handler(req, res) {
    try {
        const headers = {
            "User-Agent": "Mozilla/5.0",
            "Accept": "text/html,application/xhtml+xml,*/*",
        };

        if (req.headers["content-type"]) {
            headers["Content-Type"] = req.headers["content-type"];
        }
        // Forward the session cookie so ASP.NET ViewState validation passes
        if (req.headers["cookie"]) {
            headers["Cookie"] = req.headers["cookie"];
        }

        const body = req.method === "POST" ? await getRawBody(req) : undefined;

        const upstream = await fetch(TARGET, {
            method: req.method,
            headers,
            body,
            redirect: "follow",
        });

        const html = await upstream.text();

        res.setHeader("Content-Type", "text/html; charset=utf-8");

        // Forward Set-Cookie but strip Domain so it binds to the Vercel host
        const setCookie = upstream.headers.get("set-cookie");
        if (setCookie) {
            const clean = setCookie
                .replace(/;\s*domain=[^;,]+/gi, "")
                .replace(/;\s*secure/gi, "");
            res.setHeader("Set-Cookie", clean);
        }

        res.status(upstream.status).send(html);
    } catch (err) {
        res.status(502).json({ error: "Proxy error", detail: err.message });
    }
}
