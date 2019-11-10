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
};

export type Recipe = {
   __typename?: 'Recipe',
  cookTime?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  ingredients: Array<Maybe<Scalars['String']>>,
  instructions: Array<Maybe<Scalars['String']>>,
  name: Scalars['String'],
  source?: Maybe<Scalars['String']>,
  totalTime?: Maybe<Scalars['String']>,
  yield?: Maybe<Scalars['Int']>,
};

export type RootQueryType = {
   __typename?: 'RootQueryType',
  /** Get all recipes */
  recipes?: Maybe<Array<Recipe>>,
};

export type GetRecipesQueryVariables = {};


export type GetRecipesQuery = (
  { __typename?: 'RootQueryType' }
  & { recipes: Maybe<Array<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'name'>
  )>> }
);


export const GetRecipesDocument = gql`
    query getRecipes {
  recipes {
    id
    name
  }
}
    `;
export type GetRecipesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetRecipesQuery, GetRecipesQueryVariables>, 'query'>;

    export const GetRecipesComponent = (props: GetRecipesComponentProps) => (
      <ApolloReactComponents.Query<GetRecipesQuery, GetRecipesQueryVariables> query={GetRecipesDocument} {...props} />
    );
    
export type GetRecipesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetRecipesQuery, GetRecipesQueryVariables> & TChildProps;
export function withGetRecipes<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetRecipesQuery,
  GetRecipesQueryVariables,
  GetRecipesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetRecipesQuery, GetRecipesQueryVariables, GetRecipesProps<TChildProps>>(GetRecipesDocument, {
      alias: 'getRecipes',
      ...operationOptions
    });
};

/**
 * __useGetRecipesQuery__
 *
 * To run a query within a React component, call `useGetRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecipesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, baseOptions);
      }
export function useGetRecipesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, baseOptions);
        }
export type GetRecipesQueryHookResult = ReturnType<typeof useGetRecipesQuery>;
export type GetRecipesLazyQueryHookResult = ReturnType<typeof useGetRecipesLazyQuery>;
export type GetRecipesQueryResult = ApolloReactCommon.QueryResult<GetRecipesQuery, GetRecipesQueryVariables>;