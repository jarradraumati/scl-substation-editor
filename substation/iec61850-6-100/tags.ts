const tFunctionCategory = ['SubCategory', 'FunctionCatRef'] as const;
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
const tFunctionRef = ['SignalRole'] as const;
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

const sCL6100Tags = [
  'Private',
  'FunctionCategory',
  'ProcessResources',
  'PowerSystemRelations',
  'LNodeInputs',
  'LNodeOutputs',
  'ProcessEcho',
  'LNodeSpecNaming',
  'DOS',
  'FunctionSclRef',
  'Variable',
  'CommunicationServiceSpecifications',
  'ServiceSpecifications',
  'BayType',
  'AllocationRole',
  'Application',
  'BehaviorDescription',
  'Project',
  'FunctionTemplate',
  ...tFunctionCategory,
  ...tProcessResources,
  ...tProcessResource,
  ...tPowerSystemRelations,
  ...tLNodeInputs,
  ...tLNodeOutputs,
  ...tVariable,
  ...tCommServiceSpecifications,
  ...tServiceSpecifications,
  ...tFunctionRef,
  ...tFunctionRoleContent,
  ...tFunctionRole,
  ...tAllocationRole,
  ...tApplication,
  ...tBehaviorDescription,
  ...tProject,
  ...tFunctionTemplate,
  ...tSubFunctionTemplate,
  ...tFunctionSclRef,
  ...tDOS,
  ...tSDS,
  ...tDAS,
  ...tSubscriberLNode,
  ...tControllingLNode,
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
      'ProcessResources',
      'ServiceSpecifications',
      'Application',
      'Variable',
      'LNodeSpecNaming',
      'LNodeInputs',
      'DOS',
      'AllocationRole',
      'BehaviorDescription',
    ],
  },
  SubCategory: {
    parents: ['FunctionCategory'],
    children: [],
  },
  GooseParameters: {
    parents: ['CommunicationServiceSpecifications', 'ServiceSpecifications'],
    children: [],
  },
  SMVParameters: {
    parents: ['CommunicationServiceSpecifications', 'ServiceSpecifications'],
    children: [],
  },
  ReportParameters: {
    parents: ['CommunicationServiceSpecifications', 'ServiceSpecifications'],
    children: [],
  },
  SignalRole: {
    parents: ['FunctionRef'],
    children: [],
  },
  FunctionRef: {
    parents: ['FunctionRoleContent', 'AllocationRole'],
    children: [...tFunctionRef],
  },
  BehaviorDescriptionRef: {
    parents: ['FunctionRoleContent'],
    children: [],
  },
  ProcessResourceRef: {
    parents: ['FunctionRoleContent'],
    children: [],
  },
  VariableRef: {
    parents: ['FunctionRoleContent'],
    children: [],
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
    children: [],
  },
  FunctionalVariantGroup: {
    parents: ['Application'],
    children: [],
  },
  AllocationRoleRef: {
    parents: ['Application'],
    children: [],
  },
  ApplicationSclRef: {
    parents: ['Application'],
    children: [],
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
    children: [],
  },
  ControlRef: {
    parents: ['LNodeOutputs'],
    children: [],
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
    parents: ['DOS'],
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
    parents: ['FunctionSclRef'],
    children: [],
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
    parents: ['DOS'],
    children: [...tSubscriberLNode],
  },
  ControllingLNode: {
    parents: ['DOS'],
    children: [],
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
};

const tagSet = new Set<string>(sCL6100Tags);

export function isSCL6100Tag(tag: string): tag is SCL6100Tag {
  return tagSet.has(tag);
}
