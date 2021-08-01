import React from 'react';
import { Message } from './components/Message.js';
import './assets/style.sass'

export function App() {
  const [state,] = React.useState({msg: 'Привет мир!'});
  return (
    <div className="App">
      <header className="App-header">
        <Message msg={state.msg} />
      </header>
    </div>
  );
}
