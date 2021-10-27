import { Request, Response } from "express";
import { addTeamData ,getTeamsData } from "../service/teams-service";

const addTeam = async (req: Request, res: Response) => {
  try {
    const team = req.body;
    const createTeam = await addTeamData(team);
    res.status(201);
    res.send(createTeam);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getTeams = async (req: Request, res: Response) => {
  try {
    const teamsData = await getTeamsData();
    res.status(200);
    res.send(teamsData);
  } catch (error) {
    res.status(404).send(error);
  }
};

export { addTeam, getTeams };
