<template>
  <body class="background">
    <div class="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div class="card mt-5">
        <div id="div-login">
          <h2>Login</h2>
          <form @submit.prevent="login">
            <div class="social-container">
              <a href="#" @click.prevent="login_google" class="social"><i class='bx bxl-google'></i></a>
              <a href="#" class="social"><i class='bx bxl-facebook'></i></a>
            </div>
            <span class="text-form">ou</span><br>
            <div class="imputs">
              <div class="space-inputs">
                <label>E-mail:</label><br>
                <input v-model="email" required class="input-forms border-1"><br>
              </div>
              <div class="space-inputs">
                <label>Senha:</label><br>
                <input v-model="senha" type="password" required class="input-forms border-1"><br>
                <div class="link">
                  <a href="#">Esqueci minha senha</a><br>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block fw-semi-bold w-100">Login</button>
            <div class="link2"><a href="/cadastro">Não possui uma conta? Cadastre-se!</a><br></div>
            <p>{{ message }}</p>
          </form>
        </div>
      </div>
    </div>
  </body>
</template>


<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        email: '',
        senha: '',
        message: '',
        id: '',
      }
    },
    
    methods: {
      async login() {
        try {
          const response = await axios.post('https://ongconnectbackend.caio-victorvic4.repl.co/login', {
            email: this.email,
            senha: this.senha,
          })

          if (response.data.message === 'Bem-vindo(a)!') {
            if (response.data.tipo === 'voluntario') {
              this.$store.commit('setAuthentication', true);
              this.$router.push({ name: 'Profile_volut', params: { id: response.data.id } })
            }

            else {
              this.$store.commit('setAuthentication', true);
              this.$router.push({ name: 'Profile_ong', params: { id: response.data.id } })
            }
          }
          
          else {
            this.message = response.data.message
          }
        }
        
        catch (error) {
          this.message = "Falha no login!"
        }
      },

      async login_google() {
        try {
          window.location.href = 'https://ongconnectbackend.caio-victorvic4.repl.co/login/google'
        }

        catch (error) {
          this.message = "Falha no login!"
        }
      }
    },
    
    mounted() {
      const code = new URLSearchParams(window.location.search).get('code');

      if (code) {
        try {
          const response = axios.get('https://ongconnectbackend.caio-victorvic4.repl.co/auth/google?code=${code}')

          if (response.data.message === 'Bem-vindo(a)!') {
            if (response.data.tipo === 'voluntario') {
              this.$store.commit('setAuthentication', true);
              this.$router.push({ name: 'Profile_volut', params: { id: response.data.id } })
            }

            else {
              this.$store.commit('setAuthentication', true);
              this.$router.push({ name: 'Profile_ong', params: { id: response.data.id } })
            }
          }

          else {
            this.message = response.data.message
          }
        }

        catch (error) {
          this.message = "Falha no login!"
        }
      }
    }
  }
</script>

<style>
  #div-login {
    text-align: center;
    margin-top: 60px;
  }
</style>