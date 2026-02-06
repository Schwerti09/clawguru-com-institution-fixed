import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clawguru.com"
  const now = new Date()
  return [
    { url: base + "/", lastModified: now },
    { url: base + "/copilot", lastModified: now },
    { url: base + "/intel", lastModified: now },
    { url: base + "/academy", lastModified: now },
    { url: base + "/vault", lastModified: now },
    { url: base + "/vault/ws-origin", lastModified: now },
    { url: base + "/vault/secrets", lastModified: now },
    { url: base + "/mission-control", lastModified: now },
    { url: base + "/openclaw-security-2026", lastModified: now },
    { url: base + "/security", lastModified: now },
    { url: base + "/security/notfall-leitfaden", lastModified: now },
    { url: base + "/tools", lastModified: now },
    { url: base + "/einrichtung", lastModified: now },
    { url: base + "/hosting-kosten", lastModified: now },
    { url: base + "/impressum", lastModified: now },
    { url: base + "/datenschutz", lastModified: now },
    { url: base + "/agb", lastModified: now }
  ]
}
