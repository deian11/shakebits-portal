export interface NewsItem {
    id: number;
    title: string;
    url: string;
};

export interface NewsResponse {
    items: NewsItem[],
    totalCount: number
}
