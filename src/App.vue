<template>
  <div id="app">
    <EbookTable/>
  </div>
</template>

<script>
import EbookTable from './components/EbookTable'

export default {
  name: 'app',
  components: {
    EbookTable
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);

* {
    font-family: 'Noto Sans TC', "Microsoft JhengHei", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
}

</style>
