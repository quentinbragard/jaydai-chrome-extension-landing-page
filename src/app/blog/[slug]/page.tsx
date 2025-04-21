import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/navigation'

export default function BlogPage({
    params,
    searchParams
}: {
    params: { slug?: string[] }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    // turn the catch‑all into a safe string path

    const slug = params.slug;

    // flatten out searchParams into an array of [key,value] pairs
    const queryEntries = Object.entries(searchParams).flatMap(([key, val]) => {
    if (val === undefined) return []
    if (Array.isArray(val)) return val.map(v => [key, v])
    return [[key, val]]
    })

    const queryString = queryEntries.length
    ? '?' + new URLSearchParams(queryEntries).toString()
    : ''

    // now everything in the template is guaranteed to be a string
    redirect(`/${defaultLocale}/blog/${slug}${queryString}`)
}