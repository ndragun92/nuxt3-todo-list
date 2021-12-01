<template>
    <div>
        <div class="text-center py-4 border-b border-gray-200 bg-gray-100">{{ $welcome('Nemanja') }}</div>
        <div class="container mx-auto mt-4 max-w-4xl">
            <todo-list :todos="todos" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { $welcome } = useNuxtApp()
import useTodos from '~~/composables/useTodos';
let { todos } = useTodos()
</script>