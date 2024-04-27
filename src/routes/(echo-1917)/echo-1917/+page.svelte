<script lang="ts">
    import Article from '$lib/components/article/index.svelte'
    import raw from './README.md?raw'
</script>

<Article {raw} />
