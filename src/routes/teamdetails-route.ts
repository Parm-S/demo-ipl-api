import express from "express";
import { getTeam, addTeam } from "../controller/teamdetails-controller";


const teamDetailRoute = express.Router();

teamDetailRoute.post("/:id", addTeam);
teamDetailRoute.get("/:id", getTeam);

export { teamDetailRoute };
    