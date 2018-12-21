import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, files } from '@storybook/addon-knobs';


import Backgrounds from './Backgrounds';
import CenterDecorator from './Decorator/Center';

import NativeSlider from '../components/NativeSlider';
import data from './Data/Slider';

addDecorator(CenterDecorator);
addDecorator(Backgrounds);
addDecorator(withKnobs);

storiesOf('Native Slider', module)
  .add('Basic', () => (
    <React.Fragment>
      <NativeSlider
        imgs={files('Images', '', data)}
      />
    </React.Fragment>
  ));
