<template>
    <div> 
        <h1>Create User</h1>
        <form @submit.prevent="createUser">
            <input v-model="user.name" type="text" placeholder="Name"> 
            <input v-model="user.age" type="number" placeholder="Age"> 
            <input v-model="user.email" type="email" placeholder="Email"> 
            <button type="submit">Submit</button> 
        </form> 
    </div>
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
            try {
                await api.createUser(this.user);      
                this.$router.push('/'); // Adjust as necessary 
            } catch (error) {
            console.error('failed to create user', error);
            } 
        } 
    } 
}
</script>

<style>
 /* Add any specific styles for your CreateUser component here */ 
 a {
    color: #42b983;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
 </style>