export type Bread = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  text: string;
  img: {
    url: string;
    height: number;
    width: number;
  };
  rank: string[];
};
