const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.logout();
    //Voltar mensagem de logout com sucesso
});

module.exports = router;
