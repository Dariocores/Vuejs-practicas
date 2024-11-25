<template>
  <div id="login-container">
    <div id="login">
      <h1>Iniciar Sesión</h1>
      <img src="@/assets/logo_login.jpeg" alt="Logo" class="login-image" />
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="username">Usuario:</label>
          <input v-model="username" type="text" id="username" required />
        </div>
        <div class="input-group">
          <label for="password">Contraseña:</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Lógica de autenticación
      if (this.username === 'admin' && this.password === '1234') {
       
        this.$router.push('/home'); // Redirige al HomePage
      } else {
        alert('Credenciales incorrectas');
      }
    }
  }
};
</script>

<style scoped>
/* Estilo para tu componente */
#login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #4caf50, #2196f3);
}

#login {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: linear-gradient(45deg, #4caf50, #2196f3);
  border: #000000 solid;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}

.login-image {
  width: 50%;
  height: auto;
  display: block;
  margin: 0 auto 20px;
  border-radius: 30%;
}

.input-group {
  margin-bottom: 15px;
}

input {
  width: 95%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #000000;
  border: black solid;
  border-radius: 6px;
}
</style>
