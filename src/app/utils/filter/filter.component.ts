import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  phrase: string = '';
  filterKey: string = '';

  @Output() keyPhrase: EventEmitter<string> = new EventEmitter();
  @Output() speciesChange: EventEmitter<string> = new EventEmitter();
  @Output() ageChange: EventEmitter<string> = new EventEmitter();
  @Output() genderChange: EventEmitter<string> = new EventEmitter();
  @Output() sizeChange: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNameSearch() {
    this.keyPhrase.emit(this.phrase);
  }

  ifSpeciesSelected(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.speciesChange.emit(target.value);
  }

  ifAgeSelected(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.ageChange.emit(target.value);
  }

  ifGenderSelected(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.genderChange.emit(target.value);
  }

  ifSizeSelected(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.sizeChange.emit(target.value);
  }

  onDeleteFilters() {
    this.router.navigate(['/']).then(() => {
      this.router.navigate(['/animal-list']);
    });
  }
}
