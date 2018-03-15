<template>
  <section class="container">
    <div class="posts">
      <div v-for="(post, index) in posts"
        :key="index"
        class="post">
          <h2 class="post-title">
            {{post.title}}
          </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const posts = await app.$axios.$get('https://jsonplaceholder.typicode.com/posts')
    return { posts }
  }
}
</script>

<style>
  .posts {
     display: flex;
     flex-flow: row wrap;
     text-align: left;
  }

  .post {
    flex: 1 1 33%;
  }
</style>
