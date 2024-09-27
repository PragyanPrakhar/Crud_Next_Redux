"use client";
import { Provider } from "react-redux";
import appStore from "./appStore";
export default function ProviderStore({ children }) {
    return <Provider store={appStore}>{children}</Provider>;
}
