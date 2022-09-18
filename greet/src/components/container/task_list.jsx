import React, { useState } from 'react';
import { Task } from '../../models/task_class';
import TaskItem from '../pure/task';
import { LEVELS } from '../../models/levels_num';
import { useEffect } from 'react';
import TaskForm from '../pure/forms/taskForm';

const TaskList = () => {
    const defaultTask1 = new Task('Example1', 'default description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'default description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'default description3', true, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('Task State has been modified')
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        
        return () => {
            console.log('Task list is going to unmount')
        }
    }, [tasks])


    function completeTask(task){
        console.log('complete this task:', task);
        const index = tasks.indexOf(task)
        let newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed
        setTasks(newTasks)
    }

    function deleteTask (task){
        console.log('delete this task:', task);
        const index = tasks.indexOf(task)
        let newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks)
    }

    function addTask(task){
        console.log('add this task:', task);
        const index = tasks.indexOf(task)
        let newTasks = [...tasks];
        newTasks.push(task);
        setTasks(newTasks)
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TO-DO apply a forEach/mapping to renderize each TaskItem compoenent */}
                    {tasks.map( (task, index) => {
                        return (<TaskItem key={index} task={task} complete={completeTask} remove={deleteTask} />)
                    })}
                </tbody>
            </table>
        )
    } 
    let taskTable;

    if(tasks.length > 0){
        taskTable = <Table/>
    } else{
        taskTable = (
            <div>
                <h3>Please introduce new tasks</h3>
                <h4>no elements available</h4>
            </div>
            ) 
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header */}
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar = 'true' style={{position:'relative', height: '400px'}}>
                        {loading ? (<p>Loading Tasklist</p>) : taskTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}/>
        </div>
    )
}

export default TaskList