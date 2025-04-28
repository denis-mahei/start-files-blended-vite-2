import { useRef } from 'react';
import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

const EditForm = ({ defaultValue, updateTodo, cancelUpdate, findTodo }) => {
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    const inputValue = inputRef.current.value;

    if (findTodo(inputValue)) {
      alert('This todo is already exists!');
    } else {
      updateTodo(inputValue);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue}
        ref={inputRef}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
