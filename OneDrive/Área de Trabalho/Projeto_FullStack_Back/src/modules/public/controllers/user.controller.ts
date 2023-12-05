/* eslint-disable @typescript-eslint/no-explicit-any */
import { Body, Controller, Get, Post, Req, Put, Inject, Delete } from '@nestjs/common';
import { UpdateUserDto } from '../../../types/dtos/user.dto';
import { UpdateUserProfileDto } from '../../../types/dtos/userProfile.dto';
import { API_VERSIONS } from '../../../utils/consts';
import { PrismaService } from '../../external/services/prisma.service';
import { UserService } from '../services/user.service';
import { MonitoringService } from '../../monitoring/monitoring.service';

@Controller({
  path: 'user',
  version: API_VERSIONS,
})
export class PublicUserController {
  constructor(
    @Inject(MonitoringService)
    private readonly monitoringService: MonitoringService,
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) { }


  @Post('')
  async createUserProfile(@Body() model: UpdateUserProfileDto) {
    const data = this.userService.createProfile(model);

    this.monitoringService.log('ERRO no post user');

    return data;
  }

  @Put('')
  async updateUser(@Body() model: UpdateUserDto) {
    await this.userService.update(model, model.id);

    this.monitoringService.log('ERRO no put user');
  }

  @Get('')
  async getList() {

    const users = await this.prismaService.user.findMany({
      include: {
        profile: true,
      },
    });
    const countUser = await this.userService.count();

    this.monitoringService.log('ERRO no get user');

    return {
      data: users,
      total: countUser,
    };
  }

  @Get(':id')
  async getOneProfile(@Req() req: any) {

    const user = await this.userService.findOne({
      where: { id: parseInt(req.params.id) },
      include: {
        profile: true,
      },
    });

    delete user.password;
    delete user.UserPermission;

    this.monitoringService.log('ERRO no get user/:id');

    return user;
  }

  @Delete('delete')
  async deleteUser(@Body() model: any) {
    await this.userService.delete({ id: model.id }, model.id);

    this.monitoringService.log('ERRO no delete user');
  }
}
