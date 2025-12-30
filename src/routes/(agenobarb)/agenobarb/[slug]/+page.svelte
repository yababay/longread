<script lang="ts">
    import Article from '$lib/components/article/index.svelte'
    export let data: {raw: string, collection: string}
    const { raw, collection } = data
</script>

<Article {raw} collection="echo-1917" />
