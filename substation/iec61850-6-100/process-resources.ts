/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { renderText } from '../text-editor.js';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
import { renderProcessResource } from './process-resource.js';

/** Pane rendering `ProcessResources` element with its children */
@customElement('process-resources-editor')
export class ProcessResourcesEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const desc = this.element.getAttribute('desc');

    return `ProcessResources${desc ? ` - ${desc}` : ''}`;
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
      ${renderProcessResource(
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

    .container.processresource {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
}

export function renderProcessResources(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const ProcessResources = getChildElementsByTagName(
    parent,
    'ProcessResources'
  );
  return html` ${ProcessResources.map(
    proResc =>
      html`<process-resources-editor
        .element=${proResc}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></process-resources-editor>`
  )}`;
}
