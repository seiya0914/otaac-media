<template>
  <section class="container">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="`/posts/${post.sys.id}`">{{
          post.fields.title
        }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  async asyncData({ app, params }) {
    // 記事一覧を取得
    const entries = await app.$ctflClient.getEntries({
      content_type: process.env.CTFL_CONTENT_TYPE_POST
    })
    return {
      posts: entries.items
    }
  }
}
</script>
