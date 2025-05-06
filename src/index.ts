import { Hono } from "hono";

import web from "./web";

const app = new Hono();

app.route("/", web);

export default app;
