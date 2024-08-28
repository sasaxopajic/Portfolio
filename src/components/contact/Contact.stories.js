import React from 'react';
import Contact from './Contact';
import '../../../src/index.scss';


export default {
  title: 'Components/Contact',
  component: Contact,
};

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {};
