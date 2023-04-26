import { Outlet } from 'react-router-dom';
import {
  ContainerApp,
  Footer,
  Header,
  NavigationLink,
  Signature,
} from './Layout.styled';

export const Layout = () => {
  return (
    <ContainerApp>
      <Header>
        <nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/tweets">Tweets</NavigationLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer>
        <Signature>Created by Evgen Zaharevich.</Signature>
      </Footer>
    </ContainerApp>
  );
};
