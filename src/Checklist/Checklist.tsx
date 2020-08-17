import React, {Component} from "react";
import {ChecklistElement} from "./ChecklistElement";
import './Checklist.css';

type ChecklistItem = {
    completed: boolean
    topic: string
}

type ChecklistState = {
    name: string
    checklistItems: ChecklistItem[]
}

type ChecklistProps = {
    name: string
    checklistItems: ChecklistItem[]
}

export class Checklist extends Component<ChecklistProps, ChecklistState> {
    render() {
        return (<div className="checklist">
            <h2>{this.props.name}</h2>
            {this.props.checklistItems.map((checkListItem: ChecklistItem) => {
                return (ChecklistElement(checkListItem))
            })}
        </div>);
    }
}