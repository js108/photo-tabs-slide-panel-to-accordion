#Photo Grid w/Slide Panels Responsive to Accordion

There are only two hard things in Computer Science: cache invalidation and naming things.

-- Phil Karlton

##Demo

http://joeschoech.com/image-grid

##How To

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

##Notes

Obviously this is a whole little website which makes it a harder to work with in some ways than say a jquery plugin. But if it's what you're looking for you're prob psyched right now reguardless. I sure would've been. And in some ways its better like if you want to extend it without wading through someones endless javascript. Though if you are specifically looking for a plugin could try [this one](https://github.com/samsono/Easy-Responsive-Tabs-to-Accordion) which is what I originally did. But then I decided to write my own for really no good reason. [This tutorial](http://inspirationalpixels.com/tutorials/creating-tabs-with-html-css-and-jquery) was helpful in understanding how to do it. It's true I called it a photo grid but it's basically tabs. What is a tab really tho~ makes u think.