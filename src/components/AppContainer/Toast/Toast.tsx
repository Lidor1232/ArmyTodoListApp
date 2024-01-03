import React, {FC} from 'react';
import ToastComponent from 'react-native-toast-message';
import {config} from './Toast.constans';

interface IProps {}

export const Toast: FC<IProps> = React.memo(({}) => {
  return <ToastComponent config={config} />;
});
