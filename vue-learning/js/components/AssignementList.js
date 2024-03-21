import Assignement from "./Assignement.js";
export default {
    template:
`<section v-show="assignements.length">
    <h1 class="font-bold mb-5">{{title}}</h1>
    <ul class="divide-y border-2">
        <assignement
        v-for="assignement in assignements"
        :key="assignement.id"
        :assignement="assignement">
        
        </assignement>
    </ul>
</section>`,
    props: {
        assignements: {
            type:Array,
        },
        title:{
            type:String,
        }
    },
    components: {
        Assignement,
    }
}