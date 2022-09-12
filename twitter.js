function addTweet(){
    const text1 = document.getElementById("text-1").value
    const tcontainer= document.getElementById("tlist")
    const div= document.createElement("div")
    div.innerText =text1
    tcontainer.appendChild(div)
   document.getElementById("text-1").value= ""
    console.log("text-1")
    document.getElementById("tlist").style.border= "1px solid gray"
    document.getElementById("tlist").style.borderRadius="5px"
    document.getElementById("tlist").style.textAlign="center"
    document.getElementById("tlist").style.marginBottom="5px"
  }
 
  