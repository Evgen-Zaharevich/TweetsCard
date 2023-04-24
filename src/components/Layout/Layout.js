import { Outlet } from 'react-router-dom';
import { NavigationLink } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/tweets">Tweets</NavigationLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
