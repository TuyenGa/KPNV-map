<template>
  <div class="login-form col-md-4">
    <form>
      <email @email="email = $event"></email>
      <password @password="password = $event"></password>
      <button @click.prevent="login()" type="submit" class="btn btn-primary">Login</button>
    </form>

  </div>
</template>
<script>
import email from './comp/Email';
import password from './comp/Password';
export default {
  name: 'login',
  components: {
    email,
    password
  },
  methods: {
    login(){
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login',data);
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
