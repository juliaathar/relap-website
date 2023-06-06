const showTimeNow = () =>{

    //selecinando a tag de destino
      const clockTag = document.querySelector('time');
      
    //instanciando a classe date
      let dateNow = new Date();
    
    //pegando os valores desejados
      let hh = dateNow.getHours();
      let mm = dateNow.getMinutes();
      let ss = dateNow.getSeconds();
      let ms = dateNow.getMilliseconds();
      
      
      hh = hh < 10 ? '0'+ hh : hh; 
      mm = mm < 10 ? '0'+ mm : mm; 
      ss = ss < 10 ? '0'+ ss : ss; 
       
      clockTag.innerText = hh +':'+ mm +':'+ ss + ':' + ms;
    }

    const mileSegundos = () =>{

    //selecinando a tag de destino
      // const clockTag = document.querySelector('time');
      
    //instanciando a classe date
      let dateNow = new Date();
    
    //pegando os valores desejados
      let ms = dateNow.getMilliseconds();
      ms = ms < 10 ? '0'+ ms : ms; 
      
      document.getElementById('milesegundos') =  ":"  + ms;
    }
    
    //executando a funcao a cada 1 segundo
    showTimeNow()
    mileSegundos()
    setInterval(showTimeNow, 1000);
    setInterval(mileSegundos, 1);