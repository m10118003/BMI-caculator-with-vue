<template>
    <section id="primary-area">
		<div class="cal-container">
			<h1>BMI calculator</h1>
			<div class="height-container">
				<h2>Height :</h2>
				<input type="text" class="text" maxlength="5" v-model="h">
                <!-- 用 v-model 雙向指向 input, 省略 onclick, attribute -->
				<h2>cm</h2>
			</div>
			<div class="bw-container">
				<h2>Weight :</h2>
				<input type="text" class="text" maxlength="5" v-model="w">
                <!-- 用 v-model 雙向指向 input, 省略 onclick, attribute -->
				<h2>kg</h2>
			</div>
			<div class="btn-container">
				<button class="startCal" @click="caculate()">Calculate</button>
				<button class="reset" @click="clear()">Reset</button>
			</div>
			<!-- <input type='submit' value="計算" class="calculateBMI"></div> -->
			<div class="result-area" v-bind:class="output">
				<p class="result-title">Surprise ! 跟你說你的 BMI 是...{{bmi}} !!</p>
				<p class="resultText">Status: {{result}}</p>
				<p class="result">Advice: {{advice}}</p>
			</div>
		</div>
        </section>
</template>
<script>
export default {
    // JS 區間
    data() {
        return {
            w:'40',
            h:'160',
            bmi:'',        
            result:'',
            output:'',
            advice:'',
        }   
    },
    methods: {
        caculate() {
            // 抓DOM
			// let result = document.querySelector('.result');
			// result.style.display = "none";
            // // 事件點擊按鈕
			// this.startCal = document.querySelector('.startCal');
			// this.reset = document.querySelector('.reset');
			// this.input = document.querySelectorAll('input');	
			// this.resultArea = document.querySelector('.result-area');	            

            // h, w, bmi 加上 this 指向上面的 w:'', h:'', bmi:''
			// this.h = document.querySelector('.height').value
            // 身高值
            // this.w = document.querySelector('.weight').value
            // 體重值

            // this.resultArea.classList.add('show');	
			// // 浮現視窗
			// this.resultText = document.querySelector('.resultText');
			// // 計算 BMI
			// this.result = document.querySelector('.result');
			// 印出 BMI  
            this.output = 'show'
            if (isNaN(parseInt(this.h)) || isNaN(parseInt(this.w))) {
					//空值，非數字(中文, 英文, 特殊符號)，空白					
					// alert("Do not touch this! 請輸入看起來像是數字的身高體重~")
                    // h, w 加上 this			
                    console.log("Do not touch this! 請輸入看起來像是數字的身高體重~");						
				} else if(this.h < 0 || this.w < 0) {
					// 負值
					// alert("你不當人了嗎! Dio!")	
                    // h, w 加上 this	
                    console.log("你不當人了嗎! Dio!");		
				} else {
                    this.bmi = (this.w / ((this.h * this.h)/10000)).toFixed(2);
                    // bmi ouput → .innerHTML = '.bmi'
                    // console.log(bmi); 
                    // 上面 VAR 宣告用 var bmi, 這邊也用 bmi

                if (this.bmi >= 35) {
					this.result = '重度肥胖 '
                    this.advice = '健康不會謀殺你, 但糖尿病, 高血壓會 !!!'
				} else if (30 <= this.bmi) {
					this.result = '中度肥胖'
                    this.advice = 'Do 運動 or do not ! 願原力指引你的體重 !!'
				} else if (27 <= this.bmi) {
					this.result = '輕度肥胖' 
                    this.advice = '現在! 立刻! 跑起來! Do it ! Just !! Do it !!!'
				} else if (24 <= this.bmi) {
					this.result = '過重'
                    this.advice = '變胖真是太無情啦, 史丹利 !! (誰 ?)'
				} else if (18.5 <= this.bmi) {
					this.result = '正常範圍'
                    this.advice = '汝心汝行澄如明鏡，所作所為皆為健康 !!'
				} else {
					this.result = '體重過輕'
                    this.advice = '哇! 太瘦了吧！ 沒事多吃多健康 !!!'
                }
            }

            },
                clear() {
                this.output = ''
                this.result = ''
                this.advice = ''  
                this.w = ''
                this.h = ''
                this.bmi = ''
                          
        }        
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
body {
    font-family: "Microsoft JhengHei",微軟正黑體;  
    margin: 0;
    padding: 0;    
}
#primary-area {    
    display: flex;
    justify-content: center;    
    margin: 5%;
    .cal-container {        
        max-width: 41.07vw;
        min-width: 465px;
        background-color: #2EA9DF;
        border: 4px;
        border-style:outset;
        border-radius: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;  
        position: relative;      
        // 包住所有東西的大框
        h1 {
            width: 60%;
            color: #333;
            background-color: #7DB9DE;
            border: 4px;
            border-style: outset;
            border-radius: 15px;
            font-size: 250%;    
            text-shadow: 0.04em 0.01em rgb(77, 77, 77);
            text-align: center;
            margin: 25px auto; 
            padding: 10px;  
        }        
        h2 {
            font-size: 130%;
            text-shadow: 0.04em 0.01em #333;
            transition: 0.3s; 
            padding: 0 10px;   
        }        
        input {
            width: 40%;
            height: 40px;
            color: #ffffffea;
            background-color: #91989f;
            border-style: unset;
            border-radius: 15px;           
            text-align: center;
            
        }        
        .text {
            font-size: 130%;
            font-weight: 600;
        }        
        h1:hover {
            color: #ffffffea;            
            cursor: pointer;             
            &::before {
                opacity: 1;
            }
        }                  
        h1::before {
            content: "";
            width: 100%;
            height: 5px;
            display: block;
            background-color: plum;
            border-radius: 15px;
            opacity: 0;
            transition-duration: 0.3s;
            position: absolute;
            bottom: 0;
            left: 0;   
        }
        >h1 {
            opacity: 1;
            transition-duration: 0.5s;
        }
        h2:hover {
            color: #9c9c9ce3;
            cursor: pointer;             
            transition-duration: 0.5s;
        }  
        .height-container {
            width: 70%;
            background-color: #FB9966;
            border: 4px;
            border-style:outset;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 5px;

            .height {
                width: 36%; 
                font-size: 35px; 
                text-align: center;    
            }
        }
        .bw-container {
            width: 70%;   
            background-color: #FB9966;
            border: 4px;
            border-style:outset;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 25px;   

            h2:nth-child(3) {
                margin: 0 5px;
            }
            .weight {
                width: 36%; 
                font-size: 35px; 
                text-align: center;
            }            
        }
        .btn-container {    
            width: 100%;    
            display: flex;  
            justify-content: space-evenly;
            align-items: center;  
            margin-top: 25px;
            margin-bottom: 25px;            
            .startCal {
                width: 35%;
                height: 70px;
                background-color:#91989f;               
                border: 4px;
                border-style:outset;
                border-radius: 15px;
                font-size: 150%;
                text-shadow: 0.05em 0.01em #333;                
            }            
            .reset {
                width: 35%;
                height: 70px;   
                background-color:#91989F; 
                border: 4px;
                border-style:outset;
                border-radius: 15px;
                font-size: 150%;
                text-shadow: 0.05em 0.01em #333;               
            }
            button:hover {
                color: #ffffffea;
                background-color:#80868d;
                cursor: pointer;
                transition-duration: 0.3s;
            }            
            button:active {   
                background-color: #df867c; 
                border: 4px solid #ffffff;
                border-style:outset;
                border-radius: 15px;
                transition-duration: 0.08s;   
            }  
        }        
        .result-area {  
            background-color: #91989F;
            border: 4px solid #ffffff;
            border-style:outset;
            border-radius: 15px;
            line-height: 1em;  
            opacity: 0;
            >p {                
                width: 100%; 
                font-size: 130%;
                text-shadow: 0.05em 0.01em #333; 
                transition: 0.5s;  
                transition-duration: 1s;                
                margin-left: 0px;                
            }
            >p:hover {
                width: 100%;
                color: #ffffffea; 
                text-shadow: 0.05em 0.01em #ffffffea;  
                transition: 0.5s;                  
                transition-duration: 1s;
            }  
        }
        .result-area.show {           
            width: 90vh; 
            height: 23vw; 
            opacity: 1;   
            transition: 0.5s;
            transition-duration: 1s;
            margin-top: 5px;  
        }     
    }
}
</style>