/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
import { renderText } from '../text-editor.js';
import { renderAnalogueWiringParametersRef } from './analogue-wiring-parameters-ref.js';
import { renderBinaryWiringParametersRef } from './binary-wiring-parameters-ref.js';

/** Pane rendering `ControlRef` element with its children */
@customElement('control-ref-editor')
export class ControlRefEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const desc = this.element.getAttribute('desc');

    return `ControlRef${desc ? ` - ${desc}` : ''}`;
  }

  render(): TemplateResult {
    if (this.element.namespaceURI === 'http://www.iec.ch/61850/2019/SCL/6-100')
      this.is6100 = true;
    return html`<oscd-action-pane
      label="${this.header}"
      icon="settings_applications"
      secondary
      highlighted
      ><abbr slot="action" title="Edit">
        <mwc-icon-button
          class="action edit"
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="Remove">
        <mwc-icon-button
          class="action remove"
          icon="delete"
          @click=${() => this.removeElement()}
        ></mwc-icon-button>
      </abbr>
      ${this.renderAddButton()}
      ${renderText(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderAnalogueWiringParametersRef(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderBinaryWiringParametersRef(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
    </oscd-action-pane>`;
  }

  static styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .content.actionicon {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }

    .container.processresource {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
}

export function renderControlRef(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const ControlRef = getChildElementsByTagName(parent, 'ControlRef');
  return html` ${ControlRef.map(
    commServSpec =>
      html`<control-ref-editor
        .element=${commServSpec}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></control-ref-editor>`
  )}`;
}