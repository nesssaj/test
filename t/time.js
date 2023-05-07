function getTimeFromMinutes(time) {
if (typeof(time) != 'number' || time < 0 || !Number.isInteger(time))
return 'Ошибка, проверьте данные';
    

const hours = Math.floor(time / 60);
     minutes = time % 60;

let hoursStr = "";
     
switch (hours) {
     case 0: 
         hoursStr = 'часов';
         break;
     case 1:
         hoursStr = 'час';
         break;
     case 2:
     case 3:
     case 4:
         hoursStr = 'часа';
         break;
     default:
         hoursStr = 'часов';
 }
 return `Это ${hours} ${hoursStr} и ${minutes} минут`;

}

getTimeFromMinutes(180);







