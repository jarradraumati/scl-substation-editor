/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { renderText } from '../text-editor.js';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
import { renderFunctionRole } from './function-role.js';
import { renderAllocationRoleRef } from './allocation-role-ref.js';
import { renderFunctionalVariant } from './functional-variant.js';
import { renderFunctionalVariantGroup } from './functional-variant-group.js';
import { renderApplicationSclRef } from './application-scl-ref.js';

/** Pane rendering `Application` element with its children */
@customElement('application-editor')
export class ApplicationEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const name = this.element.getAttribute('name');

    return `Application${name ? ` - ${name}` : ''}`;
  }

  render(): TemplateResult {
    if (this.element.namespaceURI === 'http://www.iec.ch/61850/2019/SCL/6-100')
      this.is6100 = true;
    return html`<oscd-action-pane
      label="${this.header}"
      icon="widgets"
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
      ${renderFunctionRole(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderFunctionalVariant(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderFunctionalVariantGroup(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderAllocationRoleRef(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderApplicationSclRef(
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

export function renderApplication(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const Application = getChildElementsByTagName(parent, 'Application');
  return html` ${Application.map(
    app =>
      html`<application-editor
        .element=${app}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></application-editor>`
  )}`;
}
