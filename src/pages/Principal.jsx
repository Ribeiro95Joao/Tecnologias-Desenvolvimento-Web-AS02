import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Principal() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarUsuario() {
      const user = auth.currentUser;

      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUsuario(docSnap.data());
        }
      } else {
        navigate("/login");
      }
    }

    carregarUsuario();
  }, [navigate]);

  if (!usuario) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Bem-vindo!</h1>
      <p>Nome: {usuario.nome}</p>
      <p>Sobrenome: {usuario.sobrenome}</p>
      <p>Data de nascimento: {usuario.dataNascimento}</p>
    </div>
  );
}
