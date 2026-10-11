# Francesco & Maria Gracia — 20.08.2027

Site du mariage de Francesco et Maria Gracia : date, lieu, liste de cadeaux et participation.
Disponible en 🇫🇷 français, 🇮🇹 italien, 🇪🇸 espagnol et 🇵🇹 portugais.

Deux versions du site sont en ligne en même temps, le temps de choisir :

| Version | URL |
| --- | --- |
| Page de choix | `/` |
| Moderne (DM Serif Display + DM Sans) | `/moderne` — `app/pages/moderne.vue` |
| Carnet de voyage (Lora + Work Sans) | `/carnet` — `app/pages/carnet.vue` |

Chaque version existe dans les 4 langues : `/it/moderne`, `/es/carnet`, `/pt/moderne`…

Stack : [Nuxt 4](https://nuxt.com), [Tailwind CSS](https://tailwindcss.com), [@nuxtjs/i18n](https://i18n.nuxtjs.org) — généré en statique.

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Date, lieux, horaires, liens Google Maps | `app/config/wedding.ts` |
| Liens des recommandations (restaurants, visites, plages) | `app/config/wedding.ts` → `stay` |
| IBAN / BIC / PayPal / Revolut / e-mail de contact | `app/config/wedding.ts` |
| Liste de cadeaux (photo, prix, lien boutique) | `app/config/wedding.ts` → `gifts` |
| Textes traduits | `i18n/locales/{fr,it,es,pt}.json` |
| Couleurs et polices | `tailwind.config.ts` |
| Photos | `public/images/` (Unsplash, licence gratuite) |

Pour ajouter un cadeau : ajouter une entrée dans `gifts` puis les clés `gifts.items.<id>.title` / `.text` dans les 4 fichiers de langue.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # site statique dans .output/public
npm run typecheck  # vérification TypeScript
```

## Déploiement (GitHub Pages)

Le workflow `.github/workflows/deploy.yml` construit et publie le site à chaque push sur `main`.
Dans **Settings → Pages**, choisir **Source : GitHub Actions**.

## Palette

| Butter Bloom | Golden Batter | Toasted Caramel | Ivory Whip | Garden Sage |
| --- | --- | --- | --- | --- |
| `#F8E5A0` | `#E3CA9C` | `#C7A37A` | `#F9F6EE` | `#CBC9B0` |
