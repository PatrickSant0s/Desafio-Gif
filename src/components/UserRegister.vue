<template>
  <div  class="background">

  <v-card class="mx-auto" max-width="344" title="User Registration">
    <v-container id="refister-form" >
      <v-text-field
        v-model="first"
        color="primary"
        label="First name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Last name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>
      
      
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success" @click="registerUsers" @submit="registerUsers">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>

export default {
  name: "UserRegister",
  data() {
    return {
      email: "",
      firstname: "",
      lastName: "",
      password: "",
      users: [],
    };
  },
  methods: {
    registerUsers() {
      const newUser = {
        FirstName: this.first,
        LastName: this.last,
        Email: this.email,
        Password: this.password,
        Status: "Cadastrado",
      };
      
      this.email = "";
      this.firstName = "";
      this.lastName = "";
      this.password = "";

      console.log("Usuário cadastrado:", newUser);
      
    },
  },
};
</script>

<style scoped>

</style>
