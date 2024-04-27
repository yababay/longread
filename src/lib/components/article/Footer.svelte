<script lang="ts">
    import { license } from "$lib/article";
</script>

<footer>{@html license}</footer>

<style lang="scss">
    @import '$lib/styles/article/settings';
    footer {
        line-height: $footer-height;
        text-align: right;
        padding-right: 1rem;
        font-size: small;
        color: #4b5257;
    }
</style>
