import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { Docentes } from './docentes.model';

@Injectable()
export class DocentesService {
     constructor(private prisma: PrismaService) {}
    
      async listarDocentes() {
        return this.prisma.docentes.findMany();
     }

     async create(data: Docentes) {
  return this.prisma.docentes.create({
    data: {
      ...data,
      dataNascimento: new Date(formatDateBRToISO(data.dataNascimento as string))
    }
  });
}


    }

function formatDateBRToISO(dateBR: string): string {
  const [day, month, year] = dateBR.split("/");
  return `${year}-${month}-${day}`;
}

