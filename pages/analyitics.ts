import { Page, Frame } from "@playwright/test";
import { BasePage } from "./basePage";


export class Analyitics extends BasePage {



    constructor(page: Page) {
        super(page)
    }



    async goToViewFullAnalyticsIframe() {
        const linkLocator = this.page
            .frameLocator("iframe[title='System Logs']")
            .frameLocator("iframe[title='Bug Analytics Dashboard']")
            .locator("text=View Full Analytics");
        return linkLocator

    }

    async returnAnalyticsLink(): Promise<string | null> {
        const frame = await this.goToViewFullAnalyticsIframe();
        const href = await frame.getAttribute("href");
        return href;
    }
}