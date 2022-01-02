function ageInDays(){
    var birthYear = prompt('Enter Your Birth Year .... Good Fried.');
    var ageInDays = (2021-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('You are '+ageInDays+ ' days old');
    h1.setAttribute('id','ageIdays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageIdays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    image.setAttribute('class','cats');
    image.setAttribute('id','cat');
    var div = document.getElementById('flex-cat-generate');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
    
}
function destroyone(){
    document.getElementById('cat').remove();

}
function destroy(){
    document.querySelectorAll('.cats').forEach(e => e.remove());

}