<template>
  <input type="button" :value="clicks" @click="increment">
  <input type="button" value="reset" @click="reset">
</template>

<script>
export default {
    name: 'counter',
    data() {
        return {
            clicks: 0
        }
    },
    methods: {
        increment: function() {
            this.clicks++
        },
        reset() {
            this.clicks = 0
        }
    },
}
</script>

<style>

</style>