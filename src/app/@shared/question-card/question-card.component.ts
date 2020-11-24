import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuestion } from 'src/app/models/question';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Output() onToggleCard = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRememberedChange = new EventEmitter();

  @Input() question: IQuestion = {
    id: 1,
    question: 'React to Angular',
    answer: 'No Reaction :)',
    show: false,
  };
  
  constructor() {}

  ngOnInit(): void {}

  toggleCard() {
    this.onToggleCard.emit(this.question.id);
  }

  markCorrect() {
    this.onRememberedChange.emit({
      id: this.question.id,
      flag: 'correct',
    });
  }
  markIncorrect() {
    this.onRememberedChange.emit({
      id: this.question.id,
      flag: 'incorrect',
    });
  }
  editQuestion() {
    this.onEdit.emit(this.question.id);
  }
  deleteQuestion(){
    this.onDelete.emit(this.question.id);
  }
}
