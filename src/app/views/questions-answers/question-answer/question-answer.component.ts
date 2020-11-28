import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { QuestionService } from './../service/question.service';
import { NgForm } from '@angular/forms';
import { IQuestion } from 'src/app/models/question';
import { Subject, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss'],
})
export class QuestionAnswerComponent implements OnInit, OnDestroy {
  @ViewChild('flashForm', { static: true }) flashForm: NgForm;

  mumbers = [];
  questions: IQuestion[] = [];
  editing = false;
  editingId: number;
  questionState: IQuestion = {
    question: '',
    answer: '',
    id: 0,
    show: false,
  };
  subscription: Subscription;

  constructor(private questionService: QuestionService) {
    this.questions = this.questionService.questions;
  }

  ngOnInit(): void {
    this.subscription = this.questionService.questions$.subscribe(
      (values) => (this.questions = values)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  trackByQuestionId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    this.questionService.toggleQuestion(id);
  }

  handleDelete(id: number) {
    this.questionService.deleteQuestion(id);
  }

  handleEdit(id: number) {
    this.questionState = this.questionService.getQuestion(id);
    this.editing = true;
    this.editingId = id;
  }

  handleRememberedChange({ id, flag }) {
    this.questionService.rememberedChange(id, flag);
  }

  handleSubmit(): void {
    this.questionService.addQuestion(this.questionState);
    this.handleClear();
  }

  handleClear(): void {
    this.questionState = {
      question: '',
      answer: '',
      show: false,
      id: 0,
    };
    this.flashForm.reset();
  }

  handleUpdate(): void {
    this.questionService.updateQuestion(this.editingId, this.questionState);
    this.handleCancel();
  }

  handleCancel(): void {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

  handleSubjectTest() {
    const subject = new Subject();
    subject
      .pipe(
        filter((value) => value !== 1),
        tap((value) => console.warn(value))
      )
      .subscribe((value) => this.mumbers.push(value));
    subject.next(1);
    subject.next(2);
    subject.next(3);
    console.warn(this.mumbers);
  }
}
