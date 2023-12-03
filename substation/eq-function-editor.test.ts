/* eslint-disable import/no-extraneous-dependencies */
import { fixture, html } from '@open-wc/testing';

import { sendMouse, setViewport } from '@web/test-runner-commands';

import { visualDiff } from '@web/test-runner-visual-regression';

import { substationDoc } from '../substation.testfiles.js';

import { baseStyle } from './base-visual.js';

import './eq-function-editor.js';
import type { EqFunctionEditor } from './eq-function-editor.js';

const factor = window.process && process.env.CI ? 4 : 2;
function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms * factor);
  });
}
mocha.timeout(2000 * factor);

const style = document.createElement('style');
style.textContent = baseStyle;
document.body.prepend(style);

describe('Component for SCL element EqSubFunction ', () => {
  describe('with add menu open', () => {
    let editor: EqFunctionEditor;
    beforeEach(async () => {
      const subFunc = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`EqFunction[name="eqFunc1"]`)!;

      editor = await fixture(
        html`<eq-function-editor .element=${subFunc}></eq-function-editor>`
      );
      document.body.style.width = '800';
      document.body.style.height = '900';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 800, height: 900 });
      await sendMouse({ type: 'click', position: [780, 20] });

      await editor.updateComplete;
      await timeout(400);
      await visualDiff(document.body, `eq-function-editor/#1 add menu visible`);
    });
  });

  describe('with showfunction false', () => {
    let editor: EqFunctionEditor;
    beforeEach(async () => {
      const subFunc = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`EqFunction[name="eqFunc2"]`)!;

      editor = await fixture(
        html`<eq-function-editor .element=${subFunc}></eq-function-editor>`
      );
      document.body.style.width = '800';
      document.body.style.height = '900';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 800, height: 900 });
      await sendMouse({ type: 'click', position: [30, 30] });

      await editor.updateComplete;
      await timeout(400);
      await visualDiff(
        document.body,
        `eq-function-editor/#2 Unfocused with showfunction=false`
      );
    });
  });

  describe('with showfunction true', () => {
    let editor: EqFunctionEditor;
    beforeEach(async () => {
      const lNode = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`EqFunction[name="eqFunc2"]`)!;

      editor = await fixture(
        html`<eq-function-editor
          .element=${lNode}
          ?showfunctions=${true}
        ></eq-function-editor>`
      );
      document.body.style.width = '800';
      document.body.style.height = '900';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 800, height: 900 });

      await sendMouse({ type: 'click', position: [120, 120] });

      await timeout(400);
      await visualDiff(
        document.body,
        `eq-function-editor/#3 Focused with showfunction=true`
      );
    });
  });
});
