import { Injectable } from '@nestjs/common';

@Injectable()
export class EstudantesService {
     constructor(private prisma: PrismaService) {}
    
      async listarEstudantes() {
        return this.prisma.cliente.findMany();
      }
    
    }