import React from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'

class Header extends React.Component {
  render() {
    return (
      <Menu inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            Project Name
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Header;