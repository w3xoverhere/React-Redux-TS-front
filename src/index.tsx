import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import './index.css';
import Root from "./routes/Root/Root";
import CatalogPage from "./routes/CatalogPage/CatalogPage";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import './static/fonts.css';
import './static/logo.png';
import './static/day.svg';
import './static/night.png'
import MainPage from "./routes/MainPage/MainPage";
import AboutPage from "./routes/AboutPage/AboutPage";
import ContactsPage from "./routes/ContactsPage/ContactsPage";
import SupportPage from "./routes/SupportPage/SupportPage";
import {Provider} from "react-redux";
import {store} from "./store/store";


const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
            <Route path='/' element={<MainPage/>} />
            <Route path='/catalog' element={<CatalogPage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/contacts' element={<ContactsPage/>} />
            <Route path='/support' element={<SupportPage/>} />
        </Route>
    )
);

ReactDOM.createRoot(
    document.getElementById("root")!).render(<Provider store={store}><RouterProvider router={router}/></Provider>);

