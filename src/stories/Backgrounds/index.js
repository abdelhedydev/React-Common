import { withBackgrounds } from '@storybook/addon-backgrounds';

const backgrounds = [
  { name: 'Basic', value: '#FFFFFF', default: true },
  { name: 'Blue', value: '#3CBCD7' },
  { name: 'Purple light', value: '#693588' },
  { name: 'Purple', value: '#472581' },
  { name: 'Grey', value: '#818181' },
  { name: 'Orange', value: '#EE7837' },
];
export default withBackgrounds(backgrounds);
