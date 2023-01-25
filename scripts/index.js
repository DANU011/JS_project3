
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];//폭탄 위치를 가지고 있음

//박스를 선택한 순서를 기록하는 배열
let selNum = [];//몇번째를 눌렀는지 추적하기 위함

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;//폭탄이 안나올 때 까지 몇번 눌렸는지 화인

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

//메세지 표시 함수
const showMsg = (m) =>{
     document.querySelector("#msg").innerHTML=m;
}

//보드 내용 지우기
const boardInit = () => {
     const board = document.querySelectorAll(".boardBox");
     for(let item of board){
          item.innerHTML='';
     }
     cnt=0; //초기화
     selNum.length = 0; //초기화
     console.log(board);
}

//전체 하트 만들기
// 안찾고 전체를 하트로
const showAll=()=>{
     const board = document.querySelectorAll(".boardBox");
     for(let item of board){
          item.innerHTML = `<img src="./images/hart.png">`;
     }
     
     //찾아서 boom대신 하트로
     /*let idx = num.indexOf(1) +1;
     console.log('last: ', idx);
     document.querySelector("#box"+idx).innerHTML =
                    `<img src="./images/hart.png">`;*/


     

}
//보드 숫자 누른 후 보여주기 함수
const show = (n) => {
     if(!shuffleFlag) {
          showMsg('게임 종료. 다시 하세요.');
          //boxShuffle();
          return;
     }
     console.log(n);

     if(selNum.indexOf(n) != -1) return;


     cnt++;//누른 횟수
     selNum.push(n);//눌러진 정보 저장
     console.log(selNum);
     

     let img;
     if(num[n-1]==0) img = 'hart'
     else {
          img= 'boom';
          shuffleFlag = false;
          showMsg('게임 실패!!');
     }

     document.querySelector("#box"+n).innerHTML =`<img src="./images/${img}.png">`;

     if(cnt==8){
          showAll();
          shuffleFlag = false;
          showMsg('게임 성공!!');
          return;
     }


}

//폭탄 섞기 함수
const boxShuffle=()=>{ 
     if(shuffleFlag) {
          showMsg('폭탄을 이미 섞었습니다. 게임을 진행해주세요.');
          boxShuffle();
          return;
          }  
     num.sort(()=>Math.random()-0.5);
     shuffleFlag = true;
     boardInit();
     console.log(num);
  
     } 
     
          
     

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   
});