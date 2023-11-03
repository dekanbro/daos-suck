import { DHConnectProvider } from "@daohaus/connect";
import { useState } from "react";
import { Routes } from "./Routes";

export const App = () => {
  const [daoChainId, setDaoChainId] = useState<string | undefined>();
  const urlParams = new URLSearchParams(window.location.search);
  const seedParam = urlParams.get("seed");
  return !seedParam ? (
    <DHConnectProvider daoChainId={daoChainId}>
      <Routes setDaoChainId={setDaoChainId} />
    </DHConnectProvider>
  ) : (
    <Routes setDaoChainId={setDaoChainId} />
  );
};
