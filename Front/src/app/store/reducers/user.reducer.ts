import { Action } from '@ngrx/store';

const initialState = {
  userLogged: {},
};

export function authReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'SIGN_UP':

      break;
    case 'LOGIN':

      break;
    case 'LOGOUT':

      break;
  }


}
