import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ThematicBlockComponent } from './thematic-block/thematic-block.component';
import { ForParentsComponent } from './for-parents/for-parents.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { RegulationDocumentsComponent } from './regulation-documents/regulation-documents.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: MainPageComponent, data: { animation: 'MainPage' } },
      { path: 'regulation-documents', component: RegulationDocumentsComponent, data: {animation: 'RegulationDocuments' }},
      { path: 'thematic-block', component: ThematicBlockComponent, data: { animation: 'ThematicBlock' } },
      { path: 'for-parents', component: ForParentsComponent, data: {animation: 'ForParents' }},
      { path: 'useful-links', component: UsefulLinksComponent, data: {animation: 'UsefulLinks' }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
