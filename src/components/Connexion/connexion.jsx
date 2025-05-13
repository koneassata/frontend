import { useEffect } from 'react';
import axios from 'axios';

function BackendTest() {
  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then(res => {
        console.log(res.data.message);
        alert(res.data.message); // affichage pour l'utilisateur
      })
      .catch(err => {
        console.error("Échec de connexion au backend ❌", err);
        alert("Backend non accessible !");
      });
  }, []);

  return <div>Test de connexion au backend en cours...</div>;
}

export default BackendTest;
