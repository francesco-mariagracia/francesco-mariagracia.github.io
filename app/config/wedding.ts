/**
 * Toutes les informations pratiques du mariage sont regroupées ici.
 * Modifiez ce fichier pour mettre à jour le site (lieu, horaires, coordonnées bancaires…).
 * Les textes traduits se trouvent dans i18n/locales/*.json.
 */
export interface Gift {
  id: string
  /** Photo dans public/images */
  image: string
  /** Prix indicatif en euros, null = montant libre */
  price: number | null
  /** Lien optionnel vers une boutique */
  url: string
}

export const wedding = {
  // Date et heure de la cérémonie, avec le décalage horaire de Lisbonne (+01:00 en été)
  date: '2027-08-20T15:00:00+01:00',
  // Fin estimée de la fête (pour l'ajout au calendrier)
  end: '2027-08-21T01:00:00+01:00',

  // Lieux — À COMPLÉTER
  ceremony: {
    time: '15:00',
    name: "[Nom de l'église]",
    address: '[Adresse], Lisboa',
    mapUrl: 'https://maps.google.com/?q=Lisboa',
  },
  reception: {
    time: '19:00',
    name: '[Nom du lieu]',
    address: '[Adresse], Lisboa',
    mapUrl: 'https://maps.google.com/?q=Lisboa',
  },

  // Recommandations pour le séjour à Lisbonne — À COMPLÉTER avec vos liens
  stay: {
    restaurants: '#',
    visit: '#',
    beaches: '#',
  },

  // Participation — À COMPLÉTER avec les vraies coordonnées
  bank: {
    holder: 'Francesco & Maria Gracia',
    iban: 'FR76 0000 0000 0000 0000 0000 000',
    bic: 'XXXXXXXXXXX',
  },
  // Laisser une chaîne vide pour masquer le bouton
  paypal: 'https://paypal.me/',

  contactEmail: 'contact@example.com',

  // Liste de cadeaux : les textes sont dans les fichiers de traduction (gifts.items.<id>)
  gifts: [
    { id: 'honeymoon', image: 'vigne', price: null, url: '' },
    { id: 'home', image: 'couple', price: null, url: '' },
    { id: 'table', image: 'table', price: 200, url: '' },
  ] as Gift[],
}
