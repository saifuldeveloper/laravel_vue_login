

<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav text-center">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }">Home</router-link> ||
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'register' }">Register</router-link> |
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'login' }">Login</router-link>
            </li> |
            <li class="nav-item">
                <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
            </li>
        </ul>
    </nav>

    <router-view></router-view>
</template>
