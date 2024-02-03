import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consult } from './entity/consult.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consult])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
