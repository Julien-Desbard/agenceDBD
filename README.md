# Agence DBD — Site vitrine

Site vitrine de **Julien Desbard**, développeur web freelance basé à Pont-de-Beauvoisin (Savoie, 73).

🔗 [agence-dbd.vercel.app](https://agence-dbd.vercel.app)

---

## Stack

- **Next.js 13.4** — App Router, rendu statique
- **Tailwind CSS** — styles utilitaires
- **Framer Motion v10** — animations
- **pnpm** — gestionnaire de paquets

## Lancer le projet en local

```bash
pnpm install
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
pnpm build
```

## Structure

```text
src/
├── app/
│   ├── layout.jsx          # Metadata globale, schema.org JSON-LD
│   ├── page.jsx            # Accueil (hero, stats, témoignage, services, contact)
│   ├── about/              # À propos
│   ├── work/               # Réalisations
│   ├── process/            # Notre process
│   ├── sitemap.js          # /sitemap.xml
│   └── robots.js           # /robots.txt
└── components/             # Composants réutilisables
```

## Déploiement

Le site est déployé sur **Vercel** à partir de la branche `main`.

> Ne pas déclencher de déploiement manuel sans nécessité — Vercel déploie automatiquement à chaque merge sur `main`.
