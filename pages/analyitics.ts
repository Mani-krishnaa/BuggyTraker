import { Page, Frame, Locator } from "@playwright/test";
import { BasePage } from "./basePage";


export class Analytics extends BasePage {

    readonly antMOdal: Locator
    readonly closeButton: Locator

    constructor(page: Page) {
        super(page)

        this.antMOdal = page.locator(".ant-modal-content")
        this.closeButton = this.antMOdal.getByRole('button', { name: 'Close' })
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
    async closeAntModal(): Promise<void> {
        try {
            await this.closeButton.click()
        } catch (e) {
            console.log("Modal not found")
        }

    }
}