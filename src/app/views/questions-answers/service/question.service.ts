import { Injectable } from '@angular/core';
import { IQuestion } from 'src/app/models/question';
import { BehaviorSubject } from 'rxjs';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  questions: IQuestion[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: getRandomNumber(),
    },
  ];

  questions$ = new BehaviorSubject<IQuestion[]>(this.questions);

  addQuestion(question: IQuestion) {
    this.questions = [
      ...this.questions,
      {
        ...question,
        show: false,
        id: getRandomNumber(),
      },
    ];
    this.questions$.next(this.questions);
  }

  toggleQuestion(id: number) {
    const index = this.questions.findIndex((f) => f.id === id);
    this.questions = [
      ...this.questions.slice(0, index),
      {
        ...this.questions[index],
        show: !this.questions[index].show,
      },
      ...this.questions.slice(index + 1),
    ];
    this.questions$.next(this.questions);
  }

  deleteQuestion(id: number) {
    const index = this.questions.findIndex((f) => f.id === id);
    this.questions = [
      ...this.questions.slice(0, index),
      ...this.questions.slice(index + 1),
    ];
    this.questions$.next(this.questions);
  }

  rememberedChange(id: number, flag: 'correct' | 'incorrect') {
    const index = this.questions.findIndex((f) => f.id === id);
    this.questions = [
      ...this.questions.slice(0, index),
      {
        ...this.questions[index],
        remembered: flag,
      },
      ...this.questions.slice(index + 1),
    ];
    this.questions$.next(this.questions);
  }

  updateQuestion(id, updateQuestion: IQuestion) {
    const index = this.questions.findIndex((f) => f.id === id);
    this.questions = [
      ...this.questions.slice(0, index),
      {
        ...this.questions[index],
        ...this.questions,
      },
      ...this.questions.slice(index + 1),
    ];
    this.questions$.next(this.questions);
  }

  getQuestion(id: number): IQuestion {
    const index = this.questions.findIndex((f) => f.id === id);
    return this.questions[index];
  }
}
