import { Module } from '@nestjs/common';
import { EstudantesControler } from './estudantes.controler';
import { EstudantesService } from './estudantes.service';


@Module({
  providers: [EstudantesService],
  controllers: [EstudantesControler]
})
export class EstudantesModule {}