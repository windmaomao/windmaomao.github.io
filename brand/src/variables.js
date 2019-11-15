const font = "Palatino, Times, serif"
const font2 = "Palatino, Times, serif"

const variables = {
  unit: 'px',
  fontFamily: {
    default: font,
    bold: font2,
    light: font2,
    italic: font,
    lightItalic: 'CS-Light-Italic, sans-serif',
    headline: font,
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
    gray7: '#333',
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
  props.theme.mode === 'dark' ? variables.color.gray7 : variables.color.white

const foreground = props =>
  props.theme.mode === 'dark' ? variables.color.white : variables.color.gray7

const unit = props => props.theme.unit || variables.unit

export {
  isDark, background, foreground, unit
}
