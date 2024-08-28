import React from 'react';
import Button from './Button'; // Adjust the import path if needed
import './Button.module.scss'; // Import the stylesheet to ensure styles are applied
import '../../../src/index.scss';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'button', options: ['primary', 'secondary'] },
    },
    children: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Secondary Button',
};
