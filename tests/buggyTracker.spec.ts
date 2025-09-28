

import { expect, test, } from '/home/hackerearth461/BuggyTraker/tests/Fixtures.ts'

test.describe("Buggy Tracker Challange", () => {
  test('has title', async ({ analytics, apiresponse }) => {
    const link = await analytics.returnAnalyticsLink()
    console.log(link);

    const response = await apiresponse.checkingApiResponse(link!)
    const mani = response == "reachable" ? console.log("it is valid link") : console.log("it is invalid link");
    ;


  });
})