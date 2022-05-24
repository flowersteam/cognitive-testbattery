
//from here https://www.ipentec.com/document/javascript-get-screen-size
function pageLoad() {
    var obj = GetDisplaySize();

    target = document.getElementById("output");
    target.innerHTML = "ScreenWidth:" + obj.width + "</br>"
      + "ScreenHeight:" + obj.height + "</br>"
      + "availWidth:" + obj.availWidth + "</br>"
      + "availHeight:" + obj.availHeight + "</br>";
  }


  function GetDisplaySize()
  {
    // 解像度
    this.width = window.screen.width;
    this.height = window.screen.height;

    //有効画面サイズ
    this.availWidth = window.screen.availWidth;
    this.availHeight = window.screen.availHeight;

    return this;
  }


//pasted from  https://qiita.com/t-iguchi/items/b15a0d592cb485d53f9a
//jsonをcsv文字列に編集する
function jsonToCsv(json, delimiter) {
    var header = Object.keys(json[0]).join(delimiter) + "\n";
    var body = json.map(function(d){
        return Object.keys(d).map(function(key) {
            return d[key];
        }).join(delimiter);
    }).join("\n");
    return header + body;
}

//csv変換
function exportCSV(items, delimiter, filename) {

    //文字列に変換する
    var csv = jsonToCsv(items, delimiter);

    //拡張子
    var extention = delimiter==","?"csv":"tsv";

    //出力ファイル名
    var exportedFilenmae = (filename  || 'export') + '.' + extention;

    //BLOBに変換
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    if (navigator.msSaveBlob) { // for IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        //anchorを生成してclickイベントを呼び出す。
        var link = document.createElement("a");
        if (link.download !== undefined) {
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


///////////////////////////////////
class PositionManager{
    constructor(canvas_width,canvas_height) {
      this.canvas_width = canvas_width;
      this.canvas_height = canvas_height;
      this.center_x = this.canvas_width/2;
      this.center_y = this.canvas_height/2;
      this.size_bkg_x = null;
      this.size_bkg_y = null;
      this.ratio_to_bkg = null;
    }

    adjust_to_bkg(size_bkg_width_orig,size_bkg_height_orig,ratio_center){
      this.ratio_to_bkg = this.canvas_height/size_bkg_height_orig;
      this.size_bkg_y = size_bkg_height_orig * this.ratio_to_bkg;
      this.size_bkg_x = size_bkg_width_orig * this.ratio_to_bkg;
      this.center_y = (this.canvas_height/2)-(ratio_center*this.canvas_height);

    }
  }

  //To randomize the stimulus condition.
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//linspace function
function make_array(val_start, val_stop, num_array) {
  let array = [];
  let step = (val_stop - val_start) / (num_array - 1);
  for (let i = 0; i < num_array; i++) {
    array.push(val_start + (step * i));
  }
  return array;
}
 
//conver degree to radian
function deg2rad(degrees) {
  let pi = Math.PI;
  return degrees * (pi/180);
}
  
//CSVファイルを読み込む関数getCSV()の定義
function getCSV(fname_csv){
  var request = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
  request.open("get", fname_csv, true); // アクセスするファイルを指定
  request.send(null); // HTTPリクエストの発行

  let out =[];
  // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
  request.onload = function(){
    out = convertCSVtoArray(request.responseText); // 渡されるのは読み込んだCSVデータ
    return out;
  }
  //out2 = request.responseText;
  
}

function convertCSVtoArray(list_str){ // 読み込んだCSVデータが文字列として渡される
  let out = []; // 最終的な二次元配列を入れるための配列
  let array_line = list_str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

  // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
  for(var i=0;i<array_line.length;++i){
      out[i] = array_line[i].split(',');
      //console.log(array_line[i].split(','));
  }
  return out;
}


//// Draw characters and bubble:
function draw_character(img_researcher, x, y, w, h){
  push();
  imageMode(CENTER);
  image(img_researcher, x, y, w, h);
  pop();
}
function draw_background_bubble(x, y, w, h){
  push();
  imageMode(CENTER);
  stroke('white');
  fill("rgba(255,255,255,0.1)")
  image(bubble_img, x,y,w,h);
  pop();

}