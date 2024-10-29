// 打字机效果 - 循环展示内容
const texts = ["我是DYL，一个深度学习初学者", "不断追去未来的萌新", "探索图像领域的海洋","蓝色，是静谧的，是谨慎的"];
let textIndex = 0;
let charIndex = 0;
const speed = 150; // 打字速度

function typeWriter() {
    const typingTextElement = document.getElementById("typing-text");

    if (charIndex < texts[textIndex].length) {
        typingTextElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(erase, 1500); // 保持文本一段时间后开始删除
    }
}

function erase() {
    const typingTextElement = document.getElementById("typing-text");

    if (charIndex > 0) {
        typingTextElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, speed);
    } else {
        textIndex = (textIndex + 1) % texts.length; // 下一个文本
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;
// 选择所有学习节点
const goalNodes = document.querySelectorAll(".goal-node");

goalNodes.forEach(node => {
    node.addEventListener("click", () => {
        // 切换节点状态
        if (node.getAttribute("data-status") === "not-started") {
            node.setAttribute("data-status", "in-progress");
        } else if (node.getAttribute("data-status") === "in-progress") {
            node.setAttribute("data-status", "completed");
        }
    });
});
// 数据数组
const competitions = [
    {
        imgSrc: "img/2024年第二十六届中国机器人及人工智能大赛全国总决赛二等奖.png",
        description: "2024年第二十六届中国机器人及人工智能大赛全国总决赛二等奖"
    },
    {
        imgSrc: "img/计算机设计大赛省赛二等奖.png",
        description: "计算机设计大赛省赛二等奖"
    },
    {
        imgSrc: "img/ACM-ICPC.jpg",
        description: "重庆市程序设计大赛CCPC铜奖"
    },
    {
        imgSrc: "img/MCM三等奖.jpg",
        description: "Successful Participant"
    },
    {
        imgSrc: "img/天梯赛省二.png",
        description: "天梯赛省赛二等奖"
    },
    {
        imgSrc: "img/邓郁霖 焦晓军 三等奖.png",
        description: "传智杯省赛二等奖"
    },   
    {
        imgSrc: "img/作品赛省赛二等奖.jpg",
        description: "计算机作品赛省赛二等奖"
    }
];

// 获取容器元素
const competitionCardsContainer = document.getElementById("competition-cards");

// 动态生成内容
competitions.forEach(competition => {
    // 创建卡片元素
    const card = document.createElement("div");
    card.classList.add("competition-card", "frame-card");

    // 添加图片容器
    const framePhoto = document.createElement("div");
    framePhoto.classList.add("frame-photo");

    // 创建图片
    const img = document.createElement("img");
    img.src = competition.imgSrc;
    img.alt = competition.description;

    // 将图片插入图片容器
    framePhoto.appendChild(img);

    // 创建描述文字
    const description = document.createElement("p");
    description.classList.add("frame-description");
    description.textContent = competition.description;

    // 将图片容器和描述文字插入卡片
    card.appendChild(framePhoto);
    card.appendChild(description);

    // 将卡片插入到展示容器中
    competitionCardsContainer.appendChild(card);
});
// 导航栏平滑滚动效果
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// 导航栏平滑滚动
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 沿途风景数据
const sceneryImages = [
    "img/scenery1.jpg",
    "img/scenery2.jpg",
    "img/scenery3.jpg",
    "img/scenery4.jpg",
    "img/scenery5.jpg",
    "img/scenery6.jpg",
    "img/scenery7.jpg",
    "img/scenery8.jpg",
    "img/scenery9.jpg",
    "img/scenery10.jpg",
    "img/scenery11.jpg",
];

// 获取“沿途风景”容器
const sceneryWall = document.getElementById("scenery-wall");

// 动态生成图片
sceneryImages.forEach(src => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("scenery-image");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "沿途风景";
    imgContainer.appendChild(img);

    sceneryWall.appendChild(imgContainer);
});

// 自动滚动效果
let scrollOffset = 0;
setInterval(() => {
    scrollOffset += 1;
    sceneryWall.scrollLeft = scrollOffset;
    if (scrollOffset >= sceneryWall.scrollWidth - sceneryWall.clientWidth) {
        scrollOffset = 0;
    }
}, 30);
// 获取数字雨背景容器
const digitalRainContainer = document.getElementById("digital-rain");

// 创建数字雨
function createDigitalRain() {
    const digit = document.createElement("div");
    digit.classList.add("digit");
    digit.textContent = Math.random() > 0.5 ? "0" : "1"; // 随机生成0或1

    // 随机位置和下落速度
    digit.style.left = Math.random() * 100 + "vw"; // 随机水平位置
    digit.style.animationDuration = 2 + Math.random() * 3 + "s"; // 随机下落速度

    // 将数字添加到数字雨容器
    digitalRainContainer.appendChild(digit);

    // 动画结束后删除数字
    digit.addEventListener("animationend", () => {
        digitalRainContainer.removeChild(digit);
    });
}

// 定时生成数字雨
setInterval(createDigitalRain, 100); // 每100ms生成一个新数字
// 项目数据数组
const projects = [
    {
        imgSrc: "img/project1.jpg",
        title: "AI人脸图像分类项目",
        description: "该项目通过使用一个在经过ImgNet预训练图像分类模型将它拓展为双分支的模型从而达到深度检测DeepFake—Detection的效果"
    },
    {
        imgSrc: "img/project2.jpg",
        title: "文物图片缺陷修复项目",
        description: "该项目核心是使用Mask(掩物训练)，FFC，LAMA预训练模型从而来对缺陷文物图像进行精确修复"
    }
];

// 获取项目容器
const projectCardsContainer = document.getElementById("project-cards");

// 动态生成项目内容
projects.forEach(project => {
    // 创建项目卡片元素
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-frame");

    // 添加图片容器
    const framePhoto = document.createElement("div");
    framePhoto.classList.add("project-photo");

    // 创建图片
    const img = document.createElement("img");
    img.src = project.imgSrc;
    img.alt = project.title;
    framePhoto.appendChild(img);

    // 创建标题
    const title = document.createElement("h3");
    title.classList.add("project-title");
    title.textContent = project.title;

    // 创建描述文字
    const description = document.createElement("p");
    description.classList.add("project-description");
    description.textContent = project.description;

    // 将图片、标题和描述添加到项目卡片
    projectCard.appendChild(framePhoto);
    projectCard.appendChild(title);
    projectCard.appendChild(description);

    // 将项目卡片插入到项目容器中
    projectCardsContainer.appendChild(projectCard);
});
// 名人名言数组
const quotes = [
    { text: "教育的根是苦的，但果实是甜的。", author: "亚里士多德" },
    { text: "我思故我在。", author: "笛卡尔" },
    { text: "成功不是最终的，失败也不是致命的；继续前行的勇气才是最重要的。", author: "丘吉尔" },
    { text: "一个人能为另一个人做的最重要的事，莫过于在黑暗中带来光明。", author: "西蒙娜·德·波伏娃" },
    { text: "生活并不是用来妥协的，你退缩得越多，那么可以让你喘息的空间就越有限。", author: "斯蒂芬·金" },
    { text: "重要的不是我们做了什么，而是我们为什么去做。", author: "达尔文" }
];

// 获取页脚容器
const quoteContainer = document.getElementById("quote-container");

// 动态生成滚动弹幕
function displayBarrageQuotes() {
    quoteContainer.innerHTML = ""; // 清空之前的内容

    quotes.forEach((quote) => {
        const quoteElement = document.createElement("div");
        quoteElement.classList.add("barrage-quote");
        quoteElement.textContent = `"${quote.text}" - ${quote.author}`;

        // 随机字体大小、速度、和位置
        quoteElement.style.fontSize = Math.random() * 1.2 + 1 + "em";
        quoteElement.style.animationDuration = 10 + Math.random() * 10 + "s"; // 随机滚动速度
        quoteElement.style.top = Math.random() * 80 + "%"; // 随机垂直位置

        quoteContainer.appendChild(quoteElement);
    });
}

// 初始显示弹幕，并每10秒刷新一次
displayBarrageQuotes();
setInterval(displayBarrageQuotes, 10000000);
// 获取图片元素
const entjImage = document.getElementById("entj-image");

// 添加鼠标悬浮和移动事件
entjImage.addEventListener("mouseover", () => {
    entjImage.style.transform = "scale(1.2) rotate(10deg)";
});

entjImage.addEventListener("mouseleave", () => {
    entjImage.style.transform = "scale(1) rotate(0deg)";
});

// 可拖动效果
entjImage.addEventListener("mousedown", (event) => {
    event.preventDefault();

    let shiftX = event.clientX - entjImage.getBoundingClientRect().left;
    let shiftY = event.clientY - entjImage.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        entjImage.style.left = pageX - shiftX + 'px';
        entjImage.style.top = pageY - shiftY + 'px';
        entjImage.style.position = 'absolute';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    entjImage.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        entjImage.onmouseup = null;
    };
});

entjImage.ondragstart = function() {
    return false;
};
