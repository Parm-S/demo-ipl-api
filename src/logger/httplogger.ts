import morgan from "morgan";
import fs from "fs";
import path from "path";

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

const httpLogger = morgan(
  ":method :url :status :response-time ms - :res[content-length]",
  {
    stream: accessLogStream,
  }
);

export { httpLogger };
