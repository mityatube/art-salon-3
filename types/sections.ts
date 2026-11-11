export interface Painting {
  image: string
  title: string
}
export interface SectionWithImage {
  title: string
  text: string
  image: string
}
export interface SectionText {
  title: string
  text: string
}
export interface SectionsData {
  paintings: Painting[]
  handcraft: SectionWithImage
  about: SectionText
  arts: SectionText
}
