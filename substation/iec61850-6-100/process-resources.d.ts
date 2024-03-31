import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
/** Pane rendering `ProcessResources` element with its children */
export declare class ProcessResourcesEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderProcessResources(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
