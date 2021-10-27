import { Request, Response } from "express";
import { addTeamDetail, getTeamDetail } from "../service/teamdetails-service";

const addTeam = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const teamDetail = req.body;
    const createTeam = await addTeamDetail(id, teamDetail);
    res.status(201);
    res.send(createTeam);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getTeam = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const teamData = await getTeamDetail(id);
    res.status(200);
    res.send(teamData);
  } catch (error) {
    const message = (error as Error).message;
    res.status(404).send(message);
  }
};

export { addTeam, getTeam };
