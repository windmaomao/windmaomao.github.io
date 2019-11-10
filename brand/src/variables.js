const font = "'Roboto Slab', serif"
const font2 = "'Roboto', sans-serif"

const variables = {
  unit: 'px',
  fontFamily: {
    default: font,
    bold: font,
    light: font,
    italic: font,
    lightItalic: 'CS-Light-Italic, sans-serif',
    headline: font2,
    defaultMono: 'CST-Regular, monospace',
    boldMono: 'CST-Bold, monospace',
    lightMono: 'CST-Light, monospace',
  },
  color: {
    black: 'black',
    gray3: '#dadada',
    gray4: '#a8a8a7',
    gray5: '#7c7c7b',
    gray6: '#575756',
    white: 'white'
  },
  title: {
    fontSize: {
      h1: '45px',
      h2: '30px',
      h3: '25px',
      h4: '25px',
      h5: '20px'
    },
    background: '#f1f2f2'
  }
}

export default variables

const isDark = theme => theme.mode === 'dark'

const background = props =>
  props.theme.mode === 'dark' ? variables.color.black : variables.color.white

const foreground = props =>
  props.theme.mode === 'dark' ? variables.color.white : variables.color.black

const unit = props => props.theme.unit || variables.unit

export {
  isDark, background, foreground, unit
}
