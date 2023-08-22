import { html } from 'lit';
import { extractArgTypes } from '@pxtrn/storybook-addon-docs-stencil';

export default {
  argTypes: extractArgTypes('pds-button'),
  component: 'pds-button',
  title: 'components/Button'
}

const BaseTemplate = (args) => html`<pds-button  disabled=${args.disabled} icon=${args.icon} name=${args.name} type=${args.type} value=${args.value} variant=${args.variant}>${args.slot}</pds-button> `;

export const Accent = BaseTemplate.bind();
Accent.args = {
  disabled: false,
  slot: 'Default',
  type: 'button',
  variant: 'accent',
};

export const Destructive = BaseTemplate.bind({});
Destructive.args = {
  disabled: false,
  slot: 'Default',
  type: 'button',
  variant: 'destructive',
}

export const Disclosure = BaseTemplate.bind({});
Disclosure.args = {
  disabled: false,
  slot: 'Default',
  type: 'button',
  variant: 'disclosure',
}

export const Primary = BaseTemplate.bind({});
Primary.args = {
  disabled: false,
  slot: 'Default',
  type: 'button',
}

export const Secondary = BaseTemplate.bind({});
Secondary.args = {
  disabled: false,
  slot: 'Default',
  variant: 'secondary',
  type: 'button',
}