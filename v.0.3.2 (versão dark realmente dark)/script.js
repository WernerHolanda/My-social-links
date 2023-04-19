alert ('Seja Bem Vindo(a)')

function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light-mode");
console.log("teste")    
// 2º pegar a tag da img no css
    const img = querySelector("#my_profile_img")
// queryselector significa bsucar e selecionar

// 3º se no html, ao buscar entre as classes definidas no html, se nelas contem alguma que seja "light-mode"
    if (html.classList.Contains = ("light-mode")) {
    //4º substituir a img
    //setAttribute significa alterar o atributo
        img.setAttribute('src', 'https://scontent.fmcz2-1.fna.fbcdn.net/v/t31.18172-8/26172682_10213945056675871_532093580598992428_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=6TQ2c1s76GIAX8fogG2&_nc_ht=scontent.fmcz2-1.fna&oh=00_AfCyDUGZLFiBXPNToMqGI0yB2hV4qI3lkVHCrVq58jvl5g&oe=6464C4CE');
}
    else{
        img. setAttribute('src', 'https://scontent.fmcz2-1.fna.fbcdn.net/v/t1.6435-9/87954884_10221606400164670_4755496663257186304_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=Z6pR6fw-Ex0AX_V41s9&_nc_ht=scontent.fmcz2-1.fna&oh=00_AfD66j_mL9qvngm_26F6WZ4CCBoRYkzlwzahcLegH18ZpQ&oe=6464CA89');
    }

}