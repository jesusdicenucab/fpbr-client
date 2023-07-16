import { createBrowserRouter } from 'react-router-dom';
import {IndexPage} from '../pages';

export const routes = createBrowserRouter([
  {
    path: '/:id',
    element: <IndexPage />
  }
]);
