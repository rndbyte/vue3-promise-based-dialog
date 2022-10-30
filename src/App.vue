<template>
    <div>
        <button @click="openDialog">Open Dialog</button>
    </div>

    <div id="app-dialog-root" class="dialog-root" v-if="Context.getDialogs().filter(f => f.value.isOpened()).length > 0">
        <div class="wrapper" v-for="(dialog, index) in Context.getDialogs()" :key="`${dialog.value.getTitle()}-${index}`">
            <Component
                v-if="dialog.value.isOpened()"
                v-bind="dialog.value.getProps()"
                :is="dialog.value.getComponent()"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ConfirmDialog } from "./dialog/ConfirmDialog";
import { Context } from './dialog/Context';

class ConfirmUserDeleteDialog extends ConfirmDialog {
    protected title = "Подтвердите удаление пользователя";
}

const openDialog = async () => {
    const dialog = new ConfirmUserDeleteDialog();
    const result = await dialog.open();
    console.log(result);
};
</script>