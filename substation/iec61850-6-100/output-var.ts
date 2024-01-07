/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';

/** Pane rendering `OutputVar` element with its children */
@customElement('output-var-editor')
export class OutputVarEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const varName = this.element.getAttribute('function');
    return `OutputVar${varName ? ` - ${varName}` : ''}`;
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

export function renderOutputVar(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const OutputVar = getChildElementsByTagName(parent, 'OutputVar');
  return html` ${OutputVar.map(
    outVar =>
      html`<output-var-editor
        .element=${outVar}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></output-var-editor>`
  )}`;
}
