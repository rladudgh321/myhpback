import { Injectable } from '@nestjs/common';
import { Consult } from './entity/consult.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Consult)
    private readonly consultRepository: Repository<Consult>,
  ) {}
  async create(name: string, contact: string, consult: string, text: string) {
    const post = this.consultRepository.create({
      name,
      contact,
      consult,
      text,
    });
    await this.consultRepository.save(post);
    return post;
  }

  async findAll() {
    const post = await this.consultRepository.find();
    return post;
  }
}
