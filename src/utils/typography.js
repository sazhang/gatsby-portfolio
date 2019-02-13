import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Lora',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
    {
      name: 'Montserrat',
      styles: [
        '200',
        '200i',
        '300',
        '300i',
        '400',
        '400i',
        '500',
        '500i',
        '600',
        '600i',
        '700',
        '700i',
        '800',
        '800i',
        '900',
        '900i',
      ],
    },
  ],
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Lora', 'serif'],
})

export default typography