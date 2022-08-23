import style from "../style/components/button.module.scss";

export const Button = (props) => {
  const { children } = props;

  return <div className={style.btn}>{children}</div>;
};
