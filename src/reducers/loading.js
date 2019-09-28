import { RECIEVE_DATA } from '../actions/shared';

export default function loading(state = true, action) {
  return action.type === RECIEVE_DATA ? false : state;
}
