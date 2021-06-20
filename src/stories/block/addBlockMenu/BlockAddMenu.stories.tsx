import { Story, Meta } from '@storybook/react';
import React from 'react';
import BlockAddMenu, { BlockAddMenuProps } from './BlockAddMenu';

export default {
  title: 'Block/Block-Add-Menu',
  component: BlockAddMenu
} as Meta;

const Template: Story<BlockAddMenuProps> = (args: any) => <BlockAddMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  addBlockEvent: (type: string) => { console.log(type) }
}