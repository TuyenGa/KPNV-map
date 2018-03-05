<template>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input v-model="email" @input="emailChange(email)" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
</template>
<script>
export default {
  name: 'email',
  data: () => {
    return {
      placeholder: 'Input Email',
      type: 'email',
      email: ''
    }
  },
  methods: {
    emailChange(email){
      this.$emit('email',email)
    }
  },
}
</script>
<style lang="sass" scoped>
  .input-email
    height: 20px
</style>
