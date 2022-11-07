window.onload = function(){
    var entete = document.querySelector("header");
    var navigation = document.querySelector('nav');
    var menu_gauche = document.querySelector('.menu');
    var menu_haut = document.querySelector('#menu_p');
    var corps = document.querySelector('.corps');
    var menu_1 = document.querySelector("#m1");
    var menu_2 = document.querySelector("#m2");
    var container = document.querySelector('.container');

    var plein_ecran = document.querySelector('#pe');

    var ecran_e = 0;

    if (ecran_e == 0){
        entete.style.display = 'none';
        navigation.style.display = 'none';
        menu_gauche.style.display = 'none';
        menu_haut.style.display = 'none';
        menu_1.style.top = '0px';
        menu_2.style.top = '31px';
        corps.style.width = '100%';
        corps.style.top = '0px';
        plein_ecran.style.top = '80px';
        container.style.top = '61px';
        ecran_e = 1;
    }
    else{
        entete.style.display = 'block';
        navigation.style.display = 'block';
        menu_gauche.style.display = 'block';
        menu_haut.style.display = 'block';
        menu_1.style.top = '30px';
        menu_2.style.top = '61px';
        corps.style.width = '80%';
        corps.style.top = '31px';
        plein_ecran.style.top ='140px';
        container.style.top = '90px';
        ecran_e = 0;
    }

    ecran = function(){
        if (ecran_e == 0){
            entete.style.display = 'none';
            navigation.style.display = 'none';
            menu_gauche.style.display = 'none';
            menu_haut.style.display = 'none';
            menu_1.style.top = '0px';
            menu_2.style.top = '31px';
            corps.style.width = '100%';
            corps.style.top = '0px';
            container.style.top = '61px';
            plein_ecran.style.top = '80px';
            ecran_e = 1;
        }
        else{
            entete.style.display = 'block';
            navigation.style.display = 'block';
            menu_gauche.style.display = 'block';
            menu_haut.style.display = 'block';
            menu_1.style.top = '30px';
            menu_2.style.top = '61px';
            corps.style.width = '80%';
            corps.style.top = '31px';
            plein_ecran.style.top ='140px';
            container.style.top = '90px';
            ecran_e = 0;
        }
    }
};

