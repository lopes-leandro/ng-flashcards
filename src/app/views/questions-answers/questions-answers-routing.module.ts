import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/@shared/layout/layout.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '',
    component: QuestionAnswerComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsAnswersRoutingModule { }
