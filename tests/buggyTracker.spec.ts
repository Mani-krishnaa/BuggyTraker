
import { expect, test, } from '/home/hackerearth461/BuggyTraker/tests/Fixtures.ts'

test.describe("Buggy Tracker Challenge", () => {
  test('Checking the response of the link which is inside the Iframe', async ({ analytics, apiresponse, dragdrop, editcard, page }) => {

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
    while (true) {
      await editcard.saveChangesButtonInForm()
      try {
        expect(await editcard.savingTicket.waitFor({ state: "visible" }))
        expect(await editcard.movedTicket.waitFor({ state: "visible" }))
        console.log("Moved ticket is now visible!");
        break;
      } catch (error) {
        await new Promise(resolve => setTimeout(resolve, 100))
      }
    }

  });





})
