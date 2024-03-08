import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store";
import { Persistor } from "redux-persist/es/types";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import NavigationComponent from "@/components/navigation";
import FooterComponent from "@/components/footer";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
    let persist: Persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                <div className="flex flex-col min-h-screen">
                    <NavigationComponent />
                    <main className="flex-grow">
                        <Component {...pageProps} />
                    </main>
                    <FooterComponent />
                </div>
            </PersistGate>
        </Provider>
    );
}
