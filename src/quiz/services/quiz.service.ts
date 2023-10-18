import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Quiz } from '../entities/quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuiz } from '../dtos/createquiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepo: Repository<Quiz>,
  ) {}
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepo.find({ relations: ['questions'] });
  }
  async getOneQuiz(id: number): Promise<Quiz> {
    const quiz = await this.quizRepo.findOne({
      where: { id },
      relations: ['questions'],
    });
    if (!quiz) throw new HttpException('Quiz not exist', HttpStatus.NOT_FOUND);

    return quiz;
  }
  async craeteQuiz(createQuiz: CreateQuiz): Promise<Quiz> {
    return await this.quizRepo.save(createQuiz);
  }
}