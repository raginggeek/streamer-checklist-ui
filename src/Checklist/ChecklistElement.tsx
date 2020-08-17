import React from "react";
import './Checklist.css';

type ChecklistItem = {
    completed: boolean
    topic: string
}

export const ChecklistElement = ({completed, topic}: ChecklistItem) => <div className="checklist-item">
    <input type="checkbox" name={ topic } value={topic} checked={completed}/>
    <label htmlFor={topic}>{topic}</label>
</div>