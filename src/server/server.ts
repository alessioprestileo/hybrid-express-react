import express from "express";
import path from "path";

const PORT = process.env.PORT || 8080;
const app = express();

const publicDir = "public";
const publicPath = path.join(__dirname, publicDir);
app.use(express.static(publicPath, { etag: true }));

if (process.env.NODE_ENV === "DEVELOPMENT") {
  const publicDirDev = "public-dev";
  const publicPathDev = path.join(__dirname, publicDirDev);
  app.use(express.static(publicPathDev, { etag: true }));
  app.get("/react/*", (_req, res) => {
    res.sendFile(path.join(publicPathDev, "react", "index.html"));
  });
} else {
  app.get("/react/*", (_req, res) => {
    res.sendFile(path.join(publicPath, "react", "index.html"));
  });
}

app.get("/api", (_req, res) => {
  res.send("🎉 Hello TypeScript! 🎉");
});

export const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
