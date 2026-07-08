import { Page } from '@playwright/test'
import { BasePage } from './baseclass';

// This abstract class acts as a page-level contract for all page objects.
// It extends the shared BasePage class so each specific page can reuse common actions
// and still define its own page-specific behavior.
export abstract class pageInteraction extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    // Each page object must implement these three methods/actions.
    abstract purchase(): Promise<void>;

    abstract fillPage(): Promise<void>;

    abstract nextpage(): Promise<void>;
}
