export interface Work {
    _id: string;
    title: string;
    description: string;
    figmaLink: string;
    imgUrl: string;
    tags: string[];
}

export interface WorkExperience {
    _id: string;
    name: string;
    company: string;
    desc: string;
}

export interface Experience {
    _id: string;
    year: string;
    works: WorkExperience[];
}

export interface Skill {
    _id: string;
    name: string;
    bgColor: string;
    icon: string;
}

export interface Testimonial {
    _id: string;
    name: string;
    company: string;
    imgurl: string;
    feedback: string;
}

export interface Brand {
    _id: string;
    imgUrl: string;
    name: string;
}
