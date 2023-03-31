import React, { Suspense, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Button from "../../components/Button";
import i18n from  'i18next';
const CharacterGrid = React.lazy(() => import('listCharacters/CharacterGrid'));


const Home = () => {
  const [show, setShow] = useState(false)
  const [locale,setLocale] =  useState('')
  const [movieName, setMovieName] = useState('')
  const { t } = useTranslation()

  useEffect(() => {
    i18n.on('languageChanged', () => {
      setLocale(i18n.language)
    })  
  }, [])
  
  const selectMovieName = (name) =>{
    setShow(true)
    setMovieName(name)
  }

  return (
    <Suspense fallback="...is Loading">
      <div className="main">
        <h1>{t('Welcome.title')}</h1>
        <Button onClick={()=>selectMovieName('harryPotter')}>Harry Potter</Button>
        <Button onClick={()=>selectMovieName('rickMorty')}>Rick & Morty</Button>
        {show ? <CharacterGrid name={movieName} locale={locale} /> : <p>{t('Welcome.errorDisplay')}</p>}
      </div>
    </Suspense>
  )
};

export default Home