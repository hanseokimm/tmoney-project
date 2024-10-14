window.onload = function() {
    const partnerBtn = document.querySelector(".h-partner button");
    const langBtn = document.querySelector(".lang-btn");
    partnerBtn.addEventListener("click", function() {
        partnerBtn.classList.toggle("active");
    });
    langBtn.addEventListener("click", function() {
        langBtn.classList.toggle("active");
    });

    const familyBtn = document.querySelector(".family-btn");
    familyBtn.addEventListener("click", function() {
        familyBtn.classList.toggle("active");
    });

    const hMenu = document.querySelector(".h-menu");
    const depths = document.querySelectorAll(".depth");
    const dDepths = document.querySelectorAll(".d-depth");
    const hasDepths = document.querySelectorAll(".has-depth");
    const depthBg = document.querySelector(".depth-bg");

    let depthBgHeight = 0;
    let addHeight = [];

    hMenu.addEventListener("mouseover", function() {
        depthBg.classList.add("active");
        depthBgHeight = depthBg.getBoundingClientRect().height;
        depths.forEach(depth => depth.classList.add("active"));
    });
    hMenu.addEventListener("mouseout", function() {
        depthBg.classList.remove("active");
        depths.forEach(depth => depth.classList.remove("active"));
    });
    

    // d-depth의 높이 값 배열에 저장
    depths.forEach(depth => depth.classList.add("active"));
    hasDepths.forEach(hasDepth => hasDepth.classList.add("active"));
    dDepths.forEach((dDepth, index) => {
        addHeight[index] = dDepth.getBoundingClientRect().height;
    })
    hasDepths.forEach(hasDepth => hasDepth.classList.remove("active"));
    depths.forEach(depth => depth.classList.remove("active"));


    // 저장된 값으로 depth-bg 높이값 수정(사업영역 메뉴일 때만)
    hasDepths.forEach((hasDepth, index) => {
        hasDepth.addEventListener("click", function() {
            this.classList.toggle("active");
            if(hasDepth.classList.contains("active") && index >= 2) {
                depthBgHeight = depthBgHeight + addHeight[index];
            } else if(!hasDepth.classList.contains("active") && index >= 2) {
                depthBgHeight = depthBgHeight - addHeight[index];
            }
            $('.depth').css('height', depthBgHeight);
            $('.depth-bg').css('height', depthBgHeight);
        });
    });


    //햄버거버튼 toggle
    const mBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const mWrap = document.querySelector(".m-wrap");
    mBtn.addEventListener("click", function() {
        mWrap.classList.add("active");
        if(mWrap.classList.contains("active")) {
            document.body.style.overflow = 'hidden'; //뒷배경 비활성화
        }
    });
    closeBtn.addEventListener("click", function() {
        mWrap.classList.remove("active");
        document.body.style.overflow = 'auto'; //뒷배경 활성화
    });

    //햄버거버튼 depth toggle
    const mMenu = document.querySelectorAll(".tit-menu");
    const mDepth = document.querySelectorAll(".m-depth");
    mMenu.forEach((li, index) => {
        li.addEventListener("click", function() {
            this.classList.toggle("active");
            mDepth[index].classList.toggle("active");
        });
    });

    //햄버거버튼 d-depth toggle
    const mHasDepths = document.querySelectorAll(".has-m-depth");
    const mdDepth = document.querySelectorAll(".m-d-depth");
    mHasDepths.forEach((mHasDepth, index) => {
        mHasDepth.addEventListener("click", function() {
            this.classList.toggle("active");
            mdDepth[index].classList.toggle("active");
        });
    });
}
    
