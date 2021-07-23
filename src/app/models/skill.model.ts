import { LawyerModel } from "./lawyer.model";
import { listSkillModel } from "./listSkill.model";

export class SkillModel{
    id: number = -1;
    lawyer_id?: LawyerModel;
    list_skill_id?: listSkillModel;
}