
function get_computer_choice(){

    let number = Math.floor(Math.random() * 3);
    // console.log(number);

    //
    if(number == 0){
        return "Rock";
    }
    else if(number == 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}


function get_human_choice(){
    //ask people rock paper scissors 
    let right_answer = false; 

    while(!right_answer){

        let answer = prompt("Type 'R' for Rock, 'P' for paper and 'S' for scissors");
        let input_check = answer => /^[rsp]$/i.test(answer);
        
    
        if(input_check(answer)){
            console.log("right input");
            right_answer = true;

         
        }
        else{
            console.log("not right input");
        }

        let player_choice = input_check(answer);


        if(player_choice == 'r' || player_choice == 'R' )
        {
            return "Rock";
        }

        else if(player_choice == 'p' || player_choice == 'P')
        {
            return "Paper";
        }

        else{
            return "Scissors";
        }
    }
        
                
        
    

}



console.log(get_computer_choice());
get_human_choice();