<template>
  <div id="home-page">
    <!-- Sidebar -->
    <div class="sidebar">
      <ul>
        <li><button @click="activeView = 'knights'">Caballeros</button></li>
        <li><button @click="activeView = 'armors'">Armaduras</button></li>
        <li><button @click="activeView = 'attacks'">Ataques</button></li>
      </ul>
    </div>

    <!-- Contenido principal -->
    <div class="main-wrapper">
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-content">
          <h1>Darix</h1>
          <div class="user-menu">
            <button @click="toggleMenu" class="logout-btn">
              <i class="fas fa-user"></i>
            </button>
            <div v-if="menuVisible" class="menu-dropdown">
              <p>Usuario: {{ username }}</p>
              <button @click="logout" class="menu-item">Cerrar sesión</button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Contenido dinámico -->
      <div class="main-content">
        <component :is="currentComponent"></component>
      </div>
    </div>
  </div>
</template>

    

<script>
// Importa las vistas dinámicas
import KnightsPage from '@/views/knightsPage.vue';
import ArmorsPage from '@/views/armorsPage.vue';
import AttacksPage from '@/views/attacksPage.vue';

export default {
  data() {
    return {
      username: this.$route.query.username || 'Usuario',
      menuVisible: false,
      activeView: 'knights', // Vista predeterminada
    };
  },
  computed: {
    currentComponent() {
      // Devuelve el componente dinámico según la vista activa
      switch (this.activeView) {
        case 'armors':
          return 'ArmorsPage';
        case 'attacks':
          return 'AttacksPage';
        default:
          return 'KnightsPage';
      }
    },
  },
  components: {
    KnightsPage,
    ArmorsPage,
    AttacksPage,
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    logout() {
      const confirmLogout = window.confirm('¿Está seguro que desea cerrar sesión?');
      if (confirmLogout) {
        console.log('Cerrando sesión...');
        localStorage.removeItem('userToken'); // Eliminar token de sesión
        window.location.href = 'http://localhost:8080'; // Redirigir al login
      }
    },
  },
};
</script>

<style scoped>
#home-page {
  display: flex;
  height: 100vh;
}

/* Sidebar */
.sidebar {
  width: 20%;
  background: linear-gradient(45deg, #2196f3, #4caf50);
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  height: 100vh; /* Ocupa toda la altura */
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.sidebar ul li {
  width: 100%;
}

.sidebar ul li button {
  width: 100%;
  background: linear-gradient(45deg, #4caf50, #2196f3);
  color: black;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  text-align: center;
}

.sidebar ul li button:hover {
  background-color: grey;
}

/* Contenedor principal */
.main-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}

/* Navbar */
.navbar {
  background: linear-gradient(45deg, #4caf50, #2196f3);
  color: black;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
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
  background-color: green;
  color: black;
  border-radius: 30%;
  padding: 9px;
  cursor: pointer;
}

.logout-btn i {
  font-size: 16px;
}

.logout-btn:hover {
  background-color: grey;
}

/* Contenido dinámico */
.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  overflow-y: auto; /* Agrega scroll si el contenido es demasiado largo */
}

/* Ajustes responsivos */
@media (max-width: 1023px) {
  #home-page {
    flex-direction: column;
  }

  .sidebar {
    width: 200px; /* Ancho fijo para el sidebar */
  background: linear-gradient(45deg, #2196f3, #4caf50);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  }

  .sidebar ul {
    list-style-type: none;
  padding: 0;
  width: 100%;
  }

  .main-wrapper {
    flex: 1;
  }
}
</style>

