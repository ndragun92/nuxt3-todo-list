<template>
    <div v-if="todos" class="flex flex-col gap-2 p-2">
        <todo-list-item
            v-for="(todo, todoIndex) in todos"
            :key="`todo__${todo.id}--${todoIndex}`"
            :index="todoIndex"
            :todo="todo"
        />
        <div>
            <input type="text" v-model.trim="name" />
            <button type="button" @click="addTodo">Add new item</button>
        </div>
        <pre v-if="todos.length">
            {{ todos }}
        </pre>
    </div>
</template>

<script setup lang="ts">
import { TodoInterface } from '~~/interfaces/TodoInterface';
import useUniqueId from '~~/composables/useUniqueId';
import useDate from '~~/composables/useDate';
let { create: generateUniqueId } = useUniqueId()
let { today } = useDate()


interface Props {
    todos: TodoInterface[];
}

const props = withDefaults(defineProps<Props>(), { todos: null });


const name = ref<string>('')
function addTodo() {
    if(!name.value.length) return alert('You have to specify task name')
    props.todos.push({
        id: generateUniqueId(),
        name: name.value,
        completed: false,
        date: today()
    })
    name.value = ''
}
</script>