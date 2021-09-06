import { Component, OnInit } from '@angular/core';
import { LawyerModel } from 'src/app/models/lawyer.model';
import { listSkillModel } from 'src/app/models/listSkill.model';
import { LawyerService } from 'src/app/services/laywer/lawyer.service';
import { ListSkillService } from 'src/app/services/listSkill/list-skill.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.style.scss']
})
export class PublicComponent implements OnInit {

  loading: boolean = true;
  lawyers: LawyerModel[] = [];
  listSkill: listSkillModel[] = [];

  constructor(private __lawyerService: LawyerService,
              private __listSkillService: ListSkillService) { }

  ngOnInit(): void {
      this.__listSkillService.getListSkill().subscribe(resp => {
        this.listSkill = resp;
      });

      this.__lawyerService.getLawyer().subscribe(resp => {

        this.lawyers = resp;
        this.loading = false;
      });
  }

}
