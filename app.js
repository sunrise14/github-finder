github = new Github();
ui = new UI();
document.getElementById("searchUser").addEventListener('keyup', (e)=>{
    const userText = e.target.value;
    if (userText !== ''){
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === "Not Found"){
                ui.showAlert("User Not Found", "alert alert-danger");
            }
            else{
                ui.showProfile(data.profile);
            }
        })
    }
    else{
        //clear profile
    }
})
