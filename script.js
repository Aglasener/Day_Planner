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





