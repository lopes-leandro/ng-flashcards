import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [{
  path: 'questions',
  loadChildren: () => import('./views/questions-answers/questions-answers.module').then(m => m.QuestionsAnswersModule)
},{
  path: '**',
  redirectTo: 'questions',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
