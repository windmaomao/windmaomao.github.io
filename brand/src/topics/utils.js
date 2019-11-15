const background = props => props.theme.mode === 'dark' ? 'black' : 'white'
const foreground = props => props.theme.mode === 'dark' ? 'white' : 'black'

export { background, foreground }