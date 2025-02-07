import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Finance from './Components/Finance';
import UrifyPremium from './Components/UrifyPremium';
import Advantages from './Components/Advantages';
import Testimonial from './Components/Testimonial';
import FAQ from './Components/FAQ';
import AppDownload from './Components/AppDownload';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Finance />
    <UrifyPremium />
    <Advantages />
    <Testimonial />
    <FAQ />
    <AppDownload />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
