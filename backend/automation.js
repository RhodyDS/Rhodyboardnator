const { remote } = require("webdriverio");

const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android",
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || "0.0.0.0",
  path: "/wd/hub",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "info",
  capabilities,
};
async function flipApp() {
  const driver = await remote(wdOpts);
  try {
    await driver.$("//*[@content-desc='Pasta: RB, 4 ou mais itens']").click();


    await driver.pause(1000);


    await driver.$("//*[@content-desc='FLIP']").click();


    await driver.pause(8000);
    try {
      let el11 = await driver.$(
        "//android.widget.ImageView[@content-desc='Dispensar a caixa de diálogo da atualização']"
      );
      await el11.click();
    } catch {
      console.log("sem pedido de atualização");
    }

    let el12 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup[2]/android.widget.ImageView"
    );
    await el12.click();
    await driver.pause(2000);
    let daily = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.TextView"
      )
      .getAttribute("text");

    let el13 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.TextView"
    );
    await el13.click();
    await driver.pause(2000);
    let weekly = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.TextView"
      )
      .getAttribute("text");
    let el14 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.FrameLayout"
    );
    await el14.click();
    await driver.pause(2000);
    let monthly = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.TextView"
      )
      .getAttribute("text");
    await driver.longPressKeyCode(4, undefined, undefined);
    await driver.longPressKeyCode(4, undefined, undefined);
    await driver.pause(2000);
    let el15 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]"
    );
    await el15.click();
    return {
      Diária: daily,
      Semanal: weekly,
      Mensal: monthly,
    };
  } finally {
    await driver.deleteSession();
  }
}

async function duolingoApp() {
  const driver = await remote(wdOpts);

  try {
    await driver.$("//*[@content-desc='Pasta: RB, 4 ou mais itens']").click();


    await driver.pause(1000);


    await driver.$("//*[@content-desc='Duolingo']").click();


    // try {
    //   let el1 = await driver.$("com.duolingo:id/secondaryButton");
    //   await el1.click();
    // } catch {
    //   console.log("no info");
    // }
    await driver.pause(5000);
    let el2 = await driver.$(
      '//android.view.ViewGroup[@content-desc="Profile Tab"]/android.widget.ImageView'
    );
    await el2.click();

    let duoXp = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[4]/android.widget.LinearLayout[2]/android.view.ViewGroup/android.widget.TextView[1]"
      )
      .getAttribute("text");

    let duoPodio = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[4]/android.widget.LinearLayout[4]/android.view.ViewGroup/android.widget.TextView[1]"
      )
      .getAttribute("text");
    let duoOfensiva = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[4]/android.widget.LinearLayout[1]/android.view.ViewGroup/android.widget.TextView[1]"
      )
      .getAttribute("text");
    await driver.longPressKeyCode(4, undefined, undefined);
    await driver.longPressKeyCode(4, undefined, undefined);
    return {
      Ofensiva: duoOfensiva,
      XP: duoXp,
      Pódio: duoPodio,
    };
  } finally {
    await driver.deleteSession();
  }
}
async function chessApp() {
  const driver = await remote(wdOpts);
  try {
    await driver.$("//*[@content-desc='Pasta: RB, 4 ou mais itens']").click();


    await driver.pause(1000);


    await driver.$("//*[@content-desc='Xadrez']").click();

    await driver.pause(3000);
    try{
      await driver.$("//android.widget.ImageView[@content-desc='Fechar']").click();
    }catch{
      console.log("no information");
    }
    let el7 = await driver.$(
      '//android.widget.FrameLayout[@content-desc="Mais"]/android.widget.FrameLayout/android.widget.ImageView'
    );
    await el7.click();
    let el8 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView"
    );
    await el8.click();
    let el9 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.GridView/android.widget.RadioGroup/android.widget.RadioButton[5]"
    );
    await el9.click();
    await driver.pause(2000);
    let partidas = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.GridView/android.view.ViewGroup[2]/android.widget.TextView[1]"
      )
      .getAttribute("text");

    let rapida = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.GridView/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView[1]"
      )
      .getAttribute("text");

    let blitz = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.GridView/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.TextView[1]"
      )
      .getAttribute("text");

    let bullet = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.GridView/android.widget.FrameLayout[3]/android.view.ViewGroup/android.widget.TextView[1]"
      )
      .getAttribute("text");
    await driver.longPressKeyCode(4, undefined, undefined);
    await driver.longPressKeyCode(4, undefined, undefined);
    await driver.longPressKeyCode(4, undefined, undefined);

    return {
      Partidas: partidas,
      Rápida: rapida,
      Blitz: blitz,
      Bullet: bullet,
    };
  } finally {
    await driver.deleteSession();
  }
}

async function lumosityApp() {
  const driver = await remote(wdOpts);
  try {
    await driver.$("//*[@content-desc='Pasta: RB, 4 ou mais itens']").click();


    await driver.pause(1000);

    await driver.$("//*[@content-desc='Lumosity']").click();

    await driver.pause(3000);

    let el14 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.ImageView"
    );
    await el14.click();

    await driver.pause(5000);
    let media = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView"
      )
      .getAttribute("text");
    let velocidade = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.TextView"
      )
      .getAttribute("text");
    let memoria = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[5]/android.widget.TextView"
      )
      .getAttribute("text");
    let atencao = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[6]/android.widget.TextView"
      )
      .getAttribute("text");
    let flexibilidade = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[7]/android.widget.TextView"
      )
      .getAttribute("text");
    let problemSolution = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[8]/android.widget.TextView"
      )
      .getAttribute("text");
    let matematica = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[10]/android.widget.TextView"
      )
      .getAttribute("text");

    await driver.longPressKeyCode(4, undefined, undefined);
    return {
      Média: media,
      Velocidade: velocidade,
      Memória: memoria,
      Atenção: atencao,
      Flexibilidade: flexibilidade,
      "Solução de problemas": problemSolution,
      Matemática: matematica,
    };
  } finally {
    await driver.deleteSession();
  }
}

async function elsaApp() {
  const driver = await remote(wdOpts);
  try {
    await driver.$("//*[@content-desc='Pasta: RB, 4 ou mais itens']").click();

    await driver.pause(1000);

    await driver.$("//*[@content-desc='elsa']").click();

    await driver.pause(3000);
    try {
      let el21 = await driver.$("us.nobarriers.elsa:id/coach_later");
      await el21.click();
    } catch {
      console.log("no info");
    }
    let el1 = await driver.$(
      '(//android.widget.ImageView[@content-desc="Dummy content description"])[18]'
    );
    await el1.click();
    let masteredWord = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/androidx.viewpager.widget.ViewPager/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.TextView"
      )
      .getAttribute("text");
    let difficultWords = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/androidx.viewpager.widget.ViewPager/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.TextView"
      )
      .getAttribute("text");
    let currentStreak = await driver
      .$(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/androidx.viewpager.widget.ViewPager/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.TextView"
      )
      .getAttribute("text");
    await driver.longPressKeyCode(4, undefined, undefined);
    await driver.longPressKeyCode(4, undefined, undefined);
    return {
      "Mastered Word": masteredWord,
      "Difficult Words": difficultWords,
      "Current Streak": currentStreak,
    };
  } finally {
    await driver.deleteSession();
  }
}

module.exports = {
  flipApp,
  duolingoApp,
  chessApp,
  lumosityApp,
  elsaApp,
};
