const DayOutput = ({ response }) => {
  return (
    <div className="dayOutput">
      <h1>Your Day:</h1>
      {response.map((item, index) => {
        return <p key={index}>{item}</p>;
      })
    }
    </div>
  );
};

export default DayOutput;
