import React, { FC } from "react";
import { useGetRecipesQuery } from "../generated/graphql";
import { Card } from "./Card";
import { Heading, Stack } from "@chakra-ui/core";

export const RecipeList: FC = () => {
  const { error, loading, data } = useGetRecipesQuery();

  if (error) return <>"Error"</>;
  if (loading) return <>"loading ..."</>;

  // update once CRA has been updated to not puke on optional chaining
  const recipes = (data && data.recipes) || [];

  return (
    <Stack spacing={8}>
      {recipes.map(recipe => (
        <Card key={recipe.id}>
          <Heading>
            <a href="#">{recipe.name}</a>
          </Heading>
        </Card>
      ))}
    </Stack>
  );
};
