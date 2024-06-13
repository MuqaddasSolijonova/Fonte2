const scrollTop = document.querySelector(".scrollTop")
const navbar = document.querySelector(".navbar")
const block = document.querySelector(".blocks")
const left = document.querySelector(".back")
const right = document.querySelector(".right_btn")
const dots = document.querySelectorAll(".dot")
const point = document.querySelectorAll(".point")
const title = document.querySelector(".title")
const title_desc = document.querySelector(".title_desc")
const behind = document.querySelector(".behind")
const front = document.querySelector(".front")
const news = [
    [
        {
            id: 0,
            img: "./imgs/sec5.1.png",
            desc: "Рэй Далио перестал считать наличные «мусором»",

        },
        {
            id: 1,
            img: "./imgs/sec5.1.png",
            desc: "Рэй Далио перестал считать наличные «мусором»",

        },
        {
            id: 3,
            img: "./imgs/sec5.1.png",
            desc: "Рэй Далио перестал считать наличные «мусором»",

        }
    ],
    [
        {
            id: 4,
            img: "./imgs/sec5.2.png",
            desc: "Инвестиции в 5G – необходимое условие экономического развития",

        },
        {
            id: 5,
            img: "./imgs/sec5.2.png",
            desc: "Инвестиции в 5G – необходимое условие экономического развития",

        },
        {
            id: 6,
            img: "./imgs/sec5.2.png",
            desc: "Инвестиции в 5G – необходимое условие экономического развития",

        }
    ],
    [
        {
            id: 4,
            img: "./imgs/sec5.3.png",
            desc: "Минфин предложил единый налоговый вычет",

        },
        {
            id: 5,
            img: "./imgs/sec5.3.png",
            desc: "Минфин предложил единый налоговый вычет",

        },
        {
            id: 6,
            img: "./imgs/sec5.3.png",
            desc: "Минфин предложил единый налоговый вычет",

        }
    ]
]

const datas = [
    {
        title: "Хедж-фонд",
        desc: `Классический выбор профессиональных инвесторов с заданными умеренными параметрами риска. Основан
        на инвестировании в бумаги индекса S&P 500 с диверсификацией по 11 секторам экономики.`
    },
    {
        title: "LOREM IMPLUS HBKABGYUFKWGBJFEMA",
        desc: " aaaaaaaaaaaaaaaaaaaaaaaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit maiores maxime aut hic labore."
    },
    {
        title: "High level strategy of company",
        desc: " BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit maiores maxime aut hic labore."
    },
    {
        title: "if you join any classes you can ",
        desc: " cccccccccccccccccccccccccccccccccccccccccccccc Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit maiores maxime aut hic labore."
    }

]





document.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollTop.classList.add("active")
        navbar.classList.add("active")
        console.log("salom");
    } else {
        scrollTop.classList.remove("active")
        navbar.classList.remove("active")
    }
})
scrollTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0
})

var index = 0
const writeData = (index) => {
    dots.forEach((item, num) => {
        if (num == index) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })

    block.innerHTML = ""
    news[index].forEach((item) => {
        block.innerHTML += `
        <div class="box">
        <img src="${item.img}" alt="">
        <h2>${item.desc} </h2>
        
        <div class="pod">
            <h5>Подробнее </h5><span><img src="./imgs/Vector (1).svg" alt=""></span>
        </div>
        
        
    `;
    })
}
writeData(index)
dots.forEach((item, num) => {
    item.addEventListener("click", () => {
        writeData(num)
    })
})
right.addEventListener("click", () => {
    if (index == news.length - 1) {
        index = 0
    } else {
        index++
    }

    writeData(index)
})

left.addEventListener("click", () => {
    if (index == 0) {
        index = news.length - 1
    } else {
        index--
    }

    writeData(index)
})
const AgainWriteData = (index) => {
    point.forEach((item, i)=>{
       if(index==i){
     item.classList.add("active")
       }else{
        item.classList.remove("active")
       }
    })
    title.textContent = datas[index].title
    title_desc.textContent = datas[index].desc
}
AgainWriteData(index)

behind.addEventListener("click", () => {
    if (index == 0) {
        index = datas.length-1
    } else {
        index--
    }

    AgainWriteData(index)
})
front.addEventListener("click", () => {
    if (index == datas.length - 1) {
        index = 0
    } else {
        index++
    }

    AgainWriteData(index)
})
point.forEach((item, i)=>{
item.addEventListener("click", ()=>{
    AgainWriteData(i)
})
})





const form = document.querySelector(".form1")
const sent = document.querySelector(".sent")
 const enter = document.querySelector(".Войти")
 const modal = document.querySelector(".modal")
const show_sent=()=>{
   sent.classList.add("active")
   setTimeout(()=>{
    sent.classList.remove("active")
   },1000)
}

form.addEventListener("submit", (e)=>{
   e.preventDefault;
   console.log("salom");
   show_sent()
 })
 enter.addEventListener("click", ()=>{
 modal.classList.add("active")
 })