// Header
(function () {
  const styled = window.styled;
  const QPLOT = 'https://qplot.com/logo.png';
  const USER = 'https://gravatar.com/avatar/7aa1ac62349de7aebf7d43020c799dfe';

  const LogoStyle = styled.img`
    width: 36px;
    height: 36px;
  `;
  const Logo = () =>
    /*#__PURE__*/ React.createElement(LogoStyle, { src: QPLOT });
  const AvatarStyle = styled.img`
    border-radius: 50%;
    width: 48px;
    height: 48px;
  `;
  const Avatar = () =>
    /*#__PURE__*/ React.createElement(AvatarStyle, { src: USER });

  const NavStyle = styled.div`
    flex: 0 0 4rem;
  `;
  const ContentStyle = styled.div`
    flex: 1 0;
    font-weight: bold;
  `;
  const UserStyle = styled.div`
  flex: 0 0 4rem;
  padding-right 1rem;
`;

  const HeaderStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #f8f8f8;

    display: flex;
    flex-direction: row;
    justify-content: between-space;
    align-items: center;
  `;

  const Header = ({ children }) => {
    return /*#__PURE__*/ React.createElement(
      HeaderStyle,
      null /*#__PURE__*/,
      React.createElement(
        NavStyle,
        null /*#__PURE__*/,
        React.createElement(Logo, null)
      ) /*#__PURE__*/,

      React.createElement(ContentStyle, null, children) /*#__PURE__*/,
      React.createElement(
        UserStyle,
        null /*#__PURE__*/,
        React.createElement(Avatar, null)
      )
    );
  };

  const el = document.getElementById('header');
  const children = el.textContent;
  ReactDOM.render(
    /*#__PURE__*/ React.createElement(Header, null, children),
    el
  );
})();