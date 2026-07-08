import { BasePage } from "../interactor/baseclass";

export class TemplatePage extends BasePage {
    sample=this.page.getByRole('button', { name: 'Sample' });
}