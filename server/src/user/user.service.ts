import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: any) {
    return this.prismaService.user.create({ data });
  }

  async findUserById(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async updateUser(id: string, data: any) {
    return this.prismaService.user.update({ where: { id }, data });
  }

  async deleteUser(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }

  async findAllUsers() {
    return this.prismaService.user.findMany();
  }

  async countUsers() {
    return this.prismaService.user.count();
  }

  async findUsersWithPagination(skip: number, take: number) {
    return this.prismaService.user.findMany({ skip, take });
  } 

  async findUsersWithFilter(filter: any) {
    return this.prismaService.user.findMany({ where: filter });
  }



}

