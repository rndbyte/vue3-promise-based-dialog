import { Dialog } from "./Dialog";
import { ShallowRef, shallowRef, ref, Ref } from "vue";

export class Context {
    private static _stack: Ref<Array<ShallowRef<Dialog>>> = ref([]);

    public push(item: Dialog) {
        Context._stack.value.push(shallowRef(item));

        return this;
    }

    public pop() {
        return Context._stack.value.pop();
    }

    public static getDialogs() {
        return Context._stack.value;
    }
}