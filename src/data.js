import {v4} from 'node-uuid';

export const defaultState = [
    { value: 'Pants', id: v4(), done: false },
    { value: 'Jacket', id: v4(), done: false },
    { value: 'iPhone Charger', id: v4(), done: false },
    { value: 'MacBook', id: v4(), done: false },
    { value: 'Sleeping Pills', id: v4(), done: true },
    { value: 'Underwear', id: v4(), done: false },
    { value: 'Hat', id: v4(), done: false },
    { value: 'T-Shirts', id: v4(), done: false },
    { value: 'Belt', id: v4(), done: false },
    { value: 'Passport', id: v4(), done: true },
    { value: 'Sandwich', id: v4(), done: true },
];

