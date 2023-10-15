import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Student } from './entities/student.entites';

@Injectable()
export class StudentService {
  students: Student[] = [
    {
      id: 1,
      name: 'iheb meftah',
      age: 23,
      adress: ['Tunis', 'Gabes'],
    },
  ];

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const student = this.students.find((std) => std.id === +id);
    if (!student) {
      throw new HttpException('Student not exist', HttpStatus.NOT_FOUND);
    }
    return student;
  }
  create(createdStudent: any) {
    this.students.push(createdStudent);
    return this.students;
  }
  update(id: number, updateStudent: any) {
    const studentIndex = this.findOne(id);
    if (!studentIndex) {
      throw new HttpException('Student not exist', HttpStatus.NOT_FOUND);
    }
    updateStudent;
    return 'updated';
  }
  delete(id: number) {
    const studentIndex = this.students.findIndex((std) => std.id === +id);
    if (studentIndex === -1) {
      throw new HttpException('Student not exist', HttpStatus.NOT_FOUND);
    }
    this.students.splice(studentIndex);
    return 'Student with this id : ' + id + ' deleted';
  }
}
