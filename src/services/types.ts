export interface SearchAPIResponse {
  results: Results;
}

export interface Results {
  "opensearch:Query": OpensearchQuery;
  "opensearch:totalResults": string;
  "opensearch:startIndex": string;
  "opensearch:itemsPerPage": string;
  albummatches: Albummatches;
  trackmatches: Trackmatches;
  artistmatches: Artistmatches;
  "@attr": Attr;
}

export interface OpensearchQuery {
  "#text": string;
  role: string;
  searchTerms: string;
  startPage: string;
}

export interface Albummatches {
  album: Album[];
}

export interface Album {
  name: string;
  artist: string;
  url: string;
  image: Image[];
  streamable: string;
  mbid: string;
}

export interface Trackmatches {
  track: Track[];
}

export interface Track {
  name: string;
  artist: string;
  url: string;
  streamable: string;
  listeners: string;
  image: Image[];
  mbid: string;
}

export interface Artistmatches {
  artist: Artist[];
}

export interface Artist {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
}

export interface Image {
  "#text": string;
  size: string;
}

export interface Attr {
  for: string;
}
