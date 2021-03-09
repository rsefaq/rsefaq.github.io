var e_div = document.getElementById('div_youtube_thumb');
var e_target = document.getElementById('content');
if ((e_div == null) && (e_target != null)) {
  var e_div = document.createElement('div');
  e_div.id = 'div_youtube_thumb';
  e_div.setAttribute('style', 'z-index:999999;position:fixed;top:0;background-color:white');
  e_div.innerHTML = `<input id='txt_clip' type='text' style='width: 320px'> &nbsp; 
<button id='btn_default'>default</button> &nbsp; 
<button id='btn_clear'>clear</button> &nbsp; 
<button id='btn_hide'>hide</button><br/>
<div id='img_dsp'></div>`;
  document.body.appendChild(e_div);

  function fnDrawImage(idx) {
    if (txt_clip.value.indexOf('https://www.youtube.com/watch?v=') > -1) {
      var str_imgnm = 'maxresdefault';
      if (idx == 0)
        str_imgnm = '0';
      img_dsp.innerHTML = '<img src=\'https://img.youtube.com/vi/' + txt_clip.value.substring(txt_clip.value.lastIndexOf('?v=')+3) + '/' + str_imgnm + '.jpg\'>';
    }
    else
      img_dsp.innerText = txt_clip.value;
  }

  txt_clip.onchange = () => fnDrawImage(9);
  txt_clip.onkeyup = () => fnDrawImage(9);
  txt_clip.onpaste = () => fnDrawImage(9);
  txt_clip.ondragover = e => e.preventDefault();
  txt_clip.ondrop = e => {e.preventDefault();txt_clip.value=e.dataTransfer.getData('Text');fnDrawImage(9)};
  btn_default.onclick = () => fnDrawImage(0);
  btn_clear.onclick = () => {txt_clip.value='';img_dsp.innerHTML=''};
  btn_hide.onclick = () => div_youtube_thumb.style.display='none';
}
