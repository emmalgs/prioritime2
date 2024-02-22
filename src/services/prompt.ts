const assistant = "You are a helpful assistant.";

const prompt = (inputs) => {
  return `Please prioritize my day: I have to ${inputs}. Could you parse that into chunks of time and pomodoros for me? The output should just be a list of tasks with time of day and pomodoros. Each task should be a new line. Thank you!`;
};

export { assistant, prompt };