/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
import { renderFunctionRef } from './function-ref.js';
import { renderProcessResourceRef } from './process-resource-ref.js';
import { renderBehaviorDescriptionRef } from './behavior-description-ref.js';
import { renderVariableRef } from './variable-ref.js';
import { renderPowerSystemRelationRef } from './power-system-relation-ref.js';
import { renderFunctionCategoryRef } from './function-category-ref.js';

/** Pane rendering `FunctionRoleContent` element with its children */
@customElement('function-role-content-editor')
export class FunctionRoleContentEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const roleInst = this.element.getAttribute('roleInst');

    return `FunctionRoleContent${roleInst ? ` - ${roleInst}` : ''}`;
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
      ${renderFunctionRef(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderBehaviorDescriptionRef(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderProcessResourceRef(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderVariableRef(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderFunctionCategoryRef(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderPowerSystemRelationRef(
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

export function renderFunctionRoleContent(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const FunctionRoleContent = getChildElementsByTagName(
    parent,
    'FunctionRoleContent'
  );
  return html` ${FunctionRoleContent.map(
    functRoleCont =>
      html`<function-role-content-editor
        .element=${functRoleCont}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></function-role-content-editor>`
  )}`;
}
