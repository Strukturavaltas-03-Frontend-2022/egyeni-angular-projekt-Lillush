import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/model/animal';
import { AnimalService } from 'src/app/service/animal-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() animal: Animal = new Animal();

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private editRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onDeleteAnimal(target: Animal) {
    this.animalService
      .deleteAnimal(target)
      .subscribe(() =>
        this.animalService
          .fetchAnimalData()
          .subscribe(() =>
            this.router
              .navigate(['/'])
              .then(() => this.router.navigate(['/animal-list']))
          )
      );
  }
}
