"use strict";(self.webpackChunkgame_audio_design=self.webpackChunkgame_audio_design||[]).push([[277],{4204:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Topic/A-Practice-of-Audio-Visualization-with-UE-Wwise","title":"\u201c\u97f3\u9891\u53ef\u89c6\u5316\u201d UE & Wwise \u5b9e\u8df5\u6848\u4f8b","description":"*","source":"@site/docs/Topic/A-Practice-of-Audio-Visualization-with-UE-Wwise.md","sourceDirName":"Topic","slug":"/Topic/A-Practice-of-Audio-Visualization-with-UE-Wwise","permalink":"/Game-Audio-Design/Topic/A-Practice-of-Audio-Visualization-with-UE-Wwise","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"layout":"default","nav_exclude":true},"sidebar":"topicSidebar","previous":{"title":"Xichen\'s Game Audio Design Document","permalink":"/Game-Audio-Design/Topic/intro"},"next":{"title":"\u201c\u97f3\u4e50\u4f5c\u4e3a\u5173\u5361\u8bbe\u8ba1\u201d UE & Wwise \u5b9e\u8df5\u6848\u4f8b","permalink":"/Game-Audio-Design/Topic/A-Practice-of-Music-as-Level-Design-with-UE-Wwise"}}');var t=i(4848),r=i(8453);const a={layout:"default",nav_exclude:!0},c="\u201c\u97f3\u9891\u53ef\u89c6\u5316\u201d UE & Wwise \u5b9e\u8df5\u6848\u4f8b",o={},d=[{value:"\u97f3\u9891\u53ef\u89c6\u5316\u7684\u5143\u7d20",id:"\u97f3\u9891\u53ef\u89c6\u5316\u7684\u5143\u7d20",level:2},{value:"\u7ed3\u5408\u73b0\u6709\u5de5\u5177\u7684\u5b9e\u73b0\u601d\u8def",id:"\u7ed3\u5408\u73b0\u6709\u5de5\u5177\u7684\u5b9e\u73b0\u601d\u8def",level:2},{value:"\u65f6\u57df\uff1a\u58f0\u97f3\u5305\u7edc\uff08Envelope\uff09",id:"\u65f6\u57df\u58f0\u97f3\u5305\u7edcenvelope",level:2},{value:"\u9891\u57df\uff1a\u58f0\u97f3\u9891\u8c31\uff08Spectrum\uff09",id:"\u9891\u57df\u58f0\u97f3\u9891\u8c31spectrum",level:2},{value:"\u65f6\u57df\u4e0e\u9891\u57df\uff1a\u58f0\u97f3\u65f6\u9891\u8c31\uff08Spectrogram\uff09",id:"\u65f6\u57df\u4e0e\u9891\u57df\u58f0\u97f3\u65f6\u9891\u8c31spectrogram",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"Reference",id:"reference",level:2}];function l(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u97f3\u9891\u53ef\u89c6\u5316-ue--wwise-\u5b9e\u8df5\u6848\u4f8b",children:"\u201c\u97f3\u9891\u53ef\u89c6\u5316\u201d UE & Wwise \u5b9e\u8df5\u6848\u4f8b"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E9%9F%B3%E9%A2%91%E5%8F%AF%E8%A7%86%E5%8C%96%E7%9A%84%E5%85%83%E7%B4%A0",children:"\u97f3\u9891\u53ef\u89c6\u5316\u7684\u5143\u7d20"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E7%BB%93%E5%90%88%E7%8E%B0%E6%9C%89%E5%B7%A5%E5%85%B7%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF",children:"\u7ed3\u5408\u73b0\u6709\u5de5\u5177\u7684\u5b9e\u73b0\u601d\u8def"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E6%97%B6%E5%9F%9F%E5%A3%B0%E9%9F%B3%E5%8C%85%E7%BB%9Cenvelope",children:"\u65f6\u57df\uff1a\u58f0\u97f3\u5305\u7edc\uff08Envelope\uff09"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E9%A2%91%E5%9F%9F%E5%A3%B0%E9%9F%B3%E9%A2%91%E8%B0%B1spectrum",children:"\u9891\u57df\uff1a\u58f0\u97f3\u9891\u8c31\uff08Spectrum\uff09"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E6%97%B6%E5%9F%9F%E4%B8%8E%E9%A2%91%E5%9F%9F%E5%A3%B0%E9%9F%B3%E6%97%B6%E9%A2%91%E8%B0%B1spectrogram",children:"\u65f6\u57df\u4e0e\u9891\u57df\uff1a\u58f0\u97f3\u65f6\u9891\u8c31\uff08Spectrogram\uff09"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E6%80%BB%E7%BB%93",children:"\u603b\u7ed3"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["\u7ee7\u4e0a\u4e00\u7bc7\u6587\u7ae0",(0,t.jsx)(n.a,{href:"/Game-Audio-Design/Topic/A-Practice-of-Music-as-Level-Design-with-UE-Wwise",children:"\u300a\u201c\u97f3\u4e50\u4f5c\u4e3a\u5173\u5361\u8bbe\u8ba1\u201d UE & Wwise \u5b9e\u8df5\u6848\u4f8b\u300b"}),"\u4e2d\u8fd0\u7528\u97f3\u4e50\u4e2d\u7684\u6807\u8bb0\u4fe1\u606f\u6765\u89e6\u53d1\u6e38\u620f\u4e8b\u4ef6\u4e4b\u540e\uff0c\u6211\u60f3\u5728\u4e2a\u4eba\u7ec3\u4e60\u9879\u76ee\u91cc\u60f3\u5b9e\u73b0\u7684\u4e0b\u4e00\u4e2a\u529f\u80fd\u662f\u7528\u97f3\u4e50\u4e2d\u7684\u4fe1\u606f\u6765\u9a71\u52a8\u89c6\u89c9\u6548\u679c\u7684\u8868\u73b0\uff0c\u4e5f\u5c31\u662f\u901a\u5e38\u8bf4\u7684\u97f3\u9891\u53ef\u89c6\u5316\uff08Audio Visualization\uff09\u3002",(0,t.jsx)(n.br,{}),"\n","\u97f3\u9891\u53ef\u89c6\u5316\u672c\u8eab\u662f\u4e00\u4e2a\u5927\u8bfe\u9898\uff0c\u5728\u6570\u5b57\u827a\u672f\u548c\u73b0\u573a\u8868\u6f14\u7b49\u9886\u57df\u5df2\u7ecf\u6709\u4e86\u6210\u719f\u7684\u5de5\u5177\u548c\u827a\u672f\u8868\u8fbe\u3002\u672c\u6587\u4e0d\u8ba8\u8bba\u827a\u672f\u65b9\u9762\u7684\u8868\u73b0\u6548\u679c\uff0c\u4e5f\u4e0d\u6df1\u7a76\u97f3\u9891\u4fe1\u53f7\u7684\u6570\u7406\u5b9a\u4e49\uff0c\u4ec5\u4ece\u57fa\u672c\u6982\u5ff5\u5165\u624b\uff0c\u7ed3\u5408\u5f15\u64ce\u5de5\u5177 Unreal Engine \u548c\u97f3\u9891\u4e2d\u95f4\u4ef6 Wwise \u5df2\u6709\u7684\u529f\u80fd\uff0c\u6765\u5b9e\u73b0\u4e00\u4e9b\u57fa\u672c\u7684\u97f3\u9891\u53ef\u89c6\u5316\u6548\u679c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u5f00\u53d1\u73af\u5883\u4e0e\u5de5\u5177\uff1a\nUnreal Engine 4.26 C++ & Blueprint\nAudiokinetic Wwise 2021.1.0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u97f3\u9891\u53ef\u89c6\u5316\u7684\u5143\u7d20",children:"\u97f3\u9891\u53ef\u89c6\u5316\u7684\u5143\u7d20"}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e\u6570\u5b57\u97f3\u9891\u4fe1\u53f7\u7684\u5206\u6790\uff0c\u901a\u5e38\u53ef\u4ee5\u4ece",(0,t.jsx)(n.strong,{children:"\u65f6\u57df"}),"\uff08Time Domain\uff09\u548c",(0,t.jsx)(n.strong,{children:"\u9891\u57df"}),"\uff08Frequency Domain\uff09\u4e24\u4e2a\u65b9\u9762\u5165\u624b\uff0c\u76f8\u5173\u7684\u5206\u6790\u5de5\u5177\u548c\u8868\u73b0\u5f62\u5f0f\u5728\u5404\u7c7b\u64ad\u653e\u5668\u548c\u97f3\u9891\u5de5\u5177\u4e2d\u5176\u5b9e\u90fd\u5f88\u5e38\u89c1\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u7b80\u5355\u6765\u8bf4\uff0c\u4ece\u65f6\u57df\u4e0a\u5206\u6790\u53ef\u4ee5\u5f97\u77e5\u97f3\u9891\u4fe1\u53f7\u7684\u80fd\u91cf\u5927\u5c0f\u968f\u65f6\u95f4\u53d8\u5316\u7684\u60c5\u51b5\uff0c\u6839\u636e\u4e0d\u540c\u7684\u8ba1\u7b97\u4e0e\u52a0\u6743\u65b9\u5f0f\u53ef\u4ee5\u8868\u793a\u5404\u79cd\u4e0e\u80fd\u91cf\u76f8\u5173\u7684\u6570\u503c\u60c5\u51b5\u3002\u6bd4\u5982\uff0c\u5cf0\u503c\uff08Peak\uff09\u8868\u73b0\u5728\u58f0\u97f3\u6ce2\u5f62\uff08Waveform\uff09\u4e0a\u5c31\u662f\u6ce2\u5f62\u6700\u5916\u5c42\u7684\u5305\u7edc\u66f2\u7ebf\uff08Envelope\uff09\uff0c\u54cd\u5ea6\uff08Loudness\uff09\u8868\u73b0\u5728\u8868\u5934\u4e0a\u5c31\u662f\u5b9e\u65f6\u53d8\u5316\u7684\u6570\u503c\u6307\u793a\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Waveform &amp; Meter",src:i(2849).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u9891\u57df\u4e0a\u5206\u6790\u53ef\u4ee5\u5f97\u77e5\u67d0\u4e00\u65f6\u523b\u97f3\u9891\u4fe1\u53f7\u7684\u80fd\u91cf\u5728\u9891\u7387\u4e0a\u7684\u5206\u5e03\u60c5\u51b5\uff0c\u5373\u5e38\u89c1\u7684\u9891\u8c31\u56fe\uff08Spectrum\uff09\u6240\u8868\u793a\u7684\u5404\u4e2a\u9891\u6bb5\u5728\u4eba\u8033\u53ef\u95fb\u9891\u8c31\u8303\u56f4\u5185\u7684\u80fd\u91cf\u5927\u5c0f\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Spectrum",src:i(8211).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u6709\u4e00\u79cd\u5c06\u65f6\u57df\u548c\u9891\u57df\u4fe1\u606f\u6574\u5408\u5728\u4e00\u8d77\u7684\u53ef\u89c6\u5316\u65b9\u5f0f\uff0c\u5373\u65f6\u9891\u8c31\uff08Spectrogram\uff09\uff0c3D \u5f62\u5f0f\u7684\u65f6\u9891\u8c31\u4e5f\u56e0\u5176\u7acb\u4f53\u5f62\u8c61\u800c\u88ab\u53eb\u505a\u201c\u7011\u5e03\u56fe\u201d\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Spectrogram",src:i(5747).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u6587\u5c06\u4ee5\u5b9e\u73b0\u4e0a\u8ff0\u4e09\u79cd\u53ef\u89c6\u5316\u6548\u679c\u6765\u5c55\u5f00\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7ed3\u5408\u73b0\u6709\u5de5\u5177\u7684\u5b9e\u73b0\u601d\u8def",children:"\u7ed3\u5408\u73b0\u6709\u5de5\u5177\u7684\u5b9e\u73b0\u601d\u8def"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u9879\u76ee\u5df2\u6709\u7684\u97f3\u9891\u529f\u80fd\u90fd\u662f\u57fa\u4e8e\u4e2d\u95f4\u4ef6 Wwise \u7684\uff0c\u97f3\u9891\u53ef\u89c6\u5316\u7684\u5b9e\u73b0\u4e5f\u9700\u8981\u7edf\u4e00\u5728\u540c\u4e00\u6846\u67b6\u4e0b\uff0c\u56e0\u6b64\u5177\u4f53\u7684\u5b9e\u73b0\u65b9\u5f0f\u4e5f\u591a\u4e86\u4e00\u4e9b\u9650\u5236\u548c\u8981\u6c42\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u7531\u4e8e\u7f16\u7a0b\u6c34\u5e73\u6709\u9650\uff0c\u5c3d\u91cf\u4e0d\u8003\u8651\u81ea\u5df1\u4fee\u6539\u6216\u91cd\u5199\u4ee3\u7801\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u636e\u6211\u4e86\u89e3\uff0c\u9664\u4e86 Wwise Meter \u63d2\u4ef6\u4e4b\u5916\uff0c\u76ee\u524d Wwise \u5e76\u6ca1\u6709\u76f4\u63a5\u4e0e\u97f3\u9891\u5206\u6790\u76f8\u5173\u7684\u529f\u80fd\uff0c\u65e0\u6cd5\u4ece Wwise \u4e2d\u4fbf\u6377\u5730\u83b7\u53d6\u9891\u8c31\u76f8\u5173\u7684\u58f0\u97f3\u4fe1\u606f\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"UE \u5f15\u64ce\u786e\u5b9e\u6709\u4e0d\u5c11\u4e0e\u97f3\u9891\u5206\u6790\u76f8\u5173\u7684\u529f\u80fd\uff0c\u4f46\u9700\u8981\u5728\u5176\u81ea\u8eab\u7684\u97f3\u9891\u7cfb\u7edf\u6846\u67b6\u4e0b\u4f7f\u7528\uff0c\u8fd9\u6837\u4e00\u6765\uff0c\u58f0\u97f3\u8d44\u6e90\u7684\u7ba1\u7406\u548c\u63a7\u5236\u90fd\u5c06\u4e0e Wwise \u8131\u8282\uff0c\u56e0\u6b64\u4e5f\u4e0d\u9002\u7528\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UE Blueprint Audio Visualization",src:i(7932).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u4e00\u79cd\u53ef\u884c\u7684\u5b9e\u73b0\u601d\u8def\u662f\uff0c\u5229\u7528 UE \u5f15\u64ce\u4e2d\u7684\u529f\u80fd\u5bf9\u58f0\u97f3\u6587\u4ef6\u8fdb\u884c\u5206\u6790\u5e76\u5b58\u50a8\u76f8\u5e94\u7684\u6570\u636e\uff0c\u7136\u540e\u901a\u8fc7 Wwise \u63a7\u5236\u58f0\u97f3\u7684\u64ad\u653e\u5e76\u8c03\u7528\u5bf9\u5e94\u65f6\u523b\u7684\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u65f6\u57df\u58f0\u97f3\u5305\u7edcenvelope",children:"\u65f6\u57df\uff1a\u58f0\u97f3\u5305\u7edc\uff08Envelope\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\u4ece\u76f8\u5bf9\u7b80\u5355\u7684 Envelope \u5165\u624b\u3002\u4ece\u6570\u636e\u7c7b\u578b\u6765\u770b\uff0c\u97f3\u9891\u4fe1\u53f7\u5728\u65f6\u57df\u4e0a\u7684\u77ac\u65f6\u503c\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u4e2a\u968f\u65f6\u95f4\u5feb\u901f\u53d8\u5316\u7684\u6d6e\u70b9\u6570\u53d8\u91cf\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528\u6765\u9a71\u52a8\u89c6\u89c9\u5143\u7d20\u7684\u5404\u79cd\u53c2\u6570\uff1b\u66f4\u8fdb\u4e00\u6b65\uff0c\u53ef\u4ee5\u5c06\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u53d8\u91cf\u6570\u503c\u5148\u5b58\u50a8\u8fdb\u6570\u7ec4\uff0c\u7136\u540e\u7528\u6570\u7ec4\u6765\u9a71\u52a8\u89c6\u89c9\u5143\u7d20\u7684\u53d8\u5316\uff0c\u8fd9\u6837\u5c31\u80fd\u8868\u73b0\u51fa\u97f3\u9891\u4fe1\u53f7\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u7684 Envelope \u5f62\u6001\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4e0a\u4e00\u8282\u5b9e\u73b0\u601d\u8def\u4e2d\u6240\u63d0\u5230\u7684\uff0c\u60f3\u5c3d\u53ef\u80fd\u5728 Wwise \u6846\u67b6\u4e0b\u5b9e\u73b0\u529f\u80fd\uff0c\u800c Wwise Meter \u63d2\u4ef6\u6b63\u597d\u53ef\u4ee5\u6ee1\u8db3\u8fd9\u4e00\u8981\u6c42\u3002\u5728\u4e2d\u95f4\u4ef6\u5185 Audio Bus \u4e0a\u4f7f\u7528 Wwise Meter \u63d2\u4ef6\u6765\u83b7\u53d6\u97f3\u9891\u4fe1\u53f7\u7684\u65f6\u57df\u77ac\u65f6\u503c\uff0c\u7136\u540e\u6620\u5c04\u5230\u521b\u5efa\u7684 Game Parameter \u4e0a\uff0c\u6700\u540e\u5728\u5f15\u64ce\u4e2d\u901a\u8fc7 GetRTPCValue \u8282\u70b9\u6765\u83b7\u53d6\u8be5\u6570\u503c\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Wwise Meter RTPC",src:i(1102).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5f15\u64ce\u4e2d\u83b7\u53d6\u5230\u8be5\u6570\u503c\u540e\uff0c\u9996\u5148\u901a\u8fc7 MapRangeClamped \u548c FInterpTo \u8282\u70b9\u5bf9\u6570\u636e\u8fdb\u884c\u6807\u51c6\u5316\u548c\u5e73\u6ed1\u5904\u7406\u3002\u7136\u540e\uff0c\u5c06\u6570\u636e\u5b58\u5165\u4e00\u4e2a\u5b9a\u957f\u7684\u6d6e\u70b9\u6570\u6570\u7ec4\u4e2d\uff0c\u6570\u7ec4\u957f\u5ea6\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5c55\u793a\u7684 Envelope \u957f\u5ea6\u6765\u51b3\u5b9a\u3002\u66f4\u65b0\u6570\u7ec4\u5185\u6570\u636e\u7684\u601d\u8def\u662f\uff0c\u5728\u6bcf\u4e00\u6b21 Tick \u65f6\uff0c\u6700\u65b0\u7684\u6570\u503c\u6c38\u8fdc\u5b58\u50a8\u5728\u6570\u7ec4\u7684\u6700\u5f00\u5934\u4f4d\u7f6e\uff0c\u6570\u7ec4\u4e4b\u540e\u7684\u4f4d\u7f6e\u4f9d\u6b21\u590d\u5236\u524d\u4e00\u4f4d\u7684\u6570\u503c\uff0c\u8fd9\u6837\u5c31\u80fd\u5c06\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u6570\u503c\u53d8\u5316\u5b58\u50a8\u4e0b\u6765\u5e76\u4e14\u6301\u7eed\u8fdb\u884c\u66f4\u65b0\u3002\u5982\u679c\u4ee5\u6bcf\u79d2 60 \u5e27\u7684 Tick \u901f\u7387\u6765\u8ba1\u7b97\uff0c\u957f\u5ea6\u4e3a 60 \u7684\u6570\u7ec4\u53ef\u4ee5\u8bb0\u5f55 1 \u79d2\u5185\u7684\u6570\u503c\u53d8\u5316\u3002\u6700\u540e\uff0c\u5c31\u53ef\u4ee5\u7528\u8be5\u6570\u7ec4\u5185\u7684\u6570\u636e\u6765\u540c\u6b65\u9a71\u52a8\u89c6\u89c9\u5143\u7d20\u7684\u8868\u73b0\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UE Update Envelope Line",src:i(6439).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"Envelope \u6548\u679c\u5982\u4e0b\u52a8\u56fe\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Audio Visualization Envelope Demo",src:i(113).A+"",width:"800",height:"450"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9891\u57df\u58f0\u97f3\u9891\u8c31spectrum",children:"\u9891\u57df\uff1a\u58f0\u97f3\u9891\u8c31\uff08Spectrum\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6570\u636e\u7c7b\u578b\u6765\u770b\uff0c\u97f3\u9891\u4fe1\u53f7\u5728\u67d0\u4e00\u65f6\u523b\u7684\u9891\u8c31\u4fe1\u606f\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u4e2a\u6d6e\u70b9\u6570\u6570\u7ec4\uff0c\u6570\u7ec4\u957f\u5ea6\u4ee3\u8868\u4e86\u9891\u7387\u8303\u56f4\uff0c\u800c\u5176\u4e2d\u5404\u4e2a\u4f4d\u7f6e\u4e0a\u7684\u6570\u503c\u53ef\u4ee5\u770b\u4f5c\u662f\u65f6\u57df\u77ac\u65f6\u503c\u5728\u9891\u57df\u4e0a\u7684\u5c55\u5f00\u3002\u7528\u8be5\u6570\u7ec4\u9a71\u52a8\u89c6\u89c9\u5143\u7d20\u7684\u53d8\u5316\u5e76\u4e0d\u65ad\u66f4\u65b0\uff0c\u5c31\u53ef\u4ee5\u8868\u73b0\u97f3\u9891\u4fe1\u53f7\u7684 Spectrum \u5f62\u6001\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u76ee\u524d UE Audio Synesthesia \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e09\u79cd\u97f3\u9891\u5206\u6790\u5de5\u5177 LoudnessNRT\u3001ConstantQNRT \u548c OnsetNRT\uff0c\u5206\u522b\u53ef\u4ee5\u63d0\u53d6\u97f3\u9891\u4fe1\u53f7\u7684\u54cd\u5ea6\u3001\u9891\u8c31\u548c\u77ac\u6001\u53d8\u5316\u7684\u4fe1\u606f\u3002\u5176\u4e2d NRT \u7684\u610f\u601d\u662f\u975e\u5b9e\u65f6\uff08Non Real Time\uff09\uff0c\u5de5\u4f5c\u539f\u7406\u662f\u5c06 Wav \u97f3\u9891\u6587\u4ef6\u5bfc\u5165\u5f15\u64ce\u4e2d\u5e76\u914d\u7f6e\u5206\u6790\u5de5\u5177\uff0c\u5206\u6790\u5f97\u5230\u7684\u6570\u636e\u4f1a\u88ab\u4fdd\u5b58\u5728\u76f8\u5e94\u7684 NRT \u5bf9\u8c61\u4e2d\uff0c\u83b7\u53d6\u5f53\u524d\u97f3\u9891\u4fe1\u53f7\u7684\u64ad\u653e\u4f4d\u7f6e\u5373\u53ef\u4ece NRT \u5bf9\u8c61\u4e2d\u8bfb\u53d6\u5bf9\u5e94\u65f6\u523b\u7684\u4fe1\u606f\u3002",(0,t.jsx)(n.br,{}),"\n","\u56e0\u6b64\uff0c\u53ef\u4ee5\u4f7f\u7528 ConstantQNRT \u5206\u6790\u5de5\u5177\u6765\u83b7\u53d6\u5e76\u4fdd\u5b58\u97f3\u9891\u4fe1\u53f7\u7684\u9891\u8c31\u4fe1\u606f\u3002\u5176\u4e2d ConstantQ \u6307\u7684\u662f\u4fe1\u53f7\u5904\u7406\u4e2d\u7684",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Constant-Q_transform",children:"\u5e38\u6570Q\u53d8\u6362"}),"\uff0c\u4e0e\u5e38\u89c1\u7684\u5085\u91cc\u53f6\u53d8\u5316\u6709\u5173\u3002\u5177\u4f53\u6709\u4f55\u533a\u522b\u6211\u4e5f\u8bb2\u4e0d\u6e05\uff0c\u53cd\u6b63\u53ef\u4ee5\u7528\u6765\u83b7\u53d6\u58f0\u97f3\u7684\u9891\u57df\u4fe1\u606f\u5c31\u5bf9\u4e86\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4e0b\u56fe\uff0c\u9996\u5148\u5728\u5f15\u64ce\u4e2d\u521b\u5efa ConstantQNRT \u5bf9\u8c61\uff0c\u5e76\u5728\u5176\u4e2d\u914d\u7f6e\u9700\u8981\u5206\u6790\u7684\u97f3\u9891\u6587\u4ef6\u3002\u6709\u9700\u8981\u7684\u8bdd\uff0c\u8fd8\u53ef\u4ee5\u521b\u5efa ConstantQNRT Setting \u5bf9\u8c61\uff0c\u8fdb\u4e00\u6b65\u8bbe\u7f6e\u4e0e\u9891\u8c31\u5206\u6790\u76f8\u5173\u7684\u5404\u79cd\u53c2\u6570\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UE Audio Synesthesia",src:i(2016).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528\u5f15\u64ce\u539f\u751f\u7684 Audio Component \u6765\u8bbe\u7f6e\u64ad\u653e\u7684\u97f3\u9891\u6587\u4ef6\u5e76\u83b7\u53d6\u5176\u65f6\u957f\uff0c\u7136\u540e\u901a\u8fc7 OnAudioPlaybackPercent \u4e8b\u4ef6\u6765\u83b7\u53d6 Playback Percent\uff0c\u8be5\u6570\u503c\u4e0e\u97f3\u9891\u6587\u4ef6\u65f6\u957f\u76f8\u4e58\u5373\u53ef\u5f97\u5230\u4ee5\u79d2\u4e3a\u5355\u4f4d\u7684 Current Play Position\uff0c\u6700\u540e\u4f7f\u7528 GetNormalizedChannelConstantQAtTime \u8282\u70b9\u6765\u8bfb\u53d6 ConstantQNRT \u4e2d\u76f8\u5e94\u65f6\u523b\u7684\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UE Audio Synesthesia Native Audio Component",src:i(6507).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0a\uff0c\u5c31\u662f\u4f7f\u7528 UE \u5f15\u64ce\u539f\u751f\u7ec4\u4ef6\u6765\u83b7\u53d6\u58f0\u97f3\u9891\u8c31\u4fe1\u606f\u7684\u65b9\u5f0f\u3002\u5982\u679c\u8981\u5f15\u5165\u4e2d\u95f4\u4ef6 Wwise \u6765\u63a7\u5236\uff0c\u53ea\u8981\u80fd\u83b7\u53d6\u97f3\u9891\u6587\u4ef6\u7684\u5f53\u524d\u64ad\u653e\u4f4d\u7f6e\u5c31\u53ef\u4ee5\u4e86\u3002\u5728",(0,t.jsx)(n.a,{href:"/Game-Audio-Design/Topic/A-Practice-of-Music-as-Level-Design-with-UE-Wwise",children:"\u300a\u201c\u97f3\u4e50\u4f5c\u4e3a\u5173\u5361\u8bbe\u8ba1\u201d UE & Wwise \u5b9e\u8df5\u6848\u4f8b\u300b"}),"\u7684\u201c\u83b7\u53d6\u5f53\u524d\u64ad\u653e\u4f4d\u7f6e\u4fe1\u606f\u201d\u7ae0\u8282\u4e2d\uff0c\u8bb2\u89e3\u4e86\u521b\u5efa GetSourcePlayPosition \u51fd\u6570\u4ece PostAkEvent \u8282\u70b9\u7684 Callback \u4fe1\u606f\u4e2d\u83b7\u53d6\u5f53\u524d\u64ad\u653e\u4f4d\u7f6e\u7684\u65b9\u6cd5\uff0c\u5728\u8fd9\u91cc\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e00\u51fd\u6570\u8282\u70b9\u5c31\u80fd\u4ece Wwise \u63a7\u5236\u7684\u97f3\u9891\u6587\u4ef6\u4e2d\u83b7\u53d6\u5f53\u524d\u64ad\u653e\u4f4d\u7f6e\uff0c\u7136\u540e\u4ecd\u65e7\u53ef\u4ee5\u4f7f\u7528 GetNormalizedChannelConstantQAtTime \u8282\u70b9\u6765\u8bfb\u53d6 ConstantQNRT \u4e2d\u76f8\u5e94\u65f6\u523b\u7684\u6570\u7ec4\u4fe1\u606f\u4e86\uff0c\u6700\u540e\u7528\u6b64\u6570\u636e\u6765\u540c\u6b65\u9a71\u52a8\u89c6\u89c9\u5143\u7d20\u7684\u8868\u73b0\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UE Audio Synesthesia Wwise Control",src:i(1381).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"Spectrum \u6548\u679c\u5982\u4e0b\u52a8\u56fe\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Audio Visualization Spectrum Demo",src:i(6310).A+"",width:"800",height:"450"})}),"\n",(0,t.jsx)(n.h2,{id:"\u65f6\u57df\u4e0e\u9891\u57df\u58f0\u97f3\u65f6\u9891\u8c31spectrogram",children:"\u65f6\u57df\u4e0e\u9891\u57df\uff1a\u58f0\u97f3\u65f6\u9891\u8c31\uff08Spectrogram\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5b9e\u73b0\u4e86 Envelope \u548c Spectrum \u4e4b\u540e\uff0c\u518d\u6765\u7406\u89e3 Spectrogram \u5c31\u7b80\u5355\u591a\u4e86\u3002Spectrogram \u53ef\u4ee5\u770b\u4f5c\u662f\u7531 Envelope \u548c Spectrum \u4e24\u8005\u6784\u6210\u7684\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4\uff0c\u6216\u8005\u5f62\u8c61\u5730\u6765\u770b\u5c31\u662f\u4e00\u4e2a\u4e8c\u7ef4\u77e9\u9635\uff0c\u5176\u4e2d Envelope \u4e00\u8f74\u8868\u793a\u7684\u662f\u65f6\u57df\uff0cSpectrum \u8868\u793a\u7684\u5219\u662f\u9891\u57df\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6\u5f53\u524d\u64ad\u653e\u4f4d\u7f6e\u548c\u5bf9\u5e94\u65f6\u523b\u9891\u8c31\u6570\u636e\u7684\u65b9\u6cd5\u4e0e\u4e0a\u4e00\u8282 Spectrum \u7c7b\u4f3c\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\u5982\u4f55\u7528 Spectrum \u6570\u7ec4\u4fe1\u606f\u6765\u751f\u6210\u548c\u9a71\u52a8\u89c6\u89c9\u5143\u7d20\u4e8c\u7ef4\u77e9\u9635\u7684\u53d8\u5316\u3002\u5982\u4e0b\u56fe\uff0c\u901a\u8fc7 SpawnSpectrogramMatrix \u548c UpdateSpectrogram \u4e24\u4e2a\u51fd\u6570\u8282\u70b9\u6765\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UE BP Spectrogram Overview",src:i(4354).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 SpawnSpectrogramMatrix \u51fd\u6570\u8282\u70b9\u4e2d\uff0c\u9996\u5148\u4ee5 SpectrumBandNumber \u4e3a\u884c\u957f\u3001SpectrogramLength \u4e3a\u5217\u957f\u6765\u751f\u6210\u4e8c\u7ef4\u77e9\u9635\u3002\u5176\u4e2d SpectrumBandNumber \u5bf9\u5e94\u7684\u662f\u4ece ConstantQNRT \u5bf9\u8c61\u4e2d\u83b7\u53d6\u5230\u7684\u5355\u4e2a Spectrum \u6570\u636e\u7684\u6570\u7ec4\u957f\u5ea6\uff0c\u53ef\u4ee5\u5728 ConstantQNRT Setting \u5bf9\u8c61\u4e2d\u8bbe\u7f6e\uff1bSpectrogramLength \u8868\u793a\u7684\u662f\u540c\u65f6\u5c55\u793a\u7684 Spectrum \u6570\u7ec4\u7684\u4e2a\u6570\uff0c\u6570\u503c\u8d8a\u5927\u5219\u8868\u73b0\u5185\u5bb9\u7684\u65f6\u957f\u8d8a\u957f\u3002",(0,t.jsx)(n.br,{}),"\n","\u53e6\u5916\uff0c\u5728\u5c06\u751f\u6210\u7684\u89c6\u89c9\u5143\u7d20\u5b58\u5165\u6570\u7ec4\u7684\u540c\u65f6\uff0c\u9700\u8981\u5c06\u6bcf\u4e00\u5217\u6700\u5f00\u59cb\u5143\u7d20\u7684\u7d22\u5f15\u503c\u5b58\u5165\u5230 ColumnStartIndexArray \u6570\u7ec4\u4e2d\uff0c\u4e4b\u540e\u7528\u6765\u6307\u793a\u6bcf\u4e00\u4e2a Spectrum \u6570\u7ec4\u5728\u77e9\u9635\u4e2d\u66f4\u65b0\u6570\u636e\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UE Spectrogram Matrix Initial",src:i(511).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UE BP Spawn Spectrogram Matrix",src:i(2688).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 UpdateSpectrogram \u51fd\u6570\u8282\u70b9\u4e2d\uff0c\u904d\u5386 ColumnStartIndexArray \u6570\u7ec4\u5e76\u7ed3\u5408 SpectrumBandNumber \u6570\u503c\u6765\u627e\u5230\u6bcf\u4e00\u5217\u7684\u8d77\u6b62\u8303\u56f4\uff1b\u540c\u65f6\uff0c\u4ee5 CurrentPlayPosition \u4e3a\u57fa\u51c6\u3001\u6839\u636e ColumnStartIndexArray \u4e2d\u7684\u7d22\u5f15\u503c\u6765\u5bf9\u9001\u5165 GetNormalizedChannelConstantQAtTime \u8282\u70b9\u7684 InSeconds \u6570\u503c\u505a\u504f\u5dee\u8c03\u6574\uff0c\u8fd9\u6837\u5c31\u80fd\u4ece ConstantQNRT \u5bf9\u8c61\u4e2d\u83b7\u53d6\u4e00\u6bb5\u65f6\u95f4\u5185\u8fde\u7eed\u591a\u4e2a Spectrum \u6570\u7ec4\u7684\u6570\u636e\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UE BP Update Spectrogram",src:i(9913).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"Spectrogram \u6548\u679c\u5982\u4e0b\u52a8\u56fe\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Audio Visualization Spectrogram Demo",src:i(8774).A+"",width:"800",height:"450"})}),"\n",(0,t.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u8ff0\u65b9\u6cd5\u53ea\u662f\u5728\u6587\u7ae0\u5f00\u5934\u63d0\u51fa\u7684\u8981\u6c42\u4e0e\u9650\u5236\u4e0b\u53d6\u5de7\u5730\u5b9e\u73b0\u4e86\u97f3\u9891\u53ef\u89c6\u5316\u7684\u529f\u80fd\uff0c\u4ece\u5404\u4e2a\u65b9\u9762\u6765\u8bc4\u5224\u90fd\u7b97\u4e0d\u4e0a\u662f\u6700\u4f18\u89e3\u3002\u4e00\u4e2a\u663e\u800c\u6613\u89c1\u7684\u95ee\u9898\u5c31\u662f\uff0c\u540c\u4e00\u4e2a\u97f3\u9891\u6587\u4ef6\u9700\u8981\u5728\u5f15\u64ce\u548c\u4e2d\u95f4\u4ef6\u4e2d\u5206\u522b\u5bfc\u5165\uff0c\u4e00\u4efd\u7528\u4e8e\u6570\u636e\u5206\u6790\uff0c\u4e00\u4efd\u7528\u4e8e\u64ad\u653e\u63a7\u5236\uff0c\u5982\u679c\u6587\u4ef6\u6570\u91cf\u5f88\u591a\u7684\u8bdd\uff0c\u5c31\u4f1a\u9020\u6210\u5b58\u50a8\u8d44\u6e90\u7684\u6d6a\u8d39\u3002",(0,t.jsx)(n.br,{}),"\n","\u6240\u4ee5\uff0c\u5982\u679c\u6ca1\u6709\u9700\u8981\u914d\u5408\u4e2d\u95f4\u4ef6\u7684\u8981\u6c42\uff0c\u5927\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 UE \u5f15\u64ce\u7684\u539f\u751f\u529f\u80fd\u6765\u5b9e\u73b0\u7b80\u5355\u7684\u97f3\u9891\u53ef\u89c6\u5316\u529f\u80fd\uff1b\u5f53\u7136\u7406\u60f3\u60c5\u51b5\u662f\uff0cWwise \u81ea\u8eab\u80fd\u6709\u66f4\u591a\u97f3\u9891\u5206\u6790\u76f8\u5173\u7684\u529f\u80fd\u548c\u4e0e\u5f15\u64ce\u8fdb\u884c\u6570\u636e\u901a\u4fe1\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.unrealengine.com/en-US/BlueprintAPI/Audio/Components/Audio/index.html",children:"Unreal Engine Blueprint API Reference - Audio Component"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://docs.unrealengine.com/en-US/BlueprintAPI/Audio/Analysis/index.html",children:"Unreal Engine Blueprint API Reference - Audio Analysis"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://docs.unrealengine.com/en-US/BlueprintAPI/AudioAnalyzer/index.html",children:"Unreal Engine Blueprint API Reference - Audio Analyzer"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://docs.unrealengine.com/en-US/BlueprintAPI/SoundVisualization/index.html",children:"Unreal Engine Blueprint API Reference - Sound Visualization"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://docs.unrealengine.com/en-US/BlueprintAPI/TimeSynth/index.html",children:"Unreal Engine Blueprint API Reference - Time Synth"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://docs.unrealengine.com/en-US/WorkingWithMedia/Audio/Synesthesia/index.html",children:"Unreal Engine 4 Documentation - Audio Synesthesia"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://www.audiokinetic.com/library/edge/?source=Help&id=wwise_meter_plug_in_effect",children:"Wwise Help - Wwise Meter"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5e0c\u8fb0",(0,t.jsx)(n.br,{}),"\n","2021.4.3"]}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},113:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Envelope_Demo-5faa76c397d2ee732229c240a0a7377c.gif"},6439:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Envelope_UE_UpdateEnvelopeLine-56e3af819a0701ccfd5ccaffe5735411.png"},1102:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Envelope_Wwise_Meter_RTPC-c4fbbff6371269d917d44eb238893676.png"},5747:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrogram-676db984c6ac3b6caa18b8fc822446fb.png"},8774:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrogram_Demo-3135c48ed8b4b89963a9021c16e15034.gif"},511:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrogram_SpectrogramMatrixInitial-7ba32e9561020dc9077da206c058c8b0.png"},4354:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrogram_UE_Overview-350d1ba3a02a0cf3ed66457f8316ea51.png"},2688:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrogram_UE_SpawnSpectrogramMatrix-f59f3714be9035a812921ab53d4945d4.png"},9913:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrogram_UE_UpdateSpectrogram-3933de9ad935100d0961176a4b6f6f74.png"},8211:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrum-8aacee83e99a37a2ab8d8f5a924b3d6e.png"},6310:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrum_Demo-3df1b446066b622be3605e580f9fa1dd.gif"},2016:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrum_Synesthesia_ConstantQNRT_Object-74146ec15dda394c64b7afa8b66f1849.png"},6507:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrum_Synesthesia_NativeAudioComp-042dc210cf81769d998df543c013ab0b.png"},1381:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Spectrum_Synesthesia_WwiseControl-1f11382c8232d17c1a56583ab4d5a534.png"},7932:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/UE_Blueprint_Overview-b87aea6b1b72d4aeadd75e0a70c1074c.png"},2849:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/WaveformAndMeter-67f1032b62fffad28a85c47749bc7d2d.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var s=i(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);