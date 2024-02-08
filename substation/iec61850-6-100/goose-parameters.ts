/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
import { renderText } from '../text-editor.js';
import { renderL2CommParameters } from './l2-comm-parameters.js';
import { renderL3IPv4CommParameters } from './l3-ipv4-comm-parameters.js';
import { renderL3IPv6CommParameters } from './l3-ipv6-comm-parameters.js';

/** Pane rendering `GooseParameters` element with its children */
@customElement('goose-parameters-editor')
export class GooseParametersEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const id = this.element.getAttribute('id');
    const desc = this.element.getAttribute('desc');

    return `GooseParameters - ${id}${desc ? ` - ${desc}` : ''}`;
  }

  render(): TemplateResult {
    if (this.element.namespaceURI === 'http://www.iec.ch/61850/2019/SCL/6-100')
      this.is6100 = true;
    return html`<oscd-action-pane
      label="${this.header}"
      icon="schema"
      secondary
      highlighted
      ><abbr slot="action" title="Edit">
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
      ${this.renderAddButton()}
      ${renderText(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderL2CommParameters(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderL3IPv4CommParameters(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderL3IPv6CommParameters(
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
  `;
}

export function renderGooseParameters(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const GooseParameters = getChildElementsByTagName(parent, 'GooseParameters');
  return html` ${GooseParameters.map(
    gsePara =>
      html`<goose-parameters-editor
        .element=${gsePara}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></goose-parameters-editor>`
  )}`;
}
