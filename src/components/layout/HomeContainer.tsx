import { DHLayout, useDHConnect } from "@daohaus/connect";
import { Footer, H4 } from "@daohaus/ui";
import { Outlet, useLocation } from "react-router-dom";
import { TARGET_DAO } from "../../targetDao";
import { TXBuilder } from "@daohaus/tx-builder";
import { styled } from "styled-components";

export const HomeContainer = () => {
  const location = useLocation();
  const { publicClient, address } = useDHConnect();

  const DHLayoutWrapper = styled.div`
    margin-top: -190px;
  `;

  return (
    <DHLayoutWrapper>
      <DHLayout navLinks={[]} pathname={location.pathname}>
        <TXBuilder
          publicClient={publicClient}
          chainId={TARGET_DAO.CHAIN_ID}
          appState={{ memberAddress: address }}
        >
          <Outlet />
        </TXBuilder>
      </DHLayout>
    </DHLayoutWrapper>
  );
};
