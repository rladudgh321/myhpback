import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 4000;

  const configService = app.get(ConfigService);
  const stage = configService.get('STAGE');

  // Swagger
  // const SWAGGER_ENVS = ['local', 'dev'];
  // if (SWAGGER_ENVS.includes(stage)) {
  //   app.use(
  //     ['/docs', '/docs-json'],
  //     basicAuth({
  //       challenge: true,
  //       users: {
  //         [configService.get('swagger.user')]:
  //           configService.get('swagger.password'),
  //       },
  //     }),
  //   );
  const config = new DocumentBuilder()
    .setTitle('myhp')
    .setDescription('this has to be used by authorized user')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const swaggerCustomOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };
  SwaggerModule.setup('docs', app, document, swaggerCustomOptions);
  // }

  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(port);
  Logger.log(`listening on port ${port}`);
  Logger.log(`STATE=${process.env.STAGE}`);
}
bootstrap();
