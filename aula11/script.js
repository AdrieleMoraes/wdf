let arr1=[1,2,3,4,5];
let arr2=["s","t",8];

//Concat
let arrFinal=arr1.concat(arr2);

//Every
let everyX=arrFinal.every(
    function verifyElements(elem,ind,obj) {
        return (typeof elem == "number");
    }
);

//Filter
let filterX=arrFinal.filter(
    function verifyElements(elem,ind,obj) {
        return (typeof elem == "string");
    }
);

//ForEach
let data="";
let forEachX=arrFinal.forEach(
    function verifyElements(elem, ind, obj) {
        if(ind > 3){
            data+="Índice "+ind+" : "+elem+'\n';
        }
    }
);

//IndexOf
let indexOfX=arrFinal.indexOf("1");
if(indexOfX == -1){
    alert("Esse dado não existe");
}