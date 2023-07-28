import { realtimeDb } from 'config/firebase';
import {
  get,
  onValue,
  push,
  ref,
  remove,
  set,
  update
} from 'firebase/database';

export const fireGet = (path: string, cb: (data: unknown) => void) => {
  onValue(ref(realtimeDb, path), (snapshot) => {
    const data = snapshot.val();
    cb(data);
  });
};

export const fireSet = async (path: string, data: unknown) => {
  const response = await set(ref(realtimeDb, path), data);

  return response;
};

export const firePush = async (path: string, data?: unknown) => {
  const response = await push(ref(realtimeDb, path), data);

  return response;
};

export const fireUpdate = async (path: string, data: object) => {
  const response = await update(ref(realtimeDb, path), data);

  return response;
};

export const fireDelete = async (path: string) => {
  const response = await remove(ref(realtimeDb, path));

  return response;
};
