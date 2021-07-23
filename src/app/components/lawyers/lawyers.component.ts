import { Component, OnInit } from '@angular/core';
import { LawyerModel } from 'src/app/models/lawyer.model';
import { listSkillModel } from 'src/app/models/listSkill.model';
import { LawyerService } from 'src/app/services/laywer/lawyer.service';
import { ListSkillService } from 'src/app/services/listSkill/list-skill.service';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html'
})
export class LawyersComponent implements OnInit {

  loading: boolean = true;
  search = new LawyerModel;
  lawyers: LawyerModel[] = [];
  listSkill: listSkillModel[] = [];

  constructor(private __lawyerService: LawyerService,
              private __listSkillService: ListSkillService) { }

  ngOnInit() {

    this.__listSkillService.getListSkill().subscribe(resp => {
      this.listSkill = resp;
    });

    this.__lawyerService.getLawyer().subscribe(resp => {
      this.lawyers = resp;
      this.loading = false;
    })

  }

  async searchLawyer() {
    this.loading = true;
    await (await this.__lawyerService.searchLawyer(this.search)).subscribe(resp => {
      this.lawyers = resp;
      this.loading = false;
    });
  }



}
