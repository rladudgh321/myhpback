import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateConsultReqDto } from './dto/req.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('consult')
  async createConsult(
    @Body() { name, contact, consult, text }: CreateConsultReqDto,
  ) {
    return this.adminService.create(name, contact, consult, text);
  }

  @Get('consult')
  async findAll() {
    return this.adminService.findAll();
  }
}
