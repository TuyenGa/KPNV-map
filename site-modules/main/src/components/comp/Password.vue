<template>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" @input="changePassword(password)" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
</template>
<script>
export default {
  name: 'password',
  data: () => {
    return {
      placeholder: 'Input password',
      type: 'password',
      password: ''
    }
  },
  methods: {
    changePassword(password){
      this.$emit('password',password)
    }
  }
}
</script>
<style lang="sass" scoped>
  .input-password
    height: 20px
</style>
