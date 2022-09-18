import React from 'react';
import {useParams} from 'react-router-dom'

function TaskDetail() {
    const {id} =useParams();
    
    return (
        <div>
            <h1>Task detail - {id}</h1>
        </div>
    );
}

export default TaskDetail;