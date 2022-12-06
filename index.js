//////////////////////CẤU HÌNH KẾT NỐI KEPWARE////////////////////
const {TagBuilder, IotGateway} = require('kepserverex-js');
const tagBuilder = new TagBuilder({ namespace: 'Channel1.Device1' });
const iotGateway = new IotGateway({
    host: '127.0.0.1',
    port: 5000
});

/////////////HÀM ĐỌC/GHI DỮ LIỆU XUỐNG KEPWARE(PLC)//////////////
//Đọc dữ liệu
var tagArr = [];
function fn_tagRead(){
	iotGateway.read(TagList).then((data)=>{
		var lodash = require('lodash');
		tagArr = lodash.map(data, (item) => item.v);
		console.log(tagArr);
	});
}
// Ghi dữ liệu
function fn_Data_Write(tag,data){
    tagBuilder.clean();	
    const set_value = tagBuilder
        .write(tag,data)
        .get();
    iotGateway.write(set_value);
}

///////////////////////////ĐỊNH NGHĨA TAG////////////////////////
// Khai báo tag
var ACT_BLUE 		= 'ACT_BLUE';
var ACT_RED 	= 'ACT_RED';
var ACT_YELOW 		= 'ACT_YELOW';
var Me 		= 'Me';
var ON 		= 'ON';
var OFF 		= 'OFF';
var RESET 		= 'RESET';
var MANU_BOM1 		= 'MANU_BOM1';
var MANU_BOM2 		= 'MANU_BOM2';
var MANU_BOM3 		= 'MANU_BOM3';
var MANU_BOM4 		= 'MANU_BOM4';
var MANU_VAN_NUOC_1         = 'MANU_VAN_NUOC_1';
var MANU_VAN_NUOC_2 		= 'MANU_VAN_NUOC_2';
var MANU_VAN_NUOC_3 		= 'MANU_VAN_NUOC_3';
var MANU_VAN_NUOC_4 		= 'MANU_VAN_NUOC_4';
var MANU_VAN_NUOC_5 		= 'MANU_VAN_NUOC_5';
var MANU_VAN_NUOC_6 		= 'MANU_VAN_NUOC_6';
var MANU_VAN_KHI_1 		= 'MANU_VAN_KHI_1';
var MANU_VAN_KHI_2 		= 'MANU_VAN_KHI_2';
var MANU_VAN_KHI_3 		= 'MANU_VAN_KHI_3';
var MANU_DC_KHOANG 		= 'MANU_DC_KHOANG';
var MANU_BANGTAI 		= 'MANU_BANGTAI';
var STEP_1              ='STEP_1';
var STEP_2              ='STEP_2';
var STEP_3              ='STEP_3';
var STEP_4              ='STEP_4';
var STEP_5              ='STEP_5';
var STEP_6              ='STEP_6';
var STEP_7              ='STEP_7';
var seting_so_me        ='seting_so_me'
var seting_tl_do              ='seting_tl_do';
var seting_tl_vang             ='seting_tl_vang';
var seting_tl_xanh              ='seting_tl_xanh';
var seting_total              ='seting_total';
var seting_quy_doi              ='seting_quy_doi';
var seting_time_tron              ='seting_time_tron';
var seting_time_nghi              ='seting_time_nghi';
var lap_lai_tron              ='lap_lai_tron';
var lap_lai_rua              ='lap_lai_rua';
var Q_lamp_Auto              ='Q_lamp_Auto';
var Q_lamp_Manu              ='Q_lamp_Manu';
var btt_Auto_confirm              ='btt_Auto_confirm'
var MANU_VAN_NUOC_1_OFF     = 'MANU_VAN_NUOC_1_OFF';
var MANU_VAN_NUOC_2_OFF 		= 'MANU_VAN_NUOC_2_OFF';
var MANU_VAN_NUOC_3_OFF 		= 'MANU_VAN_NUOC_3_OFF';
var MANU_VAN_NUOC_4_OFF 		= 'MANU_VAN_NUOC_4_OFF';
var MANU_VAN_NUOC_5_OFF 		= 'MANU_VAN_NUOC_5_OFF';
var MANU_VAN_NUOC_6_OFF 		= 'MANU_VAN_NUOC_6_OFF';
var MANU_VAN_KHI_1_OFF 		= 'MANU_VAN_KHI_1_OFF';
var MANU_VAN_KHI_2_OFF 		= 'MANU_VAN_KHI_2_OFF';
var MANU_VAN_KHI_3_OFF 		= 'MANU_VAN_KHI_3_OFF';
var MANU_BOM1_OFF 		= 'MANU_BOM1_OFF';
var MANU_BOM2_OFF 		= 'MANU_BOM2_OFF';
var MANU_BOM3_OFF 		= 'MANU_BOM3_OFF';
var MANU_BOM4_OFF 		= 'MANU_BOM4_OFF';
var MANU_VAN_NUOC_1_ON         = 'MANU_VAN_NUOC_1_ON';
var MANU_VAN_NUOC_2_ON 		= 'MANU_VAN_NUOC_2_ON';
var MANU_VAN_NUOC_3_ON 		= 'MANU_VAN_NUOC_3_ON';
var MANU_VAN_NUOC_4_ON 		= 'MANU_VAN_NUOC_4_ON';
var MANU_VAN_NUOC_5_ON 		= 'MANU_VAN_NUOC_5_ON';
var MANU_VAN_NUOC_6_ON 		= 'MANU_VAN_NUOC_6_ON';
var MANU_VAN_KHI_1_ON 		= 'MANU_VAN_KHI_1_ON';
var MANU_VAN_KHI_2_ON 		= 'MANU_VAN_KHI_2_ON';
var MANU_VAN_KHI_3_ON 		= 'MANU_VAN_KHI_3_ON';
var MANU_BOM1_ON 		= 'MANU_BOM1_ON';
var MANU_BOM2_ON 		= 'MANU_BOM2_ON';
var MANU_BOM3_ON 		= 'MANU_BOM3_ON';
var MANU_BOM4_ON 		= 'MANU_BOM4_ON';
var MANU_DC_KHOANG_ON 		= 'MANU_DC_KHOANG_ON';
var MANU_DC_KHOANG_OFF 		= 'MANU_DC_KHOANG_OFF';
var MANU_BANGTAI_ON 		= 'MANU_BANGTAI_ON';
var MANU_BANGTAI_OFF 		= 'MANU_BANGTAI_OFF';
var seting_quy_doi_do 		= 'seting_quy_doi_do';
var seting_quy_doi_vang 		= 'seting_quy_doi_vang';
var seting_quy_doi_xanh 		= 'seting_quy_doi_xanh';
var simulation 		= 'simulation';
var chedo 		= 'chedo';
var btt_Auto 		= 'btt_Auto';
var btt_Manu 		= 'btt_Manu';
var ACT_CHAY 		= 'ACT_CHAY';
var ACT_NGHI 		= 'ACT_NGHI';
var ACT_LAP_LAI_TRON 		= 'ACT_LAP_LAI_TRON';
var ACT_LAP_LAI_RUA 		= 'ACT_LAP_LAI_RUA';
var m1                  = 'm1';
var m2                  = 'm2';
var m3                  = 'm3';
var m4                  = 'm4';
var m5                  = 'm5';
var m6                  = 'm6';
var m7                  = 'm7';
var m8                  = 'm8';
var m9                  = 'm9';
var m10                  = 'm10';
var m11                  = 'm11';
var m12                  = 'm12';
var m13                  = 'm13';
var m14                  = 'm14';
var m15                  = 'm15';
var m16                  = 'm16';
var m17                  = 'm17';
var m18                  = 'm18';
var m19                  = 'm19';
var m20                  = 'm20';
var m21                  = 'm21';
var m22                  = 'm22';
var m23                  = 'm23';
var m24                  = 'm24';
var m25                  = 'm25';
var m26                  = 'm26';
var m27                  = 'm27';
var m28                  = 'm28';
var m29                  = 'm29';
var m30                  = 'm30';
var m31                  = 'm31';
var m32                  = 'm32';
var m33                  = 'm33';
var m34                  = 'm34';
var m35                  = 'm35';
// Đọc dữ liệu
const TagList = tagBuilder
.read(ACT_BLUE) 
.read(ACT_RED) 
.read(ACT_YELOW) 
.read(Me) 
.read(ON) 
.read(OFF) 
.read(RESET) 
.read(MANU_BOM1) 
.read(MANU_BOM2) 
.read(MANU_BOM3) 
.read(MANU_BOM4) 
.read(MANU_VAN_NUOC_1)
.read(MANU_VAN_NUOC_2) 
.read(MANU_VAN_NUOC_3) 
.read(MANU_VAN_NUOC_4) 
.read(MANU_VAN_NUOC_5) 
.read(MANU_VAN_NUOC_6) 
.read(MANU_VAN_KHI_1) 
.read(MANU_VAN_KHI_2) 
.read(MANU_VAN_KHI_3) 
.read(MANU_DC_KHOANG)
.read(MANU_BANGTAI) 
.read(STEP_1)
.read(STEP_2)
.read(STEP_3)
.read(STEP_4)
.read(STEP_5)
.read(STEP_6)
.read(STEP_7)
.read(seting_so_me)
.read(seting_tl_do)
.read(seting_tl_vang)
.read(seting_tl_xanh)
.read(seting_total)
.read(seting_quy_doi)
.read(seting_time_tron)
.read(seting_time_nghi)
.read(lap_lai_tron)
.read(lap_lai_rua)
.read(Q_lamp_Auto)
.read(Q_lamp_Manu)
.read(btt_Auto_confirm)
.read(MANU_VAN_NUOC_1_OFF)
.read(MANU_VAN_NUOC_2_OFF)
.read(MANU_VAN_NUOC_3_OFF)
.read(MANU_VAN_NUOC_4_OFF)
.read(MANU_VAN_NUOC_5_OFF)
.read(MANU_VAN_NUOC_6_OFF)
.read(MANU_VAN_KHI_1_OFF)
.read(MANU_VAN_KHI_2_OFF)
.read(MANU_VAN_KHI_3_OFF)
.read(MANU_BOM1_OFF)
.read(MANU_BOM2_OFF)
.read(MANU_BOM3_OFF)
.read(MANU_BOM4_OFF)
.read(MANU_VAN_NUOC_1_ON)
.read(MANU_VAN_NUOC_2_ON)
.read(MANU_VAN_NUOC_3_ON)
.read(MANU_VAN_NUOC_4_ON)
.read(MANU_VAN_NUOC_5_ON)
.read(MANU_VAN_NUOC_6_ON)
.read(MANU_VAN_KHI_1_ON)
.read(MANU_VAN_KHI_2_ON)
.read(MANU_VAN_KHI_3_ON)
.read(MANU_BOM1_ON)
.read(MANU_BOM2_ON)
.read(MANU_BOM3_ON)
.read(MANU_BOM4_ON)
.read(MANU_DC_KHOANG_ON)
.read(MANU_DC_KHOANG_OFF)
.read(MANU_BANGTAI_ON)
.read(MANU_BANGTAI_OFF)
.read(seting_quy_doi_do)
.read(seting_quy_doi_vang)
.read(seting_quy_doi_xanh)
.read(simulation)
.read(chedo)
.read(btt_Auto)
.read(btt_Manu)
.read(ACT_CHAY)
.read(ACT_NGHI)
.read(ACT_LAP_LAI_TRON)
.read(ACT_LAP_LAI_RUA)
.read(m1)
.read(m2)
.read(m3)
.read(m4)
.read(m5)
.read(m6)
.read(m7)
.read(m8)
.read(m9)
.read(m10)
.read(m11)
.read(m12)
.read(m13)
.read(m14)
.read(m15)
.read(m16)
.read(m17)
.read(m18)
.read(m19)
.read(m20)
.read(m21)
.read(m22)
.read(m23)
.read(m24)
.read(m25)
.read(m26)
.read(m27)
.read(m28)
.read(m29)
.read(m30)
.read(m31)
.read(m32)
.read(m33)
.read(m34)
.read(m35)
.get();
///////////////////////////QUÉT DỮ LIỆU////////////////////////
// Tạo Timer quét dữ liệu
setInterval(
	() => fn_read_data_scan(),
	1000 //100ms = 1s
);
 // Quét dữ liệu
function fn_read_data_scan(){
	fn_tagRead();	// Đọc giá trị tag
}
// /////////////////////////THIẾT LẬP KẾT NỐI WEB/////////////////////////
var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
// Home calling
app.get("/", function(req, res){
    res.render("home")
});
//
// ///////////LẬP BẢNG TAG ĐỂ GỬI QUA CLIENT (TRÌNH DUYỆT)///////////
function fn_tag(){
    io.sockets.emit("ON", tagArr[4]);  
    io.sockets.emit("OFF", tagArr[5]);
    io.sockets.emit("RESET", tagArr[6]);
    io.sockets.emit("ACT_RED", tagArr[1]);
    io.sockets.emit("Me", tagArr[3]);
    io.sockets.emit("ACT_BLUE", tagArr[0]);
    io.sockets.emit("ACT_YELOW", tagArr[2]);
    io.sockets.emit("MANU_BOM1", tagArr[7]);
    io.sockets.emit("MANU_BOM2", tagArr[8]);
    io.sockets.emit("MANU_BOM3", tagArr[9]);
    io.sockets.emit("MANU_BOM4", tagArr[10]);
    io.sockets.emit("MANU_VAN_NUOC_1", tagArr[11]);
    io.sockets.emit("MANU_VAN_NUOC_2", tagArr[12]);
    io.sockets.emit("MANU_VAN_NUOC_3", tagArr[13]);
    io.sockets.emit("MANU_VAN_NUOC_4", tagArr[14]);
    io.sockets.emit("MANU_VAN_NUOC_5", tagArr[15]);
    io.sockets.emit("MANU_VAN_NUOC_6", tagArr[16]);
    io.sockets.emit("MANU_VAN_KHI_1", tagArr[17]);
    io.sockets.emit("MANU_VAN_KHI_2", tagArr[18]);
    io.sockets.emit("MANU_VAN_KHI_3", tagArr[19]);
    io.sockets.emit("MANU_DC_KHOANG", tagArr[20]);
    io.sockets.emit("MANU_BANGTAI", tagArr[21]);
    io.sockets.emit("STEP_1", tagArr[22]);
    io.sockets.emit("STEP_2", tagArr[23]);
    io.sockets.emit("STEP_3", tagArr[24]);
    io.sockets.emit("STEP_4", tagArr[25]);
    io.sockets.emit("STEP_5", tagArr[26]);
    io.sockets.emit("STEP_6", tagArr[27]);
    io.sockets.emit("STEP_7", tagArr[28]);
    io.sockets.emit("seting_so_me", tagArr[29]);
    io.sockets.emit("seting_tl_do", tagArr[30]);
    io.sockets.emit("seting_tl_vang", tagArr[31]);
    io.sockets.emit("seting_tl_xanh", tagArr[32]);
    io.sockets.emit("seting_total", tagArr[33]);
    io.sockets.emit("seting_quy_doi", tagArr[34]);
    io.sockets.emit("seting_time_tron", tagArr[35]);
    io.sockets.emit("seting_time_nghi", tagArr[36]);
    io.sockets.emit("lap_lai_tron", tagArr[37]);
    io.sockets.emit("lap_lai_rua", tagArr[38]);
    io.sockets.emit("Q_lamp_Auto", tagArr[39]);
    io.sockets.emit("Q_lamp_Manu", tagArr[40]);
    io.sockets.emit("btt_Auto_confirm", tagArr[41]);
    io.sockets.emit("MANU_VAN_NUOC_1_OFF", tagArr[42]);
    io.sockets.emit("MANU_VAN_NUOC_2_OFF", tagArr[43]);
    io.sockets.emit("MANU_VAN_NUOC_3_OFF", tagArr[44]);
    io.sockets.emit("MANU_VAN_NUOC_4-OFF", tagArr[45]);
    io.sockets.emit("MANU_VAN_NUOC_5_OFF", tagArr[46]);
    io.sockets.emit("MANU_VAN_NUOC_6_OFF", tagArr[47]);
    io.sockets.emit("MANU_VAN_KHI_1_OFF", tagArr[48]);
    io.sockets.emit("MANU_VAN_KHI_2_OFF", tagArr[49]);
    io.sockets.emit("MANU_VAN_KHI_3_OFF", tagArr[50]);
    io.sockets.emit("MANU_BOM1_OFF", tagArr[51]);
    io.sockets.emit("MANU_BOM2_OFF", tagArr[52]);
    io.sockets.emit("MANU_BOM3_OFF", tagArr[53]);
    io.sockets.emit("MANU_BOM4_OFF", tagArr[54]);
    io.sockets.emit("MANU_VAN_NUOC_1_ON", tagArr[55]);
    io.sockets.emit("MANU_VAN_NUOC_2_ON", tagArr[56]);
    io.sockets.emit("MANU_VAN_NUOC_3_ON", tagArr[57]);
    io.sockets.emit("MANU_VAN_NUOC_4_ON", tagArr[58]);
    io.sockets.emit("MANU_VAN_NUOC_5_ON", tagArr[59]);
    io.sockets.emit("MANU_VAN_NUOC_6_ON", tagArr[60]);
    io.sockets.emit("MANU_VAN_KHI_1_ON", tagArr[61]);
    io.sockets.emit("MANU_VAN_KHI_2_ON", tagArr[62]);
    io.sockets.emit("MANU_VAN_KHI_3_ON", tagArr[63]);
    io.sockets.emit("MANU_BOM1_ON", tagArr[64]);
    io.sockets.emit("MANU_BOM2_ON", tagArr[65]);
    io.sockets.emit("MANU_BOM3_ON", tagArr[66]);
    io.sockets.emit("MANU_BOM4_ON", tagArr[67]);
    io.sockets.emit("MANU_DC_KHOANG_ON", tagArr[68]);
    io.sockets.emit("MANU_DC_KHOANG_OFF", tagArr[69]);
    io.sockets.emit("MANU_BANGTAI_ON", tagArr[70]);
    io.sockets.emit("MANU_BANGTAI_OFF", tagArr[71]);
    io.sockets.emit("seting_quy_doi_do", tagArr[72]);
    io.sockets.emit("seting_quy_doi_vang", tagArr[73]);
    io.sockets.emit("seting_quy_doi_xanh", tagArr[74]);
    io.sockets.emit("simulation", tagArr[75]);
    io.sockets.emit("chedo", tagArr[76]);
    io.sockets.emit("btt_Auto", tagArr[77]);
    io.sockets.emit("btt_Manu", tagArr[78]);
    io.sockets.emit("ACT_CHAY", tagArr[79]);
    io.sockets.emit("ACT_NGHI", tagArr[80]);
    io.sockets.emit("ACT_LAP_LAI_TRON", tagArr[81]);
    io.sockets.emit("ACT_LAP_LAI_RUA", tagArr[82]);
    io.sockets.emit("m1", tagArr[83]);
    io.sockets.emit("m2", tagArr[84]);
    io.sockets.emit("m3", tagArr[85]);
    io.sockets.emit("m4", tagArr[86]);
    io.sockets.emit("m5", tagArr[87]);
    io.sockets.emit("m6", tagArr[88]);
    io.sockets.emit("m7", tagArr[89]);
    io.sockets.emit("m8", tagArr[90]);
    io.sockets.emit("m9", tagArr[91]);
    io.sockets.emit("m10", tagArr[92]);
    io.sockets.emit("m11", tagArr[93]);
    io.sockets.emit("m12", tagArr[94]);
    io.sockets.emit("m13", tagArr[95]);
    io.sockets.emit("m14", tagArr[96]);
    io.sockets.emit("m15", tagArr[97]);
    io.sockets.emit("m16", tagArr[98]);
    io.sockets.emit("m17", tagArr[99]);
    io.sockets.emit("m18", tagArr[100]);
    io.sockets.emit("m19", tagArr[101]);
    io.sockets.emit("m20", tagArr[102]);
    io.sockets.emit("m21", tagArr[103]);
    io.sockets.emit("m22", tagArr[104]);
    io.sockets.emit("m23", tagArr[105]);
    io.sockets.emit("m24", tagArr[106]);
    io.sockets.emit("m25", tagArr[107]);
    io.sockets.emit("m26", tagArr[108]);
    io.sockets.emit("m27", tagArr[109]);
    io.sockets.emit("m28", tagArr[110]);
    io.sockets.emit("m29", tagArr[111]);
    io.sockets.emit("m30", tagArr[112]);
    io.sockets.emit("m31", tagArr[113]);
    io.sockets.emit("m32", tagArr[114]);
    io.sockets.emit("m33", tagArr[115]);
    io.sockets.emit("m34", tagArr[116]);
    io.sockets.emit("m35", tagArr[117]);

}
// ///////////GỬI DỮ LIỆU BẢNG TAG ĐẾN CLIENT (TRÌNH DUYỆT)///////////
io.on("connection", function(socket){
    socket.on("Client-send-data", function(data){
    fn_tag();
});});
/ ///////////TRUYỀN NHẬN DỮ LIỆU VỚI TRÌNH DUYỆT WEB///////////////////
io.on("connection", function(socket){
    // chọn chế độ tự động
    socket.on("cmd_Mode_Auto", function(data){
		fn_Data_Write(Q_lamp_Auto,data);
      	});
    // chọn chế bằng tay
    socket.on("cmd_Mode_Manu", function(data){
		fn_Data_Write(Q_lamp_Manu,data);
      	});
    // chọn chế độ tự động
    socket.on("cmd_Mode_confirm", function(data){
		fn_Data_Write(btt_Auto_confirm,data);
      	});
    // trạng thái bơm 1 BẬT
    socket.on("cmd_Manu_BOM1_OPEN", function(data){
      fn_Data_Write(MANU_BOM1_ON,data);
          });
          // trạng thái bơm 1 TẮT
    socket.on("cmd_Manu_BOM1_CLOSE", function(data){
      fn_Data_Write(MANU_BOM1_OFF,data);
          });
          // trạng thái bơm 2 BẬT
    socket.on("cmd_Manu_BOM2_OPEN", function(data){
      fn_Data_Write(MANU_BOM2_ON,data);
          });
          // trạng thái bơm 2 TẮT
    socket.on("cmd_Manu_BOM2_CLOSE", function(data){
      fn_Data_Write(MANU_BOM2_OFF,data);
          });
          // trạng thái bơm 3
    socket.on("cmd_MANU_BOM3", function(data){
		fn_Data_Write(MANU_BOM3,data);
      	});
        // trạng thái bơm 3 BẬT
    socket.on("cmd_Manu_BOM3_OPEN", function(data){
      fn_Data_Write(MANU_BOM3_ON,data);
          });
        // trạng thái bơm 3 TẮT
    socket.on("cmd_Manu_BOM3_CLOSE", function(data){
      fn_Data_Write(MANU_BOM3_OFF,data);
          });
          // trạng thái bơm 4
    socket.on("cmd_MANU_BOM4", function(data){
		fn_Data_Write(MANU_BOM4,data);
      	});
        // trạng thái bơm 4 BẬT
    socket.on("cmd_Manu_BOM4_OPEN", function(data){
      fn_Data_Write(MANU_BOM4_ON,data);
        });
          // trạng thái bơm 4  TẮT
    socket.on("cmd_Manu_BOM4_CLOSE", function(data){
      fn_Data_Write(MANU_BOM4_OFF,data);
        });
        //////////////////////////////////////////////////// TRẠNG THÁI VAN  NƯỚC /////////////////////////////////////////////////////////
      // trạng thái VAN NƯỚC 1  BẬT
    socket.on("cmd_Manu_VAN_NUOC_1_OPEN", function(data){
      fn_Data_Write(MANU_VAN_NUOC_1_ON,data);
        });
          // trạng thái VAN NƯỚC 1  TẮT
    socket.on("cmd_Manu_VAN_NUOC_1_CLOSE", function(data){
      fn_Data_Write(MANU_VAN_NUOC_1_OFF,data);
        });
              // trạng thái VAN NƯỚC 2  BẬT
    socket.on("cmd_Manu_VAN_NUOC_2_OPEN", function(data){
      fn_Data_Write(MANU_VAN_NUOC_2_ON,data);
        });
          // trạng thái VAN NƯỚC 2  TẮT
    socket.on("cmd_Manu_VAN_NUOC_2_CLOSE", function(data){
      fn_Data_Write(MANU_VAN_NUOC_2_OFF,data);
        });
          // trạng thái VAN NƯỚC 3  BẬT
    socket.on("cmd_Manu_VAN_NUOC_3_OPEN", function(data){
      fn_Data_Write(MANU_VAN_NUOC_3_ON,data);
        });
          // trạng thái VAN NƯỚC 3  TẮT
    socket.on("cmd_Manu_VAN_NUOC_3_CLOSE", function(data){
      fn_Data_Write(MANU_VAN_NUOC_3_OFF,data);
        });
          // trạng thái VAN NƯỚC 4  BẬT
    socket.on("cmd_Manu_VAN_NUOC_4_OPEN", function(data){
      fn_Data_Write(MANU_VAN_NUOC_4_ON,data);
        });
          // trạng thái VAN NƯỚC 4  TẮT
    socket.on("cmd_Manu_VAN_NUOC_4_CLOSE", function(data){
      fn_Data_Write(MANU_VAN_NUOC_4_OFF,data);
        });
          // trạng thái VAN NƯỚC 5  BẬT
    socket.on("cmd_Manu_VAN_NUOC_5_OPEN", function(data){
      fn_Data_Write(MANU_VAN_NUOC_5_ON,data);
        });
          // trạng thái VAN NƯỚC 5  TẮT
    socket.on("cmd_Manu_VAN_NUOC_5_CLOSE", function(data){
      fn_Data_Write(MANU_VAN_NUOC_5_OFF,data);
        });
              // trạng thái VAN NƯỚC 6  BẬT
    socket.on("cmd_Manu_VAN_NUOC_6_OPEN", function(data){
      fn_Data_Write(MANU_VAN_NUOC_6_ON,data);
        });
          // trạng thái VAN NƯỚC 6  TẮT
    socket.on("cmd_Manu_VAN_NUOC_6_CLOSE", function(data){
      fn_Data_Write(MANU_VAN_NUOC_6_OFF,data);
        });
 ////////////////////////////////////////////////////////// TRANG THÁI VAN KHÍ /////////////////////////////    
        // trạng thái VAN KHÍ 1 mở
    socket.on("cmd_Manu_VAN_KHI_1_OPEN", function(data){
		      fn_Data_Write(MANU_VAN_KHI_1_ON,data);
      	});
        // trạng thái VAN KHÍ 1 đóng
        socket.on("cmd_Manu_VAN_KHI_1_CLOSE", function(data){
          fn_Data_Write(MANU_VAN_KHI_1_OFF,data);
              });
         // trạng thái VAN KHÍ 2 MỞ
    socket.on("cmd_Manu_VAN_KHI_2_OPEN", function(data){
		     fn_Data_Write(MANU_VAN_KHI_2_ON,data);
      	});
         // trạng thái VAN KHÍ 2 ĐÓNG
    socket.on("cmd_Manu_VAN_KHI_2_CLOSE", function(data){
         fn_Data_Write(MANU_VAN_KHI_2_OFF,data);
        });
        
         // trạng thái VAN KHÍ 3 MỞ
    socket.on("cmd_Manu_VAN_KHI_3_OPEN", function(data){
		fn_Data_Write(MANU_VAN_KHI_3_ON,data);
      	});
         // trạng thái VAN KHÍ 3 ĐÓNG
    socket.on("cmd_Manu_VAN_KHI_3_CLOSE", function(data){
      fn_Data_Write(MANU_VAN_KHI_3_OFF,data);
          });
        // trạng thái BĂNG TẢI BẬT
    socket.on("cmd_Manu_BANGTAI_OPEN", function(data){
		fn_Data_Write(MANU_BANGTAI_ON,data);
      	});
        // trạng thái BĂNG TẢI TẮT
    socket.on("cmd_Manu_BANGTAI_CLOSE", function(data){
      fn_Data_Write(MANU_BANGTAI_OFF,data);
          });
        // trạng thái ĐỘNG CƠ TRỘN MỞ  
    socket.on("cmd_Manu_DC_KHOANG_OPEN", function(data){
		fn_Data_Write(MANU_DC_KHOANG_ON,data);
      	});
        // trạng thái ĐỘNG CƠ TRỘN ĐÓNG
    socket.on("cmd_Manu_DC_KHOANG_CLOSE", function(data){
      fn_Data_Write(MANU_DC_KHOANG_OFF,data);
          });
           // trạng thái của bảng điều khiển 
    socket.on("cmd_ON", function(data){
      fn_Data_Write(ON,data);
          });
    socket.on("cmd_OFF", function(data){
      fn_Data_Write(OFF,data);
          });
    socket.on("cmd_Mode_Auto", function(data){
      fn_Data_Write(btt_Auto,data);
          });
    socket.on("cmd_Mode_Manu", function(data){
      fn_Data_Write(btt_Manu,data);
          });
    socket.on("'cmd_Mode_confirm", function(data){
      fn_Data_Write(Q_lamp_confirm,data);
          });
    socket.on("cmd_simulation", function(data){
      fn_Data_Write(simulation,data);
          });
          /// code công thức bảng màu///
    socket.on("cmd_m1", function(data){
      fn_Data_Write(m1,data);
          });
    socket.on("cmd_m2", function(data){
      fn_Data_Write(m2,data);
          });
    socket.on("cmd_m3", function(data){
      fn_Data_Write(m3,data);
          });        
    socket.on("cmd_m4", function(data){
      fn_Data_Write(m4,data);
          });        
    socket.on("cmd_m5", function(data){
      fn_Data_Write(m5,data);
          });        
    socket.on("cmd_m6", function(data){
      fn_Data_Write(m6,data);
          });        
    socket.on("cmd_m7", function(data){
      fn_Data_Write(m7,data);
          });        
    socket.on("cmd_m8", function(data){
      fn_Data_Write(m8,data);
          });        
    socket.on("cmd_m9", function(data){
      fn_Data_Write(m9,data);
          });        
    socket.on("cmd_m10", function(data){
      fn_Data_Write(m10,data);
          });        
    socket.on("cmd_m11", function(data){
      fn_Data_Write(m11,data);
          });        
     socket.on("cmd_m12", function(data){
      fn_Data_Write(m12,data);
          });
          socket.on("cmd_m13", function(data){
            fn_Data_Write(m13,data);
                });        
          socket.on("cmd_m14", function(data){
            fn_Data_Write(m14,data);
                });        
          socket.on("cmd_m15", function(data){
            fn_Data_Write(m15,data);
                });        
          socket.on("cmd_m16", function(data){
            fn_Data_Write(m16,data);
                });        
          socket.on("cmd_m17", function(data){
            fn_Data_Write(m17,data);
                });        
          socket.on("cmd_m18", function(data){
            fn_Data_Write(m18,data);
                });        
          socket.on("cmd_m19", function(data){
            fn_Data_Write(m9,data);
                });        
          socket.on("cmd_m20", function(data){
            fn_Data_Write(m10,data);
                });    
                socket.on("cmd_m21", function(data){
                  fn_Data_Write(m21,data);
                      });
                socket.on("cmd_m22", function(data){
                  fn_Data_Write(m22,data);
                      });
                socket.on("cmd_m23", function(data){
                  fn_Data_Write(m23,data);
                      });        
                socket.on("cmd_m24", function(data){
                  fn_Data_Write(m24,data);
                      });        
                socket.on("cmd_m25", function(data){
                  fn_Data_Write(m25,data);
                      });        
                socket.on("cmd_m26", function(data){
                  fn_Data_Write(m26,data);
                      });        
                socket.on("cmd_m27", function(data){
                  fn_Data_Write(m27,data);
                      });        
                socket.on("cmd_m28", function(data){
                  fn_Data_Write(m28,data);
                      });        
                socket.on("cmd_m29", function(data){
                  fn_Data_Write(m29,data);
                      });        
                socket.on("cmd_m30", function(data){
                  fn_Data_Write(m10,data);
                      });   
                      socket.on("cmd_m31", function(data){
                        fn_Data_Write(m31,data);
                            });
                      socket.on("cmd_m32", function(data){
                        fn_Data_Write(m32,data);
                            });
                      socket.on("cmd_m33", function(data){
                        fn_Data_Write(m33,data);
                            });        
                      socket.on("cmd_m34", function(data){
                        fn_Data_Write(m34,data);
                            });        
                      socket.on("cmd_m35", function(data){
                        fn_Data_Write(m35,data);
                            });                 
});
// ++++++++++++++++++++++++++GHI DỮ LIỆU XUỐNG PLC+++++++++++++++++++++++++++
// MÀN HÌNH 2
io.on("connection", function(socket)
{
    socket.on("cmd_S2_Edit_Data", function(data){
        fn_Data_Write(seting_so_me,data[0]);
        fn_Data_Write(seting_tl_do,data[1]);
        fn_Data_Write(seting_tl_vang,data[2]);
        fn_Data_Write(seting_tl_xanh,data[3]);
        fn_Data_Write(seting_total,data[4]);
        fn_Data_Write(seting_time_tron,data[5]);
        fn_Data_Write(seting_time_nghi,data[6]);
        fn_Data_Write(lap_lai_tron,data[7]);
        fn_Data_Write(lap_lai_rua,data[8]);
        fn_Data_Write(seting_quy_doi,data[9]);
});
});
