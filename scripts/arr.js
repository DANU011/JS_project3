/* 배열 선언 /배열 = 위치를 가지고 여러개의 데이터를 구분,위치가 키가 됨, 데이터 타입 달라도 가능 vs obj */
let arr = []; /*추천! */
let arr2= new Array(); /*생성자에 의해 인스턴스만 하나 생성*/ 

/* 배열 추가 삭제 :뒤에서*/
arr.push('🍕');
arr.push('🍔');
arr.push('🍟');
console.log(arr);

arr.pop();
console.log(arr);
 
/* 배열 추가 삭제 :앞에서/ 비추 */
arr.unshift('😀');
arr.unshift('🤣') ;
console.log(arr); 

arr.shift('😍');
console.log(arr); 


/* 배열 순회 */
for(let i = 0; i<arr.length; i++){
console.log(arr[i]);
}

for(let i of arr){
console.log(i);
}
 
/* 배열의 length 속성*/
console.log(arr);
console.log(arr.length);

//배열 비우기
arr.length = 0;
console.log(arr); 

/* 배열을 문자열로 반환/ 요즘음 변경이 될 가능성이 많으면 배열 마지막에 ,를 넣어도 오류X*/
/*window + . 이모지 */
arr = ['🍕','🍔','🍗','🍜',] ;
let s = String(arr)
console.log(arr)
 
/* 문자열 split하면 배열반환 / 많이 씀*/
let sarr = s.split(',')
console.log(sarr)
 
/* 배열 정렬 - 콜백함수 이용 a-b 오름차순*/
let num = [1,3,5,2,4];
num.sort((a,b)=>{return b-a;});
console.log(num);
 

/* 배열 섞기*/
num.sort(()=> Math.random() - 0.5)
console.log(num);
 
 

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 

/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

//합집합
let union = [...setA, ...setB] 
console.log(union);

//교집합
let intersection = setA.filter((item)=>setB.includes(item)) 
console.log(intersection);

let setA2 = setA.map((item)=>item%2)
console.log(setA2);

//차집합
let difference =setA.filter((item)=>!setB.includes(item))
console.log(difference);

//합집합 수정
union = [...difference, ...setB] 
console.log(union);



