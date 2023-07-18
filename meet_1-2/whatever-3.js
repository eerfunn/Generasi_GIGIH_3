const wait = (time) => new Promise((res) => setTimeout(res, time));

const asyncAwait = async () => {
  try {
    console.log("Hello");
    await wait(3000);
    console.log("World");
  } catch (err) {
    console.log(err.message);
  }
};
asyncAwait();
