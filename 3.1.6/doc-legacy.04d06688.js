System.register(["./vendor-legacy.44d419bd.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>Popover 气泡弹出框</h1><h3>介绍</h3><p>点击或在元素上悬停鼠标，弹出气泡卡片浮层。</p><h3>安装</h3><pre><code class="language-javascript">\n<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Popover } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Popover } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Popover);\n\n</code></pre><h3>代码实例</h3><h3>基本用法</h3><p>Popover 支持明朗和暗黑两种风格，默认为明朗风格，将 theme 属性设置为 dark 可切换为暗黑风格。</p><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-popover</span>\n      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>\n      <span class="hljs-attr">:itemList</span>=<span class="hljs-string">&quot;itemList&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>明朗风格<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-popover</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-popover</span>\n      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>\n      <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>\n      <span class="hljs-attr">:itemList</span>=<span class="hljs-string">&quot;itemList&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>暗黑风格<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-popover</span>&gt;</span>\n</code></pre><h3>选项配置</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-popover</span>\n      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>\n      <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>\n      <span class="hljs-attr">:itemList</span>=<span class="hljs-string">&quot;itemList&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>展示图标<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-popover</span>&gt;</span>\n\n</code></pre><p>在 itemList 数组中，可以通过 disabled 字段来禁用某个选项。</p><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-popover</span>\n      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>\n      <span class="hljs-attr">:itemList</span>=<span class="hljs-string">&quot;itemListDisabled&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>禁用选项<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-popover</span>&gt;</span>\n</code></pre><h3>自定义内容</h3><p>在名为 content 插槽中自定义内容。</p><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-popover</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>自定义内容<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;self-content&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n                      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;self-content-item&quot;</span>\n                      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in selfContent&quot;</span>\n                      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>\n                    &gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item.name&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;15&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;self-content-desc&quot;</span>&gt;</span>{{ item.desc }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-popover</span>&gt;</span>\n</code></pre><h3>位置自定义</h3><p>支持 bottom, top, left, right 四种弹出位置，默认值为 bottom。</p><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-popover</span>\n      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>\n      <span class="hljs-attr">location</span>=<span class="hljs-string">&quot;top&quot;</span>\n      <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>\n      <span class="hljs-attr">:itemList</span>=<span class="hljs-string">&quot;itemList&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>向上弹出<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-popover</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-popover</span>\n      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>\n      <span class="hljs-attr">location</span>=<span class="hljs-string">&quot;right&quot;</span>\n      <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>\n      <span class="hljs-attr">:itemList</span>=<span class="hljs-string">&quot;itemList&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>向右弹出<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-popover</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-popover</span>\n      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>\n      <span class="hljs-attr">location</span>=<span class="hljs-string">&quot;left&quot;</span>\n      <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>\n      <span class="hljs-attr">:itemList</span>=<span class="hljs-string">&quot;itemList&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>向左弹出<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-popover</span>&gt;</span>\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>itemList</td><td>选项列表</td><td>Action[]</td><td>[]</td></tr><tr><td>v-model</td><td>是否展示气泡弹出层</td><td>boolean</td><td>false</td></tr><tr><td>theme</td><td>主题风格，可选值为 dark</td><td>string</td><td><code>light</code></td></tr><tr><td>location</td><td>弹出位置，可选值为 top,left,right</td><td>string</td><td><code>bottom</code></td></tr></tbody></table><h3>iconItemList 数据结构</h3><p>iconItemList 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>选项文字</td><td>string</td><td>-</td></tr><tr><td>icon</td><td>nut-icon 图标名称</td><td>string</td><td>-</td></tr><tr><td>disabled</td><td>是否为禁用状态</td><td>boolean</td><td>false</td></tr></tbody></table>',24)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",l,p)))})}}}));
