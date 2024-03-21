import AssignementList from "./AssignementList.js";
import FormComponent from "./Form.js"
export default {
    template: `
<div class="space-y-6">
 <AssignementList :assignements="filters.completed" title="completed"></AssignementList>
 <AssignementList :assignements="filters.inProgress" title="in progress"></AssignementList>
<FormComponent @add="add"></FormComponent>
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

            ],
        }
    },
    methods: {
        checked(e){
            this.assignements.done = !this.assignements.done;
        },
        isCompleted(e){
            completed.push(e.target.value)
        },
        add(newItem){
            this.assignements.push({name :newItem, done:false, id: this.assignements.length + 1  });
            newItem="";
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
        FormComponent
    }
}