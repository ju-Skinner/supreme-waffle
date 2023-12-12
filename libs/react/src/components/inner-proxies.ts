import type { JSX as PdsIconsJSX } from '@ju-skinner/ideal-octo-sniffle';

import { createReactComponent } from './react-component-lib';

import { defineCustomElement as definePdsIcon } from '@ju-skinner/ideal-octo-sniffle/components/pds-icon'

// pineicons
export const PdsIconInner = /*@__PURE__*/ createReactComponent<PdsIconsJSX.PdsIcon, HTMLPdsIconElement>(
  'pds-icon',
  undefined,
  undefined,
  definePdsIcon
);
