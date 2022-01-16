// @ Muhammad-Abdelaal v1.0


class Gethub {
    constructor(){
        this.client_secret = '5*****************************';
        this.client_id = '3******************************';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_secret=${this.client_secret}?client_id=${this.client_id}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile= await profileResponse.json();
        const repos = await repoResponse.json();
           return {
               profile,
                repos
            } ; 
    }
}



