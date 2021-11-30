<template>
    <div class="flex flex-col gap-2 p-2">
        <todo-list-item
            v-for="(todo, todoIndex) in todos"
            :key="todo"
            :index="todoIndex"
            :todo="todo"
        />
        <div>
            <button type="button" @click="addTodo">Add new item</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TodoInterface } from '~~/interfaces/TodoInterface';

const todos = ref<TodoInterface[]>([])

function addTodo() {
    todos.value.push({
        id: crypto.randomUUID(),
        name: 'My first todo',
        completed: false,
        date: new Date()
    })
}
</script>