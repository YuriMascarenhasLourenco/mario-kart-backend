import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  // Cria o contexto da aplicação (sem servidor HTTP)
  const appContext = await NestFactory.createApplicationContext(AppModule);

  // Obtém a instância gerenciada de MyService
  const myService = appContext.get(AppService);

  // Executa um método do serviço
  myService.executeTask();

  // Fecha o contexto, se necessário
  await appContext.close();
}
bootstrap();
