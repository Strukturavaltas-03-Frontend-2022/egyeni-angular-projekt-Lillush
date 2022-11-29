import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Animal } from 'src/app/model/animal';
import { AnimalService } from 'src/app/service/animal-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  animal: Animal = new Animal();

  animalSpecies: string[] = ['kutya', 'macska'];
  animalIsNeutered: boolean[] = [true, false];
  animalGender: string[] = ['hím', 'nőstény'];
  animalSize: string[] = ['kicsi', 'közepes', 'nagy'];

  placeholderImg = environment.placeholderImg;
  constructor(
    private editRoute: ActivatedRoute,
    private animalService: AnimalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editRoute.params.subscribe((params) => {
      if (params['id'] === '0') {
        this.animal = new Animal();
      } else {
        this.animalService.getAnimal(params['id']).subscribe((animal) => {
          this.animal = animal;
        });
      }
    });
  }

  onSaveItem(animal: Animal): void {
    if (!animal.uniqueId) {
      if (animal.image === '') {
        animal['image'] = this.placeholderImg;
      }
      this.animalService
        .addAnimal(animal)
        .subscribe((animal) => this.router.navigate(['/animal-list']));
    } else {
      this.animalService
        .updateAnimal(animal)
        .subscribe((animal) => this.router.navigate(['/animal-list']));
    }
  }
}
