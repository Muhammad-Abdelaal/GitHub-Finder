// @ Muhammad-Abdelaal v1.0



// Intiate gethub
const github = new Gethub();

// Intiate UI  
const ui = new UI();
// Search input 
const searchUser = document.getElementById('searchUser');

// SearchUser event listener 

searchUser.addEventListener('keyup',
(e) => {
 const userText = e.target.value;
 if(userText !==''){
     // Make an HTTP call
    github.getUser(userText)
    .then(data => {
       if(data.profile.message === 'Not Found'){
           //alert
            ui.showAlert('User Not Found','alert alert-danger');       
       }
       else{
           // Show profile
           ui.showProfile(data.profile);
           ui.showRepos(data.repos);
       }
    })
 }else{
     // Clear profile
     ui.clearProfile();
     

 }
})