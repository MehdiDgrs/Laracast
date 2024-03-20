import AssignementList from "./AssignementList.js";
export default {
    template: `
<div class="space-y-6">
 <AssignementList :assignements="filters.completed" title="completed"></AssignementList>
 <AssignementList :assignements="filters.inProgress" title="in progress"></AssignementList>
</div>
     `,
    data() {
        return {
            message: 'Hello Vue!',
            assignements: [
                { name: 'Lire plus', done:false , id:1},
                { name: 'Tondre pelouse', done:false, id:3},
                { name: 'Randonnée', done:false, id:2},
            ],
            completed: [

            ]
        }
    },
    methods: {
        checked(e){
            this.assignements.done = !this.assignements.done;
        },
        isCompleted(e){
            completed.push(e.target.value)
        }
    },
    computed: {
        filters(){
            return {
                completed:this.assignements.filter(i=>i.done),
                inProgress:this.assignements.filter(i=>!i.done)
                }
            }
        },

    components: {
        AssignementList,
    }
}