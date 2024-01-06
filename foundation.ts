import { css } from 'lit';

import './substation/general-equipment-editor.js';

export function getChildElementsByTagName(
  element: Element | null | undefined,
  tag: string | null | undefined
): Element[] {
  if (!element || !tag) return [];
  return Array.from(element.children).filter(child => child.tagName === tag);
}

/** Common `CSS` styles used by substation subeditors */
export const styles = css`
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

  .container.lnode {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }
`;

/* eslint-disable no-undef */
interface WizardRequestBase {
  subWizard?: boolean;
}

export interface EditWizardRequest extends WizardRequestBase {
  element: Element;
}

export interface CreateWizardRequest extends WizardRequestBase {
  parent: Element;
  tagName: string;
}

export type WizardRequest = EditWizardRequest | CreateWizardRequest;

export function isEditRequest(wizard: any): wizard is EditWizardRequest {
  return 'element' in wizard && 'tagName' in wizard;
}

export function isCreateRequest(wizard: any): wizard is CreateWizardRequest {
  return 'parent' in wizard;
}

type EditWizardEvent = CustomEvent<EditWizardRequest>;
type CreateWizardEvent = CustomEvent<CreateWizardRequest>;
export type WizardEvent = EditWizardEvent | CreateWizardEvent;

type CloseWizardEvent = CustomEvent<WizardRequest>;

export function newEditWizardEvent(
  element: Element,
  subWizard?: boolean,
  eventInitDict?: CustomEventInit<Partial<EditWizardRequest>>
): EditWizardEvent {
  return new CustomEvent<EditWizardRequest>('oscd-edit-wizard-request', {
    bubbles: true,
    composed: true,
    ...eventInitDict,
    detail: { element, subWizard, ...eventInitDict?.detail },
  });
}

export function newCreateWizardEvent(
  parent: Element,
  tagName: string,
  subWizard?: boolean,
  eventInitDict?: CustomEventInit<Partial<CreateWizardRequest>>
): CreateWizardEvent {
  return new CustomEvent<CreateWizardRequest>('oscd-create-wizard-request', {
    bubbles: true,
    composed: true,
    ...eventInitDict,
    detail: {
      parent,
      tagName,
      subWizard,
      ...eventInitDict?.detail,
    },
  });
}

export function newCloseWizardEvent(
  wizard: WizardRequest,
  eventInitDict?: CustomEventInit<Partial<WizardRequest>>
): CloseWizardEvent {
  return new CustomEvent<WizardRequest>('oscd-close-wizard', {
    bubbles: true,
    composed: true,
    ...eventInitDict,
    detail: wizard,
  });
}

declare global {
  interface ElementEventMap {
    ['oscd-edit-wizard-request']: EditWizardRequest;
    ['oscd-create-wizard-request']: CreateWizardRequest;
    ['oscd-close-wizard']: WizardEvent;
  }
}
