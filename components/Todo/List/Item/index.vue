<template>
    <label
        :for="`task_${props.todo.id}${props.index}`"
        class="p-4 border rounded flex items-center gap-2 hover:border-blue-500"
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
            <input
                class="bg-transparent border-none w-full"
                type="text"
                v-model.trim="props.todo.name"
            />
        </div>
        <div v-text="formatDate(todo.date)" />
        <div @click="$emit('remove', index)">
            <button
                type="button"
                class="flex items-center justify-center text-red-500 hover:text-red-700"
            >
                <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
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