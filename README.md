# Mehanoid Space (mehanoid.space)

> Systems Engineering, Distributed Infrastructure & Protocol Research Lab.

Official personal portfolio, technical notes, and front-facing web facade for [`mehanoid.space`](https://mehanoid.space).

## Architecture & Features

- **Ultra-lightweight & zero-dependency:** Pure semantic HTML5, modern CSS with responsive tokens, and vanilla ES6 JavaScript.
- **Theme support:** Dark & Light mode toggle with automatic OS preference detection (`prefers-color-scheme`).
- **SEO & Search Standards:** Includes `robots.txt`, `sitemap.xml`, OpenGraph metadata, and structured article previews.
- **DPI / Active Probing Camouflage:** Designed to act as an authentic, high-reputation web facade on port 443 while isolating encrypted transport streams to dedicated subpaths.

## Project Structure

```text
mehanoid-space/
├── index.html                  # Main portfolio & technical focus page
├── articles/                   # Technical field notes and research articles
│   └── packet-resilience-in-unreliable-networks.html
├── assets/
│   ├── favicon.svg             # Vector tech logo
│   ├── style.css               # Fluid typography and responsive layout
│   └── main.js                 # Theme switching & client interactions
├── nginx.conf                  # Production reverse-proxy & static hosting config
├── robots.txt                  # Search engine crawl rules
└── sitemap.xml                 # Canonical XML sitemap
```

## Local Development & Preview

Run any lightweight HTTP server in the repository directory:

```bash
# Python 3
python3 -m http.server 8080

# Or with Node.js
npx serve .
```

Then navigate to `http://localhost:8080`.

## Deployment

### Option 1: Direct Nginx Hosting
Copy files to `/var/www/mehanoid-space` on the server and use the provided `nginx.conf`:

```bash
sudo mkdir -p /var/www/mehanoid-space
sudo cp -r * /var/www/mehanoid-space/
sudo cp nginx.conf /etc/nginx/sites-available/mehanoid.space
sudo ln -s /etc/nginx/sites-available/mehanoid.space /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### Option 2: Docker / Container
```bash
docker run -d --name mehanoid-web \
  -p 8080:80 \
  -v $(pwd):/usr/share/nginx/html:ro \
  nginx:alpine
```

## License

MIT &copy; 2026 Konstantin (Mehanoid)
