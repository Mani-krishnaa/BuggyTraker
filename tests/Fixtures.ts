import { test as base } from "@playwright/test";
import { Analytics } from "/home/hackerearth461/BuggyTraker/pages/analyitics.ts"

import { ApiResponse as ApiResponse } from "/home/hackerearth461/BuggyTraker/utils/apiResponse"
import { DragAndDrop } from "../pages/dragAndDrop";


type buggyFixtures = {
    analytics: Analytics
    apiresponse: ApiResponse
    dragdrop: DragAndDrop

}
export const test = base.extend<buggyFixtures>({


    page: async ({ page }, use) => {
        // Perform any setup before test
        const analytics = new Analytics(page)
        await page.addLocatorHandler(analytics.antMOdal, async () => {

            await analytics.closeAntModal()
        })
        await page.goto('https://projects.hackerearth.com/p9/');
        // Proactively close if already visible
        await analytics.closeAntModal().catch(() => { })
        await use(page)
        await page.close();
    },
    analytics: async ({ page }, use) => {
        await use(new Analytics(page))
    },
    apiresponse: async ({ page }, use) => {
        await use(new ApiResponse(page))
    },
    dragdrop: async ({ page }, use) => {
        await use(new DragAndDrop(page))
    }
})

export { expect } from "@playwright/test";
