import Form from "./form";

const DayInput = ({ handleSubmit }) => {
  return (
    <div className="dayMain">
      <h1 className="dayHeader">What do you need to get done today?</h1>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default DayInput;
