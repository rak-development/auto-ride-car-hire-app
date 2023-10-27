export type IntroductionContentType = {
  id: number,
  title: string,
  text: string,
}

export type IntroductionImagesType = {
  id: number,
  image: string
}

export type IntroductionDataType = {
  title: string,
  content: IntroductionContentType[],
  images: IntroductionImagesType[]
}
