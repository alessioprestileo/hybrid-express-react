import waitPort from "wait-port";

import { server } from "./server";

const PORT = parseInt(process.env.PORT || "0") || 8080;

describe("server ::", () => {
  it("should be listening", async () => {
    const isOpen = await waitPort({ port: PORT });
    expect(isOpen).toBe(true);
    server.close();
  });
});
