export type Project = {
  id: string,
  name: string,
  date: string,
  shortDescription: string,
  fullDescription: string,
  demoLink: string | undefined,
  tileImage: string,
  carouselImages: string[]
}

export type Post = {
  id: string,
  title: string,
  content: string
}