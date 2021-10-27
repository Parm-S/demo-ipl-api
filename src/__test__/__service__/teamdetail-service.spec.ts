import mockingoose from "mockingoose";
import { TeamDetail } from "../../models/team-details";
import { addTeamDetail, getTeamDetail } from "../../service/teamdetails-service";

const mockTeam = mockingoose(TeamDetail);

const mockTeamData = new TeamDetail({
  id: "testss-team",
  team: {
    captainId: "11",
    wicketKeeperId: "12",
  },
  players: [
    {
      id: "test_player_id",
      name: "test Name",
      image: "test image url",
      stats: {
        matches: 5,
        runs: 5,
        wickets: 5,
      },
    },
  ],
});

describe("read and write team detail in database", () => {
  it("should set the teams", async () => {
    mockTeam.toReturn(mockTeamData, "save");
    const data = await addTeamDetail(mockTeamData.id, mockTeamData);
    expect(data).toBe(mockTeamData);
    mockTeam.reset("save");
  });
  it("should get team details ", async () => {
    mockTeam.toReturn(mockTeamData, "findOne");
    const data = await getTeamDetail("testss-team");
    expect(data).toBe(mockTeamData);
    mockTeam.reset("findOne");
  });
  it("should throw error if data not exist", () => {
    mockTeam.toReturn(null, "findOne");
    expect(getTeamDetail("unknown")).rejects.toThrowError(
      "team Id not available"
    );
    mockTeam.reset("findOne");
  });
});
