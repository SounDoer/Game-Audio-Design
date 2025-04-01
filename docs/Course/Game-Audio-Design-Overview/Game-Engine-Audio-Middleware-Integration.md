---
sidebar_position: 104
---

# 游戏引擎与游戏音频中间件的整合

:::info
本课程目前使用 Unreal Engine 5 和 Audiokinetic Wwise 2024 版本为例  
Updated at 2025.3
:::

## Wwise Unreal Integration

### Integrate Wwise with AK Launcher

- 打开 AK Launcher，在 Wwise 页签中找到已安装的 Wwise 版本  
![AK Launcher Wwise Modify](Game-Engine-Audio-Middleware-Integration/AK-Launcher-Wwise-Modify.png)
- 新增勾选 SDK (C++)，点击下一步，完成更新  
![AK Launcher Wwise Modify](Game-Engine-Audio-Middleware-Integration/AK-Launcher-Wwise-Modify-SDK.png)
- 在 Unreal Engine 页签中找到已创建的 UE 工程，点击 Integrate Wwise  
![AK Launcher UE Integrate 01](Game-Engine-Audio-Middleware-Integration/AK-Launcher-UE-Integrate-01.png)
- 正确选择已安装且更新 SDK 的 Wwise 版本  
![AK Launcher UE Integrate 02](Game-Engine-Audio-Middleware-Integration/AK-Launcher-UE-Integrate-02.png)
- 正确选择已创建的 Wwise 工程，点击 Integrate  
![AK Launcher UE Integrate 03](Game-Engine-Audio-Middleware-Integration/AK-Launcher-UE-Integrate-03.png)
- 至此已完成使用 AK 官方的工具来实现 Wwise 和 UE 的整合  
![AK Launcher UE Integrate 04](Game-Engine-Audio-Middleware-Integration/AK-Launcher-UE-Integrate-04.png)

### Wwise Project Settings

- 打开 Wwise 工程中的 Project Settings 选项  
![Wwise Project Settings](Game-Engine-Audio-Middleware-Integration/Wwise-Project-Settings.png)
- 在 SoundBanks 页签中，勾选 Enable Auto-Defined-SoundBanks 选项  
![Wwise Project Settings SoundBanks](Game-Engine-Audio-Middleware-Integration/Wwise-Project-Settings-SoundBanks.png)
- 切换至 SoundBank 视图  
![Wwise SoundBank](Game-Engine-Audio-Middleware-Integration/Wwise-SoundBank.png)
- 点击右上角 Generate All，首次生成 SoundBanks  
![Wwise SoundBank](Game-Engine-Audio-Middleware-Integration/Wwise-SoundBank-Generation.png)

### UE Project Settings
- 打开 UE 工程中的 Project Settings 选项  
![UE Project Settings](Game-Engine-Audio-Middleware-Integration/UE-Project-Settings.png)
- 在 Wwise Integration Settings 页签中，填写正确的 Wwise 工程路径和 Output 输出路径  
![UE Project Settings Wwise 01](Game-Engine-Audio-Middleware-Integration/UE-Project-Settings-Wwise-01.png)
- 在 Wwise User Settings 页签中，填写正确的 Wwise 安装路径和 WAAPI 设置  
![UE Project Settings Wwise 02](Game-Engine-Audio-Middleware-Integration/UE-Project-Settings-Wwise-02.png)

### UE Wwise Browser
- 打开 UE 工程中的 Wwise Browser 界面  
![UE Wwise Browser 01](Game-Engine-Audio-Middleware-Integration/UE-Wwise-Browser-01.png)
- 显示如下界面，说明整合工作已完成  
![UE Wwise Browser 02](Game-Engine-Audio-Middleware-Integration/UE-Wwise-Browser-02.png)


More：[Wwise Unreal Integration](https://www.audiokinetic.com/en/library/edge/?source=UE4&id=index.html)

---