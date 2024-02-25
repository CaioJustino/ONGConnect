<template>
  <div class="container mt-5">
    <h2 class="names">Editar Informações</h2>
    <form @submit.prevent="update">
      <div class="row">
        <div class="col-4 card first-card">
          <div class="texts">
            <div class="">
              <div class="imputs">
                <div class="space-inputs">
                  <label>Nome:</label><br>
                  <input v-model="nome" required class="input-forms border-1"><br>
                </div>
                <div class="space-inputs">
                  <label>E-mail:</label><br>
                  <input v-model="email" required class="input-forms border-1"><br>
                </div>
                <div class="space-inputs">
                  <label>Contato:</label><br>
                  <input v-model="contato" required class="input-forms border-1"><br>
                </div>
                <div class="space-inputs">
                  <label>CPF:</label><br>
                  <input v-model="cpf" required class="input-forms border-1"><br>
                </div>
                <div class="space-inputs">
                  <label>Senha:</label><br>
                  <input v-model="senha" required class="input-forms border-1"><br>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div class="col-6 card" style="width: 488px; height: 254px; overflow: hidden;">
          <div class="texts" style="height: 100%;">
            <span class="comment">Resumo</span>
            <div class="user-comments" style="height: calc(100% - 40px);">
              <!-- Conteúdo do card -->
              <div class="comment-input" style="height: 80px;">
                <!-- Campo de entrada para o comentário do usuário -->
                <textarea v-model="resumo" required class="input-forms border-1" style="height: 160px; width:400px"></textarea><br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <!-- Botões em uma nova linha -->
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-white border-primary btn-custom-negar mr-2 me-3">Cancelar</button>
            <button type="button" class="btn btn-primary btn-custom-aceitar">Salvar modificações</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        nome: '',
        email: '',
        contato: '',
        cpf: '',
        resumo: '',
        senha: '',
        message: '',
      }
    },
    
    methods: {
      async update() {
        try {
          const id = this.$route.params.id
          
          const response = await axios.post('https://ongconnectbackend.caio-victorvic4.repl.co/voluntario/editar/' + id, {
            nome: this.nome,
            email: this.email,
            contato: this.contato,
            cpf: this.cpf,
            resumo: this.resumo,
            senha: this.senha,
          })

          if (response.data.message === 'Voluntario atualizado!') {
            this.$router.push({ name: 'Profile_volut', params: { id: response.data.id } })
          }

          else {
            this.message = response.data.message
          }
        }
        
        catch (error) {
          this.message = "Falha na atualização!"
        }
      }
    }
  }
</script>