const getThing = (req, res) => {
  try {
    res.status(200).json({
      message: "Hello World!, this will send single thing data!",
      statusCode: 200,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong!",
      statusCode: 500,
      error: err.message,
    });
  }
};
const getAllThings = (req, res) => {
  try {
    res.status(200).json({
      message: "Hello World!, this will send All Things data!",
      statusCode: 200,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong!",
      statusCode: 500,
      error: err.message,
    });
  }
};
module.exports = {
  getThing,
  getAllThings,
};
