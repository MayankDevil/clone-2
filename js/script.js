/*
-	Clone-2 "Google"
-	Developed by Mayank
-	CopyRight by Google
-	JavaScript : ./js/script.js
*/
try
{
    

    document.getElementById('theme-btn').onclick = () => {

        let element = document.body;

        element.classList.toggle('dark')
    }

    url = [
        "https://github.com/login",
        "https://web.telegram.org/",
        "https://en.wikipedia.org/",
        "https://twitter.com/",
        "https://www.google.com/gmail/about/",
        "https://in.linkedin.com/",
        "https://mxlinux.org/",
        "https://web.whatsapp.com/",
        "https://www.youtube.com/",
        "https://account.microsoft.com/",
        "https://exporntoons.net/recent",
    ]
}
catch(error)
{
    console.log(error)
}