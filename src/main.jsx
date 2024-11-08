import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts, {loader as postsLoader} from './routes/Posts';
import NewPost, {action as newPostAction} from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import './index.css';
import PostDetails, {loader as PostDetailsLoader} from './components/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [{ path: '/neu', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: PostDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);