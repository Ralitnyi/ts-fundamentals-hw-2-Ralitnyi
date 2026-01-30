export interface PixabayImage {
  id: number;
  likes: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  downloads: number;
  views: number;
  comments: number;
}

export interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: PixabayImage[];
}