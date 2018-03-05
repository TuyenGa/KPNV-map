<template>
  <form class="form-login">
    <email @email="email = $event"></email>
    <password @password="password = $event"></password>
    <input type="password" v-model="repassword" placeholder="Repassword"/>
    <input type="text" v-model="name" placeholder="name">
    <button @click.prevent="login()">Login</button>
  </form>
</template>
<script>
import email from '../components/comp/Email';
import password from '../components/comp/Password';
export default {
  name: 'Hello World',
  components: {
    email,
    password
  },
  created(){
    this.$store.dispatch('getCurrentUsers');
  },
  methods: {
    login(){
      const data = {
        email : this.email,
        password: this.password,
        repassword: this.repassword,
        name: this.name
      }
      console.log(data)
      this.$store.dispatch('addUserToTable',data)
    }
  },
  data(){
    return {
      email: '',
      password: '',
      name: '',
      repassword: ''
    }
  }
}
</script>
<style lang="sass" scoped>
  .form-login
    border: 1px solid black
    display: flex
    flex-direction: column
    flex-wrap: wrap
    height: 500px
    justify-content: center
    padding-top: 20px
    text-align: center
</style>
