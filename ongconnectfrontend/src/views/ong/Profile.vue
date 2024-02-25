<template>
  <div class="container mt-5">
    <div>
    <h2 class="name">Bem-vindo(a), {{ nome }}!</h2>
    <p>Lista de Voluntários na minha ONG.</p></div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <table class="blueTable">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Modalidade</th>
              <th>Estado</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody v-if="ongs.length > 0">
            <tr v-for="ong in ongs">
              <td>{{ ong.nome }}</td>
              <td>{{ ong.categoria }}</td>
              <td>{{ ong.modalidade }}</td>
              <td>{{ ong.estado }}</td>
              <td>{{ ong.cidade }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <td>Nenhuma ONG encontrada.</td>
          </tbody>
        </table>
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
        message: '',
      }
    },
    
    methods: {
      get() {
        const id = this.$route.params.id
        
        const path = 'https://ongconnectbackend.caio-victorvic4.repl.co/ong/' + id
        axios.get(path)
        .then ((res) => {
          this.nome = res.data.data.nome
        }) 
        .catch ((err) => {
          console.error(err)
        })
      },
    },
    
    created() {
        this.get()
    }
  }
</script>