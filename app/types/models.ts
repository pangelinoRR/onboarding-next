interface AlbumImage {
  height: number;
  url: string;
  width: number;
}

export interface Album {
  album_type: string;
  artists: any;
  available_markets: any;
  external_urls: object;
  href: string;
  id: string;
  images: AlbumImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
