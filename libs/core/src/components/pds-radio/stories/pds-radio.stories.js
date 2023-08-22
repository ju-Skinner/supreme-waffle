import { html } from 'lit';
import { extractArgTypes } from '@pxtrn/storybook-addon-docs-stencil';

export default {
  args: {
    checked: false,
    disabled: false,
    invalid: false,
    required: false,
  },
  argTypes: extractArgTypes('pds-radio'),
  component: 'pds-radio',
  title: 'components/Radio'
}

const BaseTemplate = (args) =>
  html` <pds-radio
    component-id=${args.componentId}
    label=${args.label}
    checked=${args.checked}
    disabled=${args.disabled}
    helper-message=${args.helperMessage}
    name=${args.name}
    indeterminate=${args.indeterminate}
    required=${args.required}
    value=${args.value}
    invalid=${args.invalid}
  />`;

export const Default = BaseTemplate.bind();
Default.args = {
  componentId: 'default',
  label: 'Label text',
};

export const Checked = BaseTemplate.bind();
Checked.args = {
  componentId: 'checked',
  label: 'Label text',
  checked: true,
};

export const Disabled = BaseTemplate.bind();
Disabled.args = {
  componentId: 'disabled',
  label: 'Label text',
  disabled: true,
};

export const withMessage = BaseTemplate.bind();
withMessage.args = {
  componentId: 'with-message',
  label: 'Label text',
  helperMessage: 'This is short message text',
};

export const Invalid = BaseTemplate.bind();
Invalid.args = {
  componentId: 'invalid',
  label: 'Label text',
  invalid: true,
};