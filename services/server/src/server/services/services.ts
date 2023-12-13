import { supportedChainsMap } from "../../sourcify-chains";
import { StorageService } from "./StorageService";
import { VerificationService } from "./VerificationService";
import config from "config";

export const services = {
  verification: new VerificationService(supportedChainsMap),
  storage: new StorageService({
    ipfsRepositoryServiceOptions: {
      ipfsApi: process.env.IPFS_API as string,
      repositoryPath: config.get("repository.path"),
      repositoryServerUrl: process.env.REPOSITORY_SERVER_URL as string,
      repositoryVersion: "0.1",
    },
  }),
};
