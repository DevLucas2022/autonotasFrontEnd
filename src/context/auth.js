import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userId = localStorage.getItem("user_id");

        if(userId) {
            const fetchUserData = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/aluno/${userId}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
    
                    if (response.ok) {
                        const userData = await response.json();
                    } else {
                        console.log(`Erro na aplicação: ${response.status}`);
                    }
                } catch (error) {
                    console.log(error);
                }
            };
    
            fetchUserData();
        }
    }, []);

    const signin = async (email, password) => {
        try {
          const response = await fetch("http://localhost:8080/alunos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
          });
      
          if (response.ok) {
            const data = await response.json();
      
            // Armazene o token de autenticação retornado pelo backend no localStorage
            localStorage.setItem("user_id", data.user.id);
      
            // Armazene informações do usuário, se necessário
            setUser(data.user);
      
            return; // Login bem-sucedido
          } else {
            console.log(`Erro na aplicação: ${response.status}`);
            throw new Error('Erro ao fazer login');
          }
        } catch (error) {
          console.log(error);
          return "Erro ao fazer login";
        }
      };
      
    
    const signup = async (email, password, ra, cep, curso, senha) => {   
        try {
            const resposta = await fetch("http://localhost:8080/alunos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password, ra, cep, curso, senha})
            });

            return resposta;
        } catch (error) {
            return console.log(error)
        }

        const usersStorage = JSON.parse(localStorage.getItem("users_db"))

        hasUser = usersStorage?.filter((user) => user.email === email);

        if(hasUser?.length) {
            return "Já tem uma conta com esse E-mail";            
        }

        let newUser;

        if(usersStorage){
            newUser = [...usersStorage, { email, password }];
        }else{
            newUser = [{ email, password }]
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_id");
        history.push("/login");
    };
    return( 
        <AuthContext.Provider
            value={{user, signed: !!user, signin, signup, signout}}>
            {children}
        </AuthContext.Provider>)
}   