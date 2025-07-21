import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post()
  async createUser(@Body() data: any) {
    return this.userService.createUser(data);
  }

  @Get(':id')
  findUserById(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() data: any) {
    return this.userService.updateUser(id, data);
  }

}
