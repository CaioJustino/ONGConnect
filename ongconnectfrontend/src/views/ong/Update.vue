<template>
  <div class="container mt-5">
    <h2 class="names">Editar Informações</h2>
  
    <div class="row">
      <div class="col-4 card first-card">
        <div class="texts">
          <div class="">
            <div class="imputs">
              <div class="space-inputs">
                <label>Nome da ONG:</label><br>
                <input v-model="nome" required class="input-forms border-1"><br>
              </div>
              <div class="space-inputs">
                <label>E-mail:</label><br>
                <input v-model="email" required class="input-forms border-1"><br>
              </div>
              <div class="space-inputs">
                <label>Categoria:</label><br>
                <select v-model="categoria" required class="input-forms border-1">
                  <option value="">Selecione uma categoria</option>
                  <option value="Categoria 1">Categoria 1</option>
                  <option value="Categoria 2">Categoria 2</option>
                  <option value="Categoria 3">Categoria 3</option>
                  <!-- Adicione mais opções conforme necessário -->
                </select><br>
              </div>
              <div class="space-inputs">
                <label>UF:</label><br>
                <input v-model="" type="" required class="input-forms border-1"><br>
              </div>
              <div class="space-inputs">
                <label>Cidade:</label><br>
                <input v-model="" type="" required class="input-forms border-1"><br>
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
              <textarea v-model="userComment" required class="input-forms border-1" style="height: 160px; width:400px"></textarea><br>
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
  </div>
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
      async update() {
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
              this.$router.push({ name: 'Cadastro'})
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
              this.$router.push({ name: 'Cadastro'})
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