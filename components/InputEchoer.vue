<template>
    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded px-6 py-6" style="margin:20px;">
        <h2 style="margin:10px;">Input Echoer App</h2>
        <input ref="inp" v-model="inputTodo" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
        <button @click="toggleShow()" class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded" style="margin-top: 10px;">SUBMIT</button>
        <div v-if="isShown">
            {{ inputTodo }}
        </div>
    </div>
</template>
<script>
export default {
    name: "InputEchoer",
    data(){
        return {
            inputTodo: "",
            isShown: false
        }
    },
    methods:{
        toggleShow(){
            this.isShown = !this.isShown
        },
        focusInput() {
            this.$refs.inp.focus();
        }   
    },
    mounted() {
        this.focusInput();
    },
}
</script>
