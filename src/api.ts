const API_URL = 'http://localhost:5001'

export type Project = {
  id: number
  title: string
  description: string
  image: string
  link?: string
  techs?: string[]
  featured?: boolean
  role?: string
  teamSize?: number
  startDate?: string
  endDate?: string
  responsibilities?: string[]
}

export type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  createdAt: string
  tags: string[]
  featured?: boolean
}

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${API_URL}/projects`)
  if (!res.ok) throw new Error('Failed to fetch projects')
  return res.json()
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const res = await fetch(`${API_URL}/blogs`)
  if (!res.ok) throw new Error('Failed to fetch blog posts')
  return res.json()
}

export const fetchBlogPost = async (id: number): Promise<BlogPost> => {
  const res = await fetch(`${API_URL}/blogs/${id}`)
  if (!res.ok) throw new Error('Failed to fetch blog post')
  return res.json()
}

export type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

export const submitContact = async (payload: ContactPayload): Promise<void> => {
  const res = await fetch(`${API_URL}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      createdAt: new Date().toISOString(),
    }),
  })

  if (!res.ok) throw new Error('Failed to submit contact')
}
