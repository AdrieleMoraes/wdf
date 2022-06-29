let arr1=[1,2,3,4,5];
let arr2=["s","t","s"];

//LastIndexOf
let lastIndexOfX=arrFinal.lastIndexOf("s");

//Join
let joinX=arrFinal.join(" - ");

let mapFinal=[];
let mapX=arrFinal.map(
  function verifyElements(elem,ind,obj){
      if(typeof elem == 'number'){
          mapFinal.push(elem * 2);
      }else{
          mapFinal.push(elem);
      }
  }
);

//Pop
let arrayNew=[1,2,3];
arrayNew.pop();

//Some
let someX=arrFinal.some(
    function verifyElements(elem,ind,obj){
        return (typeof elem == 'number');
    }
  );

  //Reverse
let reverseX=arrFinal.reverse();