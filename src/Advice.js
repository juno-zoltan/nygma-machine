const Advice = (props) => {
  return (
    <div>
      <h3>Your response</h3>
      <section>
        <h4>{props.name}</h4>
        <p>{props.answer}</p>
      </section>
    </div>
  );
};

export default Advice;
