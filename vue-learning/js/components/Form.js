export default {
    template:` 
    <form
    @submit.prevent="add" 
    class="flex"
    >
  
    <input  type="text"
            placeholder="New assignment ... "
            class="text-black"
            v-model="newItem">
            
    <button class="bg-white text-black border-l">add</button>
</form>`,
    data(){
        return {
            newItem:"",
        }
    },
    methods: {
        add(e){
            this.$emit('add', this.newItem);
        }
    },
}