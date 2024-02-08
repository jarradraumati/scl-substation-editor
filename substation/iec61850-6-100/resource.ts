/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { createElement } from '@openenergytools/scl-lib/dist/foundation/utils.js';
import { getChildElementsByTagName } from '../../foundation.js';
import { getLNodeIcon } from '../l-node-editor.js';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';

export function getLNodeFromSource(resource: Element): Element {
  const source = resource
    .getAttribute('source')
    ?.split('/')
    .slice(0, -1)
    .map(a => `[name="${a}"]`)
    .join(' > ');
  const sourceLNode = resource
    .getAttribute('source')
    ?.split('/')
    .at(-1)
    ?.slice(-5, -1);

  const lnode = resource.ownerDocument.querySelector(
    `${source} > LNode[lnClass*="${sourceLNode}"]`
  );
  if (!lnode)
    return createElement(resource.ownerDocument, 'LNode', { lnClass: 'Z' });
  return lnode;
}

/** Pane rendering `Resource` element with its children */
@customElement('resource-editor')
export class ResourceEditor extends BaseSubstationElementEditor {
  @state()
  private get header(): string {
    const source = this.element.getAttribute('source')?.split('/').at(-1);

    return `${source ? ` ${source}` : ''}`;
  }

  @state()
  private get missingSourceReference(): boolean {
    return this.element.getAttribute('source') === '';
  }

  render(): TemplateResult {
    if (this.element.namespaceURI === 'http://www.iec.ch/61850/2019/SCL/6-100')
      this.is6100 = true;
    return html`<oscd-action-icon
      label="${this.header}"
      ?secondary=${this.missingSourceReference}
      ?highlighted=${this.missingSourceReference}
      ><mwc-icon slot="icon"
        >${getLNodeIcon(getLNodeFromSource(this.element))}</mwc-icon
      ><mwc-fab
        class="action edit"
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}"
      ></mwc-fab>
      <mwc-fab
        class="action remove"
        slot="action"
        mini
        icon="delete"
        @click="${() => this.removeElement()}"
      ></mwc-fab>
    </oscd-action-icon>`;
  }

  static styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}

export function renderResources(
  parent: Element,
  editCount: number
): TemplateResult {
  const resources = getChildElementsByTagName(parent, 'Resource');

  return resources.length
    ? html`<div class="container resource">
        ${resources.map(
          resource =>
            html`<resource-editor
              .editCount=${editCount}
              .element=${resource}
            ></resource-editor>`
        )}
      </div>`
    : html``;
}
