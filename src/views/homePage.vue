<template>
  <div id="home-page">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-content">
        <h1>Darix</h1>
        <!-- Botón de cerrar sesión -->
        <button @click="logout" class="logout-btn">
          <i class="fas fa-user"></i>
          <span></span>
        </button>
      </div>
    </nav>

    <!-- Sidebar -->
    <div class="sidebar">
      <ul>
        <li><button @click="goToDashboard('home')">Dashboard</button></li>
        <li><button @click="goToSettings">Configuración</button></li>
        <li><button @click="goToProfile">Perfil</button></li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: this.$route.query.username || 'Usuario'
    };
  },
  methods: {
    goToDashboard(page) {
      console.log(`Redirigiendo a ${page}`);
      // Aquí podrías redirigir a diferentes páginas del Dashboard
      // this.$router.push(`/dashboard/${page}`);
    },
    goToSettings() {
      console.log('Redirigiendo a Configuración');
      // Redirigir a la página de configuración
      // this.$router.push('/settings');
    },
    goToProfile() {
      console.log('Redirigiendo a Perfil');
      // Redirigir a la página de perfil
      // this.$router.push('/profile');
    },
    logout() {
  // Mostrar confirmación
  const confirmLogout = window.confirm('¿Está seguro que desea cerrar sesión?');

  if (confirmLogout) {
    console.log('Cerrando sesión...');
    // Limpiar datos de sesión si es necesario
    localStorage.removeItem('userToken'); // Eliminar token de sesión, si aplica

    // Redirigir al puerto 8080
    window.location.href = 'http://localhost:8080'; // Cambia 'localhost' por tu dominio si no estás en desarrollo
  } else {
    console.log('Canceló el cierre de sesión');
    }
  }
}
};
</script>


<style scoped>
#home-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  background: linear-gradient(45deg, #4caf50, #2196f3);
  color: black;
  padding: 10px 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.navbar h1 {
  margin: 0;
}
.navbar-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.logout-btn {
  margin-left: auto; /* Empuja el botón hacia la derecha */
  display: flex;
  align-items: center;
  background-color: green;
  color: black;
  border-radius: 30%;
  padding: 9px 9px ;
  cursor: pointer;
  font-size: 14px;
  
}

.logout-btn i {
  font-size: 16px; /* Tamaño del icono */
}

.logout-btn:hover {
  background-color: grey;
}

.content-wrapper {
  display: flex;
  flex: 1;
  /* Ocupa el espacio restante debajo de la navbar */
}

.sidebar {
  width: 10%;
  height: 100%;
  background: linear-gradient(45deg, #2196f3 , #4caf50 );

  color: white;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar ul {
  list-style-type: none;
  padding-left: 0;
  width: 100%;
}

.sidebar ul li {
  width: 100%;
}

.sidebar ul li button {
  width: 100%;
  background: linear-gradient(45deg, #4caf50, #2196f3);
  color:black; 
  padding: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  text-align: left;
}

.sidebar ul li button:hover {
  background-color: grey;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
}

.main-content h2 {
  margin-top: 0;
}
</style>
