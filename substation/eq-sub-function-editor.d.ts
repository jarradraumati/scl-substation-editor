import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
/** Pane rendering `EqSubFunction` element with its children */
export declare class EqSubFunctionEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** The edited `EqSubFunction` element */
    element: Element;
    showfunctions: boolean;
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderEqSubFunctions(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;