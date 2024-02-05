/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@material/mwc-fab';
import '@material/mwc-icon-button';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';

@customElement('bay-type')
export class BayType extends BaseSubstationElementEditor {
  @state()
  get header(): string {
    const content = this.element.textContent;

    return `${content}`;
  }

  render(): TemplateResult {
    if (this.element.namespaceURI === 'http://www.iec.ch/61850/2019/SCL/6-100')
      this.is6100 = true;
    return html`<oscd-action-pane
      label="${this.header}"
      icon="notes"
      secondary
      highlighted
    >
      <abbr slot="action" title="Edit">
        <mwc-icon-button
          class="action edit"
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="Remove">
        <mwc-icon-button
          class="action remove"
          icon="delete"
          @click=${() => this.removeElement()}
        ></mwc-icon-button>
      </abbr>
    </oscd-action-pane>`;
  }

  static styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}

export function renderBayType(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const bayType = getChildElementsByTagName(parent, 'BayType');
  return html`${bayType.map(
    fbayType =>
      html`<bay-type
        .editCount=${editCount}
        .element=${fbayType}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></bay-type>`
  )}`;
}
