import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening at http://localhost:${port}`);
});
