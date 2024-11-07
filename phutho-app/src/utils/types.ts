export interface Blog {
    id: string;
    author: string;
    image: string;
    tags: string[];
    title: string;
    content: string;
    postedDate: string;
}

export type BlogResponse = {
    blogs: Blog[];
    total: number;
};
