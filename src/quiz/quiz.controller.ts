import { Param, Body, Get, Controller, Post } from '@nestjs/common';
import { CreateQuiz } from './dtos/createquiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizservices: QuizService) {}
  @Get()
  getAllQuiz() {
    return this.quizservices.getAllQuiz();
  }
  @Get(':id')
  getOneQuiz(@Param('id') id: number) {
    return this.quizservices.getOneQuiz(id);
  }
  @Post()
  createQuiz(@Body() body: CreateQuiz) {
    return this.quizservices.craeteQuiz(body);
  }
}
