import { ref, onMounted, watch } from 'vue'
import { TodoInterface } from '~~/interfaces/TodoInterface';
let { create: generateUniqueId } = useUniqueId()
let { today } = useDate()

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

    function add(name: string) {
        todos.value.unshift({
            id: generateUniqueId(),
            name: name,
            completed: false,
            date: today()
        })
    }

    function remove (index: number) {
        todos.value.splice(index, 1);
    }

    onMounted(() => {
        get()
    })

    return {get, todos: todos, add, remove}
}