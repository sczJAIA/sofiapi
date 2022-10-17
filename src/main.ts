import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Configurar títulos de documentación
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('MongoDB Sofi REST API')
    .setDescription('API REST para Sofi con MongoDB')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
