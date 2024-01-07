/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';

/** Pane rendering `Resource` element with its children */
@customElement('resource-editor')
export class ResourceEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const source = this.element.getAttribute('source');
    const resInst = this.element.getAttribute('resInst');

    return `Resource${source ? ` - ${source}` : ''}${
      resInst ? ` ${resInst}` : ''
    }`;
  }

  render(): TemplateResult {
    if (this.element.namespaceURI === 'http://www.iec.ch/61850/2019/SCL/6-100')
      this.is6100 = true;
    return html`<oscd-action-pane label="${this.header}" icon="commit" secondary
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
    </oscd-action-pane>`;
  }

  static styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}

export function renderResource(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const Resource = getChildElementsByTagName(parent, 'Resource');
  return html` ${Resource.map(
    resc =>
      html`<resource-editor
        .element=${resc}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></resource-editor>`
  )}`;
}
