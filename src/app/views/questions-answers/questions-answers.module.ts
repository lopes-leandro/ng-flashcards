import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../@shared/shared.module';
import { QuestionsAnswersRoutingModule } from './questions-answers-routing.module';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { QuestionCardComponent } from './../../@shared/question-card/question-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuestionAnswerComponent, QuestionCardComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    QuestionsAnswersRoutingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class QuestionsAnswersModule { }
