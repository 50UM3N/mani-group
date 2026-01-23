import dotenv from "dotenv";
import cli from "next/dist/cli/next-start.js";
dotenv.config({ path: ".env" });

cli.nextStart({
  port: process.env.PORT || 3000,
});