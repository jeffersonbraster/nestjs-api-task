import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const port = 3000;
  await app.listen(port);
  logger.log(`App listening on port ${port}`);
}
bootstrap();
