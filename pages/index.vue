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
import { ref, onMounted } from 'vue'
import { TodoInterface } from '~~/interfaces/TodoInterface';
import useLocalStorage from '~~/composables/useLocalStorage';
let { setArray: updateStorage, getArray: getTodos } = useLocalStorage()

const todos = ref<TodoInterface[]>([])
watch(
    () => todos,
    (todos) => {
        updateStorage<TodoInterface[]>('todos', todos.value)
    },
    { deep: true }
)


onMounted(() => {
    const savedTodos = getTodos<TodoInterface[]>('todos')
    if (savedTodos.length) {
        todos.value = savedTodos
    }
})
</script>