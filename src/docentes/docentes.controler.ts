import { Controller, Get } from '@nestjs/common';
import { DocentesService } from './docentes.service';


@Controller('docentes')
export class DocentesControler {

     constructor(private docentesService: DocentesService) {}
    
      @Get()
      listarDocentes(){
        return this.docentesService.listarDocentes();
      }
      




    }