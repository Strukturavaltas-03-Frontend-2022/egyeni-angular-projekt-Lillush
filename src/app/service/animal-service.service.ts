import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  apiURL: string = environment.apiURL;

  entity: string = 'animals.json';

  animals: Animal[] = [];

  constructor(private http: HttpClient) {}

  fetchAnimalData() {
    return this.http
      .get<{ [key: string]: Animal }>(`${this.apiURL}${this.entity}`)
      .pipe(
        map((responseData) => {
          const animalArray: Animal[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              animalArray.push({ ...responseData[key], uniqueId: key });
            }
          }
          return animalArray;
        })
      );
  }

  getAnimal(uniqueId: string) {
    return this.http.get<Animal>(`${this.apiURL}animals/${uniqueId}.json`).pipe(
      map((responseData) => {
        responseData['uniqueId'] = uniqueId;
        return responseData;
      })
    );
  }

  addAnimal(newAnimal: Animal) {
    return this.http.post(`${this.apiURL}${this.entity}`, newAnimal);
  }

  updateAnimal(animal: Animal) {
    return this.http.patch(
      `${this.apiURL}animals/${animal.uniqueId}.json`,
      animal
    );
  }

  deleteAnimal(animal: Animal) {
    return this.http.delete(`${this.apiURL}animals/${animal.uniqueId}.json`);
  }
}
