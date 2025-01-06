/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Join the Discord!": "加入 Discord!",
    "Generators": "生成器",
    "Stats": "统计",
    "Stored Time": "存储时间",
    "Reset your progress to gain PRai.": "重置你的进度以获得PRai.",
    "WARNING:": "警告:",
    "Warning: This section of the game contains spoilers!": "警告：游戏的这一部分包含剧透！",
    "You may find some weird things in this incremental!": "您可能会在这个增量中发现一些奇怪的东西！",
    ", and more!": "，以及更多！",
    "Accelerate time!": "加速时间!",
    "Cheats": "作弊",
    "Community!": "社区!",
    "Consume offline time to speed up the game!": "消耗离线时间来加速游戏！",
    "Creating Saves": "创建保存",
    "Running": "运行中",
    "Disabled": "已禁用",
    "Unnormalized": "非标准化",
    "Delete Save": "删除保存",
    "Delete save list.": "删除保存列表。",
    "Duplicate Save": "复制保存",
    "Export Save": "导出存档",
    "Export save list to clipboard.": "导出保存列表到剪贴板。",
    "Import Save": "导入存档",
    "Import save file into new slot.": "导入保存文件到新的槽位。",
    "Import save list.": "导入存档列表。",
    "Inspired by": "灵感来自",
    "Links": "链接",
    "Join the": "加入",
    "Load Save": "加载存档",
    "Normal": "正常",
    "Normalize time.": "正常时间。",
    "Other Options": "其他选项",
    "Pause time.": "暂停时间。",
    "of Offline Time.": "离线时间。",
    "of the game on Github!": "游戏在Github上！",
    "Notes": "注意",
    "Note: The boost you select will automatically adjust to the amount of Offline Time you have. What you're doing is selecting how much % to use of your current Offline Time every second.": "注意：你选择的提升会自动调整到你的离线时间。您所做的是选择每秒使用当前离线时间的百分比。",
    "Rename Save": "重命名存档",
    "Save List": "存档列表",
    "Save manually.": "手动保存。",
    "Saving": "保存",
    "See the": "查看",
    "source code": "源码",
    "Mixed Scientific": "混合科学",
    "This was a game mostly made for fun, and mostly for an incremental I wanted to make when I was bored.": "这是一款主要是为了乐趣而创造的游戏，也是我在无聊时想要创造的内容。",
    "This will bug out if you use the offline time boost with this!": "如果您使用离线时间提升，则会出现错误！",
    "Update Log": "更新日志",
    "Change when notation starts.": "当符号开始时更改。",
    "The game has been saved!": "游戏已保存！",
    "All that time wasted...": "所有的时间都被浪费了……",
    "Are you rich now?": "你现在有钱了吗？",
    "Do a PR2 reset twice.": "重置PR2两次。",
    "Do your first PRai reset.": "进行第一次PRai重置。",
    "Starting off?": "开始？",
    "This cannot be endgame.": "这不可能是终局。",
    "This may require you to do a higher level reset (like PR2) if you had already done a PRai reset!": "这可能需要你做一个更高级别的重置（如PR2），如果你已经做了一个PRai重置！",
    "This really is a clone of Distance Incremental!": "这真的是一个距离增量的克隆！",
    "Failed due to having PRai reset 1 times.": "PRai重置1次失败。",
    "Get your first softcap.": "获得你的第一个软上限。",
    "Have 1.000 Qi points without doing a PRai reset.": "在没有做PRai重置的情况下，拥有1.000 Qi点数。",
    "Instant gratification.": "即时满足。",
    "Let me show you how cruel I was with this...": "让我告诉你我有多残忍……",
    "No! Not again! This is not Distance Incremental!": "不！又来了！这不是距离增量！",
    "Not my progress!": "不是我的进度！",
    "Receive 1,000 PRai in a single PRai reset.": "在一次PRai重置中获得1000个PRai",
    "Reward: Increase your number generation by 20%.": "奖励：增加你的数字生成20%。",
    "Reward: PR2 requirement is reduced by 33.333%.": "奖励：PR2需求降低33.333%。",
    "Reward: PRai effect is increased by 100%.": "奖励：PRai效果提高100%。",
    "Normalized": "标准化",
    "Paused": "已暂停",
    "You must reach": "你必须达到",
    "PRai to unlock the next layer.": "PRai 以解锁下一层.",
    "At 1 PR2 reset, you gain a new upgrade and make PRai resets unforced.": "在1 PR2重置时，您获得新的升级，并使PRai重置为非强制的。",
    "At 2 PR2 resets, unlock the Upgrade 1 Autobuyer.": "在2次PR2重置时，解锁 升级1 自动购买器。",
    "Reset all of your previous progress to for a PR2 reset.": "重置所有你之前的进度并进行PR2重置。",
    "you gain a new upgrade and make PRai resets unforced.": "你获得了一个新的升级，并使PRai重置变成非强制的。",
    "At 4 PR2 resets, unlock the Upgrade 2 Autobuyer and increase the Upgrade 2 base from 1.200x -> 1.300x.": "在4次PR2重置时，解锁 升级2 自动购买器，并提升升级2的基数从 1.200x -> 1.300x",
    "At 5 PR2 resets, unlock Upgrade 3": "5次PR2重置后，解锁升级3",
    "Do a PR2 reset 4 times in total.": "累计重置4次PR2。",
    "PR2 to unlock the next layer.": "PR2解锁下一层。",
    "What once was part of a bygone era...": "曾经是过去时代的一部分……",
    "unlock the Upgrade 2 Autobuyer and increase the Upgrade 2 base from 1.200x -> 1.300x.": "解锁 升级2 自动购买器并提升 升级2 基数从从 1.200x -> 1.300x",
    "At 6 PR2 resets, unlock One-Upgrades.": "6次PR2重置后，解锁一次性升级。",
    "Do a PR2 reset 11 times.": "完成11次PR2重置。",
    "Failed due to having PRai reset 10 times.": "PRai重置10次失败。",
    "Failed due to having Upgrade 3": "由于升级3而失败",
    "Going even further beyond!": "走得更远！",
    "Have 1.000 QaDc points without buying Upgrade 3.": "在不购买升级3的情况下获得 1.000 QaDc 点数",
    "Reward: PR2's cost base is decreased from 10 to 9.": "奖励：PR2的成本基数由10降低为9。",
    "Bought!": "已购买!",
    "Cost:": "成本:",
    "Main": "主界面",
    "One-Upgrades": "一次性升级",
    "Divide Upgrade 2's cost based off of your PRai.": "根据你的PRai分摊升级2的费用。",
    "Delay Upgrade 1's scaling by a little bit.": "延迟升级1的缩放一点点。",
    "At 7 PR2 resets, weaken Upgrade 1's scaling strength by 10.000%.": "在PR2重置7次时，削弱升级1的缩放强度10.000%。",
    "PRai.": "PRai.",
    "unlock One-Upgrades.": "解锁一次性升级。",
    "Raise One-Upgrade 1 based off of your points.": "基于你的点数提升 一次性升级1。",
    "Slowly increase Upgrade 1's base over time, maxing out over 5 minutes in this PRai reset.": "随着时间的推移慢慢增加升级1的基数，在这个PRai重置中最多超过5分钟。",
    "PRai gain is multiplied based off how much time you spent in this PRai reset.": "PRai增益是根据你在这个PRai重置中花费的时间来乘以的。",
    "At 9 PR2 resets, increase Upgrade 1's base by +0.050.": "在9次PR2重置时，升级1的基数增加+0.050。",
    "At 11 PR2 resets, slow down Upgrade 3's cost by 10.000%.": "在11 PR2重置时，降低升级3的成本10.000%。",
    "At 15 PR2 resets, decrease Upgrade 2's superscaling strength by 12.500%.": "在PR2重置15次时，将升级2的超缩放强度降低12.500%。",
    "At 20 PR2 resets, weaken Upgrade 1's cost scaling by 2.500%.": "在PR2重置20次时，削弱升级1的成本缩放2.500%。",
    "At 25 PR2 resets, keep One-Upgrades, and Upgrade 1 and 2's scaling and super scaling starts 15.0 later.": "在25 PR2重置时，保留一次性升级，以及升级1和升级2的缩放和超级缩放在15.0之后开始。",
    "decrease Upgrade 2's superscaling strength by 12.500%.": "降低第2等级的超级缩放强度12.500%。",
    "increase Upgrade 1's base by +0.050.": "增加升级1的基数+0.050。",
    "keep One-Upgrades, and Upgrade 1 and 2's scaling and super scaling starts 15.0 later.": "保留一次性升级，以及升级1和升级2的缩放和超级缩放在15.0之后开始。",
    "slow down Upgrade 3's cost by 10.000%.": "降低升级3的成本10.000%",
    "weaken Upgrade 1's cost scaling by 2.500%.": "使升级1的成本降低2.500%",
    "weaken Upgrade 1's scaling strength by 10.000%.": "使升级1的缩放强度降低10.000%",
    "Main Tab": "主标签页",
    "Progress": "进度",
    "Scaling / Softcaps": "缩放 / 软上限",
    "All Factors": "全部因子",
    "Kuaraniai": "Kuaraniai",
    "Stockpiler": "储备",
    "Save up 1.000 T PRai on a Kuaraniai run.": "在一次Kuaraniai运行节省 1.000 T PRai。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "Hevipelle": "Hevipelle",
    "MrRedShark77": "MrRedShark77",
    "Jacorb": "Jacorb",
    "true": "true",
    "false": "false",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "FPS: ": "FPS: ",
    "PRai: ": "PRai: ",
    "Upgrade ": "升级",
    "Autosave Interval: ": "自动保存间隔: ",
    "Currently: ": "当前: ",
    "Points: ": "点数: ",
    "Set Time Speed. Currently: ": "设置时间速度。当前: ",
    "Show scaling/softcap colors. Currently: ": "显示缩放/软上限颜色。当前: ",
    "Switch notation. Currently: ": "切换符号。当前: ",
    "Show the upgrade's effect base. If false, will show the upgrade's exact effect. Currently: ": "显示升级基础的影响。如果为false，将显示升级的确切效果。当前: ",
    "Total Points in PRai: ": "PRai总点数：",
    "Achievement Tier ": "成就层级 ",
    "Reward: Your PRai's multiplier goes from ": "奖励：你的PRai乘数变为 ",
    "(This boost will last for ": "(这个提升将持续 ",
    "Resetting now will boost your points by ": "现在重置将提高你的点数 ",
    "Make Upgrade 1's base reach ×": "使升级1的基数达到 x",
    "Time in PRai reset: ": "PRai重置用时：",
    "Total Points: ": "总计点数：",
    "PR2 resets: ": "PR2重置: ",
    "Best PR2: ": "最佳PR2：",
    "Total PRai: ": "总PRai：",
    "Total PRai in PR2: ": "PR2的总PRai：",
    "Effective PRai in Kuaraniai: ": "Kuaraniai的有效PRai：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "/s": "/秒",
    "/s)": "/秒)",
    "s.)": "秒.)",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+): ([\d\.]+)(.+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m$/,
    /^([\d\.]+)h ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^\(([\d\.]+)$/,
    /^\(([\d\.]+) (.+)$/,
    /^([\d\.]+)×$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^\#\(([\d\.]+), ([\d\.]+)\)$/,
    /^\#([\d\.]+)$/,
    /^\^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) TDc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QiDc$/,
    /^([\d\.]+) DDc$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)([\d\.]+)$/,
    /^([\d\.,]+)([\d\.]+)×$/,
    /^\(([\d\.,]+)([\d\.]+)$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^\(([\d\.]+)e\-([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Increase point gain by (.+)$/, '提高点数增益 $1'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Have (.+) Kuaraniai.$/, '拥有 $1 Kuaraniai。'],
    [/^Next in (.+) points. (.+)$/, '下一个还需要 $1 点数。$2'],
    [/^You need (.+) PRai to PR(.+) reset.$/, '你需要 $1 PRai 以进行 PR$2 重置。'],
    [/^You have (.+) PR(.+), which boosts your PRai and points by (.+).$/, '你有 $1 PR$2，这将提升你的PRai和点数 $3。'],
    [/^You can (.+) reset! (.+)$/, '可以进行 $1 重置了！$2'],
    [/^Reset your progress to gain (.+) PRai.$/, '重置你的进度以获得 $1 PRai。'],
    [/^Reward: UP1\'s scaling is weakened based off of PRai. Currently: (.+) weaker.$/, '奖励：基于PRai，削弱升级1的缩放。当前：弱化 $1'],
    [/^Point gain is increased by (.+). \((.+) per main achievement\)$/, '点数增益提高 $1. \($2 每个主成就\)'],
    [/^(.+), which is consuming (.+) of Offline Time per second.$/, '$1，每秒消耗 $2 离线时间。'],
    [/^Gain at least (.+) points to do a PRai reset.$/, '获得至少 $1 点数以进行PRai重置。'],
    [/^You can PRai reset in (.+)$/, '你可以在 $1 内进行PRai重置'],
    [/^You have (.+) PRai, which boosts your points by (.+).$/, '你拥有 $1 PRai，这将使你的点数提升 $2。'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) KShards$/, '$1 K碎片'],
    [/^([\d\.,]+)([\d\.]+) KShards$/, '$1$2 K碎片'],
    [/^([\d\.]+) KPower$/, '$1 K力量'],
    [/^([\d\.,]+)([\d\.]+) KPower$/, '$1$2 K力量'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^unlock Upgrade ([\d\.,]+).$/, '解锁 升级$1。'],
    [/^unlock the Upgrade ([\d\.,]+) Autobuyer.$/, '解锁升级 $1 自动购买器。'],
    [/^([\d\.,]+) Autobuyer: On$/, '$1 自动购买器: 开'],
    [/^([\d\.,]+) Autobuyer: Off$/, '$1 自动购买器: 关'],
    [/^Decreases Upgrade ([\d\.,]+)\'s cost by (.+)$/, '降低 升级$1 的成本 $2'],
    [/^Increases Upgrade ([\d\.,]+)\'s base by (.+)$/, '提高 升级$1 的基数 $2'],
    [/^(.+) Points$/, '$1 点数'],
    [/^Best Upgrade ([\d\.,]+): ([\d\.,]+)$/, '最佳升级$1: $2'],
    [/^Total: (.+) to Upgrade (.+)\'s cost$/, '总计: $1 到 升级$2 的成本'],
    [/^Total: (.+) to Upgrade (.+)\'s base$/, '总计: $1 到 升级$2 的基数'],
    [/^([\d\.,]+) digits.$/, '$1 位数。'],
    [/^Have at least ([\d\.,]+) PRai.$/, '至少有 $1 PRai。'],
    [/^Have at least ([\d\.,]+) UP([\d\.,]+).$/, '至少有 $1 升级$2。'],
    [/^Get ([\d\.,]+) UP([\d\.,]+).$/, '获得 $1 升级$2。'],
    [/^Save \#([\d\.,]+)$/, '存档 \#$1'],
    [/^A prelude ([\d\.,]+)$/, '序曲 $1'],
    [/^Enhancing ([\d\.,]+)$/, '强化 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^PR([\d\.,]+): ([\d\.,]+)$/, 'PR$1: $2'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Total: (.+) to point gain$/, '总计: $1 点数增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);