import { Module } from '@nestjs/common';
import { EstudantesModule } from './estudantes/estudantes.module';
import { TurmasModule } from './turmas/turmas.module';
import { DocentesModule } from './docentes/docentes.module';
import { PrismaService } from './shared/prisma.service';

@Module({
  imports: [EstudantesModule, DocentesModule,TurmasModule],
  controllers: [],
  providers: [ PrismaService]
})
export class AppModule {}
