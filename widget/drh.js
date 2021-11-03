const styled = window.styled
const { createElement: e } = React
const { render } = ReactDOM

const BookStyle = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  display: block;
  text-decoration: none;
  font-size: 14px;
  font-style: italic;
  color: gray;
  transition: color 1s;
  &:hover { color: #482e19; }
`

window.Book = () => {
  return e(BookStyle, {
    href: "https://www.oreilly.com/",
    title: "Visit book site"
  }, "Designing React Hook The Right Way")
}