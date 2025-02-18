import { toast } from 'react-toastify';
import Check from '../assets/icons/Check.svg?react';

export const toastError = (message: string) => {
  toast(message, { type: 'error', icon: Check });
};
