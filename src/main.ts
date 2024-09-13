import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // set global prefix
  app.setGlobalPrefix('api');

  // enable URI versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('Suwit REST API')
    .setDescription('The suwit API documentation')
    .setVersion('1.0')
    .addOAuth2({
      type: 'oauth2',
      flows: {
        password: {
          tokenUrl: `http://${process.env.DOMAIN}:${process.env.PORT}/api/v1/auth/login`,
          scopes: {},
        },
      },
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
