import { getTeams, addTeam } from "../../controller/teams-controller";

const getSpy = jest.fn();

jest.doMock("express", () => {
  return {
    Router() {
      return {
        get: getSpy,
        post: getSpy,
      };
    },
  };
});

describe("should test router", () => {
  require("../../routes/team-route.ts");
  test("should test post TEAMS", () => {
    expect(getSpy).toHaveBeenCalledWith("/", addTeam);
  });
  test("should test get TEAMS", () => {
    expect(getSpy).toHaveBeenCalledWith("/", getTeams);
  });
});
