import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
/** Pane rendering `FunctionRef` element with its children */
export declare class FunctionRefEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderFunctionRef(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
