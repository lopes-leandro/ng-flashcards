import { Component, OnInit, ViewChild } from '@angular/core';
import { IQuestion } from 'src/app/models/question';
import { NgForm } from '@angular/forms';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  @ViewChild('flashForm', { static: true }) flashForm: NgForm;

  flashs: IQuestion[] = [{
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

  editing = false;
  editingId: number;
  flash = {
    question: '',
    answer: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    const flash = this.flashs.find(f => f.id === id);
    flash.show = !flash.show;
  }

  handleDelete(id: number) {
    const flashId = this.flashs.findIndex(flash => flash.id === id);
    this.flashs.splice(flashId, 1);
  }

  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;
    // TODO: Adicionaremos lógica de edição após adicionar o formulário
    const flash = this.flashs.find(f => f.id === id);
    this.flash.question = flash.question;
    this.flash.answer = flash.answer;
  }

  handleRememberedChange({ id, flag }) {
    const flash = this.flashs.find(f => f.id === id);
    flash.remembered = flag;
  }

  handleSubmit(): void {
    this.flashs.push({
      id: getRandomNumber(),
      show: false,
      ...this.flash,
    });
    this.handleClear();
  }

  handleClear(): void {
    this.flash = {
      question: '',
      answer: ''
    };
    this.flashForm.reset();
  }

  handleUpdate(): void {
    const flash = this.flashs.find(f => f.id === this.editingId);
    flash.question = this.flash.question;
    flash.answer = this.flash.answer;
    this.handleCancel();
  }
  handleCancel(): void {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

}
