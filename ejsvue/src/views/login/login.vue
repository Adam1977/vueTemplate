<template>
    <div id="login">
      <div class="login">
        <h1>{{hello}}</h1>
      </div>
    </div>
</template>

<script>
    export default {
      name: "login",
      data () {
        return  {
          hello: 12312
        }
      },
      created() {
        this.$api.get('getInfo', {}).then(res => {
          console.log(res)
        })
      }
    }
</script>

<style scoped lang="scss">
.login {
  h1 {
    color: red;
  }
}
</style>
