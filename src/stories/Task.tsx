import React from 'react';

export interface TaskProps {
  task: {
    id: string;
    title: string;
    state: any;
  },
  onClick: any
}

export default function Task({ task: { id, title, state } }: TaskProps) {
  return (
    <div className="list-item">
      <input id={id} placeholder={title} type="text" readOnly={true} value={state} />
    </div>
  )
}