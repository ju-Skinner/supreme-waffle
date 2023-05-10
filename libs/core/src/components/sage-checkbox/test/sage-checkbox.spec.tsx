import { newSpecPage } from '@stencil/core/testing';
import { SageCheckbox } from '../sage-checkbox';

describe('sage-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox />`,
    });

    expect(page.root).toEqualHtml(`
      <sage-checkbox>
        <mock:shadow-root>
          <input type="checkbox">
          <label></label>
        </mock:shadow-root>
      </sage-checkbox>
    `);
  });

  it('renders with id when componentId prop is set', async () => {
    const page = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox component-id="default" label="Label text" />`,
    });

    expect(page.root).toEqualHtml(`
      <sage-checkbox component-id="default" label="Label text">
        <mock:shadow-root>
          <input type="checkbox" id="default">
          <label htmlfor="default">Label text</label>
        </mock:shadow-root>
      </sage-checkbox>
    `);
  });

  it('renders checked input when checked prop is set', async () => {
    const { root } = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox component-id="default" label="Label text" checked />`,
    });

    const input = root?.shadowRoot?.querySelector('input');
    expect(input?.checked).toBe(true);
  });

  it('renders disabled input when disabled prop is set', async () => {
    const { root } = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox component-id="default" label="Label text" disabled />`,
    });

    const input = root?.shadowRoot?.querySelector('input');
    expect(input?.disabled).toBe(true);
  });

  it('renders in invalid state when invalid prop is set', async () => {
    const page = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox component-id="default" label="Label text" invalid />`,
    });

    expect(page.root).toEqualHtml(`
      <sage-checkbox class="is-invalid" component-id="default" label="Label text" invalid>
        <mock:shadow-root>
          <input type="checkbox" id="default">
          <label htmlfor="default">Label text</label>
        </mock:shadow-root>
      </sage-checkbox>
    `);
  });

  it('renders in indeterminate state when indeterminate prop is set', async () => {
    const page = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox component-id="default" label="Label text" indeterminate />`,
    });

    expect(page.root).toEqualHtml(`
      <sage-checkbox class="is-indeterminate" component-id="default" label="Label text" indeterminate>
        <mock:shadow-root>
          <input type="checkbox" id="default">
          <label htmlfor="default">Label text</label>
        </mock:shadow-root>
      </sage-checkbox>
    `);
  });

  it('renders label text when label prop is set', async () => {
    const page = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox component-id="default" label="This is label text" />`,
    });

    expect(page.root).toEqualHtml(`
      <sage-checkbox component-id="default" label="This is label text">
        <mock:shadow-root>
          <input type="checkbox" id="default">
          <label htmlfor="default">This is label text</label>
        </mock:shadow-root>
      </sage-checkbox>
    `);
  });

  it('renders message when message prop is set', async () => {
    const page = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox component-id="default" label="Label text" helper-message="This is short message text." />`,
    });

    expect(page.root).toEqualHtml(`
      <sage-checkbox component-id="default" label="Label text" helper-message="This is short message text.">
        <mock:shadow-root>
          <input type="checkbox" id="default">
          <label htmlfor="default">Label text</label>
          <div class="sage-checkbox__message">This is short message text.</div>
        </mock:shadow-root>
      </sage-checkbox>
    `);
  });

  it('renders required input when required prop is set', async () => {
    const { root } = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox component-id="default" label="Label text" required />`,
    });

    const input = root?.shadowRoot?.querySelector('input');
    expect(input?.required).toBe(true);
  });

  it('sets input value attribute when value prop is set', async () => {
    const { root } = await newSpecPage({
      components: [SageCheckbox],
      html: `<sage-checkbox component-id="default" label="Label text" value="This is the input value" />`,
    });

    const input = root?.shadowRoot?.querySelector('input');
    expect(input?.value).toEqual('This is the input value');
  });

  it('emits "sageCheckboxChange" event when checkbox is changed', async () => {
    const page = await newSpecPage({
      components: [SageCheckbox],
      html: '<sage-checkbox component-id="default" label="Label text" />',
    });

    const checkbox = page.root?.shadowRoot?.querySelector('input[type="checkbox"]');
    const eventSpy = jest.fn();

    page.root?.addEventListener('sageCheckboxChange', eventSpy);
    checkbox?.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('does not emit "sageCheckboxChange" event when checkbox is changed and disabled', async () => {
    const page = await newSpecPage({
      components: [SageCheckbox],
      html: '<sage-checkbox component-id="default" label="Label text" disabled />',
    });

    const checkbox = page.root?.shadowRoot?.querySelector('input[type="checkbox"]');
    const eventSpy = jest.fn();

    page.root?.addEventListener('sageCheckboxChange', eventSpy);
    checkbox?.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });
});