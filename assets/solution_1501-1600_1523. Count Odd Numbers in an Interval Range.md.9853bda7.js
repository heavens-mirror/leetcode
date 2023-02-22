import{_ as t,r as p,o as r,c,b as s,f as n,e,w as l,a as o}from"./app.e5967ba7.js";const k=JSON.parse('{"title":"1523. Count Odd Numbers in an Interval Range","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/1501-1600/1523. Count Odd Numbers in an Interval Range.md","lastUpdated":1676656807000}'),i={name:"solution/1501-1600/1523. Count Odd Numbers in an Interval Range.md"},d=o('<h1 id="_1523-count-odd-numbers-in-an-interval-range" tabindex="-1">1523. Count Odd Numbers in an Interval Range <a href="https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_1523-count-odd-numbers-in-an-interval-range" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2>',3),u=s("code",null,"low",-1),h=s("em",null,"count of odd numbers between ",-1),C=s("code",null,"low",-1),_=s("em",null," and ",-1),y=s("em",null," (inclusive)",-1),D=o(`<p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Input: low = 3, high = 7</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The odd numbers between 3 and 7 are [3,5,7].\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;&lt;strong class=&quot;example&quot;&gt;Example 2:&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Input: low = 8, high = 10 Output: 1 Explanation: The odd numbers between 8 and 10 are [9].\`\`\`</p><p> </p><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= low &lt;= high &lt;= 10^9</code></li></ul><details class="details custom-block"><summary><em>Click to open Hints</em></summary><ul><li>If the range (high - low + 1) is even, the number of even and odd numbers in this range will be the same.</li><li>If the range (high - low + 1) is odd, the solution will depend on the parity of high and low.</li></ul></details><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-O_rhB" id="tab-vHyFkY6" checked="checked"><label for="tab-vHyFkY6">Go</label></div><div class="blocks"><div class="language-go active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">countOdds</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">low </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> high </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">high </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">low </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12);function A(g,m,b,F,v,f){const a=p("font");return r(),c("div",null,[d,s("p",null,[n("Given two non-negative integers "),u,n(" and "),s("code",null,[e(a,{face:"monospace"},{default:l(()=>[n("high")]),_:1})]),n(". Return the "),h,C,_,s("code",null,[e(a,{face:"monospace"},{default:l(()=>[n("high")]),_:1})]),y,n(".")]),D])}const x=t(i,[["render",A]]);export{k as __pageData,x as default};
