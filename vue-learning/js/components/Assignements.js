import AssignementList from "./AssignementList.js";
import FormComponent from "./Form.js"
export default {
    template: `
  
<div class="flex gap-8" >
 <AssignementList :assignements="filters.completed" title="completed"><FormComponent @add="add"></FormComponent></AssignementList>
 <AssignementList :assignements="filters.inProgress" title="in progress"></AssignementList>

</div>
     
     `,

    data() {
        return {
            message: 'Hello Vue!',
            assignements: [

            ],
            completed: [

            ],
        }
    },

    created(){
        fetch('http://localhost:3000/assignements').then(res=> {
           return  res.json()
        }).then((res)=> {
           this.assignements = res;
        })

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
        },
    },

    computed: {
        filters() {
            return {
                completed: this.assignements.filter(i => i.done),
                inProgress: this.assignements.filter(i => !i.done),
            }
        },

    },

    components: {
        AssignementList,
        FormComponent
    }
}