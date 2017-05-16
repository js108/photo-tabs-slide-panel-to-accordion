# Photo Grid / Tabs with Slide Panel Responsive to Accordion

This is a photo grid (or a series of tabs depending on how you look at it), with slide panels, that shifts responsively to a single column layout. It's a little trickier than it seems because in the grid layout you want the slide panel to be below a row, where in the single column layout you want it to be below each photo/tab. So you have to move the panels around. This was accomplished with jquery.

## Demo

http://joeschoech.com/image-grid

## How To

Put your images where it says *images/x.gif*. Put whatever you want to put in the panels where it says *PANEL X: Ipsum*.

	<div class="square-container">
        <a href="#square1" class="square"><img src="images/1.gif"></a>
        <a href="#square2" class="square"><img src="images/2.gif"></a>
        <a href="#square3" class="square"><img src="images/3.gif"></a>
    </div>

    <div class="panel-container">
        <div id="square1" class="panel">PANEL 1: Ipsum</div>
        <div id="square2" class="panel">PANEL 2: Ipsum</div>
        <div id="square3" class="panel">PANEL 3: Ipsum</div>
    </div>

## Notes

Obviously this is a whole little website which makes it a harder to work with in some ways than say a jquery plugin. But if it's what you're looking for you're prob psyched right now regardless. I sure would've been. And in some ways its better, like if you want to extend it without wading through someones endless javascript. Though if you are specifically looking for a plugin could try [this one](https://github.com/samsono/Easy-Responsive-Tabs-to-Accordion) which is what I originally did. But then I decided to write my own for really no good reason. [This tutorial](http://inspirationalpixels.com/tutorials/creating-tabs-with-html-css-and-jquery) was helpful in understanding how to do it.