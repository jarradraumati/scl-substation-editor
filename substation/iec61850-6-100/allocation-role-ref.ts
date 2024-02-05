/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
import { renderText } from '../text-editor.js';
import { renderFunctionalVariantRef } from './functional-variant-ref.js';

/** Pane rendering `AllocationRoleRef` element with its children */
@customElement('allocation-role-ref-editor')
export class AllocationRoleRefEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const allocationRole = this.element.getAttribute('AllocationRole');
    return `AllocationRoleRef${allocationRole ? ` - ${allocationRole}` : ''}`;
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
      ${this.renderAddButton()}
      ${renderText(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderFunctionalVariantRef(
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

export function renderAllocationRoleRef(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const AllocationRoleRef = getChildElementsByTagName(
    parent,
    'AllocationRoleRef'
  );
  return html` ${AllocationRoleRef.map(
    behDescRef =>
      html`<allocation-role-ref-editor
        .element=${behDescRef}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></allocation-role-ref-editor>`
  )}`;
}
