import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
/** Pane rendering `CommunicationServiceSpecifications` element with its children */
export declare class CommunicationServiceSpecificationsEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderCommunicationServiceSpecifications(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
