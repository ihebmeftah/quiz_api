import { Param, Body, Get, Controller, Post } from '@nestjs/common';
import { CreateQuiz } from '../dtos/createquiz.dto';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizservices: QuizService) {}
  @Get()
  getAllQuiz(): Promise<Quiz[]> {
    return this.quizservices.getAllQuiz();
  }
  @Get(':id')
  getOneQuiz(@Param('id') id: number): Promise<Quiz> {
    return this.quizservices.getOneQuiz(id);
  }
  @Post()
  createQuiz(@Body() body: CreateQuiz): Promise<Quiz> {
    return this.quizservices.craeteQuiz(body);
  }
}
