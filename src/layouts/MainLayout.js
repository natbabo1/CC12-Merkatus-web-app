import { Outlet } from 'react-router-dom';
import Container from './container/Container';
import Navbar from './header/Navbar';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default MainLayout;
