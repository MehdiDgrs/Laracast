    export default {
        template: `
            <li class="p-2 flex justify-between">
            <label class="m-5"> {{assignement.name}} </label>
            <input v-model="assignement.done"
                   type="checkbox"
                   class="ml-2">
            </li>`,
        props: {
            assignement: {
                type:Object,
            }
        }
             }