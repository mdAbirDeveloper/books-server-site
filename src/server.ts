import mongoose from "mongoose";
import config from "./config";
import { Server } from "http";
import app from "./app";

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`database is connected successfully`);

    server = app.listen(config.port, () => {
      console.log(`Application is listening on port ${config.port}`);
    });
  } catch (error) {}
}

bootstrap();
