import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerTestBasic1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestBasic1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly TestBasics?: (TestBasic | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestBasic1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestBasic1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly TestBasics: AsyncCollection<TestBasic>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestBasic1 = LazyLoading extends LazyLoadingDisabled ? EagerTestBasic1 : LazyTestBasic1

export declare const TestBasic1: (new (init: ModelInit<TestBasic1>) => TestBasic1) & {
  copyOf(source: TestBasic1, mutator: (draft: MutableModel<TestBasic1>) => MutableModel<TestBasic1> | void): TestBasic1;
}

type EagerTestBasic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestBasic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TestExperiment?: string | null;
  readonly TestAddressedSymptom?: string | null;
  readonly TestDuration?: number | null;
  readonly TestEffort?: string | null;
  readonly TestAreaOfLife?: string | null;
  readonly TestHabit?: string | null;
  readonly image_url?: string | null;
  readonly testbasic1ID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestBasic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestBasic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TestExperiment?: string | null;
  readonly TestAddressedSymptom?: string | null;
  readonly TestDuration?: number | null;
  readonly TestEffort?: string | null;
  readonly TestAreaOfLife?: string | null;
  readonly TestHabit?: string | null;
  readonly image_url?: string | null;
  readonly testbasic1ID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestBasic = LazyLoading extends LazyLoadingDisabled ? EagerTestBasic : LazyTestBasic

export declare const TestBasic: (new (init: ModelInit<TestBasic>) => TestBasic) & {
  copyOf(source: TestBasic, mutator: (draft: MutableModel<TestBasic>) => MutableModel<TestBasic> | void): TestBasic;
}

type EagerAddressedSymptom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AddressedSymptom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddressedSymptom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AddressedSymptom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AddressedSymptom = LazyLoading extends LazyLoadingDisabled ? EagerAddressedSymptom : LazyAddressedSymptom

export declare const AddressedSymptom: (new (init: ModelInit<AddressedSymptom>) => AddressedSymptom) & {
  copyOf(source: AddressedSymptom, mutator: (draft: MutableModel<AddressedSymptom>) => MutableModel<AddressedSymptom> | void): AddressedSymptom;
}

type EagerDuration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Duration, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MinutesPerDay?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDuration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Duration, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MinutesPerDay?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Duration = LazyLoading extends LazyLoadingDisabled ? EagerDuration : LazyDuration

export declare const Duration: (new (init: ModelInit<Duration>) => Duration) & {
  copyOf(source: Duration, mutator: (draft: MutableModel<Duration>) => MutableModel<Duration> | void): Duration;
}

type EagerEffort = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Effort, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEffort = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Effort, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Effort = LazyLoading extends LazyLoadingDisabled ? EagerEffort : LazyEffort

export declare const Effort: (new (init: ModelInit<Effort>) => Effort) & {
  copyOf(source: Effort, mutator: (draft: MutableModel<Effort>) => MutableModel<Effort> | void): Effort;
}

type EagerExperiment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Experiment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Level?: string | null;
  readonly Duration?: string | null;
  readonly DesiredOutcome?: string | null;
  readonly Hypothesis?: string | null;
  readonly AddressedSymptoms?: string | null;
  readonly Measures?: string | null;
  readonly Effort?: string | null;
  readonly SuccessWaypoint?: string | null;
  readonly FailureWayPoint?: string | null;
  readonly TimeFrame?: string | null;
  readonly FurtherInfo?: string | null;
  readonly AreasOfLife?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExperiment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Experiment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Level?: string | null;
  readonly Duration?: string | null;
  readonly DesiredOutcome?: string | null;
  readonly Hypothesis?: string | null;
  readonly AddressedSymptoms?: string | null;
  readonly Measures?: string | null;
  readonly Effort?: string | null;
  readonly SuccessWaypoint?: string | null;
  readonly FailureWayPoint?: string | null;
  readonly TimeFrame?: string | null;
  readonly FurtherInfo?: string | null;
  readonly AreasOfLife?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Experiment = LazyLoading extends LazyLoadingDisabled ? EagerExperiment : LazyExperiment

export declare const Experiment: (new (init: ModelInit<Experiment>) => Experiment) & {
  copyOf(source: Experiment, mutator: (draft: MutableModel<Experiment>) => MutableModel<Experiment> | void): Experiment;
}

type EagerAreaOfLife = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AreaOfLife, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAreaOfLife = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AreaOfLife, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AreaOfLife = LazyLoading extends LazyLoadingDisabled ? EagerAreaOfLife : LazyAreaOfLife

export declare const AreaOfLife: (new (init: ModelInit<AreaOfLife>) => AreaOfLife) & {
  copyOf(source: AreaOfLife, mutator: (draft: MutableModel<AreaOfLife>) => MutableModel<AreaOfLife> | void): AreaOfLife;
}