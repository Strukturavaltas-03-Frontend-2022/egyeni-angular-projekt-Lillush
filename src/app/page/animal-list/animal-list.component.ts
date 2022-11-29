import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/model/animal';
import { AnimalService } from 'src/app/service/animal-service.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  animalList: Observable<Animal[]> = this.animalService.fetchAnimalData();

  p: number = 1;

  phrase: string = '';
  species: string = '';
  age: string = '';
  gender: string = '';
  size: string = '';

  filterKey: string = '';

  deletedAnimal: Animal = new Animal();

  @Input() animal: Animal = new Animal();

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {}

  onSearchAnimalName(phrase: string) {
    this.phrase = phrase;
  }

  onSpeciesChange(species: string) {
    this.species = species;
  }

  onAgeChange(age: string) {
    this.age = age;
  }

  onGenderChange(gender: string) {
    this.gender = gender;
  }

  onSizeChange(size: string) {
    this.size = size;
  }

  onDeleteAnimalCard(animal: Animal) {
    this.deletedAnimal = animal;
  }
}
