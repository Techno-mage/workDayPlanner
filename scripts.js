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
        for (item of this.items){
            var s = $("<div>").addClass("time-block row");
            var t = $("<div>").text(item.time);
            t.addClass("col-1")
            var u = $("<textarea>").text(item.item);
            u.addClass("col-9 past")
            s.append(t, u, $("<div>").addClass("saveBtn col-2"))
            $("#items").append(s);
        }
     }





}




$(document).ready(function (){
    console.log("this is working.")
    
    //planner.writeItems();
    planner.readItems();
    console.log(planner.items);
    planner.displayItems();
    $("#currentDay").text(moment().format("dddd, MMM Do"));
    console.log(typeof moment().format("dddd, MMM Do"));
    console.log(moment().isBefore(21, "hour"));
    console.log(moment().isBefore(12, "hour"));

})