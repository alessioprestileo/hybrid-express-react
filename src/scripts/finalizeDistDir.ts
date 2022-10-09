import { copyFileSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const DEPLOY_COMMAND = "gcloud app deploy --project alessiopweb";

const generatePackageJson = (): void => {
  const rawdata = readFileSync("package.json");
  const newPackage = JSON.parse(rawdata as unknown as string);
  delete newPackage.scripts.prepare;
  newPackage.scripts.deploy = DEPLOY_COMMAND;

  writeFileSync(resolve("dist/package.json"), JSON.stringify(newPackage));
};

generatePackageJson();
copyFileSync("package-lock.json", "dist/package-lock.json");
copyFileSync("app.yaml", "dist/app.yaml");
