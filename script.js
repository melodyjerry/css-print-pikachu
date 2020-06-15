!function(){
    var duration=10
    $('.actions').on('click','button',function(e){
        let $button=$(e.currentTarget);
        let speed=$button.attr('data-speed');
        console.log(speed);
        $button.addClass('active').siblings('.active').removeClass('active');
        switch(speed){
            case 'slow':
                duration=100
                break;
            case 'normal':
                duration=50
                break;
            case 'fast':
                duration=10
                break;
        }
    })

    function writeCode(prefix,code,fn){
        let container=document.querySelector('#code')
        let styleTag=document.querySelector("#styleTag")
        let n=0
        setTimeout(function run(){
            n++
            container.innerHTML=code.substring(0,n)
            styleTag.innerHTML=code.substring(0,n)
            container.scrollTop=container.scrollHeight
            if(n<code.length){
                setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
        // let id=setInterval(()=>{
        //     n++
        //     container.innerHTML=code.substring(0,n)
        //     styleTag.innerHTML=code.substring(0,n)
        //     if(n>=code.length){
        //         window.clearInterval(id)
        //         // fn && fn.call()
        //     }
        // },duration)
    }
    
    let code =`
    #container{
        height: 300px;
        width: 460px;
        position: relative;
    }
    
    /* 画鼻子 */
    #nose{
        border: 16px solid transparent;  
        position: absolute; 
        left:50%;
        top:95px; 
        transform: translateX(-50%); 
        border-top: 16px solid black;
        border-radius: 50%;
    }
    
    /* 画眼睛 */
    .eye{
        position:absolute;
        width: 60px;
        height: 60px;
        background-color: #2e2e2e;
        border:2px solid black;
        border-radius: 30px;
        top:65px;
    }
    
    .eye-left{
        right: 50%;
        margin-right: 90px;
    }
    
    .eye-right{
        left: 50%;
        margin-left: 90px;
    }
    
    .eye::before{
        content: '';
        display: block;
        width: 30px;
        height: 30px;
        background: white;
        border-radius: 50%;
        left: 8px;
        position: absolute;
        border: 2px solid black;
    }
    
    /* 画嘴唇 */
    .upperLip{
        position: absolute;
        top:120px;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 1;
    }
    
    .upperLip::before{
        content: '';
        display: block;
        width: 80px;
        height: 26px;
        border: 3px solid black;
        border-top:none;
        border-right: none;
        border-bottom-left-radius: 80px 40px;
        transform: rotateZ(-23deg);
        background: #ffe000;
    }
    
    .upperLip::after{
        content: '';
        display: block;
        width: 80px;
        height: 26px;
        border: 3px solid black;
        border-top: none;
        border-left: none;
        border-bottom-right-radius: 80px 40px;
        transform: rotateZ(23deg);
        background: #ffe000;
    }
    
    /* 画舌头 */
    .lowerLip-wrapper{
        position: absolute;
        width: 100%;
        top: 130px;
        height:160px;
        overflow: hidden;
    }
    
    .lowerLip{
        position: absolute;
        border: 3px solid black;
        bottom: 0px;
        height: 1300px;
        width: 200px;
        left: 50%;
        transform: translateX(-50%);
        border-top: none;
        border-bottom-left-radius: 100px 650px;
        border-bottom-right-radius: 100px 650px;
        border-top-left-radius: 100px 100px;
        border-top-right-radius: 100px 100px;
        background: #ff444f;
        box-shadow: inset 0 1145px 0 20px #9f000a;
    }
    
    /* 画腮红 */
    .face{
        position: absolute;
        border:3px solid black;
        background: red;
        top:180px;
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }
    
    .face-left{
        right: 50%;
        margin-right: 130px;
    }
    
    .face-right{
        left: 50%;
        margin-left: 130px;
    }
    `   
    writeCode('',code)
}.call()