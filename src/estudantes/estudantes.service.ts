import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class EstudantesService {
     constructor(private prisma: PrismaService) {}
    
      async listarEstudantes() {
        return this.prisma.estudantes.findMany();
      }
    
    }