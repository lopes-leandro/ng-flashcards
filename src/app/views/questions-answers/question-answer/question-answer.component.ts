import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from './../service/question.service';
import { NgForm } from '@angular/forms';
import { IQuestion } from 'src/app/models/question';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  @ViewChild('flashForm', { static: true }) flashForm: NgForm;

  questions: IQuestion[] = [];
  editing = false;
  editingId: number;
  question: IQuestion = {
    question: '',
    answer: '',
    id: undefined,
    show: undefined
  };

  constructor(private questionService: QuestionService) {
    this.questions = this.questionService.questions;
  }

  ngOnInit(): void {
  }

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    this.questionService.toggleQuestion(id);
  }

  handleDelete(id: number) {
    this.questionService.deleteQuestion(id);
  }

  handleEdit(id: number) {
    this.question = this.questionService.getQuestion(id);
    this.editing = true;
    this.editingId = id;
  }

  handleRememberedChange({ id, flag }) {
    this.questionService.rememberedChange(id, flag);
  }

  handleSubmit(): void {
    this.questionService.addQuestion(this.question);
    this.handleClear();
  }

  handleClear(): void {
    this.question = {
      question: '',
      answer: '',
      show: undefined,
      id: undefined
    };
    this.flashForm.reset();
  }

  handleUpdate(): void {
    this.questionService.updateQuestion(this.editingId, this.question);
    this.handleCancel();
  }
  handleCancel(): void {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

}
