import { Get, Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CreateQuestion } from '../dtos/createquestion.dto';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionservice: QuestionService,
    private readonly quizServices: QuizService,
  ) {}
  @Get()
  async getAllQuestions() {
    return this.questionservice.getAllQuestions();
  }
  @Get(':id')
  async getQuestionById(@Param('id') id: number) {
    return this.questionservice.getQuestionById(id);
  }
  @Post()
  async createQuestion(@Body() question: CreateQuestion) {
    const quiz = await this.quizServices.getOneQuiz(question.quizId);
    return this.questionservice.createQuestion(question, quiz);
  }

  @Delete(':id')
  async deleteQuestion(@Param('id') id: number) {
    return await this.questionservice.deleteQuestion(id);
  }
}
