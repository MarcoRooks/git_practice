import React from 'react'
import Proptypes from 'prop-types'
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels_num';
import { Task } from '../../../models/task_class';

export default function TaskForm({add, length}) {
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

 /* const normalStyle = {
    color: 'blue',
    fontWeight: 'bold',
  }

  const urgentStyle = {
    color: 'yellow',
    fontWeight: 'bold',
  }

  const blockingStyle = {
    colro: 'red',
    fontWeight: 'bold',
  }*/



  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
          <input placeholder='Task Name' type="text" ref={nameRef} id='inputName' className='form-control form-control-lg' required autoFocus/>
          <input placeholder='Task Description' type="text" ref={descriptionRef} id='inputDescription' className='form-control form-control-lg' required/>
          <select classname='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel" >
            <option value={LEVELS.NORMAL}>Normal</option>
            <option value={LEVELS.URGENT}>Urgent</option>
            <option value={LEVELS.BLOCKING}> Blocking</option>
          </select>
          <button type='submit' className='btn btn-success btn-lg ms-2'>
            {length > 0 ? 'Add task' : 'Create task'}
          </button>
        </div>
        
    </form>
  )
}

TaskForm.prototype = {
  add: Proptypes.func.isRequired,
  length: Proptypes.func.isRequired
}
