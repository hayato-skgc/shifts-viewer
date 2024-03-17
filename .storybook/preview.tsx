import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { Preview } from "@storybook/react";
import React from "react";
import { theme } from '../src/pages/_app';


export const decorators = [(Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )]
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
