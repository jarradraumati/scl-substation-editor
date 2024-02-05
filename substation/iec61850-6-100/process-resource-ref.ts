/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
import { renderFunctionalVariantRef } from './functional-variant-ref.js';
import { renderText } from '../text-editor.js';

/** Pane rendering `ProcessResourceRef` element with its children */
@customElement('process-resource-ref-editor')
export class ProcessResourceRefEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const processResource = this.element.getAttribute('processResource');
    return `ProcessResourceRef${
      processResource ? ` - ${processResource}` : ''
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

export function renderProcessResourceRef(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const ProcessResourceRef = getChildElementsByTagName(
    parent,
    'ProcessResourceRef'
  );
  return html` ${ProcessResourceRef.map(
    proResrcRef =>
      html`<process-resource-ref-editor
        .element=${proResrcRef}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></process-resource-ref-editor>`
  )}`;
}
