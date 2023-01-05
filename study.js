//*----------------------
// 작업내용 :  랜덤함수
// 작업자   : 변세웅
// 작업일   : 2023.01.06
//----------------------*
function makeRandom(min, max) {
  
  let array1 = [];
  let array2 = [];
  let lastValue
  let result

  for (i = 0; i < 10; i++) {
    // 1.랜덤으로 값 추출
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    // 2.for문을 이용하여 배열에 저장
    array1.push(random);
  }

  console.log(array1);
 
  // 3.오름차순 정렬
  array1.sort(function (a, b) {
    return a - b;
  });

  // 4. 양수값만 출력
  for (j = 0; j < array1.length; j++) {
    if(array1[j] >= 0){
      // 5. 새로운 배열에 양수값만 담음
      array2.push(array1[j]);
    }   
  }

  // 6. 중복값 처리
  const setNum = new Set(array2);
  array2 = [...setNum];

  console.log(`중복이 제거된 양수값 : ${array2}`);
  
  // 7. 배열의 마지막 값까지 for문 실행
  lastValue = array2[array2.length - 1];
  console.log(`배열 마지막 값 : ${lastValue}`);

  for (k = 1; k < lastValue; k++){
    if (array2.includes(k) === false) {
      // 8. 배열의 없는 값 접근시(즉 값이 false면) 출력
      console.log(array2.includes(k));
      console.log("k 값 : ", k);
      break;
    }
  }
  // 9. 결과값 출력
  result = k;

  console.log("결과", result);
}

// 테스트를 위한 범위값 설정
makeRandom(-10, 10);
