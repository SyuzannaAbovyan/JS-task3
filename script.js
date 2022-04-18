// Տրված զանգվածը սորտավորել փոքրից մեծ և search անի գտնի մեր նշած արժեքով անդամի ինդեքսը։
// quickSort մեթոդի համաձայն՝ զանգվածը բաժանել ենք աջ և ձախ մասերի, և pivot արժեք վերցրել զանգվածի վերջին ինդեքսով անդամը։
// Զանգված էլեմենտները համեմատում ենք pivot-ի հետ, եթե փոքր են pivot-ից push ենք անում ձախ մաս, իսկ եթե մեծ են pivot-ից,push ենք անում աջ մաս։
//Ստացված ձախ, աջ զանգվածները և նրանց մեջտեղում pivot-ը spread ենք անում նոր զանգվածի մեջ։
// ունկցիա ենք սարքում արգումենտում value և զանգվածը, դրսից value-ին արժեք ենք տվել 7,պայման ենք նշել, 
//որ եթե 7-ը հավասար է զանգվածի i-րդ անդամի արժեքին, վերադարձնի այդ արժեքի ինդեքսը։


function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];
    for (const el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
const arr = [3, 0, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
console.log(quickSort(arr));

const search = (val, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) {
            return i;
        }
    }
    return -1;
};
console.log(search(7, arr));

const arr2 = quickSort(arr)
console.log(arr2);
console.log(search(7, arr2));