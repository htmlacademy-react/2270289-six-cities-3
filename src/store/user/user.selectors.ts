import { NameSpaces } from '../../const';
import { TState } from '../../types/state';

export const userAuthorizationStatus = (state: TState) => state[NameSpaces.User].authorizationStatus;
export const userData = (state: TState) => state[NameSpaces.User].userData;
