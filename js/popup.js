// 清除网址
$('#clear-btn').click(function() {
  // 清除输入的内容
  $('#textstr').val('');
  jQuery(function(){
    // 清空原有二维码
    $('#output').empty();
  })
})
// 转成二维码
$('#code-btn').click(function() {
  let str = $('#textstr').val() || '';
  jQuery(function(){
    // 清空原有二维码，生成新的二维码
    $('#output').empty();
    jQuery('#output').qrcode({
      render: "canvas", //也可以替换为table
      width: 150,
      height: 150,
      text: str
    });
  })
})