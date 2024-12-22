<template> 
    <div>
        <h1>users list</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
                <button @click="deleteUser(user.id)">Delete</button>
            </li>
        </ul>  
    </div>
</template>

<script>
import api from '@/api';

export default {
    name: 'HomePage',
    data() {
        return {
            users: []
        };
    },
    mounted() {
        this.fetchUser();
    },
    methods: {
        async fetchUser() {
            try {
                const response = await api.get('/users');
                this.users = response.data;
            } catch (error) {
                console.error('failed to fetch users', error);
            }
        },
        async deleteUser(userId) {
            try {
                await api.deleteUser(userId);
                this.users = this.users.filter(user => user.id !== userId);
                } catch (error) {
                    console.error('Failed to delete user', error);
                }
            },
        editUser(user) {
            console.log('editing user', user);
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 10;
}
li {
    margin: 10px 0;
    padding: 10px;
    background-color: #e3dddd;
}
button {
    margin-left: 20px;
}
</style>