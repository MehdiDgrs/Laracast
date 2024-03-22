import {ref, watch} from "vue";

export function useStorage(key) {
    let state = ref(localStorage.getItem(key));

    watch(state , () => {
        localStorage.setItem(key, state.value)
    });

    return state
}