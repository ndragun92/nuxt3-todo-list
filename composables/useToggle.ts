import { ref } from "vue"

export default function useToggle(initialState: boolean = false) {
    const show = ref(initialState)

    const toggle = () => {
        show.value = !show.value
    }

    return {show, toggle}
}