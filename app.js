console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
console.log("hello")

const favNumber = 7;

let guess = prompt("Guess my favorite number");

if (guess < favNumber){
  console.log("too low")
  
}
else if(guess > favNumber){
  console.log("too high")
}
else{
  console.log("Congratulations!")
}

let birthMonth = window.prompt("what is your birth month?");

switch(birthMonth){
  case "december":
    case"january":
    case "february":
    console.log("winter");
      break;
      case "march":
        case "april":
          case"may":
          console.log("born in Spring");
          break;
          case "june":
            case "july":
              case"august":
              console.log("born in fall");
              break;
              case "september":
                case "october":
                  case "november":
                    console.log("born in winter");
                    break;
                    default:
                      console.log("month not recognized");
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId){
  case "01":
    type = "Tank top";
    break;
    case "02":
    type = "tshirt";
    break;
    case "03":
      type = "long sleeve";
      break;
      case "04":
        type = "sweat shirt";
        break;
        default:
          type = "other";
}

switch (colorId){
  case "BL":
    color = "Black";
    break;
    case "BU":
    color = "Blue";
    break;
    case "RD":
      color = "Red";
      break;
      case "PU":
        color = "Purple";
        break;
        default:
          color = "White";
}

switch (sizeId){
  case "S":
    size = "Small";
    break;
    case "M":
    size = "Medium";
    break;
    case "L":
      size = "Large";
      break;
      case "XL":
        size = "Extra Large";
        break;
        default:
          size = "One size fits all";
}

console.log('Product: ${size} ${color} ${type}');

