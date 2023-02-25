const styled = window.styled;
const QPLOT = 'https://qplot.com/logo.png';
const USER = 'https://gravatar.com/avatar/7aa1ac62349de7aebf7d43020c799dfe';

const LogoStyle = styled.img`
  width: 36px;
  height: 36px;
`;
const Logo = () => <LogoStyle src={QPLOT} />;
const AvatarStyle = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;
const Avatar = () => <AvatarStyle src={USER} />;

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
  return (
    <HeaderStyle>
      <NavStyle>
        <Logo />
      </NavStyle>
      <ContentStyle>{children}</ContentStyle>
      <UserStyle>
        <Avatar />
      </UserStyle>
    </HeaderStyle>
  );
};

// const el = document.getElementById('header');
// const children = el.textContent;
// ReactDOM.render(<Header>{children}</Header>, el);

const el = document.createElement('div');
document.body.prepend(el);
const title = document.getElementsByTagName('title')[0]?.innerHTML;
ReactDOM.render(<Header>{title}</Header>, el);
