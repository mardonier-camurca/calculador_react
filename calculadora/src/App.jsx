import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(true); // Tema escuro como padrão

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Erro');
      }
    } else {
      setInput(input + value);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="calculator">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️ Claro' : '🌙 Escuro'}
        </button>
        <div className="display">{input || '0'}</div>
        <div className="buttons">
          {buttons.map((btn, i) => (
            <button key={i} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
