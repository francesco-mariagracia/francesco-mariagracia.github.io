import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./app/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        // Palette du mariage
        butter: '#F8E5A0', // Butter Bloom
        batter: '#E3CA9C', // Golden Batter
        caramel: '#C7A37A', // Toasted Caramel
        ivory: '#F9F6EE', // Ivory Whip
        sage: '#CBC9B0', // Garden Sage
        // Teintes de texte (dérivées de la palette, pour le contraste)
        cocoa: '#5C4A30',
        'cocoa-light': '#7A6548',
        olive: '#5F5E45',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
}
