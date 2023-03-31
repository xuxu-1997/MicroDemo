<template>
  <micro-app
      name="sunapp"
      url="http://localhost:8081/"
      :data="{ token: '1111' }"
      baseroute='/app'
      @datachange="handleDataChange"
  />
</template>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
function handleDataChange(data){
  console.log('接受到子發送數據',data)
  const {detail} = data
  const {path} = detail.data
  router.push(path)
}
</script>
<script>
export default {
  name: "app"
}
</script>

<style scoped>

</style>