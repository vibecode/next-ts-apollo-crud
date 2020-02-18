import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateTaskInput = {
  title: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createTask?: Maybe<Task>,
  updateTask?: Maybe<Task>,
  changeStatus?: Maybe<Task>,
  deleteTask?: Maybe<Task>,
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput
};


export type MutationChangeStatusArgs = {
  id: Scalars['Int'],
  status: TaskStatus
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int']
};

export type Query = {
   __typename?: 'Query',
  hello?: Maybe<Scalars['String']>,
  tasks: Array<Task>,
  task?: Maybe<Task>,
};


export type QueryTasksArgs = {
  status?: Maybe<TaskStatus>
};


export type QueryTaskArgs = {
  id: Scalars['Int']
};

export type Task = {
   __typename?: 'Task',
  id: Scalars['Int'],
  title: Scalars['String'],
  status: TaskStatus,
};

export enum TaskStatus {
  Active = 'active',
  Completed = 'completed'
}

export type UpdateTaskInput = {
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>,
  status?: Maybe<TaskStatus>,
};


export type TasksQueryVariables = {
  status?: Maybe<TaskStatus>
};


export type TasksQuery = (
  { __typename?: 'Query' }
  & { tasks: Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);


export const TasksDocument = gql`
    query Tasks($status: TaskStatus) {
  tasks(status: $status) {
    id
    title
    status
  }
}
    `;
export type TasksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TasksQuery, TasksQueryVariables>, 'query'>;

    export const TasksComponent = (props: TasksComponentProps) => (
      <ApolloReactComponents.Query<TasksQuery, TasksQueryVariables> query={TasksDocument} {...props} />
    );
    
export type TasksProps<TChildProps = {}> = ApolloReactHoc.DataProps<TasksQuery, TasksQueryVariables> & TChildProps;
export function withTasks<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TasksQuery,
  TasksQueryVariables,
  TasksProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TasksQuery, TasksQueryVariables, TasksProps<TChildProps>>(TasksDocument, {
      alias: 'tasks',
      ...operationOptions
    });
};

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        return ApolloReactHooks.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, baseOptions);
      }
export function useTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, baseOptions);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = ApolloReactCommon.QueryResult<TasksQuery, TasksQueryVariables>;