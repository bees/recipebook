import { ApolloProvider } from "@apollo/react-hooks";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { css, Global } from "@emotion/core";
import React, { FC } from "react";
import { client } from "./client";
import { RecipeList } from "./components/RecipeList";

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <CSSReset />
        <Global
          styles={css`
            #root {
              background: whitesmoke;
              min-height: 100vh;
              font-family: "Inter var", "Inter", sans-serif;
            }
          `}
        />
        <RecipeList />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
