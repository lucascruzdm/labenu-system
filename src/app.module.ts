import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudantesModule } from './estudantes/estudantes.module';
import { TurmasModule } from './turmas/turmas.module';
import { DocentesModule } from './docentes/docentes.module';
import { PrismaService } from './shared/prisma.service';

@Module({
  imports: [EstudantesModule, DocentesModule,TurmasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
