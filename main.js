var mouseevent="empty";
var last_position_x, last_position_y;
cv=document.getElementById("myCanvas");

ctx=cv.getContext("2d");

cv.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
mouseevent="mousedown";

}

cv.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseevent="mouseleave";
}

cv.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseevent="mouseup";
}

cv.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-cv.offsetLeft;
    current_position_of_mouse_y=e.clientY-cv.offsetTop;

    if (mouseevent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.linewidth=2;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,20,0,2*Math.PI);
        ctx.stroke();
    }

    last_position_x=current_position_of_mouse_x;
    last_position_y=current_position_of_mouse_y;

}