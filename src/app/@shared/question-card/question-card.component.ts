import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuestion } from 'src/app/models/question';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Output() oToggleCard = new EventEmitter();
  @Output() oDelete = new EventEmitter();
  @Output() oEdit = new EventEmitter();
  @Output() oRememberedChange = new EventEmitter();

  @Input() question: IQuestion = {
    id: 1,
    question: 'React to Angular',
    answer: 'No Reaction :)',
    show: false,
  };

  constructor() {}

  ngOnInit(): void {}

  toggleCard() {
    this.oToggleCard.emit(this.question.id);
  }

  markCorrect() {
    this.oRememberedChange.emit({
      id: this.question.id,
      flag: 'correct',
    });
  }
  markIncorrect() {
    this.oRememberedChange.emit({
      id: this.question.id,
      flag: 'incorrect',
    });
  }
  editQuestion() {
    this.oEdit.emit(this.question.id);
  }
  deleteQuestion() {
    this.oDelete.emit(this.question.id);
  }
}
