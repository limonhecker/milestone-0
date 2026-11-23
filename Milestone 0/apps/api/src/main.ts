import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { RequestIdMiddleware } from './common/middleware/request-id.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });
  
  app.use(new RequestIdMiddleware().use);
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true, 
    transform: true 
  }));
  app.enableCors({ 
    origin: process.env.APP_BASE_URL || 'http://localhost:5173', 
    credentials: true 
  });
  
  const port = process.env.PORT || 4000;
  await app.listen(port);
  Logger.log(`API running on http://localhost:${port}`);
}
bootstrap();