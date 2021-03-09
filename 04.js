function fnLoad(sl_img) {
  document.head.outerHTML='';
  var eDiv = document.createElement('eDiv');
  eDiv.id = 'main';
  document.body.appendChild(eDiv);
  eDiv.innerHTML = `<canvas id='cvs_down' style='display:none;'></canvas>
<a id='a_down' style='display:none;'></a>
▲ Get Img Tags<br>var sl_img='';document.querySelectorAll('#view_content img').forEach(e=>sl_img+='&lt;img src="'+e.src+'"&gt;\\n');console.log(sl_img);<br/><br/>
<textarea id='img_tags' rows=5 style='width:99%;'></textarea><br/><br/>
<button id='btnDrawImage'>Draw Image</button>&nbsp; &nbsp; 
<button id='btnClear'>Clear</button>&nbsp; &nbsp; 
<button id='btnDownload'>Download</button>&nbsp; &nbsp; 
<button id='btnDownloadDirect'>Download Direct</button><br/>
<div id='img_dsp'></div>`;
  
  var ctx_down = cvs_down.getContext('2d');
  var i_down = 1;

  function fnDrawImage() {
    i_down = 1;
    img_dsp.innerHTML = img_tags.value;
    var el_target = document.querySelectorAll('img');
    for (e_target of el_target) {
      var s_idx = (i_down++).toString().padStart(3, '0');
      e_target.setAttribute('id', 'IMG' + s_idx);
      e_target.setAttribute('crossorigin', 'anonymous');
      e_target.setAttribute('data-index', s_idx)
    }
  }
  
  function fnDownload(n) {
    if (n == 0)
      i_down = 1;
    var s_idx = (i_down++).toString().padStart(3, '0');
    e_target = document.getElementById('IMG' + s_idx);
    
    if (e_target != null) {
      cvs_down.width = e_target.width;
      cvs_down.height = e_target.height;
      ctx_down.drawImage(e_target, 0, 0);
          
      a_down.setAttribute('download', e_target.getAttribute('data-index') + '.png');
      cvs_down.toBlob(function (blob) {
        var url = URL.createObjectURL(blob);
        a_down.setAttribute('href', url);
        a_down.click();
        setTimeout(function(){fnDownload(i_down);}, 250);
      });
    }
  }

  function fnDownloadDirect(n) {
    if (n == 0)
      i_down = 1;
    var s_idx = (i_down++).toString().padStart(3, '0');
    e_target = document.getElementById('IMG' + s_idx);
    
    if (e_target != null) {
      a_down.setAttribute('download', '');
      a_down.setAttribute('href', e_target.src);
      a_down.click();
      setTimeout(function(){fnDownloadDirect(i_down);}, 250);
    }
  }
  
  btnDrawImage.onclick = fnDrawImage;
  btnClear.onclick = () => img_dsp.innerHTML = '';
  btnDownload.onclick = (e) => fnDownload(0);
  btnDownloadDirect.onclick = (e) => fnDownloadDirect(0);
  img_tags.value = sl_img;
}
