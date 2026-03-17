import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudantesModule } from './estudantes/estudantes.module';
import { TurmasModule } from './turmas/turmas.module';
import { DocentesModule } from './docentes/docentes.module';

@Module({
  imports: [EstudantesModule, DocentesModule,TurmasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
