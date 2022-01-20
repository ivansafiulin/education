import { Component, OnInit } from '@angular/core';
import { IResource } from '../models/interfaces/resource.interface';
import { resources } from '../../shared/data/resources.data';

@Component({
  selector: 'app-for-parents',
  templateUrl: './for-parents.component.html',
  styleUrls: ['./for-parents.component.scss'],
})
export class ForParentsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
