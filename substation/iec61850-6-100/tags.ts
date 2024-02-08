const tFunctionCategory = ['FunctionCatRef', 'SubCategory'] as const;
const tProcessResources = ['ProcessResource'] as const;
const tProcessResource = ['Resource'] as const;
const tPowerSystemRelations = ['PowerSystemRelation'] as const;
const tLNodeInputs = ['SourceRef'] as const;
const tLNodeOutputs = ['ControlRef'] as const;
const tVariable = ['VariableApplyTo'] as const;
const tServiceSpecifications = [
  'GooseParameters',
  'SMVParameters',
  'ReportParameters',
  'BinaryWiringParameters',
  'AnalogueWiringParameters',
  'LogParameters',
] as const;
const tCommServiceSpecifications = [
  'GooseParameters',
  'SMVParameters',
  'ReportParameters',
] as const;
const tFunctionRef = ['FunctionalVariantRef', 'SignalRole'] as const;
const tFunctionRoleContent = [
  'FunctionRef',
  'BehaviorDescriptionRef',
  'ProcessResourceRef',
  'VariableRef',
  'FunctionCategoryRef',
  'PowerSystemRelationRef',
] as const;
const tFunctionRole = ['FunctionRoleContent'] as const;
const tAllocationRole = ['FunctionRef'] as const;
const tApplication = [
  'FunctionRole',
  'FunctionalVariant',
  'FunctionalVariantGroup',
  'AllocationRoleRef',
  'ApplicationSclRef',
] as const;
const tBehaviorDescription = [
  'InputVar',
  'OutputVar',
  'BehaviorReference',
] as const;
const tProject = ['ProjectProcessReference'] as const;
const tFunctionTemplate = [
  'SubFunctionTemplate',
  'GeneralEquipment',
  'ConductingEquipment',
] as const;
const tSubFunctionTemplate = [
  'GeneralEquipment',
  'ConductingEquipment',
  'SubFunctionTemplate',
] as const;
const tFunctionSclRef = ['SclFileReference'] as const;
const tDOS = [
  'SDS',
  'DAS',
  'SubscriberLNode',
  'ControllingLNode',
  'ProcessEcho',
  'LogParametersRef',
] as const;
const tSDS = [
  'SDS',
  'DAS',
  'SubscriberLNode',
  'ControllingLNode',
  'ProcessEcho',
  'LogParametersRef',
] as const;
const tDAS = [
  'SubscriberLNode',
  'ControllingLNode',
  'ProcessEcho',
  'LogParametersRef',
  'Val',
] as const;
const tSubscriberLNode = [
  'GooseParametersRef',
  'SMVParametersRef',
  'ReportParametersRef',
  'BinaryWiringParametersRef',
] as const;
const tControllingLNode = [
  'BinaryWiringParametersRef',
  'AnalogueWiringParametersRef',
] as const;
const tInputVarRef = ['FunctionalVariantRef'] as const;
const tLNodeDataRef = ['FunctionalVariantRef'] as const;
const tLNodeInputRef = ['FunctionalVariantRef'] as const;
const tLNodeOutputRef = ['FunctionalVariantRef'] as const;
const tOutputVarRef = ['FunctionalVariantRef'] as const;
const tGooseParameters = [
  'L2CommParameters',
  'L3IPv4CommParameters',
  'L3IPv6CommParameters',
] as const;
const tSMVParameters = [
  'L2CommParameters',
  'L3IPv4CommParameters',
  'L3IPv6CommParameters',
] as const;
const tBehaviorDescriptionRef = [
  'FunctionalVariantRef',
  'InputVarRef',
  'OutputVarRef',
] as const;
const tSignalRole = [
  'FunctionalVariantRef',
  'LNodeDataRef',
  'LNodeInputRef',
  'LNodeOutputRef',
] as const;
const tFunctionalVariantGroup = ['FunctionalVariant'] as const;
const tAllocationRoleRef = ['FunctionalVariantRef'] as const;
const tFunctionalVariant = ['FunctionalSubVariant', 'VariableRef'] as const;
const tFunctionalSubVariant = ['FunctionalSubVariant', 'VariableRef'] as const;
const tVariableRef = ['FunctionalVariantRef'] as const;
const tSourceRef = [
  'AnalogueWiringParametersRef',
  'BinaryWiringParametersRef',
  'GooseParametersRef',
  'ReportParametersRef',
  'SMVParametersRef',
] as const;
const tControlRef = [
  'AnalogueWiringParametersRef',
  'BinaryWiringParametersRef',
] as const;
const tSubCategory = ['FunctionCatRef', 'SubCategory'] as const;
const tApplicationSclRef = ['SclFileReference'] as const;

const sCL6100Tags = [
  'Private',
  'AllocationRole',
  'Application',
  'BayType',
  'BehaviorDescription',
  'CheckoutID',
  'CommunicationServiceSpecifications',
  'DOS',
  'FunctionCategory',
  'FunctionSclRef',
  'FunctionTemplate',
  'LNodeInputs',
  'LNodeOutputs',
  'LNodeSpecNaming',
  'PowerSystemRelations',
  'ProcessEcho',
  'ProcessResources',
  'Project',
  'ServiceSpecifications',
  'Variable',
  ...tAllocationRole,
  ...tApplication,
  ...tBehaviorDescription,
  ...tBehaviorDescriptionRef,
  ...tCommServiceSpecifications,
  ...tControllingLNode,
  ...tDAS,
  ...tDOS,
  ...tFunctionCategory,
  ...tFunctionRef,
  ...tFunctionRole,
  ...tFunctionRoleContent,
  ...tFunctionSclRef,
  ...tFunctionTemplate,
  ...tGooseParameters,
  ...tLNodeInputs,
  ...tLNodeOutputs,
  ...tPowerSystemRelations,
  ...tProcessResource,
  ...tProcessResources,
  ...tProject,
  ...tSDS,
  ...tServiceSpecifications,
  ...tSignalRole,
  ...tSMVParameters,
  ...tSubFunctionTemplate,
  ...tSubscriberLNode,
  ...tVariable,
  ...tFunctionalVariant,
  ...tVariableRef,
  ...tSourceRef,
  ...tControlRef,
] as const;

export type SCL6100Tag = (typeof sCL6100Tags)[number];

export const tags6100: Record<
  SCL6100Tag,
  {
    parents: SCL6100Tag[];
    children: SCL6100Tag[];
  }
> = {
  Private: {
    parents: [],
    children: [
      'AllocationRole',
      'Application',
      'BayType',
      'BehaviorDescription',
      'CheckoutID',
      'CommunicationServiceSpecifications',
      'DOS',
      'FunctionCategory',
      'FunctionSclRef',
      'FunctionTemplate',
      'LNodeInputs',
      'LNodeOutputs',
      'LNodeSpecNaming',
      'PowerSystemRelations',
      'ProcessEcho',
      'ProcessResources',
      'Project',
      'ServiceSpecifications',
      'Variable',
    ],
  },
  SubCategory: {
    parents: ['FunctionCategory', 'SubCategory'],
    children: [...tSubCategory],
  },
  GooseParameters: {
    parents: ['CommunicationServiceSpecifications', 'ServiceSpecifications'],
    children: [...tGooseParameters],
  },
  SMVParameters: {
    parents: ['CommunicationServiceSpecifications', 'ServiceSpecifications'],
    children: [...tSMVParameters],
  },
  ReportParameters: {
    parents: ['CommunicationServiceSpecifications', 'ServiceSpecifications'],
    children: [],
  },
  SignalRole: {
    parents: ['FunctionRef'],
    children: [...tSignalRole],
  },
  FunctionRef: {
    parents: ['FunctionRoleContent', 'AllocationRole'],
    children: [...tFunctionRef],
  },
  BehaviorDescriptionRef: {
    parents: ['FunctionRoleContent'],
    children: [...tBehaviorDescriptionRef],
  },
  ProcessResourceRef: {
    parents: ['FunctionRoleContent'],
    children: [],
  },
  VariableRef: {
    parents: ['FunctionRoleContent', 'FunctionalVariant'],
    children: [...tVariableRef],
  },
  FunctionCategoryRef: {
    parents: ['FunctionRoleContent'],
    children: [],
  },
  PowerSystemRelationRef: {
    parents: ['FunctionRoleContent'],
    children: [],
  },
  FunctionRoleContent: {
    parents: ['FunctionRole'],
    children: [...tFunctionRoleContent],
  },
  FunctionRole: {
    parents: ['Application'],
    children: [...tFunctionRole],
  },
  FunctionalVariant: {
    parents: ['Application'],
    children: [...tFunctionalVariant],
  },
  FunctionalVariantGroup: {
    parents: ['Application'],
    children: [...tFunctionalVariantGroup],
  },
  AllocationRoleRef: {
    parents: ['Application'],
    children: [...tAllocationRoleRef],
  },
  ApplicationSclRef: {
    parents: ['Application'],
    children: [...tApplicationSclRef],
  },
  InputVar: {
    parents: ['BehaviorDescription'],
    children: [],
  },
  OutputVar: {
    parents: ['BehaviorDescription'],
    children: [],
  },
  BehaviorReference: {
    parents: ['BehaviorDescription'],
    children: [],
  },
  ProjectProcessReference: {
    parents: ['Project'],
    children: [],
  },
  SubFunctionTemplate: {
    parents: ['FunctionTemplate'],
    children: [...tSubFunctionTemplate],
  },
  GeneralEquipment: {
    parents: ['FunctionTemplate', 'SubFunctionTemplate'],
    children: [],
  },
  ConductingEquipment: {
    parents: ['FunctionTemplate', 'SubFunctionTemplate'],
    children: [],
  },
  FunctionCatRef: {
    parents: ['FunctionCategory'],
    children: [],
  },
  ProcessResource: {
    parents: ['ProcessResources'],
    children: [...tProcessResource],
  },
  Resource: {
    parents: ['ProcessResource'],
    children: [],
  },
  PowerSystemRelation: {
    parents: ['PowerSystemRelations'],
    children: [],
  },
  SourceRef: {
    parents: ['LNodeInputs'],
    children: [...tSourceRef],
  },
  ControlRef: {
    parents: ['LNodeOutputs'],
    children: [...tControlRef],
  },
  VariableApplyTo: {
    parents: ['Variable'],
    children: [],
  },
  BinaryWiringParameters: {
    parents: ['ServiceSpecifications'],
    children: [],
  },
  AnalogueWiringParameters: {
    parents: ['ServiceSpecifications'],
    children: [],
  },
  LogParameters: {
    parents: ['ServiceSpecifications'],
    children: [],
  },
  FunctionCategory: {
    parents: ['Private'],
    children: [...tFunctionCategory],
  },
  ProcessResources: {
    parents: ['Private'],
    children: ['ProcessResource'],
  },
  PowerSystemRelations: {
    parents: ['Private'],
    children: [...tPowerSystemRelations],
  },
  LNodeInputs: {
    parents: ['Private'],
    children: [...tLNodeInputs],
  },
  LNodeOutputs: {
    parents: ['Private'],
    children: [...tLNodeOutputs],
  },
  ProcessEcho: {
    parents: ['DOS', 'DAS', 'SDS'],
    children: [],
  },
  LNodeSpecNaming: {
    parents: ['Private'],
    children: [],
  },
  DOS: {
    parents: ['Private'],
    children: [...tDOS],
  },
  FunctionSclRef: {
    parents: ['Private'],
    children: [...tFunctionSclRef],
  },
  Variable: {
    parents: ['Private'],
    children: [...tVariable],
  },
  CommunicationServiceSpecifications: {
    parents: ['Private'],
    children: [...tCommServiceSpecifications],
  },
  ServiceSpecifications: {
    parents: ['Private'],
    children: [...tServiceSpecifications],
  },
  BayType: {
    parents: ['Private'],
    children: [],
  },
  AllocationRole: {
    parents: ['Private'],
    children: [...tAllocationRole],
  },
  Application: {
    parents: ['Private'],
    children: [...tApplication],
  },
  BehaviorDescription: {
    parents: ['Private'],
    children: [...tBehaviorDescription],
  },
  Project: {
    parents: ['Private'],
    children: [...tProject],
  },
  FunctionTemplate: {
    parents: ['Private'],
    children: [...tFunctionTemplate],
  },
  SclFileReference: {
    parents: ['ApplicationSclRef', 'FunctionSclRef'],
    children: ['Private'],
  },
  SDS: {
    parents: ['DOS'],
    children: [...tSDS],
  },
  DAS: {
    parents: ['DOS'],
    children: [...tDAS],
  },
  SubscriberLNode: {
    parents: ['DOS', 'DAS', 'SDS'],
    children: [...tSubscriberLNode],
  },
  ControllingLNode: {
    parents: ['DOS'],
    children: [...tControllingLNode],
  },
  LogParametersRef: {
    parents: ['DOS'],
    children: [],
  },
  GooseParametersRef: {
    parents: ['SubscriberLNode'],
    children: [],
  },
  SMVParametersRef: {
    parents: ['SubscriberLNode'],
    children: [],
  },
  ReportParametersRef: {
    parents: ['SubscriberLNode'],
    children: [],
  },
  BinaryWiringParametersRef: {
    parents: ['SubscriberLNode', 'ControllingLNode'],
    children: [],
  },
  Val: {
    parents: ['DAS'],
    children: [],
  },
  AnalogueWiringParametersRef: {
    parents: ['ControllingLNode'],
    children: [],
  },
  FunctionalVariantRef: {
    parents: [
      'AllocationRoleRef',
      'BehaviorDescriptionRef',
      'FunctionCategoryRef',
      'FunctionRef',
      'FunctionRole',
      'InputVarRef',
      'LNodeDataRef',
      'LNodeInputRef',
      'LNodeOutputRef',
      'OutputVarRef',
      'PowerSystemRelationRef',
      'ProcessResourceRef',
      'SignalRole',
      'VariableRef',
    ],
    children: [],
  },
  InputVarRef: {
    parents: ['BehaviorDescriptionRef'],
    children: [...tInputVarRef],
  },
  LNodeDataRef: {
    parents: ['SignalRole'],
    children: [...tLNodeDataRef],
  },
  LNodeInputRef: {
    parents: ['SignalRole'],
    children: [...tLNodeInputRef],
  },
  LNodeOutputRef: {
    parents: ['SignalRole'],
    children: [...tLNodeOutputRef],
  },
  OutputVarRef: {
    parents: ['BehaviorDescriptionRef'],
    children: [...tOutputVarRef],
  },
  L2CommParameters: {
    parents: ['GooseParameters', 'SMVParameters'],
    children: [],
  },
  L3IPv4CommParameters: {
    parents: ['GooseParameters', 'SMVParameters'],
    children: [],
  },
  L3IPv6CommParameters: {
    parents: ['GooseParameters', 'SMVParameters'],
    children: [],
  },
  CheckoutID: {
    parents: ['Private'],
    children: [],
  },
  FunctionalSubVariant: {
    parents: ['FunctionalVariant'],
    children: [...tFunctionalSubVariant],
  },
};

const tagSet = new Set<string>(sCL6100Tags);

export function isSCL6100Tag(tag: string): tag is SCL6100Tag {
  return tagSet.has(tag);
}
