function yaemiko(language)
{
    // 自分の手
    let message = '';

    if (language === 1)
    {
        message = 'グー';
        play = 1;
    }
    else if (language === 2)
    {
        message = 'チョキ';
        play = 2;
    }
    else if (language === 3)
    {
        message = 'パー';
        play = 3
    }
    else
        message = '想定されていない引数です。';

    // 書き換えたいhtmlの要素を取得する
    const p_hello = document.querySelector('#hello');
    // 書き換えたい要素の文字列を置き換える
    p_hello.textContent = message;


    // 相手の手
    // 0~1のランダムな値を生成
    let rand = Math.random();
    // 0~3のランダムな値を生成
    jan = rand*4;

    let aite = '';

    if (jan <= 1)
    {
        aite = 'グー';
        non = 1;
    }
    else if (jan <= 3)
    {
        aite = 'チョキ';
        non = 2;
    }
    else if (jan <= 4)
    {
        aite = 'パー';
        non = 3;
    }
    else
        aite = '想定されていない引数です。';

    // 書き換えたいhtmlの要素を取得する
    const p_wow = document.querySelector('#wow');
    // 書き換えたい要素の文字列を置き換える
    p_wow.textContent = aite;


    // 勝敗の判定
    let kekka = '';

    if(play - non === -2)
    {
        kekka = "負け";
    }
    else if (play - non === -1)
    {
        kekka = '勝ち';
    }
    else if (play - non === 0)
    {
        kekka = 'あいこ';
        // i--;
    }
    else if (play - non === 1)
    {
        kekka = '負け';
    }
    else if (play - non === 2)
    {
        kekka = '勝ち';
    }
    else
        aite = '想定されていない引数です。';

    // 書き換えたいhtmlの要素を取得する
    const p_kekka = document.querySelector('#kekka');
    // 書き換えたい要素の文字列を置き換える
    p_kekka.textContent = kekka;
}



function kokusei(language)
{
    // 自分の手
    let message = '';

    if (language === 1)
    {
        message = 'グー';
        play = 1;
    }
    else if (language === 2)
    {
        message = 'チョキ';
        play = 2;
    }
    else if (language === 3)
    {
        message = 'パー';
        play = 3
    }
    else
        message = '想定されていない引数です。';

    // 書き換えたいhtmlの要素を取得する
    const p_hello = document.querySelector('#hello');
    // 書き換えたい要素の文字列を置き換える
    p_hello.textContent = message;


    // 相手の手
    // 0~1のランダムな値を生成
    let rand = Math.random();
    // 0~3のランダムな値を生成
    jan = rand*4;

    let aite = '';

    if (jan <= 1)
    {
        aite = 'グー';
        non = 1;
    }
    else if (jan <= 2)
    {
        aite = 'チョキ';
        non = 2;
    }
    else if (jan <= 4)
    {
        aite = 'パー';
        non = 3;
    }
    else
        aite = '想定されていない引数です。';

    // 書き換えたいhtmlの要素を取得する
    const p_wow = document.querySelector('#wow');
    // 書き換えたい要素の文字列を置き換える
    p_wow.textContent = aite;


    // 勝敗の判定
    let kekka = '';

    if(play - non === -2)
    {
        kekka = "負け";
    }
    else if (play - non === -1)
    {
        kekka = '勝ち';
    }
    else if (play - non === 0)
    {
        kekka = 'あいこ';
        // i--;
    }
    else if (play - non === 1)
    {
        kekka = '負け';
    }
    else if (play - non === 2)
    {
        kekka = '勝ち';
    }
    else
        aite = '想定されていない引数です。';

    // 書き換えたいhtmlの要素を取得する
    const p_kekka = document.querySelector('#kekka');
    // 書き換えたい要素の文字列を置き換える
    p_kekka.textContent = kekka;
}