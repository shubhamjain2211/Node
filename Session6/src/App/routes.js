const router = require('express').Router();
const Items = require('./controller')

router.get('/items', Items.getAll);
router.post('/items', Items.create);
router.patch('/item/:id', Items.update);
router.delete('/item/:id', Items.delete);

module.exports = router;