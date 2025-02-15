import { ReactElement, ReactNode } from 'react';

export interface ChildrenRouteElement {
  path: string;
  component: () => Promise<(props: any) => ReactElement | ReactNode | null>;
  children?: Partial<ChildrenRouteElement>[];
}
const notesRoutes: ChildrenRouteElement[] = [
  {
    path: '/notes',
    component: async () => {
      const { NotesHomePage } = await import('../../pages/NotesHomePage');
      return NotesHomePage;
    },

    // this nested children is for child tab
    // children: [
    //   {
    //     path: ':noteId',
    //     component: async () => {
    //       const { IndividualNotePage } = await import(
    //         '../../pages/NotesIndividualPage'
    //       );
    //       return IndividualNotePage;
    //     },
    //   },
    // ],
  },
  {
    path: '/notes/:noteId',
    component: async () => {
      const { IndividualNotePage } = await import(
        '../../pages/NotesIndividualPage'
      );
      return IndividualNotePage;
    },
  },
];
export default notesRoutes;
