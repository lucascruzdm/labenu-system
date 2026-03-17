import { Module } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { DocentesControler } from './docentes.controler';

@Module({
  providers: [DocentesService],
  controllers: [DocentesControler]
})
export class ClientesModule {}