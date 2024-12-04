import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import PdfPage from './pages/PdfPage';
import Rental from  './pages/Rental'
import Store from './pages/Store';
 import Profile from './pages/Profile';
 import Auth from './pages/Auth';
import NotFoundPage from './components/NotFoundPage';
import { AuthProvider } from '../app/context/Authcontext';
import PrivateRoute from './components/routes/PrivateRoutes';
import RoomPage from './pages/RoomPage';


const searchClient = algoliasearch( 'BPV8JRUQT8', '3143add99d41a51eec3ad74225587acc')

function App() {
  return (
   
     <BrowserRouter>
   <AuthProvider>
     <Routes>
     <Route path='/' element= {<MainLayout />}>
     <Route path='/Auth' element= {< Auth />} /> 
     <Route path='*' element={<NotFoundPage />} />
     
      <Route element={<PrivateRoute />} >
       <Route index element={<MainPage />} />
       <Route path='/pdfs' element= {<PdfPage />} />
       <Route path='/Rental' element={< Rental />} />
       <Route path='/marketplace' element= {<Store />} />
       <Route path='/profile/*' element= {<Profile />} />
       <Route path='/roomPage/:id' element={<RoomPage />} />
       </Route>
    </Route>
     </Routes>
    <InstantSearch searchClient={searchClient} indexName="instant_search">  
    </InstantSearch>
    </AuthProvider>
     </BrowserRouter>
  )
} 

export default App;
