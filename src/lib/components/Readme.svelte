<script lang="ts">
    import showdown from 'showdown'
    const converter = new showdown.Converter()
    
    export let raw: string
    const html = converter.makeHtml(raw)

</script>

<article>
    {@html html}
</article>

<style lang="scss">
    article {
        width: 100%;
        max-width: 80ch;
        margin: 0 auto;
    }
</style>
