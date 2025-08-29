<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AboutUs from './components/AboutUs.vue'
</script>

<template>
  <about-container>
  <div class="resume">
    <!-- Profile Section -->
    <header class="profile-header">
      <img alt="Profile logo" class="logo" src="./assets/pf.png" />
      <h1>Marisher Cabral</h1>
      <h2>IT</h2>
      <p>
        Passionate IT professional with experience in web development, backend APIs, 
        and database management. Skilled in solving technical problems and creating 
        efficient solutions.
      </p>
    </header>
 <h2>About Me</h2>
      <AboutUs />
  </div>
  </about-container>
</template>

<style scoped>
.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.profile-header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 1rem auto;
  width: 120px; 
  height: 120px;
  border-radius: 50%; 
}

.about-container {
  display: flex;
  justify-content: center;   
  align-items: center;       
  width: 100%;
  margin-top: 2rem;          }

</style>