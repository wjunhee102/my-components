import { Story, Meta } from '@storybook/react';
import React from 'react';
import BlockContainer, { BlockProps } from './BlockContainer';
import { testDB } from './db';

export default {
  title: 'Block/Block-Container',
  component: BlockContainer
} as Meta;

const Template: Story<BlockProps> = (args: any) => <BlockContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  blockList: testDB
}