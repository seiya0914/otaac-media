<template>
  <section class="container">
    <h1>{{ post.fields.title }}</h1>
    <div v-html="toHtmlString(post.fields.body)"></div>
  </section>
</template>
<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
export default {
  async asyncData({ app, params, payload }) {
    // IDをキーに記事を取得
    const entry = await app.$ctflClient.getEntry(params.id)
    return {
      post: entry
    }
  },
  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    }
  }
}
</script>
