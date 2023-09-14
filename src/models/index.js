// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TestBasic1, TestBasic, AddressedSymptom, Duration, Effort, Experiment, AreaOfLife } = initSchema(schema);

export {
  TestBasic1,
  TestBasic,
  AddressedSymptom,
  Duration,
  Effort,
  Experiment,
  AreaOfLife
};