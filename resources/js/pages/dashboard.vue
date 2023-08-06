<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center">Dashboard</h1>
                <button class="btn btn-primary" @click="logout">
                    Logout <i class="fas fa-sign-out-alt"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>

import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const logout = () => {
            localStorage.removeItem('token');
            router.push({ name: 'home' });
        };
        return {
            logout,
        };
    },

};
</script>