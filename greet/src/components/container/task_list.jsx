import React from 'react';
import { Task } from '../../models/task_class';
import TaskItem from '../pure/task';
import { LEVELS } from '../../models/levels_num';

const TaskList = () => {

    const defaultTask = new Task('Example', 'default description', false, LEVELS.NORMAL)

    const changeState = (id) =>{
        console.log('to-do: change state of a task')
    }

    return (
        <div>
            <h1>Your Tasks:</h1>
            {/* TO-DO apply a forEach/mapping to renderize each TaskItem compoenent */}
            <div>
                <TaskItem task= {defaultTask}/>
            </div>
        </div>
    )
}

export default TaskList