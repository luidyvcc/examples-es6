import axios from 'axios';

const buscaUsuario = async (user) => {

    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    } catch (error) {
        console.log('Usuário não existe!');
    }

}

buscaUsuario('luidyvcc');