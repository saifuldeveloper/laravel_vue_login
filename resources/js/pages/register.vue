<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6 mt-4">
                <h1 class="text-center">Register</h1>
                <p class="text-danger" v-for="error in errors" :key="error">
                    <span v-for="err in error" :key="err">{{ err }}</span>
                </p>
                <p class="text-danger" v-if="error">{{ error }}</p>
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            aria-describedby="emailHelp"
                            placeholder="Enter name"
                            v-model="form.name"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            v-model="form.email"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Password"
                            v-model="form.password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="c_password">Confirm Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="c_password"
                            placeholder="confirm Password"
                            v-model="form.c_password"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary w-100">
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        // Create a reactive form object
        const form = reactive({
            name: "",
            email: "",
            password: "",
            c_password: "",
        });
        // Create a ref for error handling
        const errors = ref([]);
        // Function to handle login
        const register = async () => {
            try {
                const response = await axios.post("/api/register", form);
                if (response.data.success) {
                    // Handle successful login
                    localStorage.setItem(
                        "token",
                        response.data.data.token,
                        router.push({ name: "Dashboard" })

                   
                    );
                } else {
                    handleError(response.data.message);
                }
            } catch (err) {
                // handleError("An error occurred. Please try again later.");
                handleError(err.response.data.message);
                 
            }
        };

        // Function to handle errors
        const handleError = (message) => {
            errors.value = message;
        };

        return {
            form,
            register,
            errors,
        };
    },
};
</script>
