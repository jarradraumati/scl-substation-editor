/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
import { renderText } from '../text-editor.js';

/** Pane rendering `ApplicationSclRef` element with its children */
@customElement('application-scl-ref-editor')
export class ApplicationSclRefEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const fileName = this.element.firstElementChild?.getAttribute('fileName');
    return `ApplicationSclRef${fileName ? ` - ${fileName}` : ''}`;
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

export function renderApplicationSclRef(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const ApplicationSclRef = getChildElementsByTagName(
    parent,
    'ApplicationSclRef'
  );
  return html` ${ApplicationSclRef.map(
    funcSclRef =>
      html`<application-scl-ref-editor
        .element=${funcSclRef}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></application-scl-ref-editor>`
  )}`;
}
