import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { Repository } from 'typeorm';
import { CreateQuestion } from '../dtos/createquestion.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}
  async getAllQuestions(): Promise<Question[]> {
    return this.questionRepo.find({
      relations: ['quiz'],
    });
  }

  async createQuestion(
    question: CreateQuestion,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepo.save({
      question: question.question,
    });
    quiz.questions = [newQuestion, ...quiz.questions];
    quiz.save();
    return newQuestion;
  }
  async deleteQuestion(id: number) {
    const deletedQuestion = await this.questionRepo.findOne({ where: { id } });
    if (!deletedQuestion)
      throw new HttpException(
        `Question with this id : ${id} not exist `,
        HttpStatus.NOT_FOUND,
      );
    await this.questionRepo.delete(id);
    return `Question with this id : ${id} deleted successfully `;
  }
}
