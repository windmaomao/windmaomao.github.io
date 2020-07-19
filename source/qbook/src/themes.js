const fontFamily = "Average, serif, '宋体'"
const colors = {
  black: 'black',
  gray1: '#f1f2f2',
  gray2: '#e6e7e8',
  gray3: '#dadada',
  gray4: '#a8a8a7',
  gray5: '#7c7c7b',
  gray6: '#575756',
  white: 'white',
}

const isDark = mode => (mode === 'dark')

const theme = mode => {
  const dark = isDark(mode)
  return {
    mode, fontFamily,
    foregroundColor: !dark ? colors.black : colors.white,
    backgroundColor: !dark ? colors.white : colors.black,
    disabledColor: !dark ? colors.gray3 : colors.gray6
  }
}

const themes = ['light', 'dark'].map(mode => ({
  title: mode, theme: theme(mode)
}))
export default themes
