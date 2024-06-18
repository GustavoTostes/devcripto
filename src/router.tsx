import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Detalhes from './pages/detalhes';
import NotFound from './pages/not_found';

import Layout from './components/layout';

const router = createBrowserRouter([

    {

        element: <Layout/>,
        children: [

            {

                path: '/',
                element: <Home/>

            },

            {

                path: '/detalhes/:id',
                element: <Detalhes/>

            },

            {

                path: '*',
                element: <NotFound/>

            }

        ]

    }

])

export default router