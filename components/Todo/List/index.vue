<template>
    <div class="flex flex-col gap-2 p-2">
        <todo-list-item
            v-for="(todo, todoIndex) in todos"
            :key="`todo__${todo.id}--${todoIndex}`"
            :index="todoIndex"
            :todo="todo"
        />
        <div>
            <button type="button" @click="addTodo">Add new item</button>
        </div>
        <pre>
            {{todos}}
        </pre>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TodoInterface } from '~~/interfaces/TodoInterface';
import useUniqueId from '~~/composables/useUniqueId';
import useDate from '~~/composables/useDate';
let { create: generateUniqueId } = useUniqueId()
let { today } = useDate()

const todos = ref<TodoInterface[]>([])

function addTodo() {
    todos.value.push({
        id: generateUniqueId(),
        name: 'My first todo',
        completed: false,
        date: today()
    })
}
</script>