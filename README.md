# Mehanoid Space (mehanoid.space)

> Systems Engineering, Linux Internals, Storage & Web Infrastructure Journal.

Official repository for the static publication website [`mehanoid.space`](https://mehanoid.space).

## Overview

Mehanoid Space is an independent engineering journal covering:
- **Linux Systems & Kernels:** Unified cgroups v2 resource controllers, systemd process isolation, and kernel performance metrics.
- **Storage & Disaster Recovery:** Content-defined deduplication, deterministic backup pipelines, and automated restore verification drills.
- **Web Protocols & Delivery:** HTTP/2 stream multiplexing, TLS 1.3 session optimization, Brotli compression, and deterministic caching headers.
- **Operational Server Reliability:** Zero-downtime Nginx reloads, disk space defense via logrotate, and ACME certificate renewal automation.

## Architecture & Features

- **Ultra-lightweight & zero external dependencies:** Pure semantic HTML5, modern CSS with responsive design tokens, and vanilla ES6 JavaScript.
- **Theme support:** Dark & Light mode toggle with automatic OS preference detection (`prefers-color-scheme`).
- **SEO & Standards Compliant:** Semantic metadata, `robots.txt`, and standard canonical XML `sitemap.xml`.
- **Accessible & Responsive:** Fluid typography, accessible touch targets (≥ 44×44px), and cross-device compatibility from mobile to desktop.

## Project Structure

```text
mehanoid-space/
├── index.html                  # Journal homepage & article index
├── about.html                  # Editorial mission and scope
├── 404.html                    # Resource not found error page
├── articles/                   # In-depth technical articles
│   ├── linux-process-isolation-and-cgroups.html
│   ├── backup-verification-and-disaster-recovery.html
│   ├── web-performance-and-http-optimization.html
│   ├── practical-web-server-maintenance.html
│   └── packet-resilience-in-unreliable-networks.html
├── assets/
│   ├── favicon.svg             # Vector tech logo
│   ├── style.css               # Fluid typography and theme design tokens
│   └── main.js                 # Theme switching & client interactions
├── dist/                       # Clean public distribution artifact
├── nginx.conf                  # Production reverse-proxy & static hosting config
├── robots.txt                  # Search engine crawl rules
└── sitemap.xml                 # Canonical XML sitemap
```

## Local Development & Preview

Run any lightweight HTTP server in the repository or `dist/` directory:

```bash
# Python 3
python3 -m http.server 8080

# Or with Node.js
npx serve dist
```

Then navigate to `http://localhost:8080`.

## License

MIT &copy; 2026 Mehanoid Space
