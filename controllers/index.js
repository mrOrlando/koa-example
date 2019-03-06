const users = [
  { id: '1', name: 'Alex' },
  { id: '2', name: 'Alisa' },
  { id: '3', name: 'Bob' },
];

module.exports.index = async (ctx, next) => {
  ctx.render('pages/index');
};

module.exports.users = async (ctx, next) => {
  ctx.body = users;
};

module.exports.user = async (ctx, next) => {
  const userId = ctx.params.id; // typeof userId => string
  try {
    const user = users.find(user => user.id === userId);
    ctx.body = { text: `🚀 ${user.name} 🚀` };
  } catch (error) {
    console.error('Error: ', error);
    ctx.status = 404;
    ctx.body = {
      msg: `Sorry ☹️, there is no such user with id: ${userId}`,
    };
  }
};
