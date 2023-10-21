import { TimeStampEntity } from 'src/generics/db/timestamp.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity('Questions')
export class Question extends TimeStampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @ManyToOne(() => Quiz, (q) => q.questions, { onDelete: 'CASCADE' })
  quiz: Quiz;
}
