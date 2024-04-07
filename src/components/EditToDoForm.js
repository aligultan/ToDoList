import React ,{useState} from 'react';

const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue] = useState(task.task)

    const handleSubmit = e=> {
      e.preventDefault();

      editTodo(value,task.id)

      setValue("")
    }

  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
      {/* Added style={{ width: '300px' }} to increase the width */}
      <input type='text' className='todoinput' style={{ width: '300px'}} value={value} placeholder='Hedefi güncelle.' onChange={(e)=>setValue(e.target.value)}/>
      <button type='onayla' className='todo-btn'>Görevi Güncelle</button>
    </form>
  );
}

export default EditTodoForm;