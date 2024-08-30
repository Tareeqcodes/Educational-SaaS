import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import Rental from  './pages/Rental'
import MarketPlacePage from './pages/MarketPlacePage';
import NewsPage from './pages/News';
import SellCoursesPage from './pages/SellCoursesPage';
import PdfPage from './pages/PdfPage';


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
  return <RouterProvider router={router} />;
}

export default App;
