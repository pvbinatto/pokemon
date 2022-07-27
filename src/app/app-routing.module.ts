import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewerComponent } from './components/card-viewer/card-viewer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'card/:id', component: CardViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }