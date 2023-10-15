import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Student } from './entities/student.entites';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateStudentDto } from './dtos/updatestudent.dto';
import { CreateStudentDto } from './dtos/createstudent.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.studentRepo.find();
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentRepo.findOne({
      where: { id },
    });
    if (!student)
      throw new HttpException('Student not exist', HttpStatus.NOT_FOUND);

    return student;
  }
  async create(createdStudent: CreateStudentDto) {
    const student = await this.studentRepo.create({ ...createdStudent });
    return this.studentRepo.save(student);
  }
  async update(id: number, updateStudent: UpdateStudentDto) {
    const student = await this.studentRepo.preload({
      id: +id,
      ...updateStudent,
    });
    if (!student) throw new HttpException('not exist ', HttpStatus.NOT_FOUND);

    return this.studentRepo.save(student);
  }
  async delete(id: number) {
    const student = await this.studentRepo.findOne({
      where: { id },
    });
    if (!student)
      throw new HttpException('Student not exist', HttpStatus.NOT_FOUND);

    this.studentRepo.delete(id);

    return 'Student with this id : ' + id + ' deleted';
  }
}
