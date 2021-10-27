import { addTeam,getTeams } from "../../controller/teams-controller";
import {Request,Response} from 'express';

 
jest.mock('../../service/teams-service',()=>{
    return {
        addTeamData:jest.fn(),
        getTeamsData:jest.fn()
    }
});

const  request={
    body:{
        id:"test-team",
        teamName:"test",
        winningYears:[2015],
        venue:"testplace"
    }
}
const response:Partial<Response> = {
    status:jest.fn(),
    send:jest.fn()
};

describe('testing team controller',()=>{
    it('testing add method', async () => {
        await addTeam(request as Request,response as Response)
        expect(response.status).toHaveBeenCalled();
        expect(response.status).toHaveBeenCalled();
    });
    it('testing get method',async ()=>{
        await getTeams(request as Request , response as Response);
        expect(response.status).toHaveBeenCalled();
        expect(response.send).toHaveBeenCalled();    
    });
});