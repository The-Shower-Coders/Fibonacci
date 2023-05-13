$( document ).ready(function() {
    $("input").on('input',function(e){
        let deger = $(this).val();
        let arr = [];
        let temp = 0;
        let current = 1;
        arr.push(temp + current)
        for (let i = 1; i < deger;i++) {
            let pushvalue = temp + current;
            arr.push(pushvalue)
            temp = current;
            current = pushvalue;
        }
        $('#result').html('[ ' + arr.join(', ') + ' ]');
      });
});


// Minimum satır denemesi
// $( document ).ready(function() {
//     $("input").on('input',function(e){
//         let deger = $(this).val(), arr = [], temp = 0, current = 1;
//         arr.push(temp + current)
//         for (let i = 1; i < deger;i++) {
//             let pushvalue = temp + current;
//             arr.push(pushvalue)
//             (temp, current) = (current, pushvalue);
//         }
//         $('#result').html('[ ' + arr.join(', ') + ' ]');
//       });
// });