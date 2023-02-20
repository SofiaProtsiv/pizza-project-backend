const getCurrentUser = async (req, res) => {
  const { name, phone } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        phone,
        name,
      },
    },
  });
};
module.exports = getCurrentUser;
