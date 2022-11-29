import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { AnimalListComponent } from './page/animal-list/animal-list.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';

import { CardComponent } from './common/card/card.component';
import { FilterComponent } from './utils/filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SpeciesPipe } from './pipes/species.pipe';
import { AgePipe } from './pipes/age.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { SizePipe } from './pipes/size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnimalListComponent,
    DataEditorComponent,
    CardComponent,
    FilterComponent,
    FilterPipe,
    SpeciesPipe,
    AgePipe,
    GenderPipe,
    SizePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
