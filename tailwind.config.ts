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
        // Bruns foncés dérivés de la palette, pour le texte (contraste suffisant)
        espresso: '#3F3322', // version moderne
        bark: '#43341F', // version carnet
        umber: '#7A5C38',
        stitch: '#A9865C', // pointillés du carnet
      },
      fontFamily: {
        // Version moderne
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        dmsans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Version carnet de voyage
        lora: ['Lora', 'Georgia', 'serif'],
        work: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
}
