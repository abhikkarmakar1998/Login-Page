document.getElementById ("btn").addEventListener ("click", login);
function login ()
{
    let email=document.getElementById('username').Value;
    let password=document.getElementById('password').Value;

    if (email=="Abhikkarmakar1998@gmail.com" && password=="123")
    {
        location.assign ("https://codepen.io/login");
    }
    else {
        window.alert("login failed");
    }
}