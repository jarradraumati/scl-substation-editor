import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './transformer-winding-editor.js';
/** [[`SubstationEditor`]] subeditor for a child-less `PowerTransformer` element. */
export declare class PowerTransformerEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element PowerTransformer */
    element: Element;
    /** PowerTransformer name attribute */
    get name(): string;
    /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
    showfunctions: boolean;
    renderContentPane(): TemplateResult;
    private renderTransformerWinding;
    renderContentIcon(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderPowerTransformerContainer(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;