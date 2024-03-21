export default {
    template: `
    <div class="mb-2">
  
    <span   @click="$emit('update:modelValue', tag)" v-for="tag in tags" class="border-2 rounded mx-1 p-1 mb-2" :class="{'text-blue-500 border-blue-500':  tag == modelValue}"> {{tag}} </span>
    </div>
    `,

    computed: {
        tags() {
            return ['all', ...new Set(this.assignements.map(a => a.tags))]
        },

    },

    props: {

        assignements :{
        type:Array,
        },

        modelValue: {
            type:String,
        },

    }
}