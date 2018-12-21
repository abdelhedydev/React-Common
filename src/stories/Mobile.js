import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';


import Backgrounds from './Backgrounds';
import CenterDecorator from './Decorator/Center';

import Mobile from '../components/Mobile';


addDecorator(CenterDecorator);
addDecorator(Backgrounds);
addDecorator(withKnobs);

storiesOf('Mobile', module)
  .add('Mobile', () => (
    <React.Fragment>
      <Mobile />
    </React.Fragment>
  ));
