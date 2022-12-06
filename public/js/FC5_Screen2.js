///// HÀM CHỨC NĂNG NÚT NHẤN SỬA //////
// Tạo 1 tag tạm báo đang sửa dữ liệu
var S2_data_edditting = false;
function fn_S2_EditBtt(bttSaveID, bttEditID){
    // Cho hiển thị nút nhấn lưu
    fn_DataEdit(bttSaveID, bttEditID);
    // Cho tag báo đang sửa dữ liệu lên giá trị true
    S2_data_edditting = true; 
    // Kích hoạt chức năng sửa của các IO Field
    document.getElementById("tbx_seting_so_me").disabled = false; // sổ mẻ
    document.getElementById("tbx_seting_tl_do").disabled = false; // tỉ lệ đỏ 
    document.getElementById("tbx_seting_tl_vang").disabled = false; // tl vàng
    document.getElementById("tbx_seting_tl_xanh").disabled = false; // tl xanh 
    document.getElementById("tbx_seting_total").disabled = false; // total 
    document.getElementById("tbx_seting_time_tron").disabled = false; //thời gian trộn
    document.getElementById("tbx_seting_time_nghi").disabled = false; // thời gian nghỉ  
    document.getElementById("tbx_lap_lai_tron").disabled = false; // lặp lại trộn
    document.getElementById("tbx_lap_lai_rua").disabled = false; // lặp lại rửa 
    document.getElementById("tbx_seting_quy_doi").disabled = false; // lặp lại rửa 
    
}
///// HÀM CHỨC NĂNG NÚT NHẤN LƯU //////
function fn_S2_SaveBtt(bttSaveID, bttEditID){
    // Cho hiển thị nút nhấn sửa
    fn_DataEdit(bttEditID, bttSaveID);
    // Cho tag đang sửa dữ liệu về 0
    S2_data_edditting = false; 
                        // Gửi dữ liệu cần sửa xuống PLC
    var data_edit_array = [document.getElementById('tbx_seting_so_me').value,
     document.getElementById('tbx_seting_tl_do').value,
     document.getElementById('tbx_seting_tl_vang').value,
      document.getElementById('tbx_seting_tl_xanh').value,
     document.getElementById('tbx_seting_total').value,
     document.getElementById('tbx_seting_time_tron').value,
      document.getElementById('tbx_seting_time_nghi').value,
      document.getElementById('tbx_lap_lai_tron').value,
     document.getElementById('tbx_lap_lai_rua').value,
     document.getElementById('tbx_seting_quy_doi').value];
    socket.emit('cmd_S2_Edit_Data', data_edit_array)// các tag
    alert('Dữ liệu đã được lưu!');
    // Vô hiệu hoá chức năng sửa của các IO Field
    document.getElementById("tbx_seting_so_me").disabled = true; // sổ mẻ
    document.getElementById("tbx_seting_tl_do").disabled = true; // tỉ lệ đỏ 
    document.getElementById("tbx_seting_tl_vang").disabled = true; // tl vàng
    document.getElementById("tbx_seting_tl_xanh").disabled = true; // tl xanh 
    document.getElementById("tbx_seting_total").disabled = true; // total 
    document.getElementById("tbx_seting_time_tron").disabled = true; //thời gian trộn
    document.getElementById("tbx_seting_time_nghi").disabled = true; // thời gian nghỉ  
    document.getElementById("tbx_lap_lai_tron").disabled = true; // lặp lại trộn
    document.getElementById("tbx_lap_lai_rua").disabled = true; // lặp lại rửa 
    document.getElementById('tbx_seting_quy_doi').disabled= true; 
   }
 
// Hàm chức năng đọc dữ liệu lên IO Field
function fn_S2_IOField_IO(tag, IOField, tofix)
{
    socket.on(tag, function(data){
        if (tofix == 0 & S2_data_edditting != true)
        {
            document.getElementById(IOField).value = data;
        }
        else if(S2_data_edditting != true)
        {
            document.getElementById(IOField).value = data.toFixed(tofix);
        }
    });
}