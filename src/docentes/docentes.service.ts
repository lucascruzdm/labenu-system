import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class DocentesService {
     constructor(private prisma: PrismaService) {}
    
      async listarDocentes() {
        return this.prisma.docentes.findMany();
    }
}