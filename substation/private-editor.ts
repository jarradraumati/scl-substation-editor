/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@material/mwc-fab';
import '@material/mwc-icon-button';

import '@openscd/oscd-action-pane';

import { renderProcessResources } from './iec61850-6-100/process-resources.js';
import { renderPowerSystemRelations } from './iec61850-6-100/power-system-relations.js';
import { renderVariable } from './iec61850-6-100/variable.js';
import { renderServiceSpecifications } from './iec61850-6-100/service-specifications.js';
import { renderAllocationRole } from './iec61850-6-100/allocation-role.js';
import { renderApplication } from './iec61850-6-100/application.js';

import { getChildElementsByTagName } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
import { renderBehaviorDescription } from './iec61850-6-100/behavior-description.js';

@customElement('private-editor')
export class PrivateEditor extends BaseSubstationElementEditor {
  @state()
  get header(): string {
    const privateType = this.element.getAttribute('type');

    return `${privateType}`;
  }

  render(): TemplateResult {
    if (this.element.getAttribute('type') === 'eIEC61850-6-100')
      this.is6100 = true;
    return html`<oscd-action-pane
      label="${this.header}"
      icon="contact_page"
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
      ${this.renderAddButton()}
      ${renderApplication(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderBehaviorDescription(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderAllocationRole(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderServiceSpecifications(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderProcessResources(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderPowerSystemRelations(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderVariable(
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
  `;
}

export function renderPrivate(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  if (!showfunctions) return html``;
  if (!showuserdef) return html``;

  const privateElement = getChildElementsByTagName(parent, 'Private');
  return html`${privateElement.map(
    fPrivate =>
      html`<private-editor
        .editCount=${editCount}
        .element=${fPrivate}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></text-editor>`
  )}`;
}
