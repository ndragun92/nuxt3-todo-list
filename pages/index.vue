<template>
    <div>
        <div>{{ $welcome('Nemanja') }}</div>
        <div v-if="isVisible">I am visible</div>
        <div v-else>Still hidden</div>
        <button class="bg-red-500 py-2 px-4" @click="onToggle">Toggle</button>
        <hr>
        <div v-if="isVisibleSecond">I am visible</div>
        <div v-else>Still hidden</div>
        <button class="bg-red-500 py-2 px-4" @click="onToggleSecond">Toggle</button>
        <div class="container mx-auto">
            <todo-list />
        </div>
    </div>
</template>

<script setup lang="ts">
let { show: isVisible, toggle: onToggle } = useToggle(false)
let { show: isVisibleSecond, toggle: onToggleSecond } = useToggle(false)
const { $welcome } = useNuxtApp()
</script>