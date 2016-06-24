module.exports = function(Review) {
  Review.beforeRemote('create', function(context, user, next) {
	console.log('remote hook called');
    next();
  });
};
