import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './components/auth/jwt-auth.guard';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`server started on port = ${PORT}`));
}
bootstrap();
