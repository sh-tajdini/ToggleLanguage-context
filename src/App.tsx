import { useState, createContext, useContext } from 'react';

const languages = ['JavaScript', 'Python'];

const LanguageContext = createContext({
  favoriteLanguage: languages[0],
  toggleLanguage: () => {},
});

export  default function App() {
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  return (
    <LanguageContext.Provider value={{ favoriteLanguage, toggleLanguage: () => {
      const currentIndex = languages.indexOf(favoriteLanguage);
      const newIndex = (currentIndex + 1) % languages.length;
      setFavoriteLanguage(languages[newIndex]);
    }}}>
      <MainSection />
    </LanguageContext.Provider>
    //sssj
  );
}

function MainSection() {
  const { favoriteLanguage, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">favorite programming language: {favoriteLanguage}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>
        toggle language
      </button>
    </div>
  )
}


