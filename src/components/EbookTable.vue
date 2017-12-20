<template>
  <el-main>
    <div style="margin-top: 15px;">
      <el-input placeholder="搜尋您想比價的電子書名關鍵字" v-model="input" v-on:keyup.enter="submitSearch" class="input-with-select">
        <el-button v-on:click="submitSearch" slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="box-wrapper center">
      <vue-spinner :loading="isLoading" color="#409EFF" size="45px" margin="24px"></vue-spinner>
    </div>
    <div>
      <div v-for="book in booksCompany" class="box-wrapper books">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <el-tag type="success">博客來</el-tag>
          <span class="price">{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h2>介紹</h2>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in readmoo" class="box-wrapper books">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <el-tag type="success">Readmoo 讀墨</el-tag>
          <span class="price">{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h2>介紹</h2>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in kobo" class="box-wrapper books">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <el-tag type="success">Rakuten kobo</el-tag>
          <span class="price">{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h2>介紹</h2>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in taaze" class="box-wrapper books">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <el-tag type="success">讀冊生活 TAAZE</el-tag>
          <span class="price">{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h2>介紹</h2>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in bookWalker" class="box-wrapper books">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <el-tag type="success">BOOKWALKER</el-tag>
          <span class="price">{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h2>介紹</h2>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in playStore" class="box-wrapper books">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <el-tag type="success">Google Play</el-tag>
          <span class="price">{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h2>介紹</h2>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

    <div>
      <div v-for="book in pubu" class="box-wrapper books">

        <div class="box img flex-1">
          <img :src="book.thumbnail" :alt="book.title" class="image">
        </div>

        <div class="box flex-2">
          <h4><a :href="book.link">{{ book.title }}</a></h4>
          <el-tag type="success">Pubu 電子書城</el-tag>
          <span class="price">{{ book.price }} {{ book.priceCurrency}}</span>
        </div>

        <div class="box flex-3">
          <h2>介紹</h2>
          <p>{{ book.about }}</p>
        </div>

      </div>
    </div>

  </el-main>
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader';

export default {
  name: 'ebook-table',
  components: {
    'vue-spinner': PacmanLoader,
  },
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
      isLoading: false,
    }
  },
  methods: {
    submitSearch() {
      this.isLoading = true;
      this.axios.get('https://ebook.yuer.tw/search', {
        params: {
          q: this.input
        }
      }).then((res) => {
        if(res.data){
          for(let index in res.data) {
            this[index] = res.data[index]
          }
          this.isLoading = false;
        }
      }).catch((err) => {
        if(err.msg) {
          console.log(err);
          this.isLoading = false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
* body {
  font-size: 14px;
}

a {
  color: #2B81DA;
  text-decoration: none;
}

h2 {
  color: lighten(black, 20%);
}

p {
  color: lighten(black, 35%);
}

.image {
  width: 100%;
  display: block;
  flex: left;
  border-radius: 5px;
}

.box-wrapper {
  display: flex;
  padding: 16px;

  &.books {
    border-bottom: 1px solid #d2d2d2;
  }

  &.center {
    justify-content: center;
    margin-top: 42px;
  }

  .box {
    padding: 12px;
    margin: 0 8px;

    .price {
      font-size: 1.5rem;
      color: lighten(black, 20%);
      margin-left: 8px;
      padding: 0.5rem 1rem;
    }
  }
}

.search-btn {
  margin: 0 12px;
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

.flex-8 {
  flex: 8;
}


</style>
