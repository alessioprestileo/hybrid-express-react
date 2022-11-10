import { cpSync } from "fs";
import { resolve } from "path";

cpSync(resolve("src/server/public"), resolve("dist/src/server/public"), {
  recursive: true,
});
