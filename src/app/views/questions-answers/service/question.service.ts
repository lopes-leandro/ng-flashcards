import { Injectable } from '@angular/core';
import { IQuestion } from 'src/app/models/question';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  questions: IQuestion[] = [{
    question: 'Question 1',
    answer: 'Answer 1',
    show: false,
    id: getRandomNumber(),
  }, {
    question: 'Question 2',
    answer: 'Answer 2',
    show: false,
    id: getRandomNumber(),
  }, {
    question: 'Question 3',
    answer: 'Answer 3',
    show: false,
    id: getRandomNumber(),
  }];

  addQuestion(question: IQuestion) {
    this.questions.push({...question, show: false, id: getRandomNumber()});
  }

  toggleQuestion(id: number) {
    const question = this.questions.find(f => f.id === id);
    question.show = !question.show;
  }

  deleteQuestion(id: number){
    const index = this.questions.findIndex(f => f.id === id);
    this.questions.splice(index, 1);
  }

  rememberedChange(id: number, flag: 'correct' | 'incorrect') {
    const question = this.questions.find(f => f.id === id);
    question.remembered = flag;
  }

  updateQuestion(id, updateQuestion: IQuestion) {
    const question = this.questions.find(f => f.id === id);
    question.question = updateQuestion.question;
    question.answer = updateQuestion.answer;
  }

  getQuestion(id: number): IQuestion {
    const question = this.questions.find(f => f.id === id);
    return question;
  }

}
