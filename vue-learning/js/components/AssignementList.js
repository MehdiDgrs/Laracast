import Assignement from "./Assignement.js";

export default {
    template:
`<section v-show="assignements.length">
    <div>
    <h1 class="font-bold mb-5">{{title}}</h1>
    <span>({{assignements.length}})</span>
</div>
<div class="mb-2">
<span v-on="title === 'in progress' " @click="filterByTag" v-for="tag in tags" class="border-2 rounded mx-1 p-1 mb-2" :class="{'text-blue-500 border-blue-500':  tag == this.selectedTag}"> {{tag}} </span>
</div>
    <ul class="divide-y border-2">
        <assignement
        v-for="assignement in filteredAssignements"
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

    data(){
        return {
            selectedTag : 'all'
        }
    },

    computed: {
        tags() {
            return ['all', ... new Set(this.assignements.map(a => a.tags))]
        },

        filteredAssignements() {

            if ( this.selectedTag == "all") {
                return this.assignements;
            }

            return this.assignements.filter(a => a.tags === this.selectedTag)
        }
    },

    methods: {
        filterByTag(e) {
            this.selectedTag = e.target.innerText;
        }
    },

    components: {
        Assignement,
    }
}