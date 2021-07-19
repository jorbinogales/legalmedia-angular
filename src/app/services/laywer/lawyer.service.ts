import { Injectable } from '@angular/core';
import { LawyerModel } from 'src/app/models/lawyer.model';

@Injectable({
  providedIn: 'root'
})
export class LawyerService {

  constructor() {}

  private lawyers: LawyerModel[] = [
    {
      id: 55,
      name: 'Claudia Vazquez',
      img: 'claudia.jpg',
      skill: 'familia',
    },
    {
      id: 22,
      name: 'Vladimir Colmenarez',
      img: 'vladimir.jpg',
      skill: 'Terrorismo',
    },
    {
      id: 18,
      name: 'Jonathan Gazzillo',
      img: 'jonathan.jpg',
      skill: 'Migracion',
    },
    {
      id: 11,
      name: 'Jorbi Nogales',
      img: 'jorbi.jpg',
      skill: 'Tecnologia',
    },
  ];

  getLaywers(): LawyerModel[] {
    return this.lawyers;
  }

}
