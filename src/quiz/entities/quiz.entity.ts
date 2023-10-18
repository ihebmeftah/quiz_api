import { TimeStampEntity } from 'src/generics/db/timestamp.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity('quizes')
export class Quiz extends TimeStampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({
    default: 1,
  })
  isActive: boolean;
  @OneToMany(() => Question, (q) => q.quiz)
  questions: Question[];
}
