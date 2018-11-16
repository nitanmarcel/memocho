module.exports = (req, res) => {

	const content = req.rawText || req.body.snippet;
	console.log(content);
	if (!content) return res.redirect('/');
	req.models.snippets.create({ content })
		.then(doc => {
			res.redirect(`/~${doc._id}`);
		});

};
