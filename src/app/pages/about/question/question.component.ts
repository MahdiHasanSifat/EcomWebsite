import { Component } from '@angular/core';
import { question_db } from 'src/app/core/db/question.db';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  query: any [] = question_db;
}
