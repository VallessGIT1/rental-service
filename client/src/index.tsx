import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {App} from "./components/app/app";
import {Provider} from "react-redux";
import {store} from "./store";
import {Toaster} from "react-hot-toast";
import {AuthProvider} from "./hooks/auth-provider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AuthProvider>
        <Provider store={store}>
          <App/>
        </Provider>
      </AuthProvider>
      <Toaster position="top-right"/>
    </StrictMode>
);
