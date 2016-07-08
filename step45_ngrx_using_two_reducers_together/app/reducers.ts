import { ActionReducer, Action } from '@ngrx/store';
import {List} from 'immutable';

export const SECOND = 'SECOND';
export const HOUR = 'HOUR';

export const clockReducer: ActionReducer<Date> = (state = new Date(), action: Action)=> {
    const date = new Date(state.getTime());
    switch(action.type){
        case SECOND:
            date.setSeconds(date.getSeconds() + action.payload);
            return date;

        case HOUR:
            date.setHours(date.getHours() + action.payload);
            return date;

        default:
            return state;

    }

};


export interface IPerson {
    name: string;
    time: Date;
}

const defaultPeople : List<IPerson> = List([
    {name: "Sara", time: clockReducer(undefined, {type: ""})},
    {name: "John", time: clockReducer(undefined, {type: ""})},
    {name: "Nancy", time: clockReducer(undefined, {type: ""})},
    {name: "Drew", time: clockReducer(undefined, {type: ""})}
]);
export const peopleReducer = (state = defaultPeople, action: Action)=> {
    switch (action.type) {

        default:
            return state;
    }
};
