/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@material/mwc-icon-button';
import '@openscd/oscd-action-pane';
import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';
import { renderSubEquipments } from './sub-equipment-editor.js';
import { renderText } from './text-editor.js';

import { styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

@customElement('tap-changer-editor')
export class TapChangerEditor extends BaseSubstationElementEditor {
  @state()
  get header(): string {
    const name = this.element.getAttribute('name');
    const desc = this.element.getAttribute('desc');

    return `${name} ${desc ? `—${desc}` : ''}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label=${this.header}>
      <abbr slot="action" title="Edit">
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
      ${renderText(this.element, this.editCount, this.showfunctions)}
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderEqFunctions(this.element, this.editCount)}
      ${renderSubEquipments(this.element, this.editCount, this.showfunctions)}
    </oscd-action-pane>`;
  }

  static styles = css`
    ${styles}
  `;
}
