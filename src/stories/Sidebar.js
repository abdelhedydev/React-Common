import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';


import Backgrounds from './Backgrounds';
import CenterDecorator from './Decorator/Center';

import Sidebar from '../components/Sidebar';


addDecorator(CenterDecorator);
addDecorator(Backgrounds);
addDecorator(withKnobs);

storiesOf('Sidebar', module)
  .add('Sidebar', () => (
    <React.Fragment>
      <Sidebar />
    </React.Fragment>
  ));
