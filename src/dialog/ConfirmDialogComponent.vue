<template>
    <div class="dialog">
        <header>
            <span>Dialog</span>
        </header>
        <main>
            <span>{{ title }}</span>
        </main>
        <footer>
            <button @click="resolve(false)">Отмена</button>

            <button @click="resolve(true)">Подтвердить</button>
        </footer>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    resolve: Function
});
</script>

<style lang="sass">
.dialog
    display: flex
    flex-direction: column
    width: clamp(300px, 80%, 600px)
    border: 1px solid var(--border-color)
    background: white

    & > *
        display: flex
        justify-content: space-between
        align-items: center
        padding: 0.5rem

        &:not(:last-child)
            border-bottom: 1px solid var(--border-color)
            border-radius: 0

    & > header
        font-weight: bold
        border-bottom: 1px solid var(--border-color)

    & > main
        padding: 1rem 0.5rem
</style>
