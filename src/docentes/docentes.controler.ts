import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import type { Docentes } from './docentes.model';


@Controller('docentes')
export class DocentesControler {

     constructor(private docentesService: DocentesService) {}
    
     @Get('listardocentes')
      listarDocentes(){
        return this.docentesService.listarDocentes();
      }
    
    @Post('criardocente')
      async create(@Body() docentes: Docentes) {
        return this.docentesService.create(docentes)
      }




    }