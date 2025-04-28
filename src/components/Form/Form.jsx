import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import style from './Form.module.css';
import { nanoid } from 'nanoid';

const Form = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.elements.text.value;

    if (form.trim() !== '') {
      onAdd({
        id: nanoid(),
        text: form,
      });
      e.target.reset();
    }
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        value={inputValue}
        onChange={handleChange}
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
