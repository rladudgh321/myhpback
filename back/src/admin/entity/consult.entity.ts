import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Consult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name?: string;

  @Column()
  contact: string;

  @Column()
  consult?: string;

  @Column()
  text?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
