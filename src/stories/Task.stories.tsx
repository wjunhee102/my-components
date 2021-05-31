import React from 'react';
import { Story, Meta } from '@storybook/react';
import Task, { TaskProps } from './Task';

export default {
  component: Task,
  title: 'Example/Task'
} as Meta;

const Template: Story<TaskProps> = (args: TaskProps) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX'
  },
  onClick: () => {
    console.log("sadsad");
  }
}

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_ARCHIVED'
  },
  onClick: () => {
    console.log("sadsad");
  }
}