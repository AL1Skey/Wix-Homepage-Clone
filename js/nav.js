//GET ARRAY OF DROPDOWN BUTTON
let button = document.querySelectorAll('.nav-dropdown');
//GET ARRAY OF SUBNAV OBJECT
let subNav = document.querySelectorAll('.sub-nav');
//ADD EVENT LISTENER TO EVERY OBJECT IN BUTTON ARRAY
button.forEach(arrayListener);
        
//ADD EVENT LISTENER TO EVERY ARRAY
//forEach(function(arrayItem,IndexArray))
function arrayListener(item){
	//DEBUGGING
    console.log(item);
	//ADD EVENT LISTENER TO BUTTON PARAMETER
    item.addEventListener('click',setHide);
}

//FUNCTION FOR HIDE ALL BEFORE SHOW SUB NAV
function hideAll(item){
    //SET DISPLAY FOR EVERY ID NONE
    item.style.display = 'none';
}

//SET HIDE FOR VISIBLE SELECTION TAB
function setHide(e){
    e.preventDefault;

	//SET ID TO GET CURRENT ID AND ADD "NAV" STRING
    let id = document.getElementById(this.id).id + 'nav';
	//GET THIS ID DISPLAY VALUE
    let tab = document.getElementById(id).style.display;
    
	//IF DISPLAY ARE NONE
    if(tab == 'none'){
		//CLOSE ALL SUB-NAV
        subNav.forEach(hideAll);
        //SET TAB AS FLEX AND INJECT THE VALUE TO THIS ID DISPLAY
        tab = 'flex';
        document.getElementById(id).style.display = tab;
    }
	//IF SUB-NAV ARE VISIBLE
    else{
		//SET VISIBILITY AS NONE
        tab = 'none';
        document.getElementById(id).style.display = tab;
    }
    
}