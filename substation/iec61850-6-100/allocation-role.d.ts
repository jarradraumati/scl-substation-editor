import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
/** Pane rendering `AllocationRole` element with its children */
export declare class AllocationRoleEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderAllocationRole(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
