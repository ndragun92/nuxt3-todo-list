<template>
    <div class="p-2">
        <div class="flex items-center gap-2">
            <input
                class="w-full rounded border border-gray-200 h-12"
                placeholder="Task name..."
                @keydown.enter="create"
                type="text"
                v-model.trim="name"
            />
            <button
                class="whitespace-nowrap bg-blue-500 hover:bg-blue-600 h-12 px-4 rounded text-white"
                type="button"
                @click="create"
            >Create task</button>
        </div>
        <div v-if="todos" class="flex flex-col gap-2 mt-2">
            <todo-list-item
                v-for="(todo, todoIndex) in todos"
                :key="`todo__${todo.id}--${todoIndex}`"
                :index="todoIndex"
                :todo="todo"
                @remove="remove"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { TodoInterface } from '~~/interfaces/TodoInterface';


interface Props {
    todos: TodoInterface[];
    add: (name: string) => void
    remove: (index: number) => void
}

const props = withDefaults(defineProps<Props>(), { todos: null });


const name = ref<string>('')
function create() {
    if (!name.value.length) return alert('You have to specify task name')
    props.add(name.value)
    name.value = ''
}
</script>