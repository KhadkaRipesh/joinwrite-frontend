import { RouterProvider } from 'react-router-dom';
import { mainRoutes } from '../routes/main.route';

const routes = mainRoutes;

export function App() {
  return <RouterProvider router={routes} />;
}

export default App;
