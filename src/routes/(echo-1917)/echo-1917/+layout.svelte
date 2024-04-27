<script lang="ts">
    import Header from '$lib/components/article/header/index.svelte'
    import Footer from '$lib/components/article/Footer.svelte'
    import '$lib/styles/article/index.scss'
    import { title, author, description, keywords } from '$lib/article'
</script>

<Header />

<main>
    <slot />
</main>

<Footer  />

<svelte:head>
    <!-- base href="/articles/echo-1917/" / -->
    <meta name="author" content={author} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="icon" href="/favicon.svg" />
    <title>{title}</title>
</svelte:head>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
    }
</style>