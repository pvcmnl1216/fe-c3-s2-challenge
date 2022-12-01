import { Component } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  notes =NOTES;
  searchText: string = '';

  search() {
    if (this.searchText === '' || !this.searchText)
    this.notes = NOTES;
  else {
    this.notes = NOTES;
    this.notes = this.notes.filter(fruit => fruit.title?.startsWith(this.searchText.toLowerCase()));
  }

  }
}
