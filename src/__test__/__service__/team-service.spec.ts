import mockingoose from "mockingoose";
import { Team } from "../../models/teams";
import { addTeamData, getTeamsData } from "../../service/teams-service";

const mockTeams = mockingoose(Team);

const mockData = new Team({
  id: "test-team",
  teamName: "test",
  winningYears: [2016],
  venue: "test",
});

describe("read and write teams in database", () => {
  it("should set the teams", async () => {
    mockTeams.toReturn(mockData, "save");
    const data = await addTeamData(mockData);
    expect(data).toBe(mockData);
    mockTeams.reset("save");
  });
  it("should get team details ", async () => {
    mockTeams.toReturn(mockData, "find");
    const data = await getTeamsData();
    console.log(mockData);
    expect(data).toBe(mockData);
    mockTeams.reset("find");
  });
});
