declare const sCL6100Tags: readonly ["Private", "FunctionCategory", "ProcessResources", "PowerSystemRelations", "LNodeInputs", "LNodeOutputs", "ProcessEcho", "LNodeSpecNaming", "DOS", "FunctionSclRef", "Variable", "CommunicationServiceSpecifications", "ServiceSpecifications", "BayType", "AllocationRole", "Application", "BehaviorDescription", "Project", "FunctionTemplate", "SubCategory", "FunctionCatRef", "ProcessResource", "Resource", "PowerSystemRelation", "SourceRef", "ControlRef", "VariableApplyTo", "GooseParameters", "SMVParameters", "ReportParameters", "GooseParameters", "SMVParameters", "ReportParameters", "BinaryWiringParameters", "AnalogueWiringParameters", "LogParameters", "SignalRole", "FunctionRef", "BehaviorDescriptionRef", "ProcessResourceRef", "VariableRef", "FunctionCategoryRef", "PowerSystemRelationRef", "FunctionRoleContent", "FunctionRef", "FunctionRole", "FunctionalVariant", "FunctionalVariantGroup", "AllocationRoleRef", "ApplicationSclRef", "InputVar", "OutputVar", "BehaviorReference", "ProjectProcessReference", "SubFunctionTemplate", "GeneralEquipment", "ConductingEquipment", "GeneralEquipment", "ConductingEquipment", "SubFunctionTemplate", "SclFileReference", "SDS", "DAS", "SubscriberLNode", "ControllingLNode", "ProcessEcho", "LogParametersRef", "SDS", "DAS", "SubscriberLNode", "ControllingLNode", "ProcessEcho", "LogParametersRef", "SubscriberLNode", "ControllingLNode", "ProcessEcho", "LogParametersRef", "Val", "GooseParametersRef", "SMVParametersRef", "ReportParametersRef", "BinaryWiringParametersRef", "BinaryWiringParametersRef", "AnalogueWiringParametersRef"];
export type SCL6100Tag = (typeof sCL6100Tags)[number];
export declare const tags6100: Record<SCL6100Tag, {
    parents: SCL6100Tag[];
    children: SCL6100Tag[];
}>;
export declare function isSCL6100Tag(tag: string): tag is SCL6100Tag;
export {};