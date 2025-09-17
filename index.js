let homeScore = 0
let home = document.querySelector(".home")
let awayScore = 0
let away =  document.querySelector(".away")

  
    function homeBtnOne(){
        homeScore+=1;
        home.textContent = homeScore
    }
    
        function homeBtnTwo(){
        homeScore+=2;
        home.textContent = homeScore
    }
    
        function homeBtnThree(){
        homeScore+=3;
        home.textContent = homeScore
    }

        function awayBtnOne(){
            awayScore+=1;
            away.textContent = awayScore
        }  
        
        function awayBtnTwo(){
            awayScore+=2;
            away.textContent = awayScore
        } 
        
        function awayBtnThree(){
            awayScore+=3;
            away.textContent = awayScore
        } 
    
        function reset(){
            awayScore = 0;
            homeScore = 0;
            away.textContent = awayScore
            home.textContent = homeScore
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
