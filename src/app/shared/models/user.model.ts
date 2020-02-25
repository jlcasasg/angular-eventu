export interface User {
    name: string;
    email: string;
    password: string;
    picture: {
        src: string,
        name: string,
    },
    id: number;
}