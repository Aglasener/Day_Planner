
// Present Time at top of screen
var update = function () {
    $("#datetime").text(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    update();
    setInterval(update, 1000);
});

// code for contents of the Day Planner
var events = ["","","","","","","","",""];
var currentId = 0;

function getPlans (){   
    var planList = JSON.parse(localStorage.getItem("plans"));
    console.log(planList);
    if (planList !==null){
        for(var i = 0; i < events.length; i ++){
        
            events = planList;
            planIndex=Number(i)+1
            $("#plan"+planIndex+"").val(events[i]);
        }
    }
};

getPlans();

$(".save").on("click", function(){
    event.preventDefault();
    currentId = $(this).parent().parent().attr("id");
    console.log(currentId);
    var planId = Number(currentId) + 1;
    console.log($("#plan"+planId+"").val());
    events[currentId] = $("#plan"+planId+"").val();
    console.log(events);
    localStorage.setItem("plans", JSON.stringify(events));
});

// code for changing colors of the time slots
//moment($(".hour").val(), "HH:mm").format("hh:mm A");




var updateTimeColor = function () {
    milTime = moment().format('HH');
    console.log(milTime);

for (var i = 0; i < events.length; i ++){
    var timeId = Number(i) + 9;
    if(timeId<milTime){
        $("#"+i+"").attr("class","past");
    }
    else if (timeId==milTime){
        $("#"+i+"").attr("class","present");
    }
    else{
        $("#"+i+"").attr("class","future");
    }
}
};

$(document).ready(function(){
    updateTimeColor();
    setInterval(update, 60000);
});



