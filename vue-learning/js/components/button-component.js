

let button =   {
    template: `

<button :class="
        {
            'text-red' :  type =='secondary',
            'text-blue bg-blue-600' : type == 'primary',
            'is-loading' : processing
        }"
                       
>
<slot></slot>
</button>`,
    props: {
        type: {
            default:'primary',
            type:String,
        },
        processing:{
            default:false,
            type:Boolean,
        }
    },
    data(){
        return {

        }
    }
}

export default button