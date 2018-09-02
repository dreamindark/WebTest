
$(function () {
    var $arrow = $(".arrow");
    var $wrap = $(".wrap");
    var $slide = $(".slide");

    var $lis = $slide.children().eq(0).children();
    var arrow = $arrow[0];

    //console.log($lis);
    var json = [  // 包含了5张图片里面所有的样式
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:20,
            z:2
        }
    ];
    $wrap.hover(function () {
        $arrow.animate({opacity:100});

    }, function () {
        $arrow.animate({opacity:0});
    });

    for(var i=0;i<json.length;i++){
        $lis.eq(i).css("zIndex", json[i].z);
        $lis.eq(i).animate({
            width: json[i].width,
            top: json[i].top,
            left: json[i].left,
            opacity: (json[i].opacity)/100

        },1000);
        //$lis.eq(i).css("width", json[i].width);
        //$lis.eq(i).css("top", json[i].top);
        //$lis.eq(i).css("left", json[i].left);
        //$lis.eq(i).css("zIndex", json[i].z);
        //$lis.eq(i).css("opacity", json[i].opacity);
    }
    var as = arrow.children;
    console.log(as);
    for(i in as){
        as[i].onclick = function () {
            if(this.className=="prev"){
                move(true)
            }else{
                move(false)
            }
        }
    }


    function move(bool){
        if(bool){
            json.unshift(json.pop());
        }
        else{
            json.push(json.shift());
        }

        for(var i=0;i<json.length;i++){

            $lis.eq(i).animate({
                zIndex:json[i].z,
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: (json[i].opacity)/100

            },1000);

        }
    }
});