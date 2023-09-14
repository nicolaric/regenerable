/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export const AreaOfLife = {
  HEALTH_WELLBEING: 'HEALTH_WELLBEING',
  CAREER_PURPOSE: 'CAREER_PURPOSE',
  PERSONAL_SPIRITUAL: 'PERSONAL_SPIRITUAL',
  FAMILY: 'FAMILY',
  LOVE_LIFE: 'LOVE_LIFE',
  FRIENDS_SOCIAL: 'FRIENDS_SOCIAL',
  PERSONAL_FINANCE: 'PERSONAL_FINANCE',
  COMMUNITY: 'COMMUNITY',
  FUN_RECREATION: 'FUN_RECREATION',
  PHYSICAL_ENVIRONMENT: 'PHYSICAL_ENVIRONMENT',
} as const;

export const Effort = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  HARD: 'HARD'
} as const;

export const Habit = {
  WEAKENING_BAD: 'WEAKENING_BAD',
  STRENGTHENING_GOOD: 'STRENGTHENING_GOOD',
} as const;

export const AddressedSymptom = {
  STRESS: 'STRESS',
} as const

export type HabitType = typeof Habit[keyof typeof Habit];
export type EffortType = typeof Effort;
export type AreaOfLifeType = typeof AreaOfLife[keyof typeof AreaOfLife];
export type AddressedSymptomType = typeof AddressedSymptom;

export type GetExperimentQuery = {
  __typename: 'Experiment';
  id: string;
  name: string;
  areas: AreaOfLifeType[];
  duration: number;
  effort: EffortType;
  habit: HabitType;
  symptomsAddressed: AddressedSymptomType[];
  description: string;
  successWaypoints: string[];
  failureWaypoints: string[];
};

export type ListExperimentsQuery = {
  items: [{
    __typename: 'Experiment';
    id: string;
    name: string;
    effort: typeof Effort;
    duration: number;
  }];
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  async ListExperiments(): Promise<ListExperimentsQuery> {
    const statement = `query ListExperiments {
      listExperiments {
        items {
          id
          name
          effort
          duration
        }
      }
    }`;

    const response = (await API.graphql(
      graphqlOperation(statement)
    )) as any;

    return <ListExperimentsQuery>response.data.listExperiments;
  }

  async GetExperiment(id: string): Promise<GetExperimentQuery> {
    const statement = `query GetExperiment($id: ID!) {
        getExperiment(id: $id) {
          __typename
          id
          name
          areas
          duration
          effort
          habit
          symptoms_addressed
          description
          success_waypoints
          failure_waypoints
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;

    return <GetExperimentQuery>{
      ...response.data.getExperiment,
      symptomsAddressed: response.data.getExperiment.symptoms_addressed,
      successWaypoints: response.data.getExperiment.success_waypoints,
      failureWaypoints: response.data.getExperiment.failure_waypoints
    };
  }
}
