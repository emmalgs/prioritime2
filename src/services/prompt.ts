const assistant = "You are a helpful task manager. I can help you prioritize your day. I can also help you schedule your day";

const prompt = (inputs) => {
  const categories = Object.keys(inputs);
  const prompt = categories.map((category) => {
    if (inputs[category].length === 0) {
      return `${category}: No tasks.`;
    }
    return `${category}: ${inputs[category].join(', ')}.`
  }).join(' ');

  console.log({prompt});
  return `Please prioritize my day. If there is not enough time in the day, give me an idea of when I could fit my other priorities in: ${prompt} Could you parse that into chunks of time for me? The output should just be a list of tasks with time the time frame. Each task should be a new line and each line should start with the time frame. For example: "8:00 - 8:30: Walk the dog". If I have work items, those should be scheduled between 9 and 5. Please include breakfast, lunch, and dinner, as well as down time. If I have any dreams I want to get to, please schedule these before and after work.`;
};

export { assistant, prompt };