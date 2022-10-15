import { extractArgTypes, extractComponentDescription, setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';

import docJson from '../docs.json';

if (docJson) {
  console.log('docsJson present!!!!');
  setStencilDocJson(docJson);
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    extractArgTypes,
    extractComponentDescription,
  },
};
