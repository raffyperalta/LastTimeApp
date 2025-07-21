import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private readonly prismaService: PrismaService) {}

  async createActivity(userId: number, name: string) {
    return this.prismaService.activity.create({data: { userId, name } });
  }
  
  findActivitiesByUserId(userId: number) {
    return this.prismaService.activity.findMany({ where: { userId } });
  }

  findAllActivities() {
    return this.prismaService.activity.findMany();
  }

  findOneActivity(id: number) {
    return this.prismaService.activity.findUnique({ where: { id },
    include: { records: true } });
  }

  async updateActivity(id: number, data: any) {
    return this.prismaService.activity.update({ where: { id }, data });
  }
}
