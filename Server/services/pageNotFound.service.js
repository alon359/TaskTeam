

module.exports = function notFound(req, res) {
    console.log('work');
    res.status(404).json({ massage: 'Page not found (404)' });
}




