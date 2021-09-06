import { SkillModel } from "./skill.model";

export class LawyerModel{

    id: number = -1;
    name: string = "";
    email: string = "";
    birth: string = "";
    picture: string = '';
    rewards: any;
    skills?: SkillModel;
    answerings?: any;

    constructor() {
        
    }
}
