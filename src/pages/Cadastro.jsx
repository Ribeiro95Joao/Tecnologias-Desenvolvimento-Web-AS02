import { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css"; // <-- Importando o CSS

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const navigate = useNavigate();

  async function handleCadastro() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        sobrenome,
        dataNascimento,
        uid: user.uid,
      });

      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar usuário!");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Cadastro</h1>
      <div className="form">
        <input
          className="input"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="input"
          placeholder="Sobrenome"
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <input
          className="input"
          placeholder="Data de Nascimento"
          type="date"
          onChange={(e) => setDataNascimento(e.target.value)}
        />
        <input
          className="input"
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          placeholder="Senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
        />
        <button className="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}
