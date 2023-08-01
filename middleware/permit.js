function permit(allowed) {
  const isAllowed = (role) => allowed.indexOf(role) > -1;

  return (req, res, next) => {
    const loginType = Number(req.loginType);

    if (req.loginType && isAllowed(loginType)) {
      next();
    } else {
      return res.status(404).json({ msg: "Not authorized" });
    }
  };
}

module.exports = permit;
