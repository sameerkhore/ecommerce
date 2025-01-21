import { createClient } from '@sanity/client'
import createImageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ofol4ea6',
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: true
})

export function urlForImage(source: any) {
  return `<Sanity Image URL Builder Logic>`;
}
// const imageBuilder = createImageUrlBuilder(client)

// export const urlForImage = (source: any) => {
//   return imageBuilder?.image(source).auto("format").fit("max")
// }

