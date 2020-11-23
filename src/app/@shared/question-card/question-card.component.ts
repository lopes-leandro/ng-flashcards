import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/models/question';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input() question: IQuestion = {
    id: 1,
    question: 'React to Angular',
    answer: 'No Reaction :)',
    show: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
