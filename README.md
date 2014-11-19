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