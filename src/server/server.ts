import express from "express";
import path from "path";

const PORT = process.env.PORT || 8080;
const app = express();

const publicDir =
  process.env.NODE_ENV === "DEVELOPMENT" ? "public-dev" : "public";
const publicPath = path.join(__dirname, publicDir);
app.use(express.static(publicPath, { etag: true }));

app.get("/api", (_req, res) => {
  res.send("🎉 Hello TypeScript! 🎉");
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

export const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
