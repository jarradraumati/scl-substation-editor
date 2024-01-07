/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../../foundation.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';

/** Pane rendering `BehaviorDescriptionRef` element with its children */
@customElement('behavior-description-ref-editor')
export class BehaviorDescriptionRefEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const behaviorDescription = this.element.getAttribute(
      'behaviorDescription'
    );
    return `BehaviorDescriptionRef${
      behaviorDescription ? ` - ${behaviorDescription}` : ''
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
    </oscd-action-pane>`;
  }

  static styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}

export function renderBehaviorDescriptionRef(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const BehaviorDescriptionRef = getChildElementsByTagName(
    parent,
    'BehaviorDescriptionRef'
  );
  return html` ${BehaviorDescriptionRef.map(
    behDescRef =>
      html`<behavior-description-ref-editor
        .element=${behDescRef}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></behavior-description-ref-editor>`
  )}`;
}
