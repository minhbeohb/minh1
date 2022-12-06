///// HÀM CHỨC NĂNG NÚT NHẤN SỬA //////
// Tạo 1 tag tạm báo đang sửa dữ liệu
var S1_data_edditting = false;
function fn_S1_EditBtt(bttSaveID, bttEditID){
    // Cho hiển thị nút nhấn lưu
    fn_DataEdit(bttSaveID, bttEditID);
    // Cho tag báo đang sửa dữ liệu lên giá trị true
    S1_data_edditting = true; 
    // Kích hoạt chức năng sửa của các IO Field
    document.getElementById("tbx_ON").disabled = false; // Tag ON
    document.getElementById("tbx_OFF").disabled = false; // Tag OFF
    document.getElementById("tbx_RESET").disabled = false; // Tag RESET
}
///// HÀM CHỨC NĂNG NÚT NHẤN LƯU //////
function fn_S1_SaveBtt(bttSaveID, bttEditID){
    // Cho hiển thị nút nhấn sửa
    fn_DataEdit(bttEditID, bttSaveID);
    // Cho tag đang sửa dữ liệu về 0
    S1_data_edditting = false; 
                        // Gửi dữ liệu cần sửa xuống PLC
    var data_edit_array = [ document.getElementById('tbx_ON').value,
                            document.getElementById('tbx_OFF').value,
                            document.getElementById('tbx_RESET').value];
    socket.emit('cmd_S1_Edit_Data', data_edit_array);
    alert('Dữ liệu đã được lưu!');
    // Vô hiệu hoá chức năng sửa của các IO Field
    document.getElementById("tbx_ON").disabled = true; // Tag ON
    document.getElementById("tbx_OFF").disabled = true; // Tag OFF
    document.getElementById("tbx _RESET").disabled = true; // Tag RESET
}
 
// Hàm chức năng đọc dữ liệu lên IO Field
function fn_S1_IOField_IO(tag, IOField, tofix)
{
    socket.on(tag, function(data){
        if (tofix == 0 & S1_data_edditting != true)
        {
            document.getElementById(IOField).value = data;
        }
        else if(S1_data_edditting != true)
        {
            document.getElementById(IOField).value = data.toFixed(tofix);
        }
    });
}
