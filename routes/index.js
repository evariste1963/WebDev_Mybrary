import express from "express";
const router = express.Router();

export const indexRouter = router.get("/", (req, res) => {
  res.send("Hello World!");
});
