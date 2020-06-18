var currentDay;

var planner = {
     items: [
         {time: "9am", item: ""},
         {time: "10am", item: ""},
         {time: "11am", item: ""},
         {time: "12pm", item: ""},
         {time: "1pm", item: ""},
         {time: "2pm", item: ""},
         {time: "3pm", item: ""},
         {time: "4pm", item: ""},
         {time: "5pm", item: ""},
     ],
     readItems: function() {
        var s = localStorage.getItem("plannerItems")
        if (s != null){
            this.items = JSON.parse(s);
        }
     },
     writeItems: function(){
         var s = JSON.stringify(this.items);
         localStorage.setItem("plannerItems", s);

     },
     displayItems: function(){
        for (let i = 0; i<this.items.length; i++){
            var s = $("<div>").addClass("time-block row");
            s.val(i);
            var t = $("<div>").text(this.items[i].time);
            t.addClass("col-1")
            var u = $("<textarea>").text(this.items[i].item);
            u.addClass("col-9")
            let thisTime = i+9;
            let currentTime = parseInt(currentDay.format("H")); 
            console.log(currentTime);
            if (thisTime == currentTime){
                u.addClass("present");
            } else if (thisTime > currentTime){
                u.addClass("future");
            } else {
                u.addClass("past");
            }
            var v = $("<div>").addClass("saveBtn col-2");
            v.text("Save");
            s.append(t, u, v)
            $("#items").append(s);
                 
        }
        $(".saveBtn").click(function(event){
            var element = event.target;
            let time = element.previousSibling.previousSibling.textContent;
            let content = element.previousSibling.value;
            planner.items[element.parentNode.value].item = content;
            console.log(planner.items);
            planner.writeItems();

        });
     }

}





$(document).ready(function (){
    
    //planner.writeItems(); // for testing
    currentDay = moment();
    //currentDay.hour(12);  // for testing
    planner.readItems();
    console.log(planner.items);
    planner.displayItems();
    
    $("#currentDay").text(currentDay.format("dddd, MMM Do"));
    
    

})