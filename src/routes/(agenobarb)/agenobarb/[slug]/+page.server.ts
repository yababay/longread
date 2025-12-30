import { readFile } from 'fs/promises'

export const ssr = true

export const load = async ({params}) => {
    const { slug } = params
    const path = `src/articles/echo-1917/${slug}.md`
    const raw = await readFile(path, 'utf8')
    return { raw }
}
