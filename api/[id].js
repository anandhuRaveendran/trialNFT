const metadata = require('../metadata.json');

module.exports = (req, res) => {
    const { id } = req.query;
    res.json(JSON.parse(JSON.stringify(metadata[id])))
}