import { createBrowserRouter } from 'react-router-dom';
import NotesHomePage from '../pages/NotesHomePage/index';

export const mainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <NotesHomePage />,
  },
]);
