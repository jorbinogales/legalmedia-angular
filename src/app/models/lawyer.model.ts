import { SkillModel } from "./skill.model";

export class LawyerModel{

    id?: number = -1;
    first_name: string = "";
    last_name: string = "";
    email: string = "";
    birth: string = "";
    picture?: string = '';
    rewards?: any;
    skills?: SkillModel;
    answerings?: any;

    constructor() {
        
    }
}
