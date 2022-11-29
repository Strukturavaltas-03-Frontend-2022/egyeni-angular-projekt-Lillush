import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { AnimalListComponent } from './page/animal-list/animal-list.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'animal-list',
    component: AnimalListComponent,
  },
  {
    path: 'animal',
    component: DataEditorComponent,
  },
  {
    path: 'animal/:id',
    component: DataEditorComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
