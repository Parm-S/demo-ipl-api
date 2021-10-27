import { addTeam,getTeam } from "../../controller/teamdetails-controller";
import {Request,Response} from 'express';


jest.mock("../../service/teamdetails-service",()=>{
    return {
        addTeamDetail:jest.fn(),
        getTeamDetail:jest.fn()
    }
});

const  request:Partial<Request>={
    params:{
        id:"test"
    },
    body:{}
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
        await getTeam(request as Request , response as Response);
        expect(response.status).toHaveBeenCalled();
        expect(response.send).toHaveBeenCalled();    
    });
});