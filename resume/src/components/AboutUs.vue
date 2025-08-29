<template>
  <div id="about-us" class="about-container">
    <div class="about-card">
      <section>
        <h3>Skills</h3>
        <ul>
          <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
        </ul>
      </section>

      <section>
        <h3>Experience</h3>
        <div v-for="(exp, index) in experience" :key="index" class="experience-item">
          <strong>{{ exp.role }}</strong> – {{ exp.company }}
          <p class="years">{{ exp.years }}</p>
        </div>
      </section>

      <section>
        <h3>Education</h3>
        <p><strong>{{ education.degree }}</strong><br />{{ education.school }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      skills: ["JavaScript", "Node.js", "Express", "MongoDB", "HTML & CSS", "Vue.js"],
      experience: [
        { role: "Web Developer", company: "Freelance Projects", years: "2023 - Present" },
        { role: "IT Support", company: "Local Business", years: "2021 - 2023" },
      ],
      education: {
        degree: "Bachelor of Science in Information Technology",
        school: "Holy Angel University",
      },
    };
  },
};
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;   
  align-items: center;       
  width: 100%;
  margin-top: 2rem;          
}

.about-card {
  max-width: 700px;
  width: 100%;
  background: #fff;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.12);
  font-family: "Segoe UI", Arial, sans-serif;
  line-height: 1.6;
}


.about-card section {
  margin-bottom: 2rem;
}

.about-card h3 {
  margin-bottom: 0.8rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.4rem;
  font-size: 1.2rem;
  color: #222;
}

.about-card ul {
  list-style: square;
  margin-left: 1.5rem;
}

.experience-item {
  margin-bottom: 1rem;
}

.experience-item .years {
  font-size: 0.9rem;
  color: #666;
}

.navbar {
  background-color: #1f1f1f;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.7);
}

.navbar img {
  display: block;
  margin: 0 auto;
  max-height: 60px;
}

table {
  width: 80%;
  margin: 40px auto;
  border-collapse: collapse;
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.8);
}

table th, table td {
  padding: 12px 15px;
  border-bottom: 1px solid #333;
  text-align: center;
}

table th {
  background-color: #292929;
  color: #ffffff;
  font-weight: bold;
}

table tr:hover {
  background-color: #2e2e2e;
}

table tr:last-child td {
  border-bottom: none;
}

</style>
