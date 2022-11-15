module.exports = (req, res, next) => {
  if (req.path == "/level-1" || "/level-2" || "/level-3") {
    next();
  } else {
    res.status(400).json({ err: "잘못된 경로 입니다" });
  }
};
