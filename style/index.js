var quotes={
a0:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
<p> ― Bernard M. Baruch </p> `,
 
a1:`“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
<p>― William W. Purkey</p>`,

a2:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
<p> ― Dr. Seuss </p>`,

a3:`“In three words I can sum up everything I've learned about life: it goes on.”
<p>― Robert Frost</p>`,

a4:`“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
<p>― Albert Camus</p>`,

a5:`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
<p>― Maya Angelou </p>`,

a6:`“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
<p>― C.S. Lewis, The Four Loves</p>`,

a7:`“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”
<p>― Martin Luther King Jr., A Testament of Hope: The Essential Writings</p>`
}

var max=8
var numberList=[]
function randomNumber(){
var rNumber=Math.floor(Math.random()*max)//0 to 7
if(!numberList.includes(rNumber)){
numberList.push(rNumber)
display(rNumber)
}
else {
    if(numberList.length<max)
randomNumber()
    else 
    document.getElementById('quote').innerHTML="quotes"
}
}
function display(random){
q='a'+random
document.getElementById('quote').innerHTML=quotes[q]
}
