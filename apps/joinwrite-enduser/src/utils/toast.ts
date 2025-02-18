import { toast } from 'react-toastify';
// import Check from '../assets/icons/Check Circle.svg?react';

export const toastError = (message: string) => {
  toast(message, { type: 'error' });
};
