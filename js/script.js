(function(){

    const date = new Date();

    const conv_second =((date.getSeconds() + date.getMilliseconds()/1000) / 60 )* 360;

    const conv_minutes = (date.getMinutes() / 60) * 360;

    const conv_hours = ((date.getHours() + date.getMinutes()/ 60) / 12) * 360

    // rotate to

    const rotate_secondto = conv_second + 360 ;
    const rotate_minuteto = conv_minutes +360 ;
    const rotate_hoursto = conv_hours + 360 ;    

    // update

    const root = document.documentElement;
    root.style.setProperty("--s-rotate-from" ,conv_second +"deg" );
    root.style.setProperty("--m-rotate-from" ,conv_minutes +"deg" );
    root.style.setProperty("--h-rotate-from" ,conv_hours +"deg" );
    
    root.style.setProperty("--s-rotate-to" , rotate_secondto +"deg" );
    root.style.setProperty("--m-rotate-to" ,rotate_minuteto +"deg" );
    root.style.setProperty("--h-rotate-to" ,rotate_hoursto +"deg" );


})();