<template>
  <body class="background">
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="card mt-5 mb-5">
        <div id="div-login" class="cadastro">
          <h2>Cadastro</h2>
          <form @submit.prevent="create">
            <span class="text-form">ou</span><br>
            <div class="imputs">
              <div class="space-inputs">
                <label>Nome:</label><br>
                <input v-model="nome" required class="input-forms border-1"><br>
              </div>
              <div class="space-inputs">
                <label>CPF ou CNPJ:</label><br>
                <input v-model="cpf_cnpj" required class="input-forms border-1"><br>
              </div>
              <div class="space-inputs">
                <label>E-mail:</label><br>
                <input v-model="email" required class="input-forms border-1"><br>
              </div>
              <div class="space-inputs">
                <label>Senha:</label><br>
                <input v-model="senha" type="password" required class="input-forms border-1"><br>

                <div class="mt-4">
                <span>Tipo de usuário</span>
                <div class="d-flex">
                  <div class="form-check mt-3 me-5">
                  <input class="form-check-input" type="radio" v-model="tipo" name="flexRadioDefault" id="flexRadioDefault1" value="voluntario">
                  <label class="form-check-label" for="flexRadioDefault1">
                    Voluntário
                  </label>
                  </div>
                  <div class="form-check mt-3">
                  <input class="form-check-input" type="radio" v-model="tipo" name="flexRadioDefault" id="flexRadioDefault2" value="ong">
                  <label class="form-check-label" for="flexRadioDefault2">
                    ONG
                  </label>
                  </div>
                </div></div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block fw-semi-bold w-100">Cadastrar</button>
            <div class="link2"><a href="/">Já possui uma conta? Faça login!</a><br></div>
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
        nome: '',
        cpf_cnpj: '',
        email: '',
        senha: '',
        tipo: '',
        message: '',
      }
    },
    
    methods: {
      async create() {
        try {
          if (this.tipo == "voluntario") {
            const response = await axios.post('https://ongconnectbackend.caio-victorvic4.repl.co/voluntario/cadastro', {
              nome: this.nome,
              cpf: this.cpf_cnpj,
              email: this.email,
              resumo: 'Resumo',
              contato: 123,
              senha: this.senha
            })

            if (response.data.message === 'Voluntario criado!') {
              this.$router.push({ name: 'Login' })
            }

            else {
              this.$router.push({ name: 'Create'})
              this.message = response.data.message
            }
          }

          else {
            const response = await axios.post('https://ongconnectbackend.caio-victorvic4.repl.co/ong/cadastro', {
              nome: this.nome,
              cnpj: this.cpf_cnpj,
              email: this.email,
              resumo: 'Resumo',
              contato: 123,
              senha: this.senha,
              modalidade: 'Presencial',
              categoria: 'Categoria',
              cidade: 'Cidade',
              uf: 'UF'
            })
  
            if (response.data.message === 'ONG criada!') {
              this.$router.push({ name: 'Login' })
            }
  
            else {
              this.$router.push({ name: 'Create'})
              this.message = response.data.message
            }
          }
        }
        
        catch (error) {
          this.message = "Falha no cadastro!"
        }
      }
    }
  }
</script>