import styled from 'styled-components'

const DefaultDiv = styled.div`
  margin-top: 10%;
  padding: 40px;
  max-width: 400px;
`

const background = props => props.theme.mode === 'dark' ? 'black' : 'white'
const foreground = props => props.theme.mode === 'dark' ? 'white' : 'black'

export { DefaultDiv, background, foreground }