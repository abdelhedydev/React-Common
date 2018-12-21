import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';


import Backgrounds from './Backgrounds';
import CenterDecorator from './Decorator/Center';

import Modal from '../components/Modal';


addDecorator(CenterDecorator);
addDecorator(Backgrounds);
addDecorator(withKnobs);

storiesOf('Modal', module)
  .add('Basic 👀 ', () => (
    <React.Fragment>
      <Modal header={text('Header', 'Modalheader')} content={text('Content', 'ModalContent')} footer={text('Footer', 'ModalFooter')} trigger={<button>Trigger</button>} />
    </React.Fragment>
  ));
