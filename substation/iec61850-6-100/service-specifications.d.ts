import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
/** Pane rendering `ServiceSpecifications` element with its children */
export declare class ServiceSpecificationsEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderServiceSpecifications(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
