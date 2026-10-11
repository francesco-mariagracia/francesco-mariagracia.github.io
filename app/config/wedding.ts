/**
 * Toutes les informations pratiques du mariage sont regroupées ici.
 * Modifiez ce fichier pour mettre à jour le site (lieu, horaires, coordonnées bancaires…).
 * Les textes traduits se trouvent dans i18n/locales/*.json.
 */
export interface Gift {
  id: string
  icon: string
  price: number | null
  url: string
}

export const wedding = {
  // Date et heure de la cérémonie, avec le décalage horaire du lieu (+02:00 = heure d'été Italie/France)
  date: '2027-08-20T15:00:00+02:00',
  // Fin estimée de la fête (pour l'ajout au calendrier)
  end: '2027-08-21T01:00:00+02:00',

  // Lieu — À COMPLÉTER
  ceremony: {
    time: '15:00',
    name: 'Lieu de la cérémonie (à confirmer)',
    address: 'Adresse à confirmer',
    mapUrl: 'https://maps.google.com/?q=Pescara',
  },
  reception: {
    time: '19:00',
    name: 'Lieu de la réception (à confirmer)',
    address: 'Adresse à confirmer',
    mapUrl: 'https://maps.google.com/?q=Pescara',
  },

  // Contribution — À COMPLÉTER avec les vraies coordonnées
  bank: {
    holder: 'Francesco & Maria Gracia',
    iban: 'FR76 0000 0000 0000 0000 0000 000',
    bic: 'XXXXXXXXXXX',
  },
  // Laisser une chaîne vide pour masquer un moyen de paiement
  paypal: 'https://paypal.me/',
  revolut: '',

  contactEmail: 'contact@example.com',

  // Liste de cadeaux : les textes sont dans les fichiers de traduction (gifts.items.<id>)
  // `price` en euros (null = montant libre), `url` optionnel (lien vers une boutique)
  gifts: [
    { id: 'honeymoon', icon: '✈️', price: null, url: '' },
    { id: 'home', icon: '🏡', price: null, url: '' },
    { id: 'kitchen', icon: '🍳', price: 150, url: '' },
    { id: 'linen', icon: '🛏️', price: 120, url: '' },
    { id: 'table', icon: '🍽️', price: 200, url: '' },
    { id: 'pilgrimage', icon: '🕊️', price: null, url: '' },
  ] as Gift[],
}

