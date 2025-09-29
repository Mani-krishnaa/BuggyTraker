

import { expect, test, } from '/home/hackerearth461/BuggyTraker/tests/Fixtures.ts'

test.describe("Buggy Tracker Challenge", () => {
  test('Checking the response of the link which is inside the Iframe', async ({ analytics, apiresponse, page }) => {

    const link = await analytics.returnAnalyticsLink()
    const response = await apiresponse.checkingApiResponse(link!)
    const mani = response == "reachable" ? console.log("it is valid link") : console.log("it is invalid link");

  });

  test("Drag and drop", async ({ dragdrop }) => {
    await dragdrop.dragDrop()
    expect(await dragdrop.successMessage.waitFor({ state: "visible" }))
    await expect(dragdrop.successMessage).toHaveText(/Moved "Dashboard loads slowly/);
  })

})
