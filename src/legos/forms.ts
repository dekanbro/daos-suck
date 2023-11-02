import { FIELD } from "@daohaus/moloch-v3-legos";
import { CustomFormLego } from "./legoConfig";
import { APP_FIELD } from "./fields";
import { APP_TX } from "./tx";
import { TXLego } from "@daohaus/utils";

const PROPOSAL_SETTINGS_FIELDS = [FIELD.PROPOSAL_EXPIRY, FIELD.PROP_OFFERING];

export const APP_FORM: Record<string, CustomFormLego> = {
  TEST_FORM: {
    id: "TEST_FORM",
    title: "Super Signal Form",
    subtitle: "Super Signal Proposal",
    description: "Ratify on-chain using a DAO proposal.",
    requiredFields: { title: true, description: true, testField: true },
    log: true,
    tx: APP_TX.TEST_TX,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      APP_FIELD.TEST_FIELD,
      ...PROPOSAL_SETTINGS_FIELDS,
    ],
  },
  MINT_FORM: {
    id: "MINT_FORM",
    description: "Mint and leave some graf",
    requiredFields: { reason: true },
    log: true,
    tx: APP_TX.MINT as any,
    submitButtonText: "Mint",
    fields: [
      {
        ...FIELD.TITLE,
        ...{
          id: "reason",
          label: "Reason Grafitti",
          placeholder: "Why do DAOs suck?",
          rules: {
            maxLength: {
              value: 42,
              message: "Graff must be 42 characters or less",
            },
          },
        },
      },
    ],
  },
};
