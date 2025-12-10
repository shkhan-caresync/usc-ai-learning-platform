import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { AppModule } from "./modules/app/app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.setGlobalPrefix("api");

  const port = process.env.API_PORT || 4000;
  await app.listen(Number(port), "0.0.0.0");
  console.log(`API listening on http://localhost:${port}/api`);
}

bootstrap();
