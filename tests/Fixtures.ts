import { test as base } from "@playwright/test";
import { Analyitics } from "/home/hackerearth461/BuggyTraker/pages/analyitics.ts"

import { ApiRespons as ApiResponse } from "/home/hackerearth461/BuggyTraker/utils/apiResponse"


type buggyFixtures = {
    analytics: Analyitics
    apiresponse: ApiResponse

}
export const test = base.extend<buggyFixtures>({


    page: async ({ page }, use) => {
        // Perform any setup before test
        const analyitics = new Analyitics(page)
        await page.addLocatorHandler(analyitics.antMOdal, async () => {
            await analyitics.closeAntModal()
        })
        await page.goto('https://projects.hackerearth.com/p9/');
        // Proactively close if already visible
        await analyitics.closeAntModal().catch(() => { })
        await use(page)
        await page.close();
    },
    analytics: async ({ page }, use) => {
        await use(new Analyitics(page))
    },
    apiresponse: async ({ page }, use) => {
        await use(new ApiResponse(page))
    }
})

export { expect } from "@playwright/test";
