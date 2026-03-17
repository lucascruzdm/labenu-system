import { Module } from '@nestjs/common';
import { EstudantesControler } from './estudantes.controler';
import { EstudantesService } from './estudantes.service';
import { PrismaService } from 'src/shared/prisma.service';


@Module({
  providers: [EstudantesService,PrismaService],
  controllers: [EstudantesControler]
})
export class EstudantesModule {}