
<template>
    <div>
      <h1>Bienvenido, {{ username }}!</h1>
      <p>Has iniciado sesión correctamente.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: 'Usuario'
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  