<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6 mt-4">
                <h1 class="text-center">Login</h1>
                <p class="text-danger" v-if="error">{{ error }}</p>
                <form @submit.prevent="login">
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
                    <button type="submit" class="btn btn-primary w-100">
                        Submit
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
            email: "",
            password: "",
        });
        // Create a ref for error handling
        const error = ref("");
        // Function to handle login
        const login = async () => {
            try {
                const response = await axios.post("/api/login", form);
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
            error.value = message;
        };

        return {
            form,
            login,
            error,
        };
    },
};
</script>
