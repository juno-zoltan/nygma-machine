const Advice = (props) => {
  return (
    <div>
      <section>
        <h3>{props.name}</h3>
        <p>{props.advice}</p>
      </section>
    </div>
  );
};

export default Advice;
