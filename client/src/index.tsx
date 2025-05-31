import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {App} from "./components/app/app";
import {offers} from "./mocks/offers";
import {offersList} from "./mocks/offers-list";
import {offersSaved} from "./mocks/offers-saved";
import {Provider} from "react-redux";
import {store} from "./store";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <App
            offers={offers}
            offersList={offersList}
            savedOffers={offersSaved}
        />
      </Provider>
    </StrictMode>
);
