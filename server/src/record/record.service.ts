import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecordService {
  constructor(private readonly prismaService: PrismaService) {}

  async createRecord(activityId: number, userId: number, data: any) {
    return this.prismaService.record.create({
      data: {
        activityId,
        userId,
        ...data
      }
    });
  }

  async findLatestRecordByActivityId(activityId: number) {
    return this.prismaService.record.findFirst({
      where: { activityId },
      orderBy: { timestamp: 'desc' }
    });
  }
  
  async updateRecord(id: number, data: any) {
    return this.prismaService.record.update({
      where: { id },
      data
    });
  } 
}
