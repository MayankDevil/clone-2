/*
-	Clone-2 "Google"
-	Developed by Mayank
-	CopyRight by Google
-	JavaScript : ./js/script.js
*/
try
{
    

    let search_fld = document.getElementById('search_fld')
    
    let data_list = document.getElementById('data_list')

    search_fld.onfocus = () => {

        data_list.innerHTML = "hero"
    }

    function search_data()
    {
        url.forEach(data => ` <a href="${data}"> ${data} </a>` );
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
