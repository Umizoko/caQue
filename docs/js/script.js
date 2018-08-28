var curr_scroll_top = 0; // scroll value
var about_top; // #about offset top 
var work_top; // #work offset top
var contact_top; // #contact offset top
// current bar position
var curr_bar = 0.0;
// next bar position
var next_bar = 0.0;
// bar height
const BAR_HIGHT = 60;
// bar width
const BAR_WIDTH = 5;

$(function () {

    // get offset top
    about_top = $("#about").offset().top;
    work_top = $("#work").offset().top;
    contact_top = $("#contact").offset().top;

    // update user scroll top
    $(window).scroll(function () {
        curr_scroll_top = $(this).scrollTop();
    })
});

function setup() {
    var canvas = createCanvas(5, 180);
    canvas.parent("p5canvas");
    noStroke();
}

function draw() {
    background(255);

    //draw progress_frame
    fill(20, 20, 20, 100);
    rect(0, 0, width, height);

    // draw progress_bar
    // 現在のスクロールの位置によってバーの位置を変更する
    if (about_top <= curr_scroll_top) {
        let i = 0;
        next_bar = height / 3 * i;
    }
    if (work_top <= curr_scroll_top) {
        let i = 1;
        next_bar = height / 3 * i;
    }
    if (contact_top <= curr_scroll_top) {
        let i = 2;
        next_bar = height / 3 * i;
    }

    // easing 滑らかに移動
    let easing = 0.05;
    curr_bar += easing * (next_bar - curr_bar);

    fill(0);
    rect(0, curr_bar, BAR_WIDTH, BAR_HIGHT);
}
