import React ,{useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")

    const handleSubmit = e=> {
      e.preventDefault();

      addTodo(value)

      setValue("")
    }

    return (
      <form className='ToDoForm' onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        {/* Stil eklemesi: width, marginBottom, height */}
        <input type='text' className='todoinput' style={{ width: '300px', marginBottom: '10px', height: '35px' }} value={value} placeholder='Bugünkü hedeflerin neler?' onChange={(e) => setValue(e.target.value)} />
        <br /> {/* Yatay boşluk eklemek için bir satır ekleyebilirsiniz */}
        <button type='onayla' className='todo-btn' style={{ marginBottom: '10px' }}>Görev Ekle</button>
      </form>
    );
    
}
export default TodoForm;
