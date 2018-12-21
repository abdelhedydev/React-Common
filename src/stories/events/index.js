import { actions } from '@storybook/addon-actions';

// This will lead to { onClick: action('clicked'), ... }
const eventsHandling = actions({ onClick: 'this element was clicked', onMouseOver: 'this element was hovered' });

export default eventsHandling;
