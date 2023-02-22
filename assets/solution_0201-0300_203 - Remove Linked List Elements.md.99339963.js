import{_ as s,o as n,c as a,a as l}from"./app.e5967ba7.js";const F=JSON.parse('{"title":"203. Remove Linked List Elements","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0201-0300/203 - Remove Linked List Elements.md","lastUpdated":1676656807000}'),p={name:"solution/0201-0300/203 - Remove Linked List Elements.md"},e=l(`<h1 id="_203-remove-linked-list-elements" tabindex="-1">203. Remove Linked List Elements <a href="https://leetcode.com/problems/remove-linked-list-elements/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_203-remove-linked-list-elements" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given the <code>head</code> of a linked list and an integer <code>val</code>, remove all the nodes of the linked list that has <code>Node.val == val</code>, and return <em>the new head</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg" style="width:500px;height:142px;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: head = [1,2,6,3,4,5,6], val = 6</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: [1,2,3,4,5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: head = [], val = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 3:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: head = [7,7,7,7], val = 7</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.</li><li><code>1 &lt;= Node.val &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 50</code></li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-tMrU_" id="tab-k7mPkFJ" checked="checked"><label for="tab-k7mPkFJ">Go</label></div><div class="blocks"><div class="language-go active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Val  </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	Next </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Iterative</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeElements</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> val </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> head </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> head </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Val </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> val </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		head </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> head </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Val </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> val </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> head</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Recursive</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeElementsRecursive</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> val </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> head </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeElementsRecursive</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Val </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> val </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> head</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),o=[e];function t(c,r,D,C,y,A){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
