import type { JSX as PdsIconsJSX } from '@ju-skinner/ideal-icons';

import { createReactComponent } from './react-component-lib';

import { defineCustomElement as definePdsIcon } from '@ju-skinner/ideal-icons/components/pds-icon'

// pineicons
export const PdsIconInner = /*@__PURE__*/ createReactComponent<PdsIconsJSX.PdsIcon, HTMLPdsIconElement>(
  'pds-icon',
  undefined,
  undefined,
  definePdsIcon
);
