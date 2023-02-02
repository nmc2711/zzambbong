import { atom } from 'jotai';

interface UserInfo {
  [key: string]: any;
}

export const atUserInfo = atom<UserInfo>({
  id: '',
  password: '',
});
