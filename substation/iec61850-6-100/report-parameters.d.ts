import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
/** Pane rendering `ReportParameters` element with its children */
export declare class ReportParametersEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderReportParameters(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
