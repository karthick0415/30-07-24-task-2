function check(){
            let val= document.getElementById("num").value
            if(val.substring(0,1).search(/[a-z]/i)!=-1&&val.substring(1,2).search(/[a-z]/i)!=-1&&val.substring(2,3).search(/[a-z]/i)!=-1&&val.substring(3,4).search(/[a-z]/i)!=-1
        &&val.substring(4,5).search(/[a-z]/i)!=-1&&val.substring(5,6).search(/[0-9]/i)!=-1&&val.substring(6,7).search(/[0-9]/i)!=-1&&val.substring(7,8).search(/[0-9]/i)!=-1
        &&val.substring(8,9).search(/[0-9]/i)!=-1&&val.substring(9,10).search(/[a-z]/i)!=-1){
              document.getElementById("err").innerHTML="Valid pan number"
              document.getElementById("err").style.color="green"
            }else{
                document.getElementById("err").innerHTML="Invalid pan number"
                  document.getElementById("err").style.color="red"
            }
            
           
           
        }
