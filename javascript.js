var leftNum = getRandomLeftPosition();
var topNum = getRandomTopPosition();
$('#goal').css({
    left: leftNum,
    top: topNum
});

$(document).keyup(function(e) {

        //the order goes: left,right,bottom,up
        if (e.keyCode==37){
        requestAnimationFrame(function(){$('#blueDot').animate({
            left:"-=10"}, 0
        )})} else if (e.keyCode==39){
        requestAnimationFrame(function(){$('#blueDot').animate({
            left:"+=10"}, 0
        )})} else if (e.keyCode==40){
        requestAnimationFrame(function(){$('#blueDot').animate({
          top:"+=10"}, 0
          )})} else if (e.keyCode==38){
        requestAnimationFrame(function(){$('#blueDot').animate({
            top:"-=10"}, 0)})}

        //the top one is for bluebox, the bottom is redbox
    //they look different because I am trying to see which is best for readability

        if (e.keyCode==65){
            requestAnimationFrame(function (){

                $('#redDot').animate({
                    left:"-=10"}, 0
                )}
            )}

        else if (e.keyCode==68){
            requestAnimationFrame(function (){

                $('#redDot').animate({
                    left:"+=10"}, 0
                )}
            )}

        else if (e.keyCode==83){
            requestAnimationFrame(function (){

                $('#redDot').animate({
                    top:"+=10"}, 0
                )}
            )}

        else if (e.keyCode==87){
            requestAnimationFrame(function (){

                $('#redDot').animate({
                    top:"-=10"}, 0
                )}
            )}


    var rPosition = $('#redDot')
    var bPosition = $('#blueDot')
    var gPosition = $('#goal')
    var gridPosition = $('.gridBox')
    var positionRed = rPosition.position();
    var positionBlue = bPosition.position();
    var positionGoal = gPosition.position();
    var positionGrid = gridPosition.position();

    //this is what sets it off if the box matches the other
    if (positionRed.left == positionGoal.left && positionRed.top == positionGoal.top){
        if(alert('Red Wins!')){}
        else    window.location.reload();
    } else if (positionBlue.left == positionGoal.left && positionBlue.top == positionGoal.top){
        if(alert('Blue Wins!')){}
        else    window.location.reload();
    }
});



function getRandomLeftPosition() {
    return getRandomInt(1, 25) * 20;
}

function getRandomInt(min ,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomTopPosition() {
    return getRandomInt(1, 25) * 20;
}

