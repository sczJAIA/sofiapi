"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('MongoDB Sofi REST API')
        .setDescription('API REST para Sofi con MongoDB')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    process.on('uncaughtException', (err) => {
        common_1.Logger.warn(err, 'LOGGER', false);
    });
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map