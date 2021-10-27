import { Team } from "../models/teams";

interface ITeam {
  id: string;
  teamName: string;
  winningYears: number[];
  venue: string;
}

const addTeamData = async (team: ITeam) => {
  try {
    const teamDoc = new Team(team);
    const result = await teamDoc.save();
    return result;
  } catch (error) {
    return Error("Teams Detail is not saved");
  }
};

const getTeamsData = async () => {
  try {
    const resultData = await Team.find({}, { _id: 0 });
    return resultData;
  } catch (error) {
    return Error("No team Found");
  }
};

export { addTeamData, getTeamsData };
