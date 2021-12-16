import React, { useEffect, useState, createContext } from 'react';

import axios from 'axios';
import Settings from './components/Settings';
import Links from './components/Links';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import cv from './mocks/response';

// commented out msw for build demo purposes
// if (process.env.NODE_ENV === 'development') { 
// require('./mocks/browser');
// }

// const fetchCV = () => axios.get('http://localhost:8080/api/cv')
//   .then(({ data }) => {
//     return data;
//   })
//   .catch((err) => {
//     console.log(err);
//     throw Error('Error fetching CV: ', err);
//   })

const fetchCV = async () => {
  return await cv
}

export const ThemeContext = createContext();

const App = () => {
  const [cv, setCV] = useState({ name: '', about: '', experience: '', contact: '', portfolio: '', skills: '' });
  const [status, setStatus] = useState('loading');
  const { name, about, experience, contact, portfolio, skills, education, other } = cv;
  const [darkMode, setDarkMode] = useState(false);

  const darkModeTheme = {
    darkMode,
    setDarkMode,
  };


  useEffect(() => {
    fetchCV()
      .then(cv => {
        console.log(cv)
        setCV(cv);
        setStatus('success');
      })
      .catch(() => setStatus("error"))
  }, [])

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <h2>Error fetching data</h2>;
  return (
    <ThemeContext.Provider value={darkModeTheme}>
      <div>
        <Settings />
        <main className={'cv ' + (darkMode ? 'cv--dark' : 'cv--light')}>
          <h1 className='name'>{name}</h1>
          <p className='about'>{about}</p>
          <Links contact={contact} portfolio={portfolio} />
          <Skills skills={skills} />
          <Experience experience={experience} />
          <Education education={education} />
          <div className='other'>
            <h3 className='other__title'><i>{other.title}</i></h3>
            <p className='other__description'>{other.description}</p>
          </div>
        </main >
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
