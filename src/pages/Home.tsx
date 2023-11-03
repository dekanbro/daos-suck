import { Link as RouterLink, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import Marquee from "react-fast-marquee";

import {
  H2,
  Link,
  ParMd,
  SingleColumnLayout,
  LinkStyles,
  Dialog,
  DialogTrigger,
  Button,
  DialogContent,
  ParSm,
} from "@daohaus/ui";

import { HausAnimated } from "../components/HausAnimated";
import { TARGET_DAO } from "../targetDao";
import { useState } from "react";
import { ConnectButton, useDHConnect } from "@daohaus/connect";
import { FormBuilder } from "@daohaus/form-builder";
import { APP_FORM } from "../legos/forms";
import { MolochFields } from "@daohaus/moloch-v3-fields";
import { AppFieldLookup } from "../legos/legoConfig";
import { useReasons } from "../hooks/useReasons";

const LinkBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const StyledRouterLink = styled(RouterLink)`
  ${LinkStyles}
`;

const Blob = styled.div`
  border-radius: 0.5rem;
  padding: 1rem 10rem;
  margin: 1rem 0 40vh 0;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
`;

const BlobPar = styled(ParSm)`
  margin-bottom: 1rem;
`;

const MarqueeWrapper1 = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  font-size: 10vh;
`;

const MarqueeWrapper2 = styled.div`
  position: fixed;
  bottom: 15vh;
  left: 0;
  right: 0;
  padding: 1rem;
  font-size: 10vh;
`;

const MarqueeWrapper3 = styled.div`
  position: fixed;
  bottom: 30vh;
  left: 0;
  right: 0;
  padding: 1rem;
  font-size: 10vh;
`;

const Emph = styled.strong`
  font-weight: bold;
  font-size: 1.2em;
  color: hsl(39, 100%, 57%);
`;

const Reason = styled.span`
  margin: 0 1rem;
  text-transform: uppercase;
`;

const ReasonWrapper = styled.div`
  span:nth-child(even) {
    color: white;
  }
  span:nth-child(odd) {
    color: hsl(39, 100%, 57%);
  }
`;

const graffiti = [
  "Hacks",
  "DAOs are the past",
  "Time wasted",
  "Silly experiments",
];

export const Home = () => {
  const { address } = useDHConnect();
  const [show, setShow] = useState(false);
  const { reasons, refetch } = useReasons({ chainId: TARGET_DAO.CHAIN_ID });

  const urlParams = new URLSearchParams(window.location.search);
  const seedParam = urlParams.get("seed");

  const reasonsList = [...graffiti, ...(reasons || [])];

  const handleDialog = () => {
    refetch();
  }
  const showBlob = () => {
    setShow(!show);
  };
  return (
    <SingleColumnLayout>
      <H2>DAOs SUCK</H2>
      <Button size="sm" variant="link" onClick={showBlob}>
        ▼
      </Button>
      {show && (
        <>
          {!seedParam && (
            <Dialog onOpenChange={handleDialog}>
              <DialogTrigger asChild>
                <Button variant="outline">Graffiti</Button>
              </DialogTrigger>
              <DialogContent title="Mint">
                <>
                  {!address ? (
                    <ParMd>Connect to Optimism mint</ParMd>
                  ) : (
                    <ParMd>Connected as</ParMd>
                  )}
                  <ConnectButton isSm={address ? true : false} />

                  {address && (
                    <FormBuilder
                      form={APP_FORM.MINT_FORM}
                      targetNetwork={TARGET_DAO.CHAIN_ID}
                      customFields={{ ...MolochFields, ...AppFieldLookup }}
                    />
                  )}
                </>
              </DialogContent>
            </Dialog>
          )}
          <Blob>
            <BlobPar>
              <Emph>Oyez, Oyez, Oyez!</Emph> Gather 'round, one and all, for a
              momentous declaration that shall stir the hearts and minds of our
              esteemed community! Hear ye, hear ye!
            </BlobPar>
            <BlobPar>
              By the decree of the honorable founders and guardians of our
              digital realm, we hereby summon all noble innovators, daring
              entrepreneurs, and visionary coders, irrespective of rank or
              station, to partake in an epic conclave of creativity and skill.
            </BlobPar>
            <BlobPar>
              Be it known to the brave souls of the realm, a grand{" "}
              <Link href="https://twitter.com/DAOhaus">DAOhaus</Link> quest.{" "}
              <Emph>Season 3 Hackathon</Emph> is upon us, resplendent with{" "}
              <Emph>rewards worth 2 ETH of gold pieces</Emph>, and the promise
              of additional spoils from other esteemed sponsors, to be
              distributed by the collective voice of the people, in a manner
              befitting our democratic principles.
            </BlobPar>
            <BlobPar>
              This grand tournament, set to commence in the first week of
              November and culminate in the festive <Emph>"DAOcember"</Emph>{" "}
              event, shall serve as a beacon of glory, celebrating the
              long-awaited release of our prestigious SDK and contract
              documentation and upcoming v1 release.
            </BlobPar>
            <BlobPar>
              Hark! Let it be known that this noble quest seeks to anoint the
              finest craftsmen of our age, who can wield the powers of our
              frontline tools, manipulate the very essence of data layers, and
              master the arcane arts of our wondrous smart contracts. We seek
              nothing less than{" "}
              <Emph>
                the very best DAO tools, products, or applications, bearing the
                mark of ingenuity and excellence.
              </Emph>
            </BlobPar>
            <BlobPar>
              As we march forth into this historic journey, remember that{" "}
              <Emph>
                every coder, every dreamer, and every doer is deemed worthy to
                answer this clarion call.
              </Emph>{" "}
              So muster your spirits, sharpen your wits, and ready your coding
              quills, for this Hackathon shall forge legends and shape
              destinies.
            </BlobPar>
            <BlobPar>
              Let the trumpets blare and the banners unfurl, for this is our
              time, our chance to etch our names into the annals of progress and
              innovation. Let us unite, in the spirit of camaraderie and
              competition, and let our collective genius pave the way to a
              brighter, more enlightened digital frontier.
            </BlobPar>
            <BlobPar>
              <Emph>
                Join us, brave souls, as we embark on this noble adventure, for
                the glory, the honor, and the triumph that await the valiant
                champions of this digital realm! {""}
                <Link href="https://discord.gg/daohaus">
                  Join the Discord
                </Link>{" "}
                to get started.
              </Emph>
            </BlobPar>
          </Blob>
        </>
      )}
      <MarqueeWrapper3>
        <Marquee speed={75}>
          <ReasonWrapper>
            {reasonsList
              .sort(() => (Math.random() > 0.5 ? 1 : -1))
              .map((g, idx) => (
                <Reason key={idx}>
                  / {g.substring(0, TARGET_DAO.GRAFF_LENGTH)} /
                </Reason>
              ))}
          </ReasonWrapper>
        </Marquee>
      </MarqueeWrapper3>
      <MarqueeWrapper2>
        <Marquee speed={100}>
          <ReasonWrapper>
            {reasonsList
              .sort(() => (Math.random() > 0.5 ? 1 : -1))
              .map((g, idx) => (
                <Reason key={idx}>
                  / {g.substring(0, TARGET_DAO.GRAFF_LENGTH)} /
                </Reason>
              ))}
          </ReasonWrapper>
        </Marquee>
      </MarqueeWrapper2>
      <MarqueeWrapper1>
        <Marquee>
          <ReasonWrapper>
            {reasonsList
              .sort(() => (Math.random() > 0.5 ? 1 : -1))
              .map((g, idx) => (
                <Reason key={idx}>
                  / {g.substring(0, TARGET_DAO.GRAFF_LENGTH)} /
                </Reason>
              ))}
          </ReasonWrapper>
        </Marquee>
      </MarqueeWrapper1>
    </SingleColumnLayout>
  );
};
