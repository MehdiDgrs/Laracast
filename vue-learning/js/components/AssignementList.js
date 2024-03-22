import Assignement from "./Assignement.js";
import AssignementsTags from "./AssignementsTags.js";
export default {
    template:
`<section v-show="assignements.length">
    <div>
    <h1 class="font-bold mb-5">{{title}}</h1>
    <span>({{assignements.length}})</span>
</div>
<assignements-tags v-model="selectedTag" :assignements = "this.assignements "></assignements-tags>
    <ul class="divide-y border-2">
        <assignement
        v-for="assignement in filteredAssignements"
        :key="assignement.id"
        :assignement="assignement">
        
        </assignement>
    </ul>
    <slot></slot>
</section>`,

    props: {
        assignements: {
            type:Array,
        },

        title:{
            type:String,
        }
    },

    data(){
        return {
            selectedTag:'all'
        }
    },

    computed: {

        filteredAssignements() {

            if ( this.selectedTag == "all") {
                return this.assignements;
            }

            return this.assignements.filter(a => a.tags === this.selectedTag)
        },
    },

    components: {
        Assignement,
        AssignementsTags
    }
}