import { TimeStampEntity } from 'src/generics/db/timestamp.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Quiz } from './quiz.entity';
import { Option } from './option.entity';

@Entity('Questions')
export class Question extends TimeStampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @ManyToOne(() => Quiz, (q) => q.questions, { onDelete: 'CASCADE' })
  quiz: Quiz;

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
