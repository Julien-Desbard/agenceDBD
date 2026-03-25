/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Headers de sécurité ─────────────────────────────────────────────────────
  // Appliqués à toutes les routes. Protègent contre le clickjacking, le MIME
  // sniffing et le XSS réfléchi. CSP non inclus : requiert une analyse des
  // ressources inline (framer-motion, Vercel Analytics) — à ajouter ultérieurement.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Bloque l'affichage du site dans une iframe (anti-clickjacking)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Empêche le navigateur de détecter automatiquement le type MIME
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Envoie l'URL complète en referrer uniquement pour les requêtes same-origin
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Désactive l'accès aux capteurs non utilisés sur ce site
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Active le filtre XSS des navigateurs legacy (IE/Edge ancien)
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
