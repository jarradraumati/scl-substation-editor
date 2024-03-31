import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
/** Pane rendering `FunctionCatRef` element with its children */
export declare class FunctionCatRefEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderFunctionCatRef(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
