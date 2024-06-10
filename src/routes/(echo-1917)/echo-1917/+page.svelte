<script lang="ts">
    import Article from '$lib/components/article/index.svelte'
    import raw from './README.md?raw'
    import { title } from '$lib/article'

</script>

<Article {raw} />

<svelte:head>
    <title>{title}</title>
</svelte:head>
