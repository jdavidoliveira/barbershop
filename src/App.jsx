import React from 'react';
import logo from './assets/barbearia-logo.png'
import moon from './assets/moon.png'
import sun from './assets/sun.png'

import './App.css'
import { useState } from 'react';

export default function App() {

  const [theme, setTheme] = useState("light-mode")

  function changeTheme() {
    setTheme(theme === "light-mode" ? "dark-mode" : "light-mode")
  }

  return (
    <>
      <header className={theme}>
        <div className='header-content'>
          <img src={logo} alt="Logo da barbearia" />
          {theme !== "light-mode" ? (<button className={theme} onClick={changeTheme}>
            <img src={sun} alt="Alterar tema" />
            Light
          </button>) : (<button className={theme} onClick={changeTheme}>
            <img src={moon} alt="Alterar tema" />
            Dark
          </button>)}
          
        </div>
      </header>
      <main className={theme}>
        <section className='banner'>
        </section>
        <section className='texto'>
          <h1>Bem-vindo a Barber Shop</h1>
          <p>
            Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
          </p>
          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
          </p>
          <p>S. Kelly</p>
        </section>
      </main>
    </>
  );
}