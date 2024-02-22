const assistant = "You are a helpful assistant.";

const prompt = (inputs) => {
  return `Please prioritize my day. If there is not enough time in the day, give me an idea of when I could fit my other priorities in: For work, I have to ${inputs.work.join(" ,")}, and this should be the bulk of my day. For chores I have to ${inputs.chores.join(" ,")}. I also need to ${inputs.needs.join(" ,")}. I hope I can make time to ${inputs.dreams.join(" ,")} Could you parse that into chunks of time and pomodoros for me? The output should just be a list of tasks with time of day and pomodoros. Each task should be a new line. Thank you!`;
};

export { assistant, prompt };