function newStyle() {
    let newColor = '';
    let newFont = ''; 
    let x = Math.floor(Math.random()*11); 
    switch (x){
      case 0:
        newColor = 'red';
        newFont = 'Times New Roman'; 
        break;
      case 1: 
        newColor = 'blue';
        newFont = 'Florence, cursive'; 
        break;
      case 2:
        newColor = 'yellow';
        newFont = 'Verdana';
        break; 
      case 3:
        newColor= 'purple';
        newFont = 'Courier New';
        break
      case 4:
        newColor = 'cyan';
        newFont = 'Georgia'; 
        break;
      case 5:
          newColor = 'maroon';
          newFont = 'Palatino';
          break;
      case 6: 
          newColor = 'lime';
          newFont = 'Impact';
          break;
        case 7: 
            newColor = 'green';
            newFont = 'Syne Tactile';
            break;
        case 8: 
            newColor = 'black'
            newFont = 'Noto Sans JP';
            break;
        case 9: 
            newColor = 'black'
            newFont = 'Libre Barcode 128';
            break;
        case 10:
            newColor = 'cyan'
            newFont = 'Ruthie';
            break;

    }
    var elem = document.getElementById('logo');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont; 
  }
  