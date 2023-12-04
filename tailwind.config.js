/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const theme = {
  extend: {
    colors: {
      bgrbtsignin: '#FF2C78',
      llogo1: '#FF2C78',
      llogo2: '#DCA4FF',
      banner1: '#020510',
      banner2: '#1a1933'
    },
    height: {
      h: '92%'
    },
    fontSize: {
      home: '5rem',
      text: '22px',
      textt: '40px',
      banner: '64px'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    borderColor: {
      1: '1px solid white'
    },
    dropShadow: {
      xl: '0px 0px 5px linear-gradient( to right, #ffffff , #fffacc)'
    },
    backgroundImage: {
      hero: "url('../../assets/img/behance/banner.png')"
    }
  }
}
export const plugins = []
