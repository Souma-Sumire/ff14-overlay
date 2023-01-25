# 时间轴语法简易帮助

## 来源

本文档节取并修改自[Cactbot时间轴指南](https://github.com/quisquous/cactbot/blob/main/docs/zh-CN/TimelineGuide.md)。

### 注释

时间轴中的 `#` 符号用于定义注释，其后的所有内容均会被忽略。

### 条目

以下是一些时间轴条目的语法示例。每一行的条目均以事件时间和事件名称开始。

`数字 "字符串" (sync /正则/) (tts "字符串") (window 数字,数字) (jump 数字)`

括号表示这个部分是可选的，括号本身并不是语法的组成部分。

如

- `00:12.7 "<牵制>~"`
- `00:05.5 "<心眼>~" tts "开心眼"`
- `00:10.9 "亘古不灭之火" sync /^.{14} \w+ 14:4.{7}:[^:]+:79DF:/`

数字：可以是整数，如 `34`；也可以是浮点数，如 `84.381`；也可以是MM:SS格式，如 `05:20`；

字符串：如 `"坠落"` 或 `"双重攻击"`。你可以使用 `<技能名>` 来插入图片；使用 `<技能名>~` 可以快捷重复字符名的字符串。

正则：一个标准的 [Javascript 正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)。

`window 数字,数字` 规定了同步的时间范围。若 `window` 未设置，默认将其视同为设置了 `window 2.5,2.5`。也就是，相对于当前事件时间的前2.5秒至后2.5秒之间。时间轴通常在独特的技能上使用较大的window值，以确保时间轴可以正确地同步到正确的位置。

`jump 数字` 告诉时间轴在匹配sync成功时跳转至指定的时间点。

时间与事件名称永远在最开始的位置，但 `tts、sync、window`、`jump` 并没有明确的顺序规定。