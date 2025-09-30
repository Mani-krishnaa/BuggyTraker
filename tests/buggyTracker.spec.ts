

import { expect, test, } from '/home/hackerearth461/BuggyTraker/tests/Fixtures.ts'

test.describe("Buggy Tracker Challenge", () => {
  test('Checking the response of the link which is inside the Iframe', async ({ analytics, apiresponse, dragdrop, editcard }) => {

    const link = await analytics.returnAnalyticsLink()
    const response = await apiresponse.checkingApiResponse(link!)
    const mani = response == "reachable" ? console.log("it is valid link") : console.log("it is invalid link");
    await dragdrop.dragDrop()
    expect(await dragdrop.successMessage.waitFor({ state: "visible" }))
    await expect(dragdrop.successMessage).toHaveText(/Moved "Dashboard loads slowly/);
    await editcard.clickOnEditCard()
    await editcard.changeWorkingToDone()
    await editcard.changeAssigneTo()
    await editcard.changeDeadline()
    await editcard.saveChangesButtonInForm()
    expect(await editcard.savingTicket.waitFor({ state: "visible" }))

  });





})
