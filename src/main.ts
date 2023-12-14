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

async function bootstrap() {
  dotenv.config({
    path: path.resolve(
      process.env.NODE_ENV === 'prod'
        ? './src/config/env/.prod.env'
        : process.env.NODE_ENV === 'dev'
        ? './src/config/env/.dev.env'
        : './src/config/env/.stage.env',
    ),
  });

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} -[${level}]- ${message}`;
        }),
      ),
    }),
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.use((req, res, next) => {
    // 모든 요청에 대한 로깅
    console.log(
      `${req.method} ${req.url} ${res.statusCode} - ${
        res.getHeader('content-length') || 0
      } bytes`,
    );
    next();
  });

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
