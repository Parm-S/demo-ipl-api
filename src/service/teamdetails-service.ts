import { TeamDetail } from "../models/team-details";

interface IteamDetail {
  team: {
    captainId: string;
    wicketKeeperId: string;
  };
  players: {
    id: string;
    image: string;
    name: string;
    nationality: string;
    stats: {
      matches: number;
      runs: number;
      wickets: number;
    };
  };
}

const addTeamDetail = async (id: string, teamDetail: IteamDetail) => {
  try {
    const teamData = new TeamDetail({
      id,
      team: teamDetail.team,
      players: teamDetail.players,
    });
    const result = await teamData.save();
    return result;
  } catch (error) {
    return Error("Team Detail is not saved");
  }
};

const getTeamDetail = async (id: string) => {
  const teamDetail = await TeamDetail.findOne({ id }, { _id: 0, id: 0 });
  if (teamDetail !== null) {
    return teamDetail;
  } else {
    throw new Error(`${id} Team Detail not found`);
  }
};
export { addTeamDetail, getTeamDetail };
