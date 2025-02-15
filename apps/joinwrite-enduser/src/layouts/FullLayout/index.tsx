import { Container } from 'react-bootstrap';
import NotesSideBar from '../../components/Sidebar';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export interface LayoutProps {
  children?: ReactNode;
}

const FullLayout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <NotesSideBar />
      {children ?? <Outlet />}
    </Container>
  );
};

export default FullLayout;
