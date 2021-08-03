export interface Campaign{
     _id:string;
    title: string;
    description:string;
    tags: string[];
    image_url:string;
    date_created:Date;
    date_end: Date;
    author_id:string;
    goal: number;
}

