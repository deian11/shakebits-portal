export interface StoryItem {
    id: number;
    title: string;
    url: string;
};

export interface StoriesResponse {
    items: StoryItem[],
    totalCount: number
}
