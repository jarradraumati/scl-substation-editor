/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '@material/mwc-icon';
import '@openscd/oscd-action-icon';

import {
  automationLogicalNode,
  controlLogicalNode,
  functionalLogicalNode,
  furtherPowerSystemEquipmentLogicalNode,
  generalLogicalNode,
  interfacingLogicalNode,
  measurementLogicalNode,
  nonElectricalLogicalNode,
  powerTransformerLogicalNode,
  protectionLogicalNode,
  protectionRelatedLogicalNode,
  qualityLogicalNode,
  supervisionLogicalNode,
  switchgearLogicalNode,
  systemLogicalNode,
  transformerLogicalNode,
} from './lnode.js';

const lnClassIcons: Partial<Record<string, TemplateResult>> = {
  L: systemLogicalNode,
  A: automationLogicalNode,
  C: controlLogicalNode,
  F: functionalLogicalNode,
  G: generalLogicalNode,
  I: interfacingLogicalNode,
  K: nonElectricalLogicalNode,
  M: measurementLogicalNode,
  P: protectionLogicalNode,
  Q: qualityLogicalNode,
  R: protectionRelatedLogicalNode,
  S: supervisionLogicalNode,
  T: transformerLogicalNode,
  X: switchgearLogicalNode,
  Y: powerTransformerLogicalNode,
  Z: furtherPowerSystemEquipmentLogicalNode,
};

export function getLNodeIcon(lNode: Element): TemplateResult {
  const lnClassGroup = lNode.getAttribute('lnClass')?.charAt(0) ?? '';
  return lnClassIcons[lnClassGroup] ?? systemLogicalNode;
}

/** Pane rendering `LNode` element with its children */
@customElement('l-node-editor')
export class LNodeEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  /** The edited `LNode` element */
  @property({ attribute: false })
  element!: Element;

  @state()
  private get header(): string {
    const prefix = this.element.getAttribute('prefix') ?? '';
    const lnClass = this.element.getAttribute('lnClass');
    const lnInst = this.element.getAttribute('lnInst');

    const header = `${prefix} ${lnClass} ${lnInst}`;
    return typeof header === 'string' ? header : '';
  }

  @state()
  private get missingIedReference(): boolean {
    return this.element.getAttribute('iedName') === 'None' ?? false;
  }

  @state()
  render(): TemplateResult {
    return html`<oscd-action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><mwc-icon slot="icon">${getLNodeIcon(this.element)}</mwc-icon>
    </oscd-action-icon>`;
  }
}
