import { useState } from 'react';

export function InputText({styles, onMessageChange}) {

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onMessageChange({author, text});
        setAuthor('');
        setText('');
    };
    return ( 
      <form className={styles.form} onSubmit={handleSubmit}>
        <label> Автор:
            <input type="text" placeholder="" value={author} onChange={(e) => setAuthor(e.target.value)} name="author"></input>
        </label>
        <input type="text" placeholder="Сообщение..." value={text} onChange={(e) => setText(e.target.value)} name="text"></input>        
        <input type="submit" value="Отправить" />
      </form>
    );
  }