import { User } from './user.model';

export interface Localization {
    lat: number;
    long: number;
}

export interface EventModel {
    name: string;
    description: string;
    localization: Localization;
    max_inscription_date: Date;
    init_presentation_date: Date;
    end_presentation_date: Date;
    likes: number,
    type: 'Social' | 'Cultural' | 'Academic';
    pictures: Array<any>,
    owner: number,
    id: number;
}