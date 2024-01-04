import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as winston from 'winston';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { winstonLogger } from './global/winston.config';

async function bootstrap() {
  // Setting configuration
  dotenv.config({
    path: path.resolve(
      process.env.NODE_ENV === 'prod'
        ? './src/global/config/env/.prod.env'
        : process.env.NODE_ENV === 'dev'
        ? './src/global/config/env/.dev.env'
        : './src/global/config/env/.stage.env',
    ),
  });

  const app = await NestFactory.create(AppModule, { logger: winstonLogger });

  // Apply Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // Swagger Config
  const swaggerConfig = new DocumentBuilder()
    .setTitle('DongA')
    .setDescription('DongA API description')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  // Listen Port
  await app.listen(3000);
}
bootstrap();
