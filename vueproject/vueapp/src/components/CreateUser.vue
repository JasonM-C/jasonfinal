
<template>
    <form @submit.prevent="createUser">
        <input v-model="user.name" type="text" placeholder="Name"> 
        <input v-model="user.age" type="number" placeholder="Age"> 
        <input v-model="user.email" type="email" placeholder="Email"> 
        <button type="submit">Submit</button> 
    </form> 
</template> 

<script> 
import api from '@/api'; 

export default { 
    data() { 
        return { 
            user: { 
                name: '',
                age: null, 
                email: '' 
            } 
        }; 
    },
    methods: { 
        async createUser() { 
            await api.createUser(this.user);
            // Redirect or handle post-creation logic 
            this.$router.push('/'); // Adjust as necessary 
        } 
    } 
} 

</script>

<style scoped>
 /* Add any specific styles for your CreateUser component here */ 
 </style>