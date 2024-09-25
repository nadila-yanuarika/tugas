<template>  
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-gradient">  
   <div class="container d-flex justify-content-center align-items-center py-5">  
    <!-- Outer Card -->  
    <div class="card-profile card shadow-lg p-4 rounded-4">  
      <div class="row g-0">  
        
       <!-- Profile Image (Centered) -->  
       <div class="col-lg-4 d-flex justify-content-center align-items-center">  
        <img  
          class="rounded-circle profile-pic mb-3"  
          src="/assets/profile.png"  
          alt="Profile Picture"  
          width="180"  
          height="250"  
        />  
       </div>  
       <br>  
        
       <!-- Profile Information (Right) -->  
       <div class="col-lg-8 d-flex flex-column justify-content-center">  
        <div class="ps-lg-4">  
          <!-- Name and Title -->  
          <h2 class="text-dark fw-bold mb-2 text-center">Nadila Yanuarika Rimawati</h2>  
          <p class="text-muted mb-4 text-center">Umur 19 | Mahasiswa Teknologi Informasi | Fakultas Vokasi | Universitas Brawijaya</p>  
          <hr>  
           
          <!-- About Me Section -->  
          <h4 class="fw-bold text-primary mb-3 text-center">Tentang Saya</h4>  
          <p class="text-muted mb-4 text-center">  
           Saya mahasiswa Teknologi Informasi yang sangat antusias dalam pengembangan perangkat lunak dan desain web. Saya senang mempelajari teknologi baru dan menerapkan ide-ide inovatif dalam proyek-proyek yang saya kerjakan.  
          </p>  
  
          <!-- Skills Section -->  
          <h4 class="fw-bold text-primary mb-3 text-center">Saya Pelajari</h4>  
          <br>  
          <div class="row mb-4 justify-content-center">  
           <div class="col-12 d-flex flex-wrap justify-content-center">  
            <span class="badge bg-pink m-1">HTML</span>  
            <span class="badge bg-pink m-1">CSS</span>  
            <span class="badge bg-pink m-1">JavaScript</span>  
            <span class="badge bg-pink m-1">Vue.js</span>  
            <span class="badge bg-pink m-1">Nuxt.js</span>  
            <span class="badge bg-pink m-1">PHP</span>  
            <span class="badge bg-pink m-1">MySQL</span>  
           </div>  
          </div>  
          <br> <br>  
  
          <!-- Social Media Buttons -->  
          <h4 class="fw-bold text-primary mb-3 text-center">Sosial Media</h4>  
          <br>  
          <div class="d-flex justify-content-center gap-3">  
           <a href="https://instagram.com/@nadilaayan.__" class="btn btn-pink">Instagram</a>  
           <a href="https://www.linkedin.com/in/nadila-yanuarika-5a9488289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="btn btn-pink">LinkedIn</a>  
          </div>  
        </div>  
       </div>  
      </div>  
    </div>  
   </div>  
  </div>  
</template>  
  
<script>  
export default {  
  name: "ProfilePage",  
  head() {  
   return {  
    title: "Profil Nadila Yanuarika Rimawati" // Title for the page  
   }  
  }  
}  
</script>  
  
<style scoped>  
/* Background Gradient */  
.bg-gradient {  
  background: linear-gradient(135deg, #ffafbd, #ffc3a0);  
}  
  
/* Card Styling */  
.card-profile {  
  max-width: 950px;  
  background-color: white;  
  border-radius: 25px;  
  padding: 40px;  
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.1);  
  margin: 0 auto; /* Add this line */  
}  
  
/* Image Styling */  
.profile-pic {  
  border: 5px solid #fff;  
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);  
}  
  
/* Button Styling */  
.btn-pink {  
  background-color: #ffafbd;  
  color: white;  
  border: none;  
  font-size: 1rem;  
  padding: 10px 20px;  
  border-radius: 25px;  
  transition: background-color 0.3s ease;  
}  
  
.btn-pink:hover {  
  background-color: #ff8fa3;  
  color: white;  
}  
  
/* Badge Styling */  
.badge.bg-pink {  
  background-color: #ffc3a0;  
  color: white;  
  font-size: 0.9rem;  
  padding: 0.6rem 1.2rem;  
  border-radius: 20px;  
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);  
}  
  
/* Typography */  
h2, h4 {  
  margin: 0;  
}  
  
p {  
  margin-bottom: 1.5rem;  
  line-height: 1.6;  
}  
  
.text-muted {  
  color: #6c757d;  
}  
</style>