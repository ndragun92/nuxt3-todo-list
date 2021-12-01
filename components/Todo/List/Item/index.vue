<template>
    <label
        :for="`task_${props.todo.id}${props.index}`"
        class="p-4 border rounded flex items-center gap-2"
        :class="[props.todo.completed ? 'bg-green-400 border-green-500' : 'bg-gray-100 border-gray-200']"
    >
        <div>
            <input
                class="border-gray-200 rounded-full w-5 h-5"
                type="checkbox"
                v-model="props.todo.completed"
                :id="`task_${props.todo.id}${props.index}`"
            />
        </div>
        <div class="flex-grow min-w-0">
            <input class="bg-transparent border-none w-full" type="text" v-model.trim="props.todo.name">
        </div>
        <div v-text="formatDate(todo.date)" />
    </label>
</template>

<script setup lang="ts">
import { TodoInterface } from '~~/interfaces/TodoInterface';

interface Props {
    todo: TodoInterface;
    index: number;
}

const props = withDefaults(defineProps<Props>(), { todo: null, index: 0 });
let { format: formatDate } = useDate()
</script>