import { ref, onMounted } from 'vue'
import { TodoInterface } from '~~/interfaces/TodoInterface';

export default function useTodos() {
    let { setArray: updateStorage, getArray: getTodos } = useLocalStorage()

    const todos = ref<TodoInterface[]>([])

    // Watch for todos changes and update localStorage
    watch(
        () => todos,
        (todos) => {
            updateStorage<TodoInterface[]>('todos', todos.value)
        },
        { deep: true }
    )

    function get(): void {
        const savedTodos = getTodos<TodoInterface[]>('todos')
        if (savedTodos.length) {
            todos.value = savedTodos
        }
    }

    onMounted(() => {
        get()
    })

    return {get, todos}
}