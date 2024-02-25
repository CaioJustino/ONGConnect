<template>
  <body class="background">
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="card mt-5 mb-5">
        <div id="div-login" class="cadastro">
          <h2>Voluntariado</h2>
          <form @submit.prevent="voluntariado">
            <div class="imputs">
              <div class="space-inputs">
                <label>ONG:</label><br>
                <select v-model="id_ong" required class="input-forms border-1">
                  <option v-for="ong in ongs" :key="ong.id" :value="ong.id">{{ ong.nome }}</option>
                </select><br>
              </div>
              <div class="mt-4">
                <span>Área:</span>
                <div class="d-flex">
                  <div class="form-check mt-3 me-5">
                  <input class="form-check-input" type="radio" v-model="area" name="flexRadioDefault" id="flexRadioDefault1" value="marketing">
                  <label class="form-check-label" for="flexRadioDefault1">
                    Marketing
                  </label>
                  </div>
                  <div class="form-check mt-3 me-5">
                    <input class="form-check-input" type="radio" v-model="area" name="flexRadioDefault" id="flexRadioDefault1" value="gestao">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Gestão
                    </label>
                    </div>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block fw-semi-bold w-100">Enviar</button>
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
        ongs: '',
        id_ong: '',
        area: '',
        message: '',
      }
    },
    
    methods: {
      async voluntariado() {
        try {
          const id = this.$route.params.id
          
          const response = await axios.post('https://ongconnectbackend.caio-victorvic4.repl.co/acao/cadastro', {
            id_ong: this.id_ong,
            id_volut: id,
            tipo: 'voluntariado',
            area: this.area
          })

          this.$router.push({ name: 'Profile_volut', params: { id: id } })
        }
        
        catch (error) {
          this.message = "Falha no cadastro!"
        }
      },

      get_ongs() {
        const path = 'https://ongconnectbackend.caio-victorvic4.repl.co/ong/ongs'
        axios.get(path)
        .then ((res) => {
          this.ongs = res.data.data
        }) 
        .catch ((err) => {
          console.error(err)
        })
      },
    },

    created() {
      this.get_ongs()
    }
  }
</script>