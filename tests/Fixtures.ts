import { test as base } from "@playwright/test";
import { Analyitics } from "/home/hackerearth461/BuggyTraker/pages/analyitics.ts"



type buggyFixtures = {
    analytics: Analyitics

}
export const test = base.extend<buggyFixtures>({


    page: async ({ page }, use) => {
        // Perform any setup before test
        await page.goto('https://projects.hackerearth.com/p9/');
        await use(page)
        await page.close();
    },
    analytics: async ({ page }, use) => {
        await use(new Analyitics(page))
    }
})

export { expect } from "@playwright/test";
