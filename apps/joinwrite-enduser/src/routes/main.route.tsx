import { createBrowserRouter, Navigate } from 'react-router-dom';
import FullLayout from '../layouts/FullLayout';
import { fullLayoutRoutes } from '.';

const RouteWrapperComponent = (component: any) => {
  const ComponentWrapper = component;
  return <ComponentWrapper />;
};

export const mainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="notes" replace />,
  },
  {
    element: <FullLayout />,
    children: fullLayoutRoutes?.map((item) => ({
      path: item?.path,
      lazy: async () => {
        console.log('Loading:', item.path);
        const ImportComponent = await item.component();
        return {
          Component: () => RouteWrapperComponent(ImportComponent),
        };
      },
      ...(item?.children && {
        children: item.children?.map((child: any) => {
          return {
            path: child?.path,
            lazy: async () => {
              console.log('Loading:', child.path);
              const ImportComponent = await child.component();
              return {
                Component: ImportComponent,
              };
            },
          };
        }),
      }),
    })),
  },
]);
