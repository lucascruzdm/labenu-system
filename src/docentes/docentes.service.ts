import { Injectable } from '@nestjs/common';

@Injectable()
export class DocentesService {
     constructor(private prisma: PrismaService) {}
    
      async listarDocentes() {
        return this.prisma.cliente.findMany();
      }
    
    }