<script lang="ts">
    import { page } from '$app/stores'
    import { menu as appMenu, brand, home } from '$lib/article';
    import LOGO from './favicon.svg?raw'
    
    type MenuItem = { icon?: string, href?: string, title: string, items?: MenuItem[] }

    let { pathname } = $page.url
    if(!pathname.trim()) pathname = '/'

    export let menu: MenuItem[] = appMenu

    const logo = LOGO
    .replace('fill="currentColor"', 'fill="white"')
    .replace(/\=\"16\"/g, '="24"')
</script>

<header>
<nav class="navbar navbar-expand">
    <div class="container-fluid">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="navbar-brand" href={home}>
            {@html logo}
            {brand}
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-text"
            aria-controls="navbar-text"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbar-text">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                {#each menu as {title, href, items, icon} }
                    {#if items}
                        <li class="nav-item dropdown">   
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {#if icon}
                                    <i class={`bi bi-${icon} d-inline`}></i>
                                {/if}
                                {title}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                {#each items as { title, href, icon } }
                                <li>
                                    <a {href} class="dropdown-item">
                                        {#if icon}
                                            <i class={`bi bi-${icon} d-inline`}></i>
                                        {/if}
                                        {title}
                                    </a>
                                </li>
                                {/each}
                            </ul>
                        </li>
                    {:else}
                        <li class="nav-item">
                            <a {href} class="nav-link" class:active={href === pathname}>
                                {#if href && href.includes('github')}
                                    <i class="bi bi-github d-inline"></i>
                                {:else if href && href.includes('https://t.me/')}
                                    <i class="bi bi-telegram d-inline"></i>
                                {:else if href && href === '/'}
                                    <i class="bi bi-house d-inline"></i>
                                {:else if icon}
                                    <i class={`bi bi-${icon} d-inline`}></i>
                                {/if}
                                {title}
                            </a>
                        </li>
                    {/if} 
                {/each}
            </ul>
        </div>
    </div>
</nav>
</header>

<style lang="scss">
    @import '../../../styles/article/settings';
    header {
        border-bottom: 1px solid #4d5459;
    }
</style>