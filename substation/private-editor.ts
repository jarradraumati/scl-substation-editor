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
import { renderBayType } from './iec61850-6-100/bay-type.js';
import { renderCommunicationServiceSpecifications } from './iec61850-6-100/communication-service-specifications.js';
import { renderDOS } from './iec61850-6-100/dos.js';
import { renderFunctionCategory } from './iec61850-6-100/function-category.js';
import { renderProcessEcho } from './iec61850-6-100/process-echo.js';
import { renderProject } from './iec61850-6-100/project.js';
import { renderFunctionTemplate } from './iec61850-6-100/function-template.js';
import { renderLNodeInputs } from './iec61850-6-100/lnode-inputs.js';
import { renderLNodeOutputs } from './iec61850-6-100/lnode-outputs.js';
import { renderLNodeSpecNaming } from './iec61850-6-100/lnode-spec-naming.js';
import { renderFunctionSclRef } from './iec61850-6-100/function-scl-ref.js';
import { renderCheckoutID } from './iec61850-6-100/checkout-id.js';

@customElement('private-editor')
export class PrivateEditor extends BaseSubstationElementEditor {
  @state()
  get header(): string {
    // const content = this.element.textContent;
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
      ${renderAllocationRole(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderApplication(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderBayType(
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
      ${renderCheckoutID(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderCommunicationServiceSpecifications(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderDOS(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderFunctionCategory(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderFunctionSclRef(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderFunctionTemplate(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderLNodeInputs(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderLNodeOutputs(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderLNodeSpecNaming(
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
      ${renderProcessEcho(
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
      ${renderProject(
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
