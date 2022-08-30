import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task_class'
import { useEffect } from 'react'
import { LEVELS } from '../../models/levels_num'

const TaskItem = ({ task, complete, remove }) => {

  useEffect(()=>{
    console.log('Created Task')
    return () => {
      console.log(`Task: ${task.nombre} is going to unmount`)
    }
  },[task])

  function taskUrgency(){
    switch(task.level){
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
              <span className='badge bg-primary'>
                  {task.level}
              </span>
          </h6>
          )
      case LEVELS.URGENT:
        return(
          <h6 className='mb-0'>
              <span className='badge bg-warning'>
                  {task.level}
              </span>
          </h6>
          )
      case LEVELS.BLOCKING:
        return(
          <h6 className='mb-0'>
              <span className='badge bg-danger'>
                  {task.level}
              </span>
          </h6>
          )
      default:
        break;
    }
  }

  function completedTask(){
    if(task.completed){
      return (<i className='bi-toggle-on'  onClick={() => complete(task)}  style ={{color: 'green', fontWeight: 'bold'}}>completed</i>)
    } else {
      return (<i className='bi-toggle-off'  onClick={() => complete(task)} style ={{color: 'grey', fontWeight: 'bold'}}>pending</i>)
    }
  }

  return (
    <tr>
      <th>
        <span className='ms-2'>
          {task.name}
        </span>
      </th>
      <td>
        <span className='align-middle'>{task.description}</span>
      </td>
      <td>
        {/* sustitir con un badge */}
        <span className='align-middle'>{taskUrgency()}</span>
      </td>
      <td className='align-middle'>
        {completedTask()}
        <i className='bi-trash' onClick={()=> remove(task)} style={{color:'tomato'}}></i>
      </td>
    </tr>
  )
}

TaskItem.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskItem