import express from "express";
import { getTeams, addTeam } from "../controller/teams-controller";

const teamRoute = express.Router();

teamRoute.post("/", addTeam);
teamRoute.get("/", getTeams);

export { teamRoute };
    

