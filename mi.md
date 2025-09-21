## windows special folders
 windows special folders     http://www.nirsoft.net/utils/special_folders_view.html
 shell:sendto shell:appsfolder shell:fonts
 
%UserProfile% - Opens your user's profile C:\Users\{username}
%AppData%\Microsoft\Windows\Start Menu\Programs\Startup - Opens Windows 10 Startup location for program shortcuts

chrome://apps/

## curl ipinfo.io
C:\Users\PC>curl ipinfo.io
{
  "ip": "120.227.43.82",
  "city": "Shanghai",
  "region": "Shanghai",
  "country": "CN",
  "loc": "31.2222,121.4581",
  "org": "AS56047 China Mobile communications corporation",
  "postal": "200000",
  "timezone": "Asia/Shanghai",
  "readme": "https://ipinfo.io/missingauth"
}
PS C:\Users\PC> curl ipinfo.io
{
  "ip": "163.223.40.32",
  "city": "Kobe",
  "region": "Hyōgo",
  "country": "JP",
  "loc": "34.6913,135.1830",
  "org": "AS32135 SAKURA LTD.",
  "postal": "761-4146",
  "timezone": "Asia/Tokyo",
  "readme": "https://ipinfo.io/missingauth"
}
PS C:\Users\PC> curl ipinfo.io/205.134.180.164
{
  "ip": "205.134.180.164",
  "hostname": "teon-customer.ai.net",
  "city": "Washington",
  "region": "District of Columbia",
  "country": "US",
  "loc": "38.8951,-77.0364",
  "org": "AS6405 American Information Network",
  "postal": "20004",
  "timezone": "America/New_York",
  "readme": "https://ipinfo.io/missingauth"
}

## 加密解密文件或文件夹
C:\Users\PC\cipher>cipher /e 1.txt
C:\Users\PC\cipher>cipher /d 1.txt

C:\Users\PC\cipher>cipher /e /s:.
C:\Users\PC\cipher>cipher /d /s:.

AdaCpp | C++ Online AI+IDE

## 2025-07-10
Win+Alt+R 录屏
appwiz.cpl 控制面板\程序\程序和功能
route print 查看路由表
arp -a 显示ARP缓存表
netsh wlan show profiles key=clear name="Xiaomi_8866"
copy file1.txt+file2.txt merged.txt 合并文件
xcopy src dest /E /H /C 
runas /user:Administrator notepad
for /L %i in (1,1,8) do ping 8.8.8.%i
https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/for
wmic product get name,version > software.csv 
reg query HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run 查看启动项

C:\Windows\System32\MRT.exe
Windows 恶意软件删除工具 (MSRT) 可帮助 Windows 计算机免受流行恶意软件攻击。 MSRT 可发现和删除威胁，并还原这些威胁所做的更改。 MSRT 通常每月作为 Windows 更新的一部分发布，或作为独立的工具在此处提供以供下载。

C:\Windows\System32\msra.exe 远程协助 
mstsc.exe 远程桌面连接
C:\Windows\System32\perfmon.msc perfmon.exe 性能监视器
psr.exe 步骤记录器
resmon.exe 资源监视器
Ribbons.scr 屏幕保护程序Ribbons
C:\Windows\System32\sudo.exe
"C:\Windows\System32\WF.msc" 防火墙配置
C:\Users\PC>where cl
D:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.44.35207\bin\Hostx64\x64\cl.exe

---
1 公顷 = 15 亩 = 10000 ㎡

1 亩 = 666.67 ㎡

1 平方公里 = 1500 亩 = 100 公顷

---
1 英寸 ≈ 2.54 cm（"英二半"记得牢）

1 米 = 3 尺 ≈ 39.37 英寸

1 英里 ≈ 1.6 公里

1 海里 ≈ 1.85 公里

1 尺 ≈ 0.33 米
---

摄氏度（℃） ↔ 华氏度（℉）

℉ = ℃ × 1.8 + 32

℃ = (℉ − 32) ÷ 1.8

摄氏度（℃） ↔ 开尔文（K）

K = ℃ + 273.15

℃ = K − 273.15
---


Clairad
C语言混乱代码大赛（IOCCC）经典代码解析

https://img.shields.io/badge/build-passing-brightgreen.svg

https://dustinbrett.com/

https://cachyos.org/download/

sniffnet 

free PlanetVPN https://freevpnplanet.com/

https://tresjs.org/ create awesome 3D experiences with Vue    npm install @tresjs/core three

https://liquipedia.net/starcraft/China_Seasons_League/Xiamen

https://github.com/neutralinojs/neutralinojs
https://codezri.org/docs/buildzri/integrate

Win10系统 默认以管理员权限运行所有程序
一、 win+R, 输入 regedit 运行注册表
二、 在注册表地址栏输入 HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
选中左边System文件夹，在右侧找到 EnableLUA，将值从1改为0
三、 重启系统即可，然后就可以看到管理员就变成了你现操作的系统。执行的各种程序也都是直接以管理员权限执行

PS C:\Windows\System32> iex "& {$(irm get.scoop.sh)} -RunAsAdmin"
Initializing...
Downloading...
Creating shim...
Adding ~\scoop\shims to your path.
Scoop was installed successfully!
Type 'scoop help' for instructions.
PS C:\Windows\System32> scoop help
PS C:\> which scoop
C:/Users/PC/scoop/shims/scoop

https://www.raidrive.com/zh-hans/pricing 列出了当前的网盘服务

## 7:12 2025/8/20
https://www.google.com/maps/place/中国湖南省长沙市/@28.1763401,112.6949161,10z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3420ba186987384d:0xcc21910be4ae2ce5!2z5Lit5Zu95rmW5Y2X55yB!3b1!8m2!3d28.1142216!4d112.9833341!16zL20vMDE2Njl0!3m5!1s0x342735f39e1c64c5:0xb1e5bb9ca1f1a680!8m2!3d28.2277799!4d112.93886!16zL20vMDFjdzZs?hl=zh-CN&entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D

https://www.mkdb.sh/ free hosted postgres, as simple asmkdir

ContourPlot[f,{x,Subscript[x, min],Subscript[x, max]},{y,Subscript[y, min],Subscript[y, max]}]
生成关于  x 和 y 的函数 f 的等高线图.  

loofah  [ˈluːfə]  n.【植】丝瓜；丝瓜络  
像这样列出常见的蔬菜水果的英语单词

当然可以！以下是一些常见蔬菜和水果的英语单词及其中文翻译：

### 蔬菜
1. Carrot [ˈkærət] - 胡萝卜
2. Tomato [təˈmeɪtoʊ] - 西红柿
3. Cucumber [ˈkjuːkʌmbər] - 黄瓜
4. Spinach [ˈspɪnɪtʃ] - 菠菜
5. Broccoli [ˈbrɑːkəli] - 西兰花
6. Potato [pəˈteɪtoʊ] - 土豆
7. Onion [ˈʌnjən] - 洋葱
8. Bell Pepper [bɛl ˈpɛpər] - 彩椒
9. Lettuce [ˈlɛtɪs] - 生菜
10. Cauliflower [ˈkɔːlɪfaʊər] - 花椰菜

### 水果
1. Apple [ˈæpl] - 苹果
2. Banana [bəˈnænə] - 香蕉
3. Orange [ˈɔːrɪndʒ] - 橙子
4. Grape [ɡreɪp] - 葡萄
5. Pineapple [ˈpaɪnæpl] - 菠萝
6. Strawberry [ˈstrɔːbəri] - 草莓
7. Mango [ˈmæŋɡoʊ] - 芒果
8. Watermelon [ˈwɔːtərˌmɛlən] - 西瓜
9. Peach [piːtʃ] - 桃子
10. Kiwi [ˈkiːwi] - 猕猴桃

希望这些词汇对你有帮助！如果你需要更多的信息或其他类型的词汇，请告诉我！
请列出更多的蔬菜和水果的英语单词，尽量全面，

当然可以！以下是一些常见的蔬菜和水果的英语单词，尽量涵盖全面，并注上音标：

### 蔬菜 (Vegetables)
1. Carrot - 胡萝卜 /ˈkærət/
2. Potato - 土豆 /pəˈteɪtoʊ/
3. Tomato - 西红柿 /təˈmeɪtoʊ/
4. Onion - 洋葱 /ˈʌnjən/
5. Garlic - 大蒜 /ˈɡɑːrlɪk/
6. Cucumber - 黄瓜 /ˈkjuːkʌmbər/
7. Lettuce - 生菜 /ˈlɛtɪs/
8. Spinach - 菠菜 /ˈspɪnɪtʃ/
9. Broccoli - 西兰花 /ˈbrɑːkəli/
10. Cauliflower - 花椰菜 /ˈkɔːlɪˌfaʊər/
11. Bell pepper - 彩椒 /ˈbɛl ˈpɛpər/
12. Zucchini - 西葫芦 /zuˈkiːni/
13. Eggplant - 茄子 /ˈɛɡplænt/
14. Peas - 豌豆 /piːz/
15. Celery - 芹菜 /ˈsɛləri/
16. Radish - 萝卜 /ˈrædɪʃ/
17. Beetroot - 甜菜 /ˈbiːtruːt/
18. Pumpkin - 南瓜 /ˈpʌmpkɪn/
19. Squash - 瓜类 /skwɔːʃ/
20. Asparagus - 芦笋 /əˈspærəɡəs/
21. Artichoke - 朝鲜蓟 /ˈɑːrtɪˌtʃoʊk/
22. Kale - 羽衣甘蓝 /keɪl/
23. Brussels sprouts - 球芽甘蓝 /ˈbrʌsəlz ˈsprɑʊts/
24. Chard - 瑞士甜菜 /tʃɑːrd/
25. Fennel - 茴香 /ˈfɛnəl/

### 水果 (Fruits)
1. Apple - 苹果 /ˈæpl/
2. Banana - 香蕉 /bəˈnænə/
3. Orange - 橙子 /ˈɔːrɪndʒ/
4. Grape - 葡萄 /ɡreɪp/
5. Strawberry - 草莓 /ˈstrɔːbɛri/
6. Blueberry - 蓝莓 /ˈbluːˌbɛri/
7. Raspberry - 覆盆子 /ˈræzˌbɛri/
8. Blackberry - 黑莓 /ˈblækˌbɛri/
9. Pineapple - 菠萝 /ˈpaɪnˌæpəl/
10. Mango - 芒果 /ˈmæŋɡoʊ/
11. Peach - 桃子 /piːtʃ/
12. Pear - 梨 /pɛr/
13. Cherry - 樱桃 /ˈtʃɛri/
14. Watermelon - 西瓜 /ˈwɔːtərˌmɛlən/
15. Cantaloupe - 哈密瓜 /ˈkæntəloʊp/
16. Honeydew - 蜜瓜 /ˈhʌnidjuː/
17. Kiwi - 猕猴桃 /ˈkiːwi/
18. Pomegranate - 石榴 /ˈpɑːmɪˌɡrænɪt/
19. Fig - 无花果 /fɪɡ/
20. Papaya - 木瓜 /pəˈpaɪə/
21. Coconut - 椰子 /ˈkoʊkənʌt/
22. Lemon - 柠檬 /ˈlɛmən/
23. Lime - 青柠 /laɪm/
24. Apricot - 杏子 /ˈeɪprɪˌkɑːt/
25. Guava - 番石榴 /ˈɡwɑːvə/

$a_1$ 

## 2025-08-21 09:06:15
tcb ai

user
summarize WIN32 api in C programming

codex
The Windows API (Win32 API) is a set of functions provided by Microsoft for interacting with the Windows operating
system. It allows developers to create applications that can manage windows, handle input, perform file operations, and
more. Here’s a concise summary of key aspects:

### Core Components

- Windows Management: Functions like CreateWindow, ShowWindow, and DestroyWindow for managing windows.
- Messages and Events: The WndProc function handles messages like WM_PAINT, WM_CLOSE, and WM_COMMAND.
- Graphics and Drawing: Use GDI functions like TextOut, Rectangle, and BitBlt for rendering graphics.
- File and I/O Operations: Functions like CreateFile, ReadFile, and WriteFile for file handling.
- Memory Management: Functions like GlobalAlloc, LocalAlloc, and VirtualAlloc for memory allocation.
- Process and Thread Management: Functions like CreateProcess, CreateThread, and WaitForSingleObject for managing
processes and threads.
- Registry and Configuration: Functions like RegOpenKey, RegSetValueEx, and RegQueryValueEx for accessing the Windows
Registry.
- Networking: Functions like WSAStartup, socket, and send for network communication.

### Common Patterns

- Message Loop: A loop that processes messages from the OS using GetMessage, TranslateMessage, and DispatchMessage.
- Event Handling: Implement a WndProc function to handle specific events like mouse clicks or key presses.
- Resource Management: Use handles (HWND, HINSTANCE, etc.) to manage resources like windows, files, and memory.

### Example Code
```
#include <windows.h>

LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    WNDCLASS wc = {0};
    wc.lpfnWndProc = WndProc;
    wc.hInstance = hInstance;
    wc.lpszClassName = "MyWindowClass";

    RegisterClass(&wc);

    HWND hwnd = CreateWindow("MyWindowClass", "Win32 Example", WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT, 640,
480, NULL, NULL, hInstance, NULL);

    ShowWindow(hwnd, nCmdShow);

    MSG msg;
    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    return msg.wParam;
}

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam) {
    switch (msg) {
        case WM_PAINT:
            PAINTSTRUCT ps;
            HDC hdc = BeginPaint(hwnd, &ps);
            TextOut(hdc, 10, 10, "Hello, Win32!", 12);
            EndPaint(hwnd, &ps);
            break;
        case WM_CLOSE:
            DestroyWindow(hwnd);
            break;
        case WM_DESTROY:
            PostQuitMessage(0);
            break;
        default:
            return DefWindowProc(hwnd, msg, wParam, lParam);
    }
    return 0;
}
```

### Key Points

- Platform-Specific: The Win32 API is specific to Windows and not portable to other operating systems.
- Low-Level Control: Provides fine-grained control over Windows features but can be complex to use.
- Wide Range of Capabilities: From simple window creation to advanced networking and system management.

	EditPlus 不过有网络的大神分享了最新的6.x版本的注册号。  
	注册信息
	用户名：EditPlus
	注册码：WGJ8J-62UCJ-J6AGG-4A6GQ-26SSC
	
f(x)=a_0+∑_(n=1)^∞▒(a_n  cos⁡〖nπx/L〗+b_n  sin⁡〖nπx/L〗 ) 

https://github.com/max-niederman/ttyper ttyper is a terminal-based typing test built with Rust and Ratatui.

https://chromewebstore.google.com/detail/markdown-editor/ekdcaddpmiodcipjfmffhhefijpdckaf

## 2025-08-23 07:46:50
docker run -d -p 6080:6080 -e EMULATOR_DEVICE="Nexus 7" -e WEB_VNC=true --device /dev/kvm --name android-nexus7 budtmo/docker-android:emulator_14.0

Drawnix 是一款强大的开源白板工具（https://github.com/plait-board/drawnix），集成思维导图、流程图等功能。基于Plait 框架开发，支持插件扩展，提供自动保存、无限画布 

docker run -d -p 6080:6080 -e EMULATOR_DEVICE="Samsung Galaxy S10" -e WEB_VNC=true --device /dev/kvm --name Android-GalaxyS10 budtmo/docker-android:emulator_14.0

OverType is a transparent textarea over rendered markdown.
Plain text simplicity, WYSIWYG beauty, zero complexity.

78KB TOTAL
•
ONE SCRIPT TAG
•
UNDERSTAND YOUR EDITOR

## 2025-08-25 17:28:55
https://overtype.dev/demo
A **lightweight** markdown editor with perfect WYSIWYG alignment.

## Features
- 🚀 Lightning fast performance
- 🎨 Theme support
- ⌨️ Keyboard shortcuts
- 📱 Mobile optimized

## 2025-08-29 09:36:05
https://github.com/ollama/ollama Developer(s)	Meta AI  Written in	Python  

C:\Users\PC\AppData\Local\Programs\Ollama\lib\ollama\ggml-cuda.dll
C:\Users\PC\.ollama\models

'+−×÷<>=‹›«»⟮⟯•‣․ ‥ … ‧ ♪¬⁒'.charCodeAt(1)  8226• 183· 8231‧
Middle Dot · (U+00B7) &#183; &#xB7; &centerdot;
Bullet • (U+2022)
One Dot Leader ․ (U+2024)
Hyphenation Point ‧ (U+2027) &#8231; &#x2027;
Bullet Operator ∙ (U+2219)
Dot Operator ⋅ (U+22C5)
Z Notation Spot ⦁ (U+2981)

https://www.compart.com/en/unicode/category/Sm  List of Unicode Characters of Category “Math Symbol”  
https://www.w3schools.com/charsets/ref_utf_math.asp

Dalvík is the main village of the Icelandic municipality of Dalvíkurbyggð. Its population is approximately 1,400. Dalvík. Town and Municipality. 达尔维克(Dalvik)是冰岛达尔维克市(Dalvikurbyggo)的主要村庄。该市人口约1400人。达尔维克。城镇和市镇

Android Open Source Project
https://source.android.com › docs › core › runtime
26 Aug 2024 — ART and Dalvik are compatible runtimes running DEX bytecode, so apps developed for Dalvik should work when running with ART.

Bolt.new is an AI-powered web development agent that allows you to prompt, run, edit, and deploy full-stack applications directly from your browser—no local setup required. 
- Full-Stack in the Browser: Bolt.new integrates cutting-edge AI models with an in-browser development environment powered by StackBlitz’s WebContainers. This allows you to:

Install and run npm tools and libraries (like Vite, Next.js, and more)
Run Node.js servers
Interact with third-party APIs
Deploy to production from chat
Share your work via a URL

- AI with Environment Control: 

https://stackblitz.com/ netlify.com

映山红
[yìng shān hóng]
na.azalea; Indian azalea
网络Azalea; Rhododendron simsii; Rhododendron simsii Planch.

agent-c 
```
void init_agent(void) {
    strcpy(agent.messages[0].role, "system");
    strcpy(agent.messages[0].content, "You are an AI assistant with Napoleon Dynamite's personality. Say things like 'Gosh!', 'Sweet!', 'Idiot!', and be awkwardly enthusiastic. For multi-step tasks, chain commands with && (e.g., 'echo content > file.py && python3 file.py'). Use execute_command for shell tasks. Answer questions in Napoleon's quirky style.");
    agent.msg_count = 1;
}
```

elderscrollsonline.com/cn/home 《上古卷轴OL》  The Elder Scrolls

https://rendergit.com/github.com/qingtk/webbud?process=true

https://github.com/bgreenwell/doxx  A fast, terminal-native document viewer for Word files. View, search, and export .docx documents without leaving your command line.

https://win32.run/

https://github.com/FedericoBruzzone/tgt TUI for Telegram written in Rust 🦀
https://github.com/fdehau/tui-rs

https://github.com/FrameworkComputer/Framework-Laptop-16  
Framework Laptop 16 (AMD Ryzen™ AI 300 Series)
Starting at $58,500

https://github.com/PixiEditor/PixiEditor

## 2025-09-01 18:35:32
99446192 

https://www.tablesgenerator.com/text_tables

The generator / editor is quite flexible and allows to generate tables similar to the example shown below. As can be seen, multi-row and multi-column cells are supported.

+---------------------------------------+
|                Results                |
+-------------+-------------------------+
|             |        Contestant       |
| Competition +-------+--------+--------+
|             |  John | Andrea | Robert |
+-------------+-------+--------+--------+
| Swimming    |  1:30 |   2:05 |   1:15 |
+-------------+-------+--------+--------+
| Running     | 15:30 |  14:10 |  15:45 |
+-------------+-------+--------+--------+



不及物动词
绑定GitHub的二级域名需要进行以下几个步骤：

1. 在GitHub上创建仓库：首先，在GitHub上创建一个新的仓库。该仓库将用于托管您的网站源文件。

2. 创建一个gh-pages分支：在您的仓库内，创建一个名为”gh-pages”的分支。该分支将用于托管生成的静态网页。

3. 配置仓库的设置：在您的仓库内，点击”Settings”选项卡。滚动到”GitHub Pages”部分，并选择”gh-pages”分支作为源。

4. 设置域名：点击”Enforce HTTPS”按钮以启用HTTPS。然后，在”Custom domain”字段中输入您想要绑定的二级域名。

5. 配置DNS解析：接下来，您需要在您的域名注册商或DNS解析服务商处配置DNS记录。添加一个CNAME记录，将您的二级域名指向用户名.github.io。如果您希望启用HTTPS，还需要添加一个A记录，将您的二级域名指向GitHub的IP地址：185.199.108.153。

以上步骤完成后，您的二级域名将与GitHub仓库绑定。通过访问您的二级域名，您将能够看到您在仓库中的静态网页。请注意，生成的网页可能需要一些时间才能在您的二级域名上生效，因为DNS解析可能需要一些时间。如果遇到问题，您可以检查GitHub的文档和帮助中心，或向GitHub的支持团队寻求帮助。

https://blog-keeper.com/ 文捕 博客内容一键解析下载工具

combi
美 [ˈkɑmbi]
英 [ˈkɒmbi]
网络康贝；日本康贝；组合(combination) 
kombi

http://www.aiinnovation.com.cn/#/trackDetail?id=153 兴智杯全国人工智能创新应用大赛 报名时段：2025-05-08~2025-09-15

https://micai.org/2025/  MICAI 2025  
_The Mexican International Conference on Artificial Intelligence (MICAI_) is the leading AI event in Mexico, organized by the Mexican Society for Artificial ...

中国新一代迷彩服被称为“星空迷彩”，其花型和颜色都是全新设计的，共有林地、荒漠、丛林、城市和沙漠等五种配色，可以适应国内外的各种地形地貌的使用需求，迷彩服的主要作用是两方面，一是增加战士在实战环境中的伪装效果，二是要穿着实用，可以满部队日常训练和野外放置物品等需求，图中是新一代迷彩服臂章采用隐形图案。

军事丨解放军换装新一代迷彩服，臂章采用隐形图案，远近伪装超棒
据国内军事专家介绍，该新式迷彩服之所以有星空的效果，是因为引入更不易识别的微小数码格，较传统迷彩图案更细腻。在实战中，无论远视还是近视该迷彩服，都很容易看走眼，因为星空迷彩使人体与作战环境高度趋同，大大提高了隐蔽效果。

军事丨解放军换装新一代迷彩服，臂章采用隐形图案，远近伪装超棒
同时，与过去的老式迷彩服大面积色块相比，星空迷彩服的数码色块设计更加细碎，和自然环境能够更好地融合。为此，配套的头盔、战术手套、作战背心也都选用了同款颜色，就是军靴也做了改进。像沙漠款就搭配了绿色的靴子，丛林款是黑色的，这样在各自的地形里都协调、隐蔽一些。

军事丨解放军换装新一代迷彩服，臂章采用隐形图案，远近伪装超棒
新一代“星空迷彩”强调穿着新式迷彩服的官兵很难从外表上判别所属军种，从而回归到迷彩的最根本用途——伪装、隐藏，从远距离上看，不同颜色的斑点通过并置、交错，产生空间混色，能够形成大斑点的效果，可模拟森林、群山等背景群落的表面特征。
军事丨解放军换装新一代迷彩服，臂章采用隐形图案，远近伪装超棒
2020-05-31 08:02·武器看点
解放军换装最新一代迷彩服，臂章采用隐形图案：近日，解放军陆续公布最新一代迷彩作战服，新式迷彩服已在国庆阅兵中公开亮相。新式迷彩服将按照计划陆续配发全军部队，该迷彩服可以更好的适应国防和军队改革的要求，更好地满足部队的战备训练需要。

军事丨解放军换装新一代迷彩服，臂章采用隐形图案，远近伪装超棒
中国新一代迷彩服被称为“星空迷彩”，其花型和颜色都是全新设计的，共有林地、荒漠、丛林、城市和沙漠等五种配色，可以适应国内外的各种地形地貌的使用需求，迷彩服的主要作用是两方面，一是增加战士在实战环境中的伪装效果，二是要穿着实用，可以满部队日常训练和野外放置物品等需求，图中是新一代迷彩服臂章采用隐形图案。

军事丨解放军换装新一代迷彩服，臂章采用隐形图案，远近伪装超棒
据国内军事专家介绍，该新式迷彩服之所以有星空的效果，是因为引入更不易识别的微小数码格，较传统迷彩图案更细腻。在实战中，无论远视还是近视该迷彩服，都很容易看走眼，因为星空迷彩使人体与作战环境高度趋同，大大提高了隐蔽效果。

军事丨解放军换装新一代迷彩服，臂章采用隐形图案，远近伪装超棒
同时，与过去的老式迷彩服大面积色块相比，星空迷彩服的数码色块设计更加细碎，和自然环境能够更好地融合。为此，配套的头盔、战术手套、作战背心也都选用了同款颜色，就是军靴也做了改进。像沙漠款就搭配了绿色的靴子，丛林款是黑色的，这样在各自的地形里都协调、隐蔽一些。

军事丨解放军换装新一代迷彩服，臂章采用隐形图案，远近伪装超棒
新一代“星空迷彩”强调穿着新式迷彩服的官兵很难从外表上判别所属军种，从而回归到迷彩的最根本用途——伪装、隐藏，从远距离上看，不同颜色的斑点通过并置、交错，产生空间混色，能够形成大斑点的效果，可模拟森林、群山等背景群落的表面特征。

军事丨解放军换装新一代迷彩服，臂章采用隐形图案，远近伪装超棒
除了衣服之外，此次配发的头盔、战术手套、作战背心和军靴也都使用了相同的新式迷彩，一套装备下来不光是看着酷，是实实在在的提升了军人的隐蔽性。新的迷彩服是按照地形来划分的，也就是城市、林地、荒漠、从林和沙漠，不同的作战任务可以给士兵发放不同的迷彩服，便于整个作战方向所有人员的服装的统一，可以实现更好伪装自己的目的，也可以满足未来全军实现全疆域立体攻防作战的需求。

## 2025-09-09 11:34:06
du.hanyupinyin.cn 在线读拼音

FLTK - Fast Light Tool Kit - https://github.com/fltk/fltk - cross platform GUI development  www.fltk.org  

charmap.exe

https://h5login.qqchess.qq.com/ 这里可以做一个AI接入的机器人，chrome extension，或者js脚本

C:\Windows\Tasks
计算机\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run

手心输入法，真的很好用，敲字快多了！

https://github.com/Raphire/Win11Debloat

warp.dev 
Warp was founded in June 2020 by Zach Lloyd, former Principal Engineer at Google and interim CTO at TIME.[5] Lloyd and an early engineering team decided to develop Warp as a modern version of the command line terminal. Warp was built natively in Rust.[6]

In April 2023, Warp announced Warp AI, which integrated an OpenAI large language model chatbot into the terminal.[7] In June 2023, Warp introduced Warp Drive for collaboration on the command line

https://lmstudio.ai/ Download and run local models, Run gpt-oss, Qwen, Gemma, DeepSeek on your computer.

TF卡

https://labs.google/fx

DNS欺骗(DNS Spoofing)也被称为DNS缓存投毒(DNS Cache Poisoning)，是一种计算机安全攻击手段。攻击者通过利用DNS解析器软件的漏洞，向DNS解析器的缓存中注入虚假的DNS


https://utcp.io
UTCP is a lightweight, secure, and scalable standard that enables AI agents and applications to discover and call tools directly using their native protocols - ...

音乐魔石  https://yym4.com/search/宋小睿  

duckdb  https://duckdb.org/docs/stable/
https://shell.duckdb.org/  
npm install @duckdb/node-api
pip install duckdb

```
# Get the top-3 busiest train stations
import duckdb
duckdb.sql("""
    SELECT station, count(*) AS num_services
    FROM train_services
    GROUP BY ALL
    ORDER BY num_services DESC
    LIMIT 3;
    """)
```

质数 73939133

https://ninite.com/
Install and Update All Your Programs at Once
No toolbars. No clicking next. Just pick your apps and go.

https://www.gamespot.com.cn/en/downloads/19276

```
/* 手机（小于 600px） */
@media (max-width: 599px) {
    .container {
        flex-direction: column; /* 在手机上垂直排列 */
    }
    .item {
        width: 100%; /* 项目占据 100% 宽度 */
    }
}
```

使用Windows语音识别快捷键
Win + H：快速启动语音输入（推荐）
Ctrl + Win + S：切换语音识别模式
Alt + Shift + C：取消当前语音输入

cmd "C:\Program Files\EditPlus\editplus.exe" -d "E:\cloud\github\2293"

https://support.github.com/request

https://www.scmp.com/tech

https://www.doubao.com/thread/w280275885d67e7b2 豆包音乐生成 奋斗点亮希望 罗哈/豆包

## 2025-09-15 06:42:23
https://github.com/Mercury13/unicodia Encyclopedia of Unicode characters
OSSSR.COM  发现、学习、分享，与软件爱好者共同成长。  

Koto City, Tokyo

Koto
https://koto.studio
Optimists building brand and digital for the most impactful companies of today and the founders defining tomorrow.

https://www.city.koto.lg.jp/
江东区役所
公司编号：6000020131083
东京都江东区东洋4-11-28 135-8383 电话号码：03-3647-9111（总机）

https://en.wikipedia.org › wiki › Koto_(instrument)
The koto (箏 or 琴) is a Japanese plucked half-tube zither instrument, and the national instrument of Japan.

https://en.wikipedia.org › wiki › Biwa
The biwa (Japanese: 琵琶) is a Japanese short-necked wooden lute traditionally used in narrative storytelling. The biwa is a plucked string instrument

feijipan.com

- http://aiwa.fun/ Your Super AI-Powered Virtual Assistant for WhatsApp
- aiwa.xyz  AI-Powered Hybrid Wallet

正确使用 IPv6 地址访问本机服务的方法：
需要在 IPv6 地址前后加 方括号 []，明确告诉浏览器这是一个 IPv6 地址，格式为：
[::1]
如果服务有特定端口（如 8080），需在括号后加端口号，例如：
[::1]:8080

https://chinese.yabla.com/
https://english.yabla.com/player_cdn.php?id=19672&tlang_id=zh_CN


Marimo Notebook
https://marimo.io https://marimo.app/
Transform data, train models, and run SQL queries with marimo — feels like an AI-native reactive notebook, stored as Git-friendly reproducible Python.

import marimo as mo

mo.md("# Welcome to [marimo](https://github.com/marimo-team/marimo)! 🌊🍃")


Documentation: https://typer.tiangolo.com
Source Code: https://github.com/fastapi/typer

Typer is a library for building CLI applications that users will love using and developers will love creating. Based on Python type hints.

It's also a command line tool to run scripts, automatically converting them to CLI applications.
Typer is FastAPI's little sibling, it's the FastAPI of CLIs.


https://github.com/Textualize/rich
Rich is a Python library for rich text and beautiful formatting in the terminal.
The Rich API makes it easy to add color and style to terminal output. Rich can also render pretty tables, progress bars, markdown, syntax highlighted source code, tracebacks, and more — out of the box.

Rich 是一个 Python 库，可以为您在终端中提供富文本和精美格式。
Rich 的 API 让在终端输出颜色和样式变得很简单。此外，Rich 还可以绘制漂亮的表格、进度条、markdown、语法高亮的源代码以及栈回溯信息（tracebacks）等——开箱即用。
https://calmcode.io/course/rich/introduction
c9.io 现在跳转到 https://aws.amazon.com/cn/cloud9