import { Module } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { DocentesControler } from './docentes.controler';
import { PrismaService } from 'src/shared/prisma.service';

@Module({
  providers: [DocentesService,PrismaService],
  controllers: [DocentesControler]
})
export class DocentesModule{}