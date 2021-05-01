import { configure, addDecorator } from '@storybook/react';
import { initScreenshot } from 'storybook-chrome-screenshot';

// Load stories
const req = require.context('../src', true, /\.stories\.js$/);

configure(() => {
  req.keys().forEach((filename) => req(filename));
}, module);

// Initialize `storybook-chrome-screenshot`
addDecorator(initScreenshot());
