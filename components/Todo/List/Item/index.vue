<template>
    <label :for="`task_${props.todo.id}${props.index}`" class="p-4 bg-red-500 flex gap-2">
        <div>
            <input
                type="checkbox"
                v-model="props.todo.checked"
                :id="`task_${props.todo.id}${props.index}`"
            />
        </div>
        <div class="flex-grow min-w-0" v-text="props.todo.name" />
        <div>Timestampt {{ props.todo.id }}</div>
    </label>
</template>

<script setup lang="ts">
import { TodoInterface } from '~~/interfaces/TodoInterface';

interface Props {
    todo: TodoInterface;
    index: number;
}

const props = withDefaults(defineProps<Props>(), { todo: null, index: 0 });
</script>