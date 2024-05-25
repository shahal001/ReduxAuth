const notFound = (req, res) => {
  res.status(401).json({ message: "requested route not exist" });
};
module.exports = notFound;
