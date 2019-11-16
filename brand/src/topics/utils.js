import styled from 'styled-components'

const DefaultDiv = styled.div`
  margin-top: 10%;
  padding: 40px;
  max-width: 400px;
`

const FullPage = ({ story: { title, text, next, onNextClick } }) => (
  <DefaultDiv>
    <img alt="" src={'./logo.png'} width={'48px'} />
    <br />
    {title}
    {text}
    <p>
      <button onClick={onNextClick}>
        {next || 'Continue'} &nbsp;
      </button>
    </p>
  </DefaultDiv>
)

const background = props => props.theme.mode === 'dark' ? 'black' : 'white'
const foreground = props => props.theme.mode === 'dark' ? 'white' : 'black'

export { 
  DefaultDiv, FullPage, 
  background, foreground 
}