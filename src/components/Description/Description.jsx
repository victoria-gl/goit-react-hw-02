import css from "./Description.module.css";

export const Description = () => {
  return (
    <div>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.descr}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
