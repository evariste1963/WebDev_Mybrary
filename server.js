import express from "express";
import expressLayouts from "express-ejs-layouts";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { indexRouter } from "./routes/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
