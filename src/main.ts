import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { VersioningType, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // set global prefix
  app.setGlobalPrefix('api');

  // enable URI versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // enable validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // auth token url
  const tokenUrl =
    process.env.DOMAIN === 'http://localhost'
      ? `${process.env.DOMAIN}:${process.env.PORT}/api/v1/auth/login`
      : `${process.env.DOMAIN}/api/v1/auth/login`;

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The NestJS API description')
    .setVersion('1.0')
    .addOAuth2({
      type: 'oauth2',
      flows: {
        password: {
          tokenUrl: tokenUrl,
          scopes: {},
        },
      },
    })
    .addTag('auth', 'Authentication')
    .addTag('users', 'Users management')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
