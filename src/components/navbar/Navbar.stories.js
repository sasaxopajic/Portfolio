import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the import path if needed
import '../../../src/index.scss';
import "@fontsource/vt323"; // Defaults to weight 400
import { ArgTypes } from '@storybook/blocks';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story, { parameters }) => {
      // Use a Router and pass the mock location if specified
      return (
        <Router>
          {parameters?.mockLocation ? (
            <Story />
          ) : (
            <Story />
          )}
        </Router>
      );
    },
  ],
};

// Template to render the Navbar with props
const Template = (args) => <Navbar {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {};
