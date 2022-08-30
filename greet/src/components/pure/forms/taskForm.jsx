import React from 'react'
import Proptypes from 'prop-types'
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels_num';
import { Task } from '../../../models/task_class';

export default function TaskForm({add}) {
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e){
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask)
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
          <input placeholder='Task Name' type="text" ref={nameRef} id='inputName' className='form-control form-control-lg' required autoFocus/>
          <input placeholder='Task Description' type="text" ref={descriptionRef} id='inputDescription' className='form-control form-control-lg' required/>
          <label htmlFor="selectLevel" className='sr-only'>Priority</label>
          <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
            <option value={LEVELS.NORMAL}>Normal</option>
            <option value={LEVELS.URGENT}>Urgent</option>
            <option value={LEVELS.BLOCKING}> Blocking</option>
          </select>
        </div>
        <button type='submit' className='btn btn-success btn-lg ms-3'>add task</button>
    </form>
  )
}

TaskForm.prototype = {
  add: Proptypes.func.isRequired
}
