import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'ozder8n0',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})
