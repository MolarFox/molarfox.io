import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://molarfox.io/icon.svg',
    brandTitle: 'MolarFox Prototyping',
    brandUrl: 'https://molarfox.io',
  },
});
