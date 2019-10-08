import axios from 'axios';

class Github {

    static async getRepositories(repo) {

        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        } catch (error) {
            console.log('Repositório não existe');
        }

    }

}
Github.getRepositories('luidyvcc/examples_es6');
Github.getRepositories('rocketseat/dslkvmskv');
