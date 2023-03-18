const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    // we get req, res, next actually anyways
    try {
      await fn(req, res, next); // invoke function that's passed
    } catch (error) {
      next(error); // pass this to next middleware
    }
  };
};

module.exports = asyncWrapper;
