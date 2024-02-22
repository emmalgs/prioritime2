import Form from "./form";

const DayInput = ({ handleSubmit }) => {
  return (
    <div className="dayMain">
      <h2 className="dayHeader">What do you need to get done today?</h2>
      <form className='inputForm' onSubmit={handleSubmit}>
        <Form category={"work"} />
        <Form category={"chores"} />
        <Form category={"needs"} />
        <Form category={"dreams"} />
        <p>
          Plan my day <button type="submit">&#8594;</button>
        </p>
      </form>
    </div>
  );
};

export default DayInput;
