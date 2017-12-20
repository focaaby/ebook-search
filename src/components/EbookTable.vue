<template>
  <div class="hello">
    <el-input placeholder="Please input" v-model="input" v-on:keyup.enter="submitSearch"></el-input>
    <button v-on:click="submitSearch">search</button>
    <div>
      <div v-for="book in booksCompany" class="box-wrapper">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <span>博客來</span>
          <span>{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h4>介紹</h4>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in readmoo" class="box-wrapper">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <span>Readmoo 讀墨</span>
          <span>{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h4>介紹</h4>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in kobo" class="box-wrapper">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <span>Rakuten kobo</span>
          <span>{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h4>介紹</h4>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in taaze" class="box-wrapper">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <span>冊生活 TAAZE</span>
          <span>{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h4>介紹</h4>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in bookWalker" class="box-wrapper">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <span>BOOKWALKER</span>
          <span>{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h4>介紹</h4>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in playStore" class="box-wrapper">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <span>Google Play</span>
          <span>{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h4>介紹</h4>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in pubu" class="box-wrapper">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <span>Pubu 電子書城</span>
          <span>{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h4>介紹</h4>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ebook-table',
  data () {
    return {
      input: '',
      booksCompany: [],
      readmoo: [],
      kobo: [],
      taaze: [],
      bookWalker: [],
      playStore: [],
      pubu: [],
    }
  },
  methods: {
    submitSearch() {
      this.axios.get('https://ebook.yuer.tw/search', {
        params: {
          q: this.input
        }
      }).then((res) => {
        for(let index in res.data) {
          this[index] = res.data[index]
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.box-wrapper {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #d2d2d2;
}

.box {
  padding: 12px;
  margin: 0 8px;
}

.box-title {
  margin: 8px;
  padding: 8px;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.flex-3 {
  flex: 3;
}

.image {
  width: 100%;
  display: block;
  flex: left;
  border-radius: 5px;
  /* padding-right: 8px; */
}
</style>
