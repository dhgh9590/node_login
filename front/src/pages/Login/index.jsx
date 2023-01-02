import React from 'react';
import styles from './style.module.css';

export const Login = () => {
  return (
    <div>
      <form>
        <div className={styles.id_box}>
          <input type="text" placeholder="아이디" />
        </div>
        <div className={styles.pw_box}>
          <input type="text" placeholder="비밀번호" />
        </div>
      </form>
    </div>
  );
};

export default Login;
