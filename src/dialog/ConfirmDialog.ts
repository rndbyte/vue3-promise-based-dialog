import { Dialog } from "./Dialog";
import ConfirmDialogComponent from "./ConfirmDialogComponent.vue";

export class ConfirmDialog extends Dialog {
    protected component = ConfirmDialogComponent;
    protected title: string = "Подтвердите действие";

    public open(): Promise<boolean> {
        return super.open();
    }
}
