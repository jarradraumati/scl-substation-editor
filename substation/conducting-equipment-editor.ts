/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './eq-function-editor.js';
import './l-node-editor.js';
import './sub-equipment-editor.js';
import { getChildElementsByTagName, getIcon, styles } from '../foundation.js';

/** [[`SubstationEditor`]] subeditor for a `ConductingEquipment` element. */
@customElement('conducting-equipment-editor')
export class ConductingEquipmentEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** SCL element ConductingEquipment */
  @property({ attribute: false })
  element!: Element;

  /** ConductingEquipment name attribute */
  @property({ type: String })
  get name(): string {
    return this.element.getAttribute('name') ?? '';
  }

  /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
  @property({ type: Boolean })
  showfunctions = false;

  private renderLNodes(): TemplateResult {
    const lNodes = getChildElementsByTagName(this.element, 'LNode');

    return lNodes.length
      ? html`<div class="container lnode">
          ${lNodes.map(
            lNode =>
              html`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`
          )}
        </div>`
      : html``;
  }

  renderEqFunctions(): TemplateResult {
    if (!this.showfunctions) return html``;

    const eqFunctions = getChildElementsByTagName(this.element, 'EqFunction');
    return html` ${eqFunctions.map(
      eqFunction =>
        html`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${eqFunction}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }

  private renderSubEquipments(): TemplateResult {
    if (!this.showfunctions) return html``;

    const subEquipments = getChildElementsByTagName(
      this.element,
      'SubEquipment'
    );

    return html` ${subEquipments.map(
      subEquipment =>
        html`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${subEquipment}
        ></sub-equipment-editor>`
    )}`;
  }

  renderContentPane(): TemplateResult {
    return html`<mwc-icon slot="icon" style="width:24px;height:24px"
      >${getIcon(this.element)}</mwc-icon
    > `;
  }

  renderContentIcon(): TemplateResult {
    return html`<mwc-icon slot="icon">${getIcon(this.element)}</mwc-icon> `;
  }

  render(): TemplateResult {
    if (this.showfunctions)
      return html`<oscd-action-pane label="${this.name}"
        >${this.renderContentPane()}${this.renderLNodes()}${this.renderEqFunctions()}${this.renderSubEquipments()}</oscd-action-pane
        ></oscd-action-pane
      >`;

    return html`<oscd-action-icon label="${this.name}"
      >${this.renderContentIcon()}</oscd-action-icon
    >`;
  }

  static styles = css`
    ${styles}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}
