let spriteSheetStop, spriteSheetWalk, spriteSheetJump, spriteSheetAttack;
let framesStop = [];
let framesWalk = [];
let framesJump = [];
let framesAttack = [];

let spriteSheetStop2, spriteSheetWalk2, spriteSheetJump2, spriteSheetAttack2, spriteSheetFly2, spriteSheetDown2;
let framesStop2 = [];
let framesWalk2 = [];
let framesJump2 = [];
let framesAttack2 = [];
let framesFly2 = [];
let framesDown2 = [];

let spriteSheetStop3;
let framesStop3 = [];
let spriteSheetDown3;
let framesDown3 = [];
const NUM_FRAMES_STOP3 = 3;
const FRAME_DURATION_STOP3 = 200;
const NUM_FRAMES_DOWN3 = 4;
const FRAME_DURATION_DOWN3 = 100;
let character3X = 0;
let currentFrameStop3 = 0;
let currentFrameDown3 = 0;
let lastUpdateStop3 = 0;
let lastUpdateDown3 = 0;
let character3YOffset = 0;
const CHARACTER3_SCALE = 1.5;

let spriteSheetStop4;
let framesStop4 = [];
let spriteSheetDown4;
let framesDown4 = [];
const NUM_FRAMES_STOP4 = 1;
const FRAME_DURATION_STOP4 = 200;
const NUM_FRAMES_DOWN4 = 4;
const FRAME_DURATION_DOWN4 = 100;
let character4X = 0;
let currentFrameStop4 = 0;
let currentFrameDown4 = 0;
let lastUpdateStop4 = 0;
let lastUpdateDown4 = 0;
const CHARACTER4_SCALE = 1.5;

let spriteSheetHintCat;
let framesHintCat = [];
const NUM_FRAMES_HINT_CAT = 12;
const FRAME_DURATION_HINT_CAT = 100;
let showHintCat = false;
let currentFrameHintCat = 0;
let lastUpdateHintCat = 0;
const HINT_CAT_SCALE = 2.5;

const NUM_FRAMES_STOP = 3;
const FRAME_DURATION_STOP = 200;
const NUM_FRAMES_WALK = 6;
const FRAME_DURATION_WALK = 100;
const NUM_FRAMES_JUMP = 3;
const FRAME_DURATION_JUMP = 300;
const NUM_FRAMES_ATTACK = 7;
const FRAME_DURATION_ATTACK = 80;

const NUM_FRAMES_STOP2 = 10;
const FRAME_DURATION_STOP2 = 100;
const NUM_FRAMES_WALK2 = 6;
const FRAME_DURATION_WALK2 = 100;
const NUM_FRAMES_JUMP2 = 5;
const FRAME_DURATION_JUMP2 = 200;
const NUM_FRAMES_ATTACK2 = 10;
const FRAME_DURATION_ATTACK2 = 100;
const NUM_FRAMES_FLY2 = 3;
const FRAME_DURATION_FLY2 = 150;
const NUM_FRAMES_DOWN2 = 4;
const FRAME_DURATION_DOWN2 = 100;

const PROXIMITY_DISTANCE = 150;
const CHARACTER_SCALE = 1.8;
const CHARACTER2_SCALE = 1.5;
const MOVE_SPEED = 3;
const JUMP_HEIGHT = 80;
const JUMP_HEIGHT2 = 80;
const HURT_DELAY = 400;

let characterX = 0;
let characterY = 0;
let characterDirection = 1;
let isWalking = false;
let isJumping = false;
let isAttacking = false;
let upKeyPressed = false;
let currentFrameStop = 0;
let currentFrameWalk = 0;
let currentFrameJump = 0;
let currentFrameAttack = 0;
let lastUpdateStop = 0;
let lastUpdateWalk = 0;
let lastUpdateJump = 0;
let lastUpdateAttack = 0;

let character2X = 200;
let character2Y = 0;
let character2Direction = -1;
let isWalking2 = false;
let isJumping2 = false;
let isAttacking2 = false;
let isFlying2 = false;
let isHurt2 = false;
let isPendingHurt = false;
let hurtTriggerTime = 0;
let currentFrameStop2 = 0;
let currentFrameWalk2 = 0;
let currentFrameJump2 = 0;
let currentFrameAttack2 = 0;
let currentFrameFly2 = 0;
let currentFrameDown2 = 0;
let lastUpdateStop2 = 0;
let lastUpdateWalk2 = 0;
let lastUpdateJump2 = 0;
let lastUpdateAttack2 = 0;
let lastUpdateFly2 = 0;
let lastUpdateDown2 = 0;

let correctCount = 0;
let isDefeated = false;

let nameInput;
let char2Dialog = "";
let currentQuestionText = "";
let currentAnswer = "";
let currentCorrectFeedback = "";
let currentIncorrectFeedback = "";
let currentHint = "";
let hasGreeted = false;
let retryButton;
let nextButton;
let questionTable;
let questionTable3;
let questionTable4;

let bgImg;
let bgImgHome;
let bgImgWater;
let isHome = false;
let isWater = false;
let portalX = 0;
let gameState = 'START';
let startButton;
let fireworks = [];

function preload() {
  questionTable = loadTable('questions.csv', 'csv', 'header');
  questionTable3 = loadTable('questions3.csv', 'csv', 'header');
  questionTable4 = loadTable('questions4.csv', 'csv', 'header');
  bgImg = loadImage('background/moon/0.png');
  bgImgHome = loadImage('background/home/0.png');
  bgImgWater = loadImage('background/water/0.png');
  spriteSheetStop = loadImage('角色1/stop/stop all.png');
  spriteSheetWalk = loadImage('角色1/walk/walk all.png');
  spriteSheetJump = loadImage('角色1/jump/jump all.png');
  spriteSheetAttack = loadImage('角色1/attack/attack all.png');
  spriteSheetStop2 = loadImage('角色2/stop/stop all.png');
  spriteSheetWalk2 = loadImage('角色2/walk/walk all.png');
  spriteSheetJump2 = loadImage('角色2/jump/jump all.png');
  spriteSheetAttack2 = loadImage('角色2/attack/attack all.png');
  spriteSheetFly2 = loadImage('角色2/fly/fly all.png');
  spriteSheetDown2 = loadImage('角色2/down/down all.png');
  spriteSheetStop3 = loadImage('角色3/stop/stop all.png');
  spriteSheetDown3 = loadImage('角色3/down/down all.png');
  spriteSheetStop4 = loadImage('角色4/stop/stop all.png');
  spriteSheetDown4 = loadImage('角色4/down/down all.png');
  spriteSheetHintCat = loadImage('提示貓/stop/stop all.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  
  lastUpdateStop = millis();
  lastUpdateWalk = millis();
  lastUpdateStop2 = millis();
  lastUpdateDown2 = millis();
  lastUpdateStop3 = millis();
  lastUpdateDown3 = millis();
  lastUpdateStop4 = millis();
  lastUpdateDown4 = millis();
  lastUpdateHintCat = millis();

  if (spriteSheetStop) {
    const frameW = spriteSheetStop.width / NUM_FRAMES_STOP;
    const frameH = spriteSheetStop.height;
    for (let i = 0; i < NUM_FRAMES_STOP; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesStop[i] = spriteSheetStop.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetWalk) {
    const frameW = spriteSheetWalk.width / NUM_FRAMES_WALK;
    const frameH = spriteSheetWalk.height;
    for (let i = 0; i < NUM_FRAMES_WALK; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesWalk[i] = spriteSheetWalk.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetJump) {
    const frameW = spriteSheetJump.width / NUM_FRAMES_JUMP;
    const frameH = spriteSheetJump.height;
    for (let i = 0; i < NUM_FRAMES_JUMP; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesJump[i] = spriteSheetJump.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetAttack) {
    const frameW = spriteSheetAttack.width / NUM_FRAMES_ATTACK;
    const frameH = spriteSheetAttack.height;
    for (let i = 0; i < NUM_FRAMES_ATTACK; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesAttack[i] = spriteSheetAttack.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetStop2) {
    const frameW = spriteSheetStop2.width / NUM_FRAMES_STOP2;
    const frameH = spriteSheetStop2.height;
    for (let i = 0; i < NUM_FRAMES_STOP2; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesStop2[i] = spriteSheetStop2.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetWalk2) {
    const frameW = spriteSheetWalk2.width / NUM_FRAMES_WALK2;
    const frameH = spriteSheetWalk2.height;
    for (let i = 0; i < NUM_FRAMES_WALK2; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesWalk2[i] = spriteSheetWalk2.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetJump2) {
    const frameW = spriteSheetJump2.width / NUM_FRAMES_JUMP2;
    const frameH = spriteSheetJump2.height;
    for (let i = 0; i < NUM_FRAMES_JUMP2; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesJump2[i] = spriteSheetJump2.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetAttack2) {
    const frameW = spriteSheetAttack2.width / NUM_FRAMES_ATTACK2;
    const frameH = spriteSheetAttack2.height;
    for (let i = 0; i < NUM_FRAMES_ATTACK2; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesAttack2[i] = spriteSheetAttack2.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetFly2) {
    const frameW = spriteSheetFly2.width / NUM_FRAMES_FLY2;
    const frameH = spriteSheetFly2.height;
    for (let i = 0; i < NUM_FRAMES_FLY2; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesFly2[i] = spriteSheetFly2.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetDown2) {
    const frameW = spriteSheetDown2.width / NUM_FRAMES_DOWN2;
    const frameH = spriteSheetDown2.height;
    for (let i = 0; i < NUM_FRAMES_DOWN2; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesDown2[i] = spriteSheetDown2.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetStop3) {
    const frameW = spriteSheetStop3.width / NUM_FRAMES_STOP3;
    const frameH = spriteSheetStop3.height;
    for (let i = 0; i < NUM_FRAMES_STOP3; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesStop3[i] = spriteSheetStop3.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetDown3) {
    const frameW = spriteSheetDown3.width / NUM_FRAMES_DOWN3;
    const frameH = spriteSheetDown3.height;
    for (let i = 0; i < NUM_FRAMES_DOWN3; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesDown3[i] = spriteSheetDown3.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetStop4) {
    const frameW = spriteSheetStop4.width / NUM_FRAMES_STOP4;
    const frameH = spriteSheetStop4.height;
    for (let i = 0; i < NUM_FRAMES_STOP4; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesStop4[i] = spriteSheetStop4.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetDown4) {
    const frameW = spriteSheetDown4.width / NUM_FRAMES_DOWN4;
    const frameH = spriteSheetDown4.height;
    for (let i = 0; i < NUM_FRAMES_DOWN4; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesDown4[i] = spriteSheetDown4.get(sx, 0, sw, frameH);
    }
  }

  if (spriteSheetHintCat) {
    const frameW = spriteSheetHintCat.width / NUM_FRAMES_HINT_CAT;
    const frameH = spriteSheetHintCat.height;
    for (let i = 0; i < NUM_FRAMES_HINT_CAT; i++) {
      const sx = Math.round(i * frameW);
      const sw = Math.round(frameW);
      framesHintCat[i] = spriteSheetHintCat.get(sx, 0, sw, frameH);
    }
  }

  nameInput = createInput('');
  nameInput.position(-1000, -1000);
  nameInput.size(150);
  nameInput.style('font-size', '16px');
  nameInput.style('border', 'none');
  nameInput.style('background', 'transparent');
  nameInput.style('outline', 'none');
  nameInput.style('border-radius', '5px');
  nameInput.style('padding', '5px');
  nameInput.hide();
  nameInput.changed(submitName);
  
  retryButton = createButton('再作答一次');
  retryButton.hide();
  retryButton.mousePressed(retryQuestion);

  nextButton = createButton('下一題');
  nextButton.hide();
  nextButton.mousePressed(nextQuestion);

  getNewQuestion();

  startButton = createButton('Start');
  startButton.position(width / 2 - 50, height / 2 + 60);
  startButton.size(100, 40);
  startButton.style('font-size', '20px');
  startButton.style('cursor', 'pointer');
  startButton.style('background-color', '#ffffff');
  startButton.style('color', '#000000');
  startButton.style('border', '2px solid #000000');
  startButton.style('border-radius', '5px');
  startButton.mouseOver(() => {
    startButton.style('background-color', '#555555');
    startButton.style('color', '#ffffff');
  });
  startButton.mouseOut(() => {
    startButton.style('background-color', '#ffffff');
    startButton.style('color', '#000000');
  });
  startButton.mousePressed(startGame);
}

function keyPressed() {
  if (key === 'f' || key === 'F') {
    showHintCat = !showHintCat;
    return false; // 防止 f 鍵輸入到文字框
  }

  if (keyCode === 32 && !isAttacking) {
    isAttacking = true;
    lastUpdateAttack = millis();
    currentFrameAttack = 0;
    return false;
  }
  if (keyCode === 39) {
    isWalking = true;
    characterDirection = 1;
    lastUpdateWalk = millis();
    currentFrameWalk = 0;
    return false;
  }
  if (keyCode === 37) {
    isWalking = true;
    characterDirection = -1;
    lastUpdateWalk = millis();
    currentFrameWalk = 0;
    return false;
  }
  if (keyCode === 38 && !upKeyPressed) {
    upKeyPressed = true;
    isJumping = true;
    lastUpdateJump = millis();
    currentFrameJump = 0;
    return false;
  }

  if (keyCode === 68) {
    isWalking2 = true;
    character2Direction = 1;
    lastUpdateWalk2 = millis();
    currentFrameWalk2 = 0;
    return false;
  }
  if (keyCode === 65) {
    isWalking2 = true;
    character2Direction = -1;
    lastUpdateWalk2 = millis();
    currentFrameWalk2 = 0;
    return false;
  }
  if (keyCode === 87 && !isJumping2) {
    isJumping2 = true;
    isWalking2 = false;
    lastUpdateJump2 = millis();
    currentFrameJump2 = 0;
    character2Y = 0;
    return false;
  }
  if (keyCode === 81 && !isAttacking2) {
    isAttacking2 = true;
    isWalking2 = false;
    lastUpdateAttack2 = millis();
    currentFrameAttack2 = 0;
    return false;
  }
}

function keyReleased() {
  if (keyCode === 39 || keyCode === 37) {
    isWalking = false;
    currentFrameStop = 0;
    lastUpdateStop = millis();
    return false;
  }
  if (keyCode === 38) {
    upKeyPressed = false;
    return false;
  }
  if (keyCode === 68 || keyCode === 65) {
    isWalking2 = false;
    currentFrameStop2 = 0;
    lastUpdateStop2 = millis();
    return false;
  }
}

function draw() {
  background(0);

  let currentBg;
  if (isWater) {
    currentBg = bgImgWater;
  } else if (isHome) {
    currentBg = bgImgHome;
  } else {
    currentBg = bgImg;
  }
  if (currentBg) {
    // 讓背景高度適應視窗高度，並保持比例計算寬度
    // 放大 1.3 倍
    let bgScale = 1.3;
    let bgH = height * bgScale;
    let bgW = currentBg.width * (bgH / currentBg.height);
    
    let startIndex = floor((characterX - width/2) / bgW) - 1;
    let endIndex = ceil((characterX + width/2) / bgW) + 1;
    
    for (let i = startIndex; i <= endIndex; i++) {
      let x = width/2 + i * bgW - characterX;
      let y = 0;
      image(currentBg, x, y, bgW, bgH);
    }
  }

  if (gameState === 'START') {
    push();
    fill(255, 255, 255, 220);
    rectMode(CENTER);
    rect(width / 2, height / 2, 600, 300, 20);
    
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(24);
    textLeading(40);
    text("使用方向鍵尋找三位男士答對兩題問題\n就可以逃離成功。\nf鍵為提示小貓。\n準備好就按下Start開始吧", width / 2, height / 2 - 30);
    pop();
    
    startButton.show();
    return;
  } else {
    startButton.hide();
  }
  
  if (gameState === 'SUCCESS') {
    // 播放煙火動畫
    if (random(1) < 0.05) {
      fireworks.push(new Firework());
    }
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
    
    push();
    fill(255, 255, 255, 220);
    rectMode(CENTER);
    rect(width / 2, height / 2, 400, 200, 20);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(32);
    text("恭喜逃脫", width / 2, height / 2);
    pop();
    return;
  }

  const now = millis();
  
  updateCharacter1Animation(now);
  if (!isHome) {
    updateCharacter2Animation(now);
  } else if (!isWater) {
    updateCharacter3Animation(now);
  } else {
    updateCharacter4Animation(now);
  }
  
  let distance;
  if (isWater) {
    distance = abs(characterX - character4X);
  } else if (isHome) {
    distance = abs(characterX - character3X);
  } else {
    distance = abs(characterX - character2X);
  }
  
  if (!isHome && isAttacking && distance < PROXIMITY_DISTANCE && !isHurt2 && !isPendingHurt) {
    isPendingHurt = true;
    hurtTriggerTime = millis();
  }

  if (isPendingHurt) {
    if (distance >= PROXIMITY_DISTANCE) {
      isPendingHurt = false;
    } else if (millis() - hurtTriggerTime > HURT_DELAY) {
      isHurt2 = true;
      isPendingHurt = false;
      currentFrameDown2 = 0;
      lastUpdateDown2 = millis();
    }
  }

  if (isHurt2 && distance >= PROXIMITY_DISTANCE) {
    isHurt2 = false;
  }

  // 只有在第一關（非 Home）時才執行角色 2 的邏輯
  if (!isHome) {
    if (!isDefeated && !isHurt2 && !isPendingHurt && distance < PROXIMITY_DISTANCE && !isAttacking2 && !isJumping2 && !isWalking2) {
      isFlying2 = true;
    } else {
      isFlying2 = false;
    }
    
    if (!isDefeated && !isWalking2 && !isJumping2 && !isAttacking2) {
      if (characterX < character2X) {
        character2Direction = -1;
      } else {
        character2Direction = 1;
      }
    }
  }

  // 通用的介面重置邏輯：當遠離 NPC 時隱藏對話框
  if (distance >= PROXIMITY_DISTANCE) {
    if (hasGreeted || nameInput.style('display') !== 'none') {
      hasGreeted = false;
      char2Dialog = currentQuestionText;
      nameInput.hide();
      retryButton.hide();
      nextButton.hide();
      nameInput.value('');
    }
  }
  
  // 繪製傳送門與檢測進入
  if (correctCount >= 2) {
    push();
    translate(width / 2 + (portalX - characterX), height / 2 + 150);
    
    // 時空黑洞特效
    let t = millis() * 0.003; // 控制旋轉速度
    
    // 外部粉色光暈 (呼吸效果)
    noStroke();
    fill(255, 105, 180, 80 + sin(t * 5) * 40);
    ellipse(0, 0, 120, 200);

    // 旋轉的漩渦線條 (模擬黑洞吸入感)
    noFill();
    strokeWeight(3);
    for(let i = 0; i < 8; i++) {
      stroke(255, 180 - i * 10, 220, 200); // 粉紫色系漸層
      push();
      rotate(t * (i + 2)); // 每一層旋轉速度不同，製造層次感
      ellipse(0, 0, 90 - i * 10, 160 - i * 18);
      pop();
    }
    
    // 中心深色區域 (黑洞中心)
    fill(20, 0, 20);
    noStroke();
    ellipse(0, 0, 25, 45);
    
    pop();

    if (abs(characterX - portalX) < 50) {
      if (!isHome) {
        character3X = portalX + 400; // 進入新場景時，將角色3設定在前方
      }
      if (!isHome) {
        correctCount = 0; // 重置答對題數
        isDefeated = false; // 重置擊敗狀態，讓新關卡可以繼續進行
        hasGreeted = false; // 重置對話狀態，確保題目與輸入框能再次出現
        isHome = true; // 先切換場景狀態
        bgImg = null; // 刪除背景一
        getNewQuestion(); // 再取得新題目，這樣才會正確抓到 questions3.csv
      } else if (!isWater) {
        character4X = portalX + 400; // 設定角色4在傳送門前方
        isWater = true;
        bgImgHome = null; // 刪除背景二
        correctCount = 0;
        isDefeated = false;
        hasGreeted = false;
        getNewQuestion(); // 進入第三關時，立即取得新題目
      } else {
        gameState = 'SUCCESS';
      }
    }
  }

  if (!isHome) {
    drawCharacter2();
  } else if (!isWater) {
    drawCharacter3();
  } else {
    drawCharacter4();
  }
  drawCharacter1();

  if (showHintCat) {
    drawHintCat();
  }
}

function updateCharacter1Animation(now) {
  if (isAttacking && framesAttack.length > 0) {
    const elapsed = now - lastUpdateAttack;
    if (elapsed >= FRAME_DURATION_ATTACK) {
      const steps = floor(elapsed / FRAME_DURATION_ATTACK);
      currentFrameAttack = (currentFrameAttack + steps) % framesAttack.length;
      lastUpdateAttack += steps * FRAME_DURATION_ATTACK;
    }
    if (currentFrameAttack >= NUM_FRAMES_ATTACK - 1) {
      isAttacking = false;
      currentFrameAttack = 0;
    }
  } else if (isJumping && framesJump.length > 0) {
    const elapsed = now - lastUpdateJump;
    if (elapsed >= FRAME_DURATION_JUMP) {
      const steps = floor(elapsed / FRAME_DURATION_JUMP);
      currentFrameJump = (currentFrameJump + steps) % framesJump.length;
      lastUpdateJump += steps * FRAME_DURATION_JUMP;
    }
    const progress = currentFrameJump / NUM_FRAMES_JUMP;
    characterY = -JUMP_HEIGHT * sin(progress * PI);
    if (currentFrameJump >= NUM_FRAMES_JUMP - 1) {
      isJumping = false;
      currentFrameJump = 0;
      characterY = 0;
    }
  } else if (isWalking && framesWalk.length > 0) {
    const elapsed = now - lastUpdateWalk;
    if (elapsed >= FRAME_DURATION_WALK) {
      const steps = floor(elapsed / FRAME_DURATION_WALK);
      currentFrameWalk = (currentFrameWalk + steps) % framesWalk.length;
      lastUpdateWalk += steps * FRAME_DURATION_WALK;
    }
    characterX += MOVE_SPEED * CHARACTER_SCALE * characterDirection;
    characterY = 0;
  } else if (framesStop.length > 0) {
    const elapsed = now - lastUpdateStop;
    if (elapsed >= FRAME_DURATION_STOP) {
      const steps = floor(elapsed / FRAME_DURATION_STOP);
      currentFrameStop = (currentFrameStop + steps) % framesStop.length;
      lastUpdateStop += steps * FRAME_DURATION_STOP;
    }
    characterY = 0;
  }
}

function updateCharacter2Animation(now) {
  if (isDefeated && framesDown2.length > 0) {
    const elapsed = now - lastUpdateDown2;
    if (elapsed >= FRAME_DURATION_DOWN2) {
      const steps = floor(elapsed / FRAME_DURATION_DOWN2);
      lastUpdateDown2 += steps * FRAME_DURATION_DOWN2;
      if (currentFrameDown2 < framesDown2.length - 1) {
        currentFrameDown2 = min(currentFrameDown2 + steps, framesDown2.length - 1);
      }
    }
    // 倒下後不再執行其他動畫
    return;
  } else if (isHurt2 && framesDown2.length > 0) {
    const elapsed = now - lastUpdateDown2;
    if (elapsed >= FRAME_DURATION_DOWN2) {
      const steps = floor(elapsed / FRAME_DURATION_DOWN2);
      lastUpdateDown2 += steps * FRAME_DURATION_DOWN2;
      if (currentFrameDown2 < framesDown2.length - 1) {
        currentFrameDown2 = min(currentFrameDown2 + steps, framesDown2.length - 1);
      }
    }
  } else if (isFlying2 && framesFly2.length > 0) {
    const elapsed = now - lastUpdateFly2;
    if (elapsed >= FRAME_DURATION_FLY2) {
      const steps = floor(elapsed / FRAME_DURATION_FLY2);
      currentFrameFly2 = (currentFrameFly2 + steps) % framesFly2.length;
      lastUpdateFly2 += steps * FRAME_DURATION_FLY2;
    }
  } else if (isAttacking2 && framesAttack2.length > 0) {
    const elapsed = now - lastUpdateAttack2;
    if (elapsed >= FRAME_DURATION_ATTACK2) {
      const steps = floor(elapsed / FRAME_DURATION_ATTACK2);
      currentFrameAttack2 = currentFrameAttack2 + steps;
      lastUpdateAttack2 += steps * FRAME_DURATION_ATTACK2;
    }
    if (currentFrameAttack2 >= NUM_FRAMES_ATTACK2 - 1) {
      isAttacking2 = false;
      currentFrameAttack2 = 0;
      lastUpdateStop2 = now;
    }
  } else if (isWalking2 && framesWalk2.length > 0) {
    const elapsed = now - lastUpdateWalk2;
    if (elapsed >= FRAME_DURATION_WALK2) {
      const steps = floor(elapsed / FRAME_DURATION_WALK2);
      currentFrameWalk2 = (currentFrameWalk2 + steps) % framesWalk2.length;
      lastUpdateWalk2 += steps * FRAME_DURATION_WALK2;
    }
    character2X += MOVE_SPEED * CHARACTER2_SCALE * character2Direction;
  } else if (isJumping2 && framesJump2.length > 0) {
    const elapsed = now - lastUpdateJump2;
    if (elapsed >= FRAME_DURATION_JUMP2) {
      const steps = floor(elapsed / FRAME_DURATION_JUMP2);
      currentFrameJump2 = currentFrameJump2 + steps;
      lastUpdateJump2 += steps * FRAME_DURATION_JUMP2;
    }
    const progress = currentFrameJump2 / NUM_FRAMES_JUMP2;
    character2Y = -JUMP_HEIGHT2 * sin(min(progress, 1) * PI);
    if (currentFrameJump2 >= NUM_FRAMES_JUMP2 - 1) {
      isJumping2 = false;
      currentFrameJump2 = 0;
      character2Y = 0;
      lastUpdateStop2 = now;
    }
  } else if (framesStop2.length > 0) {
    const elapsed = now - lastUpdateStop2;
    if (elapsed >= FRAME_DURATION_STOP2) {
      const steps = floor(elapsed / FRAME_DURATION_STOP2);
      currentFrameStop2 = (currentFrameStop2 + steps) % framesStop2.length;
      lastUpdateStop2 += steps * FRAME_DURATION_STOP2;
    }
  }
}

function updateCharacter3Animation(now) {
  if (isDefeated && framesDown3.length > 0) {
    character3YOffset += 5;
    const elapsed = now - lastUpdateDown3;
    if (elapsed >= FRAME_DURATION_DOWN3) {
      const steps = floor(elapsed / FRAME_DURATION_DOWN3);
      lastUpdateDown3 += steps * FRAME_DURATION_DOWN3;
      if (currentFrameDown3 < framesDown3.length - 1) {
        currentFrameDown3 = min(currentFrameDown3 + steps, framesDown3.length - 1);
      }
    }
    return;
  }
  if (framesStop3.length > 0) {
    const elapsed = now - lastUpdateStop3;
    if (elapsed >= FRAME_DURATION_STOP3) {
      const steps = floor(elapsed / FRAME_DURATION_STOP3);
      currentFrameStop3 = (currentFrameStop3 + steps) % framesStop3.length;
      lastUpdateStop3 += steps * FRAME_DURATION_STOP3;
    }
  }
}

function updateCharacter4Animation(now) {
  if (isDefeated && framesDown4.length > 0) {
    const elapsed = now - lastUpdateDown4;
    if (elapsed >= FRAME_DURATION_DOWN4) {
      const steps = floor(elapsed / FRAME_DURATION_DOWN4);
      lastUpdateDown4 += steps * FRAME_DURATION_DOWN4;
      if (currentFrameDown4 < framesDown4.length - 1) {
        currentFrameDown4 = min(currentFrameDown4 + steps, framesDown4.length - 1);
      }
    }
    return;
  }
  if (framesStop4.length > 0) {
    const elapsed = now - lastUpdateStop4;
    if (elapsed >= FRAME_DURATION_STOP4) {
      const steps = floor(elapsed / FRAME_DURATION_STOP4);
      currentFrameStop4 = (currentFrameStop4 + steps) % framesStop4.length;
      lastUpdateStop4 += steps * FRAME_DURATION_STOP4;
    }
  }
}

function drawCharacter1() {
  let frames, currentFrame;
  
  if (isAttacking && framesAttack.length > 0) {
    frames = framesAttack;
    currentFrame = currentFrameAttack;
  } else if (isJumping && framesJump.length > 0) {
    frames = framesJump;
    currentFrame = currentFrameJump;
  } else if (isWalking && framesWalk.length > 0) {
    frames = framesWalk;
    currentFrame = currentFrameWalk;
  } else if (framesStop.length > 0) {
    frames = framesStop;
    currentFrame = currentFrameStop;
  }
  
  if (frames && frames.length > 0) {
    const img = frames[currentFrame % frames.length];
    if (img) {
      const dw = img.width * CHARACTER_SCALE;
      const dh = img.height * CHARACTER_SCALE;
      
      push();
      translate(width / 2, height / 2 + 175 + characterY);
      scale(characterDirection, 1);
      image(img, -dw / 2, -dh / 2, dw, dh);
      pop();
    }
  }
}

function drawCharacter2() {
  let img2;
  
  if (isDefeated && framesDown2.length > 0) {
    img2 = framesDown2[currentFrameDown2];
  } else if (isHurt2 && framesDown2.length > 0) {
    img2 = framesDown2[currentFrameDown2];
  } else if (isFlying2 && framesFly2.length > 0) {
    img2 = framesFly2[currentFrameFly2];
  } else if (isAttacking2 && framesAttack2.length > 0) {
    img2 = framesAttack2[floor(constrain(currentFrameAttack2, 0, framesAttack2.length - 1))];
  } else if (isWalking2 && framesWalk2.length > 0) {
    img2 = framesWalk2[currentFrameWalk2];
  } else if (isJumping2 && framesJump2.length > 0) {
    img2 = framesJump2[floor(constrain(currentFrameJump2, 0, framesJump2.length - 1))];
  } else if (framesStop2.length > 0) {
    img2 = framesStop2[currentFrameStop2 % framesStop2.length];
  }
  
  if (img2) {
    const dw2 = img2.width * CHARACTER2_SCALE;
    const dh2 = img2.height * CHARACTER2_SCALE;
    
    let screenX = width / 2 + (character2X - characterX);
    let displayY = height / 2 + 200 + character2Y;
    if (isFlying2) {
      displayY -= 70;
    }
    
    push();
    translate(screenX, displayY);
    scale(character2Direction, 1);
    image(img2, -dw2 / 2, -dh2 / 2, dw2, dh2);
    pop();
    
    if (isFlying2) {
      drawDialog(screenX, displayY);
    }
  }
}

function drawCharacter3() {
  let img;
  
  if (isDefeated && framesDown3.length > 0) {
    img = framesDown3[currentFrameDown3];
  } else if (framesStop3.length > 0) {
    img = framesStop3[currentFrameStop3];
  }

  if (img) {
    if (img) {
      const dw = img.width * CHARACTER3_SCALE;
      const dh = img.height * CHARACTER3_SCALE;
      
      let screenX = width / 2 + (character3X - characterX);
      let displayY = height / 2 + 100 + character3YOffset;
      
      let char3Direction = 1;
      if (characterX < character3X) {
        char3Direction = -1;
      } else {
        char3Direction = 1;
      }
      
      push();
      translate(screenX, displayY);
      scale(char3Direction, 1);
      image(img, -dw / 2, -dh / 2, dw, dh);
      pop();

      // 當角色1靠近角色3時顯示對話框
      if (!isDefeated && abs(characterX - character3X) < PROXIMITY_DISTANCE) {
        drawDialog(screenX, displayY);
      }
    }
  }
}

function drawCharacter4() {
  let img;
  
  if (isDefeated && framesDown4.length > 0) {
    img = framesDown4[currentFrameDown4];
  } else if (framesStop4.length > 0) {
    img = framesStop4[currentFrameStop4];
  }

  if (img) {
    if (img) {
      const dw = img.width * CHARACTER4_SCALE;
      const dh = img.height * CHARACTER4_SCALE;
      
      let screenX = width / 2 + (character4X - characterX);
      let displayY = height / 2 + 100;
      
      let char4Direction = 1;
      if (characterX < character4X) {
        char4Direction = -1;
      } else {
        char4Direction = 1;
      }
      
      push();
      translate(screenX, displayY);
      scale(char4Direction, 1);
      image(img, -dw / 2, -dh / 2, dw, dh);
      pop();

      if (!isDefeated && abs(characterX - character4X) < PROXIMITY_DISTANCE) {
        drawDialog(screenX, displayY);
      }
    }
  }
}

function drawHintCat() {
  // 更新動畫
  const now = millis();
  if (framesHintCat.length > 0) {
    const elapsed = now - lastUpdateHintCat;
    if (elapsed >= FRAME_DURATION_HINT_CAT) {
      const steps = floor(elapsed / FRAME_DURATION_HINT_CAT);
      currentFrameHintCat = (currentFrameHintCat + steps) % framesHintCat.length;
      lastUpdateHintCat += steps * FRAME_DURATION_HINT_CAT;
    }
  }

  // 繪製
  if (framesHintCat.length > 0) {
    const img = framesHintCat[currentFrameHintCat];
    if (img) {
      const dw = img.width * HINT_CAT_SCALE;
      const dh = img.height * HINT_CAT_SCALE;
      
      // 設定位置在畫面左下方，角色附近，並往左移避免遮擋角色1
      let displayX = width / 2 - 300;
      let displayY = height / 2 + 200;
      
      // 讓提示貓面對角色1 (角色1在 width/2)
      let direction = (width / 2 > displayX) ? -1 : 1;

      push();
      translate(displayX, displayY);
      scale(direction, 1); // 翻轉圖片
      image(img, -dw / 2, -dh / 2, dw, dh);
      scale(direction, 1); // 再次翻轉回來，以免文字被倒置 (1*1=1, -1*-1=1)
      
      // 顯示提示文字框
      if (currentHint) {
        fill(255);
        stroke(0);
        rect(20, -90, 160, 50, 10); // 調整位置避免遮擋
        fill(0);
        noStroke();
        textSize(14);
        textAlign(LEFT, CENTER);
        text("提示: " + currentHint, 30, -65);
      }
      pop();
    }
  }
}

function drawDialog(screenX, displayY) {
  const dialogX = screenX;
  const dialogY = displayY - 150;
  const dialogFontSize = 16;
  const padding = 10;
  
  push();
  textSize(dialogFontSize);
  const textW = textWidth(char2Dialog);
  pop();
  
  let boxW = textW + padding * 2;
  let boxH = dialogFontSize + padding * 2;
  
  if (hasGreeted) {
    boxH += 40;
  }
  
  push();
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(dialogX - boxW / 2, dialogY - boxH / 2, boxW, boxH);
  
  fill(0);
  noStroke();
  textSize(dialogFontSize);
  textAlign(CENTER, CENTER);
  const textY = hasGreeted ? dialogY - 20 : dialogY;
  text(char2Dialog, dialogX, textY);
  pop();
  
  if (!hasGreeted) {
    nameInput.show();
    const char1X = width / 2;
    const char1Y = height / 2 + 175 + characterY;
    
    const boxW = 180;
    const boxH = 40;
    const boxX = char1X - boxW / 2;
    const boxY = char1Y - 160;
    
    push();
    stroke('#ced4da');
    strokeWeight(2);
    fill(255);
    rect(boxX, boxY, boxW, boxH, 5);
    fill(0);
    noStroke();
    textSize(16);
    textAlign(LEFT, CENTER);
    text("請作答:", boxX + 10, boxY + boxH / 2);
    pop();
    
    nameInput.size(100);
    nameInput.position(boxX + 70, boxY + 7);
    if (nameInput.elt !== document.activeElement) {
      nameInput.elt.focus();
    }
  } else {
    const buttonY = dialogY + 5;
    retryButton.position(dialogX - retryButton.width / 2, buttonY);
    nextButton.position(dialogX - nextButton.width / 2, buttonY);
  }
}

function submitName() {
  const val = nameInput.value();
  if (val.trim() !== "") {
    if (val.trim() === currentAnswer.trim()) {
      char2Dialog = currentCorrectFeedback;
      showHintCat = false;
      correctCount++;
      if (correctCount >= 2) {
        isDefeated = true;
        if (!isHome) {
          currentFrameDown2 = 0;
          lastUpdateDown2 = millis();
          portalX = characterX + 300 * characterDirection; // 設定傳送門出現在角色前方
        } else if (!isWater) {
          currentFrameDown3 = 0;
          lastUpdateDown3 = millis();
          portalX = characterX + 400;
        } else {
          currentFrameDown4 = 0;
          lastUpdateDown4 = millis();
          portalX = characterX + 400; // 第三關答對後出現傳送門
        }
        nextButton.hide();
        retryButton.hide();
      } else {
        nextButton.show();
      }
    } else {
      char2Dialog = currentIncorrectFeedback;
      retryButton.show();
    }
    hasGreeted = true;
    nameInput.hide();
    nameInput.value('');
  }
}

function retryQuestion() {
  char2Dialog = currentQuestionText;
  retryButton.hide();
  nameInput.show();
  hasGreeted = false;
}

function getNewQuestion() {
  showHintCat = false; // 換新題目時隱藏提示貓
  let table;
  if (isWater) {
    table = questionTable4;
  } else if (isHome) {
    table = questionTable3;
  } else {
    table = questionTable;
  }
  
  if (table && table.getRowCount() > 0) {
    let r = floor(random(table.getRowCount()));
    currentQuestionText = table.getString(r, 'question');
    currentAnswer = table.getString(r, 'answer');
    currentCorrectFeedback = table.getString(r, 'correct_feedback');
    currentIncorrectFeedback = table.getString(r, 'incorrect_feedback');
    currentHint = table.getString(r, 'hint');
    char2Dialog = currentQuestionText;
  }
}

function nextQuestion() {
  getNewQuestion();
  nextButton.hide();
  nameInput.show();
  hasGreeted = false;
}

function startGame() {
  gameState = 'PLAYING';
  startButton.hide();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (startButton) {
    startButton.position(width / 2 - 50, height / 2 + 60);
  }
}

// 煙火粒子類別
function Particle(x, y, hu, firework) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hu = hu;
  this.acc = createVector(0, 0);
  
  if (this.firework) {
    this.vel = createVector(0, random(-12, -8));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 10));
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    return this.lifespan < 0;
  }

  this.show = function() {
    push();
    colorMode(HSB);
    if (!this.firework) {
      strokeWeight(2);
      stroke(hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(hu, 255, 255);
    }
    point(this.pos.x, this.pos.y);
    pop();
  }
}

// 煙火本體類別
function Firework() {
  this.hu = random(255);
  this.firework = new Particle(random(width), height, this.hu, true);
  this.exploded = false;
  this.particles = [];

  this.done = function() {
    return this.exploded && this.particles.length === 0;
  }

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(createVector(0, 0.2));
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(createVector(0, 0.2));
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  this.explode = function() {
    for (let i = 0; i < 100; i++) {
      let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}
