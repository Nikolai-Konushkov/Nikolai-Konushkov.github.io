import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Привет!
        </p>
        <p>
          Меня зовут Николай, я разработчик интерфейсов в компании СберКорус.
        </p>
        <p>
          Пишу на TypeScript, пользуюсь React.
        </p>
        <p>
          Знаком с JS, поверхностным Angular. Есть опыт настройки webpack и работы с sass.
        </p>
        <p>Хочу углубить познания в ReactJS для написания более осмысленного и функционального кода</p>
      </header>
    </div>
  );
}

export default App;
