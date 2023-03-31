import './styles/app.css'
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from  'i18next';
import Header from './components/Header'
import Button from "./components/Button";
import Footer from "./components/Footer";


const Home = React.lazy(() => import('./pages/Home/Home'));

const App = () => {
  const setLanguage = (value) =>  i18n.changeLanguage(value)
   
  return (
    <>
    <Header>
      <Button  onClick={()=>setLanguage('en')}>Ingles</Button>
      <Button  onClick={()=>setLanguage('es')}>Español</Button>
    </Header>
    <Suspense fallback="...Loading">
      <Home/>
    </Suspense>
    <Footer/>
    </>
  )
};

ReactDOM.render( <App />, document.getElementById("app"));