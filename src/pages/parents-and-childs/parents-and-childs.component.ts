import { Component, OnInit } from '@angular/core';
import { IResource } from '../models/interfaces/resource.interface';
import { resources } from '../../shared/data/resources.data';

@Component({
  selector: 'app-parents-and-childs',
  templateUrl: './parents-and-childs.component.html',
  styleUrls: ['./parents-and-childs.component.scss'],
})
export class ParentsAndChildsComponent implements OnInit {

  resources: IResource[] = JSON.parse(JSON.stringify(resources));

  constructor() {}

  ngOnInit(): void {
  }

  onLoadResource(resource: IResource): void { if (resource) { resource.isLoading = false; } }

  identify(index: number, item: IResource) { return item.id; }
}
