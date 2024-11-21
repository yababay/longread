<script lang="ts">
    import showdown from 'showdown'

    const converter = new showdown.Converter()
    
    export let raw: string, collection: string = ''

    if(collection) {
        const slices = raw.split('](')
        slices.forEach((el, i, arr) => {
            if(i === 0) return
            arr[i] = /^(https?:\/\/)|(\/articles\/)/.test(el) ? el : `/articles/${collection}/${el}`
        })
        raw = slices.join('](')
    }

    const html = converter.makeHtml(raw)

    const arr = /\#([^\n]+)\n/.exec(raw)
    let title = ''
    if(Array.isArray(arr) && arr[1]) title = arr[1].trim()
</script>

<article>
    {@html html}
</article>

<svelte:head>
    <title>{title}</title>
</svelte:head>
