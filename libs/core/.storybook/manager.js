import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import Theme from './Theme';

addons.setConfig({
  panelPosition: 'right',
  theme: Theme
});
