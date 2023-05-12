function fnLoad() {
  document.head.outerHTML='';
  document.body.innerHTML='';
  var eFrm = document.createElement('iframe');
  eFrm.src = 'https://www.airkorea.or.kr/web/vicinityStation?item_code=10008&station_code=336112';
  eFrm.style = 'width: 570px;height: 422px;';
  eFrm.onload = function() {
    var eFrmSub = document.createElement('iframe');
    eFrmSub.src = 'https://www.airkorea.or.kr/web/vicinityStation?item_code=10007&station_code=336112';
    eFrmSub.style = 'width: 570px;height: 422px;';
    eFrmSub.onload = function() {
      var eBr = document.createElement('br');
      document.body.appendChild(eBr);
      var eImg = document.createElement('img');
      eImg.src = 'https://www.airkorea.or.kr/web/placeInfo/getImgFile?scrinId=16600&amp;Dx=D0&amp;imageSn=3';
      eImg.style = 'width: 492px; padding-top: 12px;';
      eImg.alt = "초미세먼지 공간분포 이미지";
      document.body.appendChild(eImg);
      var eImg = document.createElement('img');
      eImg.src = 'https://www.airkorea.or.kr/web/placeInfo/getImgFile?scrinId=16600&amp;Dx=D0&amp;imageSn=1';
      eImg.style = 'width: 492px; padding-top: 12px;';
      eImg.alt = "미세먼지 공간분포 이미지";
      document.body.appendChild(eImg);
    }
    document.body.appendChild(eFrmSub);
  };
  document.body.appendChild(eFrm);
}
