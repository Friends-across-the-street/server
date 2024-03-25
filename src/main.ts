import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { winstonLogger } from './global/winston.config';
import { SocketIoAdapter } from './global/adapter/socket.adapter';

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

  // Versioning
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });

  // Apply Socket.io Adapter
  app.useWebSocketAdapter(new SocketIoAdapter(app));

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
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
      'access-token',
    )
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  // Listen Port
  await app.listen(3000);
}
bootstrap();
