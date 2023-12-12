export interface TestResponseDTO {
  images: ImageDTO[];
  terms_of_use: TermsOfUseDTO;
}

export interface ImageDTO {
  image_url: string;
}

export interface TermsOfUseDTO {
  paragraphs: TermsOfUseParagraph[];
}

export interface TermsOfUseParagraph {
  index: number;
  title: string;
  content?: string;
  text?: string;
}
