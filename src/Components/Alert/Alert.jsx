import React, { useEffect } from 'react';
import { useTodoContext } from '../../Context/Context';
import './Alert.css';

const Alert = () => {
  const { alert, showAlert } = useTodoContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 2900);
    return () => clearTimeout(timeout);
  });
  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
};

export default Alert;
