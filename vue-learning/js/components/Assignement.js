    export default {
        template: `
            <li>
            <label class="m-5"> {{assignement.name}} </label>
            <input v-model="assignement.done"
                   type="checkbox">
            </li>`,
        props: {
            assignement: {
                type:Object,
            }
        }
             }