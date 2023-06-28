import React, { useEffect } from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

import English from './languages/English.json';
import French from './languages/French.json';



i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: English
      },
      fr: {
        translation: French
      },
    },
    lang: "en", // remove this during use of languge detector
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

const App = () => {

  const { t } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang); //use to set diffrent language

    //localstorage set key and selected language value in storage
    localStorage.setItem('language', lang)
  }

  useEffect(() => {
    const currentLang = localStorage.getItem('language') // get value of stored language
    i18n.changeLanguage(currentLang); // set language value
  }, [])


  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center px-4 bg-sky-500'>
      <div className='h-[60%] w-[70%] flex flex-col justify-center items-center bg-gray-200'>
        <p className='text-center text-3xl font-bold'>{t('intro')}</p>
        <div className='flex gap-8 mt-4'>
          <button onClick={() => changeLang('en')} className='px-4 py-2 bg-green-500' >english</button>
          <button onClick={() => changeLang('fr')} className='px-4 py-2 bg-green-500' >french</button>
          <button onClick={() => localStorage.clear()} className='px-4 py-2 bg-green-500' >reset</button>
        </div>
      </div>
    </div>
  )
}

export default App;