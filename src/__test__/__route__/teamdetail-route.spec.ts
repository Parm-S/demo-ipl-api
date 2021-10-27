import { getTeam, addTeam } from "../../controller/teamdetails-controller";

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
  require("../../routes/teamdetails-route.ts");
  test("should called addTeam function from team-route", () => {
    expect(getSpy).toHaveBeenCalledWith("/:id", addTeam);
  });
  test("should called getTeam function from team-route", () => {
    expect(getSpy).toHaveBeenCalledWith("/:id", getTeam);
  });
});