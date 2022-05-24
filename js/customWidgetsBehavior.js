// CHECK VALIDATION CHECKBOX ON SLIDER CLICK
let elements = document.getElementsByClassName("slider");
let onClick = function() {
    document.getElementsByName(this.getAttribute("name").concat("_validator"))[0].checked = true
};
Array.from(elements).forEach((element) => {element.addEventListener('click', onClick)});

// SELECT ITEMS FROM MULTI-SELECT WITH SINGLE MOUSE CLICK
$(".categories-menu").mousedown(function(e){
    e.preventDefault();
    const select = this;
    const scroll = select .scrollTop;
    e.target.selected = !e.target.selected;
    setTimeout(function(){select.scrollTop = scroll;}, 0);
    $(select ).focus();
}).mousemove(function(e){e.preventDefault()});

// document.addEventListener('focusin', function() {
//     console.log('focused: ', document.activeElement)
// }, true);
