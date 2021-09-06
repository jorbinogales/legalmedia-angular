import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.style.scss']
})
export class LawyerComponent implements OnInit {
  

  max = 5;
  rate = -1;
  isReadonly = true;

  @Input() origin: string = '';
  @Input() lawyer: any = {};
  @Input() skills: any = {};
  

  env: any = environment;

  constructor() { }

  ngOnInit(): void {
    console.log(this.lawyer);
    let fiveStar = 0;
    let fourStar = 0;
    let threeStar = 0;
    let twoStar = 0;
    let OneStar = 0;
    this.lawyer.rewards.forEach((element:any) => {

      switch (parseInt(element.unid)) {
        case 1:
          OneStar++;
          break;
        case 2:
          twoStar++;
          break;
        case 3:
          threeStar++;
        break;
        case 4:
          fourStar++;
        break;
        case 5:
          fiveStar++
        break;
      } 

      this.rate = (OneStar + (twoStar * 2) + (threeStar * 3) + (fourStar * 4) + (fiveStar * 5)) / (OneStar + twoStar + threeStar + fourStar + fiveStar);

    });
    
  }

  getLawyer() {
  }

}
