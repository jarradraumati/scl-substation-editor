/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@material/mwc-fab';
import '@material/mwc-icon-button';

import '@openscd/oscd-action-pane';

import { getChildElementsByTagName } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

function formatXml(xml: string, tab: string = '\t'): string {
  let formatted = '';
  let indent = '';

  xml.split(/>\s*</).forEach(node => {
    if (node.match(/^\/\w/)) indent = indent.substring(tab!.length);
    formatted += `${indent}<${node}>\r\n`;
    if (node.match(/^<?\w[^>]*[^/]$/)) indent += tab;
  });
  return formatted.substring(1, formatted.length - 3);
}

@customElement('private-editor')
export class PrivateEditor extends BaseSubstationElementEditor {
  @state()
  get header(): string {
    const privateType = this.element.getAttribute('type');

    return `${privateType}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane
      label="${this.header}"
      icon="contact_page"
      secondary
      highlighted
    >
      <abbr slot="action" title="Edit">
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
      <div class="private-text">${this.element.textContent}</div>
      <div
        class="wrap-collapsible"
        ?hidden=${this.element.children.length === 0}
      >
        <input id="collapsible" class="toggle" type="checkbox" />
        <label for="collapsible" class="lbl-toggle"
          >${this.element.innerHTML.trim()}</label
        >
        <div class="collapsible-content">
          <pre><code class="content-inner">
${formatXml(this.element.innerHTML.trim())}
            </code>
          </pre>
        </div>
      </div>
    </oscd-action-pane>`;
  }

  static styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
    .private-text {
      word-wrap: break-word;
      overflow: clip;
      text-overflow: ellipsis;
      font-family: var(--oscd-action-pane-theme-font, var(--oscd-theme-font));
    }
    .wrap-collapsible {
      margin-bottom: 1.2rem 0;
      overflow: clip;
      text-wrap: nowrap;
      text-overflow: ellipsis;
    }
    input[type='checkbox'] {
      display: none;
    }
    .lbl-toggle {
      cursor: pointer;
      font-family: var(--oscd-action-pane-theme-font, var(--oscd-theme-font));
    }

    .lbl-toggle::before {
      content: ' ';
      display: inline-block;

      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 5px solid currentColor;

      vertical-align: middle;
      margin-right: 0.7rem;
      transform: translateY(-2px);

      transition: transform 0.2s ease-out;
    }
    .collapsible-content .content-inner {
      overflow: auto;
      tab-size: 2;
    }
    .collapsible-content {
      max-height: 0px;
      overflow: auto;
      transition: max-height 0.25s ease-in-out;
    }
    .toggle:checked + .lbl-toggle + .collapsible-content {
      max-height: 100vh;
    }
    .toggle:checked + .lbl-toggle::before {
      transform: rotate(90deg) translateX(-3px);
    }

    .toggle:checked + .lbl-toggle {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  `;
}

export function renderPrivate(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  if (!showfunctions) return html``;
  if (!showuserdef) return html``;

  const privateElement = getChildElementsByTagName(parent, 'Private');
  return html`${privateElement.map(
    fPrivate =>
      html`<private-editor
        .editCount=${editCount}
        .element=${fPrivate}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></text-editor>`
  )}`;
}
