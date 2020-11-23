import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "./../../@shared/shared.module";
import { QuestionsAnswersRoutingModule } from './questions-answers-routing.module';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { QuestionCardComponent } from './../../@shared/question-card/question-card.component';

@NgModule({
  declarations: [QuestionAnswerComponent, QuestionCardComponent],
  imports: [
    SharedModule,
    CommonModule,
    QuestionsAnswersRoutingModule
  ]
})
export class QuestionsAnswersModule { }
