import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import Rental from  './pages/Rental'
import MarketPlacePage from './pages/MarketPlacePage';
import NewsPage from './pages/News';
import SellCoursesPage from './pages/SellCoursesPage';
import PdfPage from './pages/PdfPage';

const searchClient = algoliasearch( 'BPV8JRUQT8', '3143add99d41a51eec3ad74225587acc')

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<MainLayout />}>
       <Route index element={<MainPage />} />
       <Route path='/rental' element= {<Rental />} />
       <Route path='/marketplace' element= {<MarketPlacePage />} />
       <Route path='/news' element= {<NewsPage />} />
       <Route path='/sell-courses' element= {<SellCoursesPage />} />
       <Route path='/pdfs' element= {<PdfPage />} />
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      {/* Widgets */}
    </InstantSearch>
    </>
  
  )
}

export default App;
