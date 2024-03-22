
import {ref, onMounted, onUnmounted } from 'vue';


export function useMouse(){
    let x = ref(0)
    let y = ref(0)
    const message = ref('hello world');
    const text = ref('');

    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
        }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return {x,y}
}
