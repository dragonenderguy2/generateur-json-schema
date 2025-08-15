const express = require('express');
const bodyParser = require('body-parser');
const Ajv = require('ajv');

const app = express();
const port = 3000;
const ajv = new Ajv();

app.use(bodyParser.json());

app.post('/generate-schema', (req, res) => {
  // Logique pour générer un schéma JSON basé sur les données d'entrée
  const data = req.body;
  // À compléter : créer un schéma à partir des données
  const schema = {}; // Exemple de schéma généré
  res.json(schema);
});

app.post('/validate', (req, res) => {
  const { schema, data } = req.body;
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (valid) {
    res.json({ valid: true });
  } else {
    res.status(400).json({ valid: false, errors: validate.errors });
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
