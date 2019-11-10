import React, { FC } from "react";
import { Box } from "@chakra-ui/core";

export const Card: FC = ({ children }) => (
  <Box p={5} borderWidth="1px" bg="white">
    {children}
  </Box>
);
