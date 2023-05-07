function calculateVolumeAndArea(len) {
if (typeof(len) != 'number' || len < 0 )
return 'error';
    

let volume = 0;
    area = 0;
     volume = len*len*len;
        area = 6 * (len * len);
return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

}

calculateVolumeAndArea(5);







function getCoupeNumber(setNumber) {
if (typeof(setNumber) !='number'|| setNumber<0)
    return 'error';
if (setNumber === 0 || setNumber>36){
    return 'nothing places'


}
return Math.ceil(setNumber / 4);
}

getCoupeNumber(9);