/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
import { renderGooseParameters } from './goose-parameters.js';
import { renderSMVParameters } from './smv-parameters.js';
import { renderReportParameters } from './report-parameters.js';
import { renderText } from '../text-editor.js';

/** Pane rendering `CommunicationServiceSpecifications` element with its children */
@customElement('communication-service-specifications-editor')
export class CommunicationServiceSpecificationsEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const desc = this.element.getAttribute('desc');

    return `CommunicationServiceSpecifications${desc ? ` - ${desc}` : ''}`;
  }

  render(): TemplateResult {
    if (this.element.namespaceURI === 'http://www.iec.ch/61850/2019/SCL/6-100')
      this.is6100 = true;
    return html`<oscd-action-pane
      label="${this.header}"
      icon="settings_applications"
      secondary
      highlighted
      ><abbr slot="action" title="Edit">
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
      ${renderText(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderGooseParameters(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderSMVParameters(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderReportParameters(
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

export function renderCommunicationServiceSpecifications(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const CommunicationServiceSpecifications = getChildElementsByTagName(
    parent,
    'CommunicationServiceSpecifications'
  );
  return html` ${CommunicationServiceSpecifications.map(
    commServSpec =>
      html`<communication-service-specifications-editor
        .element=${commServSpec}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></communication-service-specifications-editor>`
  )}`;
}
