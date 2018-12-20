$(document).keyup(function(e) {
		switch(e.which) {
			case 48: // 0 top
			case 96: // 0 right	
				click0();
				break;

			case 49: // 1 top
			case 97: // 1 right
				$("b1").animate({backgroundColor: 'yellow'});
				click1();
				break;
				
			case 50: // 2 top
			case 98: // 2 right	
				click2();
				break;

			case 51: // 3 top
			case 99: // 3 right	
				click3();
				break;
			
			case 52: // 4 top
			case 100: // 4 right	
				click4();	
				break;		
			
			case 53: // 5 top
			case 101: // 5 right	
				click5();
				break;

			case 54: // 6 top
			case 102: // 6 right	
				click6();
				break;
			
			case 55: // 7 top
			case 103: // 7 right
				click7();
				break;
			
			case 56: // 8 top
			case 104: // 8 right
				click8();
				break;
			
			case 57: // 9 top
			case 105: // 9 right	
				click9();
				break;
				
			case 187: // + top
			case 107: // + right	
				clickAdd();
				break;
			
			case 189: // - top
			case 109: // - right	
				clickSubtract();
				break;
				
			case 106: // * right	
				clickMultiply();
				break;
				
			case 191: // / slash	
			case 111: // / right	
				clickDivide();
				break;
			
			case 219: // [ 	
				clickOpen();
				break;
				
			case 221: // ]	
				clickClose();
				break;

			case 13: // enter	
				clickEnter();
				break;
			
			case 190: //period
			case 110: // decimal point right	
				clickPoint();
				break;
			
			case 67: // clear	
				clickClear();
				break;
				
			case 8: // Backspace	
				clickBksp();
				break;
			
			default: return; // exit this handler for other keys
		
		}
    e.preventDefault(); // prevent the default action (scroll / move caret)
});