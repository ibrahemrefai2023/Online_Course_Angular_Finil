import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';




interface Question {
  question: string;
  options: { option: string; selected: boolean }[];
}

interface Exam {
  id: number;
  name: string;
  questions: Question[];
}
@Component({
  selector: 'app-createexam',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink,
    RouterModule],
  templateUrl: './createexam.component.html',
  styleUrl: './createexam.component.css'
})
export class CreateexamComponent {
  examSaved: boolean = false;
  exam: Exam = {
    id: 1,
    name: '',
    questions: [
      {
        question: "",
        options: [
          { option: "", selected: false },
          { option: "", selected: false },
          { option: "", selected: false }
        ]
      }
    ]
  };

  constructor() {}

  addQuestion() {
    const id = this.exam.questions.length + 1;
    this.exam.questions.push({
      question: '',
      options: [
        { option: '', selected: false },
        { option: '', selected: false },
        { option: '', selected: false }
      ]
    });
  }

  deleteQuestion(index: number) {
    this.exam.questions.splice(index, 1);
  }
  saveExam() {
    
    console.log('Saving exam:', this.exam);

    this.exam.questions = [];

    this.examSaved = true;
    
    setTimeout(() => {
      this.examSaved = false;
    }, 3000);
  }
  addOption(questionIndex: number) {
    this.exam.questions[questionIndex].options.push({ option: '', selected: false });
  }
  
  deleteOption(questionIndex: number, optionIndex: number) {
    this.exam.questions[questionIndex].options.splice(optionIndex, 1);
  }
  
  getTotalQuestions(): number {
    return this.exam.questions.length;
  }
  
  getTotalOptions(questionIndex: number): number {
    return this.exam.questions[questionIndex].options.length;
  }
}
