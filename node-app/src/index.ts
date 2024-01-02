import express from "express";
import { sum, sub } from "./math";

const app = express();

/**
 * 1. Implement the following function calls correctly.
 * Make sure you are able to get the values from query parameters and pass them to the functions.
 * Parameters are called a and b.
 *
 * Once you do, you'll see some type errors. Try fixing that by either casting to number here or changing the types in the function arguments
 * See the sub route for a hint
 *
 * 2. Try to see the cntents of sum by splitting the window vertically/horisontally and opening the file in the other pane.
 */

app.get("/sum", (req, res) => {
  res.json({
    sum: sum(1, 2),
  });
});

app.get("/sub", (req, res) => {
  res.json({
    sub: sub(parseInt(req.query.a as string), parseInt(req.query.b as string)),
  });
});

app.listen(3000);
