import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { Estudantes } from './estudantes.model';

@Injectable()
export class EstudantesService {
     constructor(private prisma: PrismaService) {}
    
      async listarEstudantes() {
        return this.prisma.estudantes.findMany();
      }
    
      async create(data: Estudantes) {
        return this.prisma.estudantes.create({ data: {
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