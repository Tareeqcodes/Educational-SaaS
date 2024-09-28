import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import PdfPage from './pages/PdfPage';
import Rental from  './pages/Rental'
import MarketPlacePage from './pages/MarketPlacePage';
import NewsPage from './pages/News';
import ProfilePage from './pages/ProfilePage';
import Auth from './pages/Auth';
import NotFoundPage from './components/NotFoundPage';

const searchClient = algoliasearch( 'BPV8JRUQT8', '3143add99d41a51eec3ad74225587acc')

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<MainLayout />}>
       <Route index element={<MainPage />} />
       <Route path='/pdfs' element= {<PdfPage />} />
       <Route path='/Rental' element={< Rental />} />
       <Route path='/marketplace' element= {<MarketPlacePage />} />
       <Route path='/news' element= {<NewsPage />} />
       <Route path='/profilepage' element= {<ProfilePage />} />
       <Route path='/Auth' element= {< Auth />} />
       <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <SearchBox />
    </InstantSearch>
    </>
  
  )
}

export default App;
