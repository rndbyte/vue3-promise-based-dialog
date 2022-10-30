import { Component, ComponentPublicInstance } from "vue";
import { Context } from "./Context";

export type BaseDialogProps = {
    title: string;
    resolve?: (value: any) => void;
};

export abstract class Dialog {
    protected abstract title: string;
    protected abstract component: ComponentPublicInstance<Component>;

    private _opened: boolean = false;
    private _context: Context = new Context();
    private _resolve!: (value: boolean) => void;

    public open(): Promise<boolean> {
        this._opened = true;

        const promise = new Promise<boolean>(resolve => {
            this._context.push(this);
            this._resolve = resolve;
        });

        promise.then(() => {
            this._context.pop();
            this._opened = false;
        });

        return promise;
    }

    public isOpened(): boolean {
        return this._opened;
    }

    public getTitle(): string {
        return this.title;
    }

    public getComponent(): ComponentPublicInstance<Component> {
        return this.component;
    }

    public getProps(): BaseDialogProps {
        return {
            title: this.getTitle(),
            resolve: this._resolve
        }
    }
}
