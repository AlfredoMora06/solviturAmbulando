import React from "react"
import i18next from "i18next"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"
import { I18nextProvider } from "react-i18next"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { SnackbarProvider } from "notistack"
import { ThemeProvider, StyledEngineProvider } from "@mui/material"

import "./index.css"
import App from "./App"
import store from "./store"
import {initializeI18next} from "./translations"
import theme from "./theme"

let persistor = persistStore(store)

initializeI18next()

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <I18nextProvider i18n={i18next}>
            <ReduxProvider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </PersistGate>
            </ReduxProvider>
          </I18nextProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
