import { EventModel } from '../shared/models/event.model';

export const events: Array<EventModel> = [
    {
        name: 'Evento 1',
        description: 'The best event in the world, The best event in the world,The best event in the world,The best event in the world The best event in the world,The best event in the world,The best event in the world, The best event in the world,The best event in the world The best event in the worldThe best event in the worldThe best event in the world',
        localization: {
            lat: 40.187462,
            lng: -39.398635,
        },
        max_inscription_date: new Date('2020-10-14'),
        init_presentation_date: new Date('2020-10-14'),
        end_presentation_date: new Date('2020-10-14'),
        raiting: 3,
        type: 'Social',
        pictures: [
            {
                src: 'https://images.pexels.com/photos/3755760/pexels-photo-3755760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/1632071/pexels-photo-1632071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            }],
        id: 1,
        owner: 1,
        spectators: 10,
    },
    {
        name: 'Evento 1',
        description: 'The best event in the world',
        localization: {
            lat: 1,
            lng: 1,
        },
        max_inscription_date: new Date('2020-10-14'),
        init_presentation_date: new Date('2020-10-14'),
        end_presentation_date: new Date('2020-10-14'),
        raiting: 1,
        type: 'Cultural',
        pictures: [
            {
                src: 'https://images.pexels.com/photos/3755760/pexels-photo-3755760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/1632071/pexels-photo-1632071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            }],
        id: 2,
        owner: 1,
        spectators: 10,
    },
    {
        name: 'Evento 1',
        description: 'The best event in the world',
        localization: {
            lat: 26.63115,
            lng: 65.037706,
        },
        max_inscription_date: new Date('2020-10-14'),
        init_presentation_date: new Date('2020-10-14 7:00'),
        end_presentation_date: new Date('2020-10-14 11:00'),
        raiting: 2,
        type: 'Cultural',
        pictures: [
            {
                src: 'https://images.pexels.com/photos/3755760/pexels-photo-3755760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/1632071/pexels-photo-1632071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            }],
        id: 3,
        owner: 1,
        spectators: 10,
    },
    {
        name: 'Evento 1',
        description: 'The best event in the world',
        localization: {
            lat: -9.467282,
            lng: -24.485502,
        },
        max_inscription_date: new Date('2020-10-14'),
        init_presentation_date: new Date('2020-10-01'),
        end_presentation_date: new Date('2020-10-11 12:00'),
        raiting: 5,
        type: 'Academic',
        pictures: [
            {
                src: 'https://images.pexels.com/photos/3755760/pexels-photo-3755760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/1632071/pexels-photo-1632071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            }],
        id: 4,
        owner: 1,
        spectators: 10,
    },
    {
        name: 'Evento 1',
        description: 'The best event in the world',
        localization: {
            lat: -24.485502,
            lng: 116.216932,
        },
        max_inscription_date: new Date('2020-10-14'),
        init_presentation_date: new Date('2020-10-14'),
        end_presentation_date: new Date('2020-10-15 12:00'),
        raiting: 0,
        type: 'Social',
        pictures: [
            {
                src: 'https://images.pexels.com/photos/3755760/pexels-photo-3755760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/1632071/pexels-photo-1632071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name: 'Image 1'
            },
            {
                src: 'https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Image 1'
            }],
        id: 5,
        owner: 1,
        spectators: 10,
    },
]