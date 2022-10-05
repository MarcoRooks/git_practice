import React from 'react';
import {useParams} from 'react-router-dom'

function TaskDetail({task}) {

    let {item} =useParams();
    let detail = task[item-1];
    const {id, name, description} = detail;  
    
    return (
        <div>
            <h1>Task detail - {id}</h1>
            <h2>Task name: {name}</h2>
            <h2>Task description: {description}</h2>
        </div>
    );
}

export default TaskDetail;