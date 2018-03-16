import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED 
} from './types';

export const emailChanged = (text) => {
    return {
        type: 'EMAIL_CHANGED', //this is the connect
        //between action creator and reducer
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}