import { BasePage } from "./basePage";
import { Page, Frame, Locator } from "@playwright/test";


export class DragAndDrop extends BasePage {
    // await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));
    readonly ticket002: Locator
    readonly dropLocation: Locator
    readonly successMessage: Locator

    constructor(page: Page) {
        super(page)

        this.ticket002 = page.getByTestId('ticket-TICKET-0002')
        this.dropLocation = page.getByTestId('drop-zone-DONE')
        this.successMessage = page.getByText('Moved "Dashboard loads slowly')

    }

    async dragDrop() {
        await this.ticket002.dragTo(this.dropLocation)

    }
   
}