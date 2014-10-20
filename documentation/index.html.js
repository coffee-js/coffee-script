<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
  <meta name="description" content="CoffeeScript 中文, Unfancy JavaScript, 翻译">
  <title>CoffeeScript 中文</title>
  <link rel="canonical" href="http://coffeescript.org" />
  <link rel="stylesheet" type="text/css" href="documentation/css/docs.css" />
  <link rel="stylesheet" type="text/css" href="documentation/css/tomorrow.css" />
  <link rel="shortcut icon" href="documentation/images/favicon.ico" />
</head>
<body>


  <div id="fadeout"></div>

  <div id="flybar">
    <a href="https://github.com/coffee-js/coffee-script">
      <img style="position: fixed; top: 0; right: 0; border: 0; z-index: 200;" src="http://coffee-js.qiniudn.com/ribbon.png" alt="Fork me on GitHub">
    </a>
    <a id="logo" href="#top"><img src="documentation/images/logo.png" width="225" height="39" alt="CoffeeScript" /></a>
    <div class="navigation toc">
      <div class="button">
        目录
      </div>
      <div class="contents menu">
        <a href="#overview">概览</a>
        <a href="#installation">安装</a>
        <a href="#usage">用法</a>
        <a href="#literate">Literate CoffeeScript</a>
        <a href="#language">语言手册</a>
        <a href="#literals">字面量: 函数, 对象和数组</a>
        <a href="#lexical-scope">词法作用域和变量安全</a>
        <a href="#conditionals">if, else, unless 和条件赋值</a>
        <a href="#splats">变参(splats)...</a>
        <a href="#loops">循环和推导式</a>
        <a href="#slices">Array Slicing and Splicing</a>
        <a href="#expressions">Everything is an Expression</a>
        <a href="#operators">Operators and Aliases</a>
        <a href="#classes">Classes, Inheritance, and Super</a>
        <a href="#destructuring">Destructuring Assignment</a>
        <a href="#fat-arrow">Function Binding</a>
        <a href="#embedded">Embedded JavaScript</a>
        <a href="#switch">Switch and Try/Catch</a>
        <a href="#comparisons">Chained Comparisons</a>
        <a href="#strings">String Interpolation, Block Strings, and Block Comments</a>
        <a href="#regexes">Block Regular Expressions</a>
        <a href="#cake">Cake, and Cakefiles</a>
        <a href="#source-maps">Source Maps</a>
        <a href="#scripts">"text/coffeescript" Script Tags</a>
        <a href="#resources">Books, Screencasts, Examples and Resources</a>
        <a href="#changelog">Change Log</a>
      </div>
    </div>
    <div class="navigation try">
      <div class="button">
        试一试 CoffeeScript
        <div class="repl_bridge"></div>
      </div>
      <div class="contents repl_wrapper">
        <div class="code">
          <div class="screenshadow tl"></div>
          <div class="screenshadow tr"></div>
          <div class="screenshadow bl"></div>
          <div class="screenshadow br"></div>
          <div id="repl_source_wrap">
            <textarea id="repl_source" rows="100" spellcheck="false">alert "Hello CoffeeScript!"</textarea>
          </div>
          <div id="repl_results_wrap"><pre id="repl_results"></pre></div>
          <div class="minibutton dark run" title="Ctrl-Enter">Run</div>
          <a class="minibutton permalink" id="repl_permalink">Link</a>
          <br class="clear" />
        </div>
      </div>
    </div>
    <div class="navigation annotated">
      <div class="button">
        代码和注释
      </div>
      <div class="contents menu">
        <a href="documentation/docs/grammar.html">Grammar Rules &mdash; src/grammar</a>
        <a href="documentation/docs/lexer.html">Lexing Tokens &mdash; src/lexer</a>
        <a href="documentation/docs/rewriter.html">The Rewriter &mdash; src/rewriter</a>
        <a href="documentation/docs/nodes.html">The Syntax Tree &mdash; src/nodes</a>
        <a href="documentation/docs/scope.html">Lexical Scope &mdash; src/scope</a>
        <a href="documentation/docs/helpers.html">Helpers &amp; Utility Functions &mdash; src/helpers</a>
        <a href="documentation/docs/coffee-script.html">The CoffeeScript Module &mdash; src/coffee-script</a>
        <a href="documentation/docs/cake.html">Cake &amp; Cakefiles &mdash; src/cake</a>
        <a href="documentation/docs/command.html">"coffee" Command-Line Utility &mdash; src/command</a>
        <a href="documentation/docs/optparse.html">Option Parsing &mdash; src/optparse</a>
        <a href="documentation/docs/repl.html">Interactive REPL &mdash; src/repl</a>
        <a href="documentation/docs/sourcemap.html">Source Maps &mdash; src/sourcemap</a>
      </div>
    </div>
    <div id="error" style="display:none;"></div>
  </div>

  <div class="container">
    <span class="bookmark" id="top"></span>

    <p>
      <b>CoffeeScript 是一门编译到 JavaScript 的小巧语言.</b>
      在 Java 般笨拙的外表下, JavaScript 其实有着一颗华丽的心脏.
      CoffeeScript 尝试用简洁的方式展示 JavaScript 优秀的部分.
    </p>

    <p>
      CoffeeScript 的指导原则是: <b>"她仅仅是 JavaScript"</b>.
      代码一一对应地编译到 JS, 不会在编译过程中进行解释.
      已有的 JavaScript 类库可以无缝地和 CoffeeScript 搭配使用, 反之亦然.
      编译后的代码是可读的, 且经过美化, 能在所有 JavaScript 环境中运行,
      并且应该和对应手写的 JavaScript 一样快或者更快.
    </p>

    <p>
      <b>最新版本:</b>
      <a href="http://github.com/jashkenas/coffee-script/tarball/1.7.1">1.7.1</a>
    </p>

    <pre>
sudo npm install -g coffee-script</pre>

    <h2>
      <span id="overview" class="bookmark"></span>
      概览
    </h2>

    <p>左边是 CoffeeScript, 右边是编译后输出的 JavaScript.</p>

    <%= codeFor('overview', 'cubes', false) %>

    <h2>
      <span id="installation" class="bookmark"></span>
      安装
    </h2>

    <p>
      CoffeeScript 编译器本身<a href="documentation/docs/grammar.html">是 CoffeeScript 写的</a>,
      使用了 <a href="http://jison.org">Jison parser generator</a>.
      命令行版本的 <tt>coffee</tt> 是一个实用的 <a href="http://nodejs.org/">Node.js</a> 工具.
      不过<a href="extras/coffee-script.js">编译器</a>并不依赖 Node,
      而是能运行于任何 JavaScript 执行环境, 比如说在浏览器里(看上边的"试一试 CoffeeScript").
    </p>

    <p>
      安装前你需要最新稳定版 <a href="http://nodejs.org/">Node.js</a>,
      和 <a href="http://npmjs.org">npm</a> (Node Package Manager).
      借助 npm 可以安装 CoffeeScript:
    </p>

    <pre>
npm install -g coffee-script</pre>

    <p>
      (如果不想全局安装可以去掉 <tt>-g</tt> 选项.)
    </p>

    <p>
      如果你希望安装 <b>master</b> 分支上最新的 CoffeeScript,
      你可以从<a href="http://github.com/jashkenas/coffee-script">源码仓库</a> 克隆 CoffeeScript,
      或直接下载<a href="http://github.com/jashkenas/coffee-script/tarball/master">源码</a>.
      还有通过 npm 方式安装 master 分支最新的 CoffeeScript 编译器:
    </p>

<pre>
npm install -g http://github.com/jashkenas/coffee-script/tarball/master</pre>

    <p>
      或者你想将其安装到 <tt>/usr/local</tt>, 而不用 npm 进行管理,
      进入 <tt>coffee-script</tt> 目录执行:
    </p>

  <pre>
sudo bin/cake install</pre>

    <h2>
      <span id="usage" class="bookmark"></span>
      用法
    </h2>

    <p>
      安装之后, 你应该可以运行 <tt>coffee</tt> 命令以执行脚本,
      编译 <tt>.coffee</tt> 文件到 <tt>.js</tt> 文件, 和提供一个交互式的 REPL.
      <tt>coffee</tt> 命令有下列参数:
    </p>

    <table>
      <tr>
        <td><code>-c, --compile</code></td>
        <td>
          编译一个 <tt>.coffee</tt> 脚本到一个同名的 <tt>.js</tt> 文件.
        </td>
      </tr>
      <tr>
        <td><code>-m, --map</code></td>
        <td>
          随 JavaScript 文件一起生成 source maps. 并且在 JavaScript 里加上 <tt>sourceMappingURL</tt> 指令.
        </td>
      </tr>
      <tr>
        <td width="25%"><code>-i, --interactive</code></td>
        <td>
          启动一个交互式的 CoffeeScript 会话用来尝试一些代码片段.
          等同于执行 <tt>coffee</tt> 而不加参数.
        </td>
      </tr>
      <tr>
        <td><code>-o, --output [DIR]</code></td>
        <td>
          将所有编译后的 JavaScript 文件写到指定文件夹.
          与 <tt>--compile</tt> 或 <tt>--watch</tt> 搭配使用.
        </td>
      </tr>
      <tr>
        <td><code>-j, --join [FILE]</code></td>
        <td>
          编译之前, 按参数传入顺序连接所有脚本到一起, 编译后写到指定的文件.
          对于编译大型项目有用.
        </td>
      </tr>
      <tr>
        <td><code>-w, --watch</code></td>
        <td>
          监视文件改变, 任何文件更新时重新执行命令.
        </td>
      </tr>
      <tr>
        <td><code>-p, --print</code></td>
        <td>
          JavaScript 直接打印到 <b>stdout</b> 而不是写到一个文件.
        </td>
      </tr>
      <tr>
        <td><code>-s, --stdio</code></td>
        <td>
          将 CoffeeScript 传递到 STDIN 后从 STDOUT 获取 JavaScript.
          对其他语言写的进程有好处. 比如:<br />
          <tt>cat src/cake.coffee | coffee -sc</tt>
        </td>
      </tr>
      <tr>
        <td><code>-l, --literate</code></td>
        <td>
          将代码作为 Literate CoffeeScript 解析.
          只会在从 <b>stdio</b> 直接传入代码或者处理某些没有后缀的文件名需要写明这点.
        </td>
      </tr>
      <tr>
        <td><code>-e, --eval</code></td>
        <td>
          直接从命令行编译和打印一小段 CoffeeScript. 比如:<br />
          <tt>coffee -e "console.log num for num in [10..1]"</tt>
        </td>
      </tr>
      <tr>
        <td><code>-b, --bare</code></td>
        <td>
          编译到 JavaScript 时去掉<a href="#lexical-scope">顶层函数的包裹</a>.
        </td>
      </tr>
      <tr>
        <td><code>-t, --tokens</code></td>
        <td>
          不对 CoffeeScript 进行解析, 仅仅进行 lex, 打印出 token stream:
          <tt>[IDENTIFIER square] [ASSIGN =] [PARAM_START (]</tt> ...
        </td>
      </tr>
      <tr>
        <td><code>-n, --nodes</code></td>
        <td>
          不对 CoffeeScript 进行编译, 仅仅 lex 和解析, 打印 parse tree:
<pre class="no_bar">
Expressions
  Assign
    Value "square"
    Code "x"
      Op *
        Value "x"
        Value "x"</pre>
        </td>
      </tr>
      <tr>
        <td><code>--nodejs</code></td>
        <td>
          <tt>node</tt> 命令有一些实用的参数, 比如<br />
          <tt>--debug</tt>, <tt>--debug-brk</tt>, <tt>--max-stack-size</tt>,
          和 <tt>--expose-gc</tt>. 用这个参数直接把参数转发到 Node.js.
          重复使用 <tt>--nodejs</tt> 来传递多个参数.
        </td>
      </tr>
    </table>

    <p>
      <b>例子:</b>
    </p>

    <ul>
      <li>
        编译一个 <tt>.coffee</tt> 文件的树形目录 <tt>src</tt> 到一个同级
        <tt>.js</tt> 文件树形目录 <tt>lib</tt>:<br />
        <tt>coffee --compile --output lib/ src/</tt>
      </li>
      <li>
        监视一个文件的改变, 每次文件被保证时重新编译:<br />
        <tt>coffee --watch --compile experimental.coffee</tt>
      </li>
      <li>
        合并一组文件到单个脚本:<br />
        <tt>coffee --join project.js --compile src/*.coffee</tt>
      </li>
      <li>
        从一个 one-liner 打印编译后的 JS:<br />
        <tt>coffee -bpe "alert i for i in [0..10]"</tt>
      </li>
      <li>
        现在全部一起, 在你工作时监视和重复编译整个项目:<br />
        <tt>coffee -o lib/ -cw src/</tt>
      </li>
      <li>
        运行 CoffeeScript REPL (<tt>Ctrl-D</tt> 来终止, <tt>Ctrl-V</tt> 激活多行):<br />
        <tt>coffee</tt>
      </li>
    </ul>

    <h2>
      <span id="literate" class="bookmark"></span>
      Literate CoffeeScript
    </h2>

    <p>
      除了被作为一个普通的编程语言, CoffeeScript 也可以在 "literate" 模式下编写。
      如果你以 <tt>.litcoffee</tt> 为扩展名命名你的文件, 你可以把它当作 Markdown 文件来编写 &mdash;
      此文档恰好也是一份可执行的 CoffeeScript 代码,  编译器将会把所有的缩进块 (Markdown 表示源代码的方式) 视为代码, 其他部分则为注释.
    </p>

    <p>
      Just for kicks, a little bit of the compiler is currently implemented in this fashion:
      See it
      <a href="https://gist.github.com/jashkenas/3fc3c1a8b1009c00d9df">as a document</a>,
      <a href="https://raw.github.com/jashkenas/coffee-script/master/src/scope.litcoffee">raw</a>,
      and <a href="http://cl.ly/LxEu">properly highlighted in a text editor</a>.
    </p>

    <p>
      I'm fairly excited about this direction for the language, and am looking
      forward to writing (and more importantly, reading) more programs in this style.
      More information about Literate CoffeeScript, including an
      <a href="https://github.com/jashkenas/journo">example program</a>,
      are <a href="http://ashkenas.com/literate-coffeescript">available in this blog post</a>.
    </p>

    <h2>
      <span id="language" class="bookmark"></span>
      语言手册
    </h2>

    <p>
      <i>
        这份手册所设计的结构, 方便从上往下进行阅读. 后边的章节使用前面介绍的语法和手法.
        阅读这份手册需要对 JavaScript 比较熟悉.
        以下所有的例子, CoffeeScript 源码将在左边显示, 并在右侧直接编译到 JavaScript.
      </i>
    </p>

    <p>
      <i>
        很多例子可以通过点击右边的 <b>run</b> 按钮直接运行(代码有意义的话),
        也可以通过点击左边的 <b>load</b> 按钮载入"试一试 CoffeeScript"的控制台.
      </i>
    <p>
      首先, 一些基础, CoffeeScript 使用显式的空白来区分代码块.
      你不需要使用分号 <tt>;</tt> 来关闭表达式,
      在一行的结尾换行就可以了(尽管分号依然可以用来把多行的表达式简写到一行里).
      不需要再用花括号来
      <tt>{ }</tt> 包裹代码快, 在 <a href="#literals">函数</a>,
      <a href="#conditionals">if 表达式</a>,
      <a href="#switch">switch</a>, 和 <a href="#try">try/catch</a> 当中使用缩进.
    </p>

    <p>
      传入参数的时候, 你不需要再使用圆括号来表明函数被执行.
      隐式的函数调用的作用范围一直到行尾或者一个块级表达式.
      <br />
      <tt>console.log sys.inspect object</tt> &rarr; <tt>console.log(sys.inspect(object));</tt>
    </p>

    <p>
      <span id="literals" class="bookmark"></span>
      <b class="header">函数</b>
      函数通过一组可选的圆括号包裹的参数, 一个箭头, 一个函数体来定义.
      一个空的函数像是这样:
      <tt>-></tt>
    </p>
    <%= codeFor('functions', 'cube(5)') %>
    <p>
      一些函数函数参数会有默认值, 当传入的参数的不存在 (<tt>null</tt> 或者 <tt>undefined</tt>)
      时会被使用.
    </p>
    <%= codeFor('default_args', 'fill("cup")') %>

    <p>
      <span id="objects_and_arrays" class="bookmark"></span>
      <b class="header">对象和数组</b>
      CoffeeScript 中对象和数组的字面量看起来很像在 JavaScript 中的写法.
      如果单个属性被写在自己的一行里, 那么逗号是可以省略的.
      和 <a href="http://yaml.org">YAML</a> 类似, 对象可以用缩进替代花括号来声明.
    </p>
    <%= codeFor('objects_and_arrays', 'song.join(" ... ")') %>
    <p>
      JavaScript 里, 你不能使用不添加引号的保留字段作为属性名称, 比如 <tt>class</tt>.
      CoffeeScript 里作为键出现的保留字会被识别并补上引号,
      所以你不用有额外的操心(比如说, 使用 jQuery 的时候).
    </p>
    <%= codeFor('objects_reserved') %>

    <p>
      <span id="lexical-scope" class="bookmark"></span>
      <b class="header">词法作用域和变量安全</b>
      CoffeeScript 编译器会考虑所有变量, 保证每个变量都在词法域里适当地被定义
      &mdash; 你永远不需要自己去写 <tt>var</tt>.
    </p>
    <%= codeFor('scope', 'inner') %>
    <p>
      注意所有变量的定义都被推到相关的顶层作用域, 也就是第一次出现的位置.
      <b>outer</b> 在内层的函数里没有被重新定义, 因为它已经存在于作用域当中了.
      同时, 内层函数里的 <b>inner</b> 不应该改变外部的同名的变量, 所以在这里有自己的声明.
    </p>
    <p>
      其行为和 Ruby 的局部变量的作用域实际上是一致的.
      由于你没有对 <tt>var</tt> 关键字的直接访问, 根据需要隐藏一个外部变量就很容易, 你只能引用它.
      所以在写深层的嵌套的函数时, 注意不要意外用到和外部变量相同的名字.
    </p>
    <p>
      尽管要说清楚会受到文档长度限制, 函数的所有 CoffeeScript 结果都被一个匿名函数包裹:
      <tt>(function(){ ... })();</tt>
      这层安全的封装, 加上自动生成的 <tt>var</tt> 关键字, 使得不小心污染全局命名空间很难发生.
    </p>
    <p>
      如果你希望创建一个其他脚本也能使用的顶层变量, 那么将其作为赋值在 <b>window</b> 上,
      或者在 CommonJS 里的 <b>exports</b> 上.
      <b>存在操作符(existential operator)</b>可以帮你写出一个可靠的方式找到添加位置;
      比如你的目标是同时满足 CommonJS 和浏览器: <tt>exports ? this</tt>
    </p>

    <p>
      <span id="conditionals" class="bookmark"></span>
      <b class="header">if, else, unless 和条件赋值</b>
      <b>if/else</b> 表达式可以不用圆括号和花括号就写出来.
      就像函数和其他块级表达式那样, 多行的条件可以通过缩进来表明.
      另外还有一个顺手的后缀形式, 在行尾使用 <tt>if</tt> or <tt>unless</tt>.
    </p>
    <p>
      CoffeeScript 会尝试编译 <b>if</b> 语句到 JavaScript 表达式, 或者一个封装的闭包.
      CoffeeScript 里不存在直白的三元表达式.
      &mdash; 你只要在一行内使用普通的 <b>if</b> 语句.
    </p>
    <%= codeFor('conditionals') %>

    <p>
      <span id="splats" class="bookmark"></span>
      <b class="header">变参(splats)...</b>
      使用 JavaScript 的 <b>arguments 对象</b>是一种处理接收不定数量个参数的函数常用办法.
      CoffeeScript 在函数定义和调用里提供了变参(splats) <tt>...</tt> 的语法,
      让不定个数的参数使用起来更愉悦一些.
    </p>
    <%= codeFor('splats', true) %>

    <p>
      <span id="loops" class="bookmark"></span>
      <b class="header">循环和推导式</b>
      你可以使用CoffeeScript将大多数的循环写成基于数组、对象或范围的推导式(comprehensions)。
      推导式替代（编译为）<b>for</b>循环，并且可以使用可选的子句和数组索引值。
      不同于<b>for</b>循环，数组的推导式是表达式，可以被返回和赋值。
    </p>
    <%= codeFor('array_comprehensions') %>
    <p>
      推导式可以适用于其他一些使用循环的地方，例如<b>each</b>/<b>forEach</b>,
      <b>map</b>，或者<b>select</b>/<b>filter</b>，例如：
      <tt>shortNames = (name for name in list when name.length &lt; 5)</tt><br />
      如果你知道循环的开始与结束，或者希望以固定的跨度迭代，你可以在范围推导式中
      指定开始与结束。
    </p>
    <%= codeFor('range_comprehensions', 'countdown') %>
    <p>
      注意：上面的例子中我们展示了如何将推导式赋值给变量，CoffeeScript总是将
      每个循环项收集到一个数组中。但是有时候以循环结尾的函数运行的目的就是
      它们的副作用(side-effects)。这种情况下要注意不要意外的返回推导式的结果，
      而是在函数的结尾增加一些有意义的返回值&mdash;例如<tt>true</tt> &mdash;
      或 <tt>null</tt>。
    </p>
    <p>
      在推导式中使用<tt>by</tt>子句，可以实现以固定跨度迭代范围值：
      <tt>evens = (x for x in [0..10] by 2)</tt>
    </p>
    <p>
      推导式也可以用于迭代对象中的key和value。在推导式中使用<tt>of</tt>
      来取出对象中的属性，而不是数组中的值。
    </p>
    <%= codeFor('object_comprehensions', 'ages.join(", ")') %>
    <p>
      如果你希望仅迭代在当前对象中定义的属性，通过<tt>hasOwnProperty</tt>检查并
      避免属性是继承来的，可以这样来写：<br />
      <tt>for own key, value of object</tt>
    </p>
    <p>
      CoffeeScript仅提供了一种底层循环，即<b>while</b>循环。与JavaScript中的<b>while</b>
      循环的主要区别是，在CoffeeScript中<b>while</b>可以作为表达式来使用，
      而且可以返回一个数组，该数组包含每个迭代项的迭代结果。
    </p>
    <%= codeFor('while', 'lyrics.join("\n")') %>
    <p>
      为了更好的可读性，<b>until</b>关键字等同于<tt>while not</tt>, <b>loop</b>关键字
      等同于<tt>while true</tt>。
    </p>
    <p>
      当使用JavaScript的循环去创建函数时，为了确保循环变量被隐藏，同时所有
      函数都不会共享它的最终值，通常会在该函数中使用一个闭包。CoffeeScript
      提供了<tt>do</tt> 关键字, 可以直接地调用一个传入的函数，并转发参数给它。
    </p>
    <%= codeFor('do') %>

    <p>
      <span id="slices" class="bookmark"></span>
      <b class="header">Array Slicing and Splicing with Ranges</b>
      区间也能被用来获取数组切片。带有两个点的区间是包含性的（包含结尾）；
      带有三个点的区间不包含结尾。切片目录拥有有用的默认值。第一个缺省的索引值是0，
      第二个是数组的大小。
    </p>
    <%= codeFor('slices', 'middle') %>
    <p>
      用同样的语法，可以将一个新的数组通过赋值来替换另一个数组的一部分，或两者进行拼接。
    </p>
    <%= codeFor('splices', 'numbers') %>
    <p>
      注意JavaScript的字符串是不可变的，也不能进行拼接。
    </p>
    <p>
      <span id="expressions" class="bookmark"></span>
      <b class="header">Everything is an Expression (at least, as much as possible)</b>
      你也许已经注意到，尽管我们没有给CoffeeScript函数添加return语句，但还是返回了
      它们的最终值。CoffeeScript编译器试图确保CoffeeScript语境下的所有语句能用作表达式。
      观察如下函数中的<tt>return</tt>是如何被推进到每一个可能的执行分支的。
    </p>
    <%= codeFor('expressions', 'eldest') %>
    <p>
      尽管（CoffeeScript）函数总会返回它们的最终值，但当你清楚自己所做的时，明确写下
      return语句(<tt>return value</tt>)，从函数体中提前返回也是合理和被提倡的。
    </p>
    <p>
      因为变量声明是在顶层作用域，使得在表达式里能进行赋值操作，甚至被赋值的变量之前
      从没出现过。
    </p>
    <%= codeFor('expressions_assignment', 'six') %>
    <p>
      Things that would otherwise be statements in JavaScript, when used
      as part of an expression in CoffeeScript, are converted into expressions
      by wrapping them in a closure. This lets you do useful things, like assign
      the result of a comprehension to a variable:
    </p>
    <%= codeFor('expressions_comprehension', 'globals') %>
    <p>
      As well as silly things, like passing a <b>try/catch</b> statement directly
      into a function call:
    </p>
    <%= codeFor('expressions_try', true) %>
    <p>
      There are a handful of statements in JavaScript that can't be meaningfully
      converted into expressions, namely <tt>break</tt>, <tt>continue</tt>,
      and <tt>return</tt>. If you make use of them within a block of code,
      CoffeeScript won't try to perform the conversion.
    </p>

    <p>
      <span id="operators" class="bookmark"></span>
      <b class="header">Operators and Aliases</b>
      Because the <tt>==</tt> operator frequently causes undesirable coercion,
      is intransitive, and has a different meaning than in other languages,
      CoffeeScript compiles <tt>==</tt> into <tt>===</tt>, and <tt>!=</tt> into
      <tt>!==</tt>.
      In addition, <tt>is</tt> compiles into <tt>===</tt>,
      and <tt>isnt</tt> into <tt>!==</tt>.
    </p>
    <p>
      You can use <tt>not</tt> as an alias for <tt>!</tt>.
    </p>
    <p>
      For logic, <tt>and</tt> compiles to <tt>&amp;&amp;</tt>, and <tt>or</tt>
      into <tt>||</tt>.
    </p>
    <p>
      Instead of a newline or semicolon, <tt>then</tt> can be used to separate
      conditions from expressions, in <b>while</b>,
      <b>if</b>/<b>else</b>, and <b>switch</b>/<b>when</b> statements.
    </p>
    <p>
      As in <a href="http://yaml.org/">YAML</a>, <tt>on</tt> and <tt>yes</tt>
      are the same as boolean <tt>true</tt>, while <tt>off</tt> and <tt>no</tt> are boolean <tt>false</tt>.
    </p>
    <p>
      <tt>unless</tt> can be used as the inverse of <tt>if</tt>.
    </p>
    <p>
      As a shortcut for <tt>this.property</tt>, you can use <tt>@property</tt>.
    </p>
    <p>
      You can use <tt>in</tt> to test for array presence, and <tt>of</tt> to
      test for JavaScript object-key presence.
    </p>
    <p>
      To simplify math expressions, <tt>**</tt> can be used for exponentiation, <tt>//</tt> performs integer division and <tt>%%</tt> provides true mathematical modulo.
    </p>
    <p>
      All together now:
    </p>

    <table class="definitions">
      <tr><th>CoffeeScript</th><th>JavaScript</th></tr>
      <tr><td><tt>is</tt></td><td><tt>===</tt></td></tr>
      <tr><td><tt>isnt</tt></td><td><tt>!==</tt></td></tr>
      <tr><td><tt>not</tt></td><td><tt>!</tt></td></tr>
      <tr><td><tt>and</tt></td><td><tt>&amp;&amp;</tt></td></tr>
      <tr><td><tt>or</tt></td><td><tt>||</tt></td></tr>
      <tr><td><tt>true</tt>, <tt>yes</tt>, <tt>on</tt></td><td><tt>true</tt></td></tr>
      <tr><td><tt>false</tt>, <tt>no</tt>, <tt>off</tt></td><td><tt>false</tt></td></tr>
      <tr><td><tt>@</tt>, <tt>this</tt></td><td><tt>this</tt></td></tr>
      <tr><td><tt>of</tt></td><td><tt>in</tt></td></tr>
      <tr><td><tt>in</tt></td><td><i><small>no JS equivalent</small></i></td></tr>
      <tr><td><tt>a ** b</tt></td><td><tt>Math.pow(a, b)</tt></td></tr>
      <tr><td><tt>a // b</tt></td><td><tt>Math.floor(a / b)</tt></td></tr>
      <tr><td><tt>a %% b</tt></td><td><tt>(a % b + b) % b</tt></td></tr>
    </table>

    <%= codeFor('aliases') %>

    <p>
      <b class="header">The Existential Operator</b>
      It's a little difficult to check for the existence of a variable in
      JavaScript. <tt>if (variable) ...</tt> comes close, but fails for zero,
      the empty string, and false. CoffeeScript's existential operator <tt>?</tt> returns true unless
      a variable is <b>null</b> or <b>undefined</b>, which makes it analogous
      to Ruby's <tt>nil?</tt>
    </p>
    <p>
      It can also be used for safer conditional assignment than <tt>||=</tt>
      provides, for cases where you may be handling numbers or strings.
    </p>
    <%= codeFor('existence', 'footprints') %>
    <p>
      The accessor variant of the existential operator <tt>?.</tt> can be used to soak
      up null references in a chain of properties. Use it instead
      of the dot accessor <tt>.</tt> in cases where the base value may be <b>null</b>
      or <b>undefined</b>. If all of the properties exist then you'll get the expected
      result, if the chain is broken, <b>undefined</b> is returned instead of
      the <b>TypeError</b> that would be raised otherwise.
    </p>
    <%= codeFor('soaks') %>
    <p>
      Soaking up nulls is similar to Ruby's
      <a href="http://andand.rubyforge.org/">andand gem</a>, and to the
      <a href="http://groovy.codehaus.org/Operators#Operators-SafeNavigationOperator%28%3F.%29">safe navigation operator</a>
      in Groovy.
    </p>

    <p>
      <span id="classes" class="bookmark"></span>
      <b class="header">Classes, Inheritance, and Super</b>
      JavaScript's prototypal inheritance has always been a bit of a
      brain-bender, with a whole family tree of libraries that provide a cleaner
      syntax for classical inheritance on top of JavaScript's prototypes:
      <a href="http://code.google.com/p/base2/">Base2</a>,
      <a href="http://prototypejs.org/">Prototype.js</a>,
      <a href="http://jsclass.jcoglan.com/">JS.Class</a>, etc.
      The libraries provide syntactic sugar, but the built-in inheritance would
      be completely usable if it weren't for a couple of small exceptions:
      it's awkward to call <b>super</b> (the prototype object's
      implementation of the current function), and it's awkward to correctly
      set the prototype chain.
    </p>
    <p>
      Instead of repetitively attaching functions to a prototype, CoffeeScript
      provides a basic <tt>class</tt> structure that allows you to name your class,
      set the superclass, assign prototypal properties, and define the constructor,
      in a single assignable expression.
    </p>
    <p>
      Constructor functions are named, to better support helpful stack traces.
      In the first class in the example below, <tt>this.constructor.name is "Animal"</tt>.
    </p>
    <%= codeFor('classes', true) %>
    <p>
      If structuring your prototypes classically isn't your cup of tea, CoffeeScript
      provides a couple of lower-level conveniences. The <tt>extends</tt> operator
      helps with proper prototype setup, and can be used to create an inheritance
      chain between any pair of constructor functions; <tt>::</tt> gives you
      quick access to an object's prototype; and <tt>super()</tt>
      is converted into a call against the immediate ancestor's method of the same name.
    </p>
    <%= codeFor('prototypes', '"one_two".dasherize()') %>
    <p>
      Finally, class definitions are blocks of executable code, which make for interesting
      metaprogramming possibilities. Because in the context of a class definition,
      <tt>this</tt> is the class object itself (the constructor function), you
      can assign static properties by using <br /><tt>@property: value</tt>, and call
      functions defined in parent classes: <tt>@attr 'title', type: 'text'</tt>
    </p>

    <p>
      <span id="destructuring" class="bookmark"></span>
      <b class="header">Destructuring Assignment</b>
      To make extracting values from complex arrays and objects more convenient,
      CoffeeScript implements ECMAScript Harmony's proposed
      <a href="http://wiki.ecmascript.org/doku.php?id=harmony:destructuring">destructuring assignment</a>
      syntax. When you assign an array or object literal to a value, CoffeeScript
      breaks up and matches both sides against each other, assigning the values
      on the right to the variables on the left. In the simplest case, it can be
      used for parallel assignment:
    </p>
    <%= codeFor('parallel_assignment', 'theBait') %>
    <p>
      But it's also helpful for dealing with functions that return multiple
      values.
    </p>
    <%= codeFor('multiple_return_values', 'forecast') %>
    <p>
      Destructuring assignment can be used with any depth of array and object nesting,
      to help pull out deeply nested properties.
    </p>
    <%= codeFor('object_extraction', '"name + "-" + street"') %>
    <p>
      Destructuring assignment can even be combined with splats.
    </p>
    <%= codeFor('patterns_and_splats', 'contents.join("")') %>
    <p>
      Expansion can be used to retrieve elements from the end of an array without having to assign the rest of its values. It works in function parameter lists as well.
    </p>
    <%= codeFor('expansion', '"first + " " + last"') %>
    <p>
      Destructuring assignment is also useful when combined with class constructors
      to assign properties to your instance from an options object passed to the constructor.
    </p>
    <%= codeFor('constructor_destructuring', 'tim.age') %>

    <p>
      <span id="fat-arrow" class="bookmark"></span>
      <b class="header">Function binding</b>
      In JavaScript, the <tt>this</tt> keyword is dynamically scoped to mean the
      object that the current function is attached to. If you pass a function as
      a callback or attach it to a different object, the original value of <tt>this</tt>
      will be lost. If you're not familiar with this behavior,
      <a href="http://www.digital-web.com/articles/scope_in_javascript/">this Digital Web article</a>
      gives a good overview of the quirks.
    </p>
    <p>
      The fat arrow <tt>=&gt;</tt> can be used to both define a function, and to bind
      it to the current value of <tt>this</tt>, right on the spot. This is helpful
      when using callback-based libraries like Prototype or jQuery, for creating
      iterator functions to pass to <tt>each</tt>, or event-handler functions
      to use with <tt>bind</tt>. Functions created with the fat arrow are able to access
      properties of the <tt>this</tt> where they're defined.
    </p>
    <%= codeFor('fat_arrow') %>
    <p>
      If we had used <tt>-&gt;</tt> in the callback above, <tt>@customer</tt> would
      have referred to the undefined "customer" property of the DOM element,
      and trying to call <tt>purchase()</tt> on it would have raised an exception.
    </p>
    <p>
      When used in a class definition, methods declared with the fat arrow will
      be automatically bound to each instance of the class when the instance is
      constructed.
    </p>

    <p>
      <span id="embedded" class="bookmark"></span>
      <b class="header">Embedded JavaScript</b>
      Hopefully, you'll never need to use it, but if you ever need to intersperse
      snippets of JavaScript within your CoffeeScript, you can
      use backticks to pass it straight through.
    </p>
    <%= codeFor('embedded', 'hi()') %>

    <p>
      <span id="switch" class="bookmark"></span>
      <b class="header">Switch/When/Else</b>
      <b>Switch</b> statements in JavaScript are a bit awkward. You need to
      remember to <b>break</b> at the end of every <b>case</b> statement to
      avoid accidentally falling through to the default case.
      CoffeeScript prevents accidental fall-through, and can convert the <tt>switch</tt>
      into a returnable, assignable expression. The format is: <tt>switch</tt> condition,
      <tt>when</tt> clauses, <tt>else</tt> the default case.
    </p>
    <p>
      As in Ruby, <b>switch</b> statements in CoffeeScript can take multiple
      values for each <b>when</b> clause. If any of the values match, the clause
      runs.
    </p>
    <%= codeFor('switch') %>

    <p>
      Switch statements can also be used without a control expression, turning them in to a cleaner alternative to if/else chains.
    </p>
    <%= codeFor('switch_with_no_expression') %>

    <p>
      <span id="try" class="bookmark"></span>
      <b class="header">Try/Catch/Finally</b>
      Try/catch statements are just about the same as JavaScript (although
      they work as expressions).
    </p>
    <%= codeFor('try') %>

    <p>
      <span id="comparisons" class="bookmark"></span>
      <b class="header">Chained Comparisons</b>
      CoffeeScript borrows
      <a href="http://docs.python.org/reference/expressions.html#notin">chained comparisons</a>
      from Python &mdash; making it easy to test if a value falls within a
      certain range.
    </p>
    <%= codeFor('comparisons', 'healthy') %>

    <p>
      <span id="strings" class="bookmark"></span>
      <b class="header">String Interpolation, Block Strings, and Block Comments</b>
      Ruby-style string interpolation is included in CoffeeScript. Double-quoted
      strings allow for interpolated values, using <tt>#{ ... }</tt>,
      and single-quoted strings are literal.
    </p>
    <%= codeFor('interpolation', 'sentence') %>
    <p>
      Multiline strings are allowed in CoffeeScript. Lines are joined by a single space unless they end with a backslash. Indentation is ignored.
    </p>
    <%= codeFor('strings', 'mobyDick') %>
    <p>
      Block strings can be used to hold formatted or indentation-sensitive text
      (or, if you just don't feel like escaping quotes and apostrophes). The
      indentation level that begins the block is maintained throughout, so
      you can keep it all aligned with the body of your code.
    </p>
    <%= codeFor('heredocs', 'html') %>
    <p>
      Double-quoted block strings, like other double-quoted strings, allow interpolation.
    </p>
    <p>
      Sometimes you'd like to pass a block comment through to the generated
      JavaScript. For example, when you need to embed a licensing header at
      the top of a file. Block comments, which mirror the syntax for block strings,
      are preserved in the generated code.
    </p>
    <%= codeFor('block_comment') %>

    <p>
      <span id="regexes" class="bookmark"></span>
      <b class="header">Block Regular Expressions</b>
      Similar to block strings and comments, CoffeeScript supports block regexes &mdash;
      extended regular expressions that ignore internal whitespace and can contain
      comments and interpolation. Modeled after Perl's <tt>/x</tt> modifier, CoffeeScript's
      block regexes are delimited by <tt>///</tt> and go a long way towards making complex
      regular expressions readable. To quote from the CoffeeScript source:
    </p>
    <%= codeFor('heregexes') %>


    <h2>
      <span id="cake" class="bookmark"></span>
      Cake, and Cakefiles
    </h2>

    <p>
      CoffeeScript includes a (very) simple build system similar to
      <a href="http://www.gnu.org/software/make/">Make</a> and
      <a href="http://rake.rubyforge.org/">Rake</a>. Naturally,
      it's called Cake, and is used for the tasks that build and test the CoffeeScript
      language itself. Tasks are defined in a file named <tt>Cakefile</tt>, and
      can be invoked by running <tt>cake [task]</tt> from within the directory.
      To print a list of all the tasks and options, just type <tt>cake</tt>.
    </p>

    <p>
      Task definitions are written in CoffeeScript, so you can put arbitrary code
      in your Cakefile. Define a task with a name, a long description, and the
      function to invoke when the task is run. If your task takes a command-line
      option, you can define the option with short and long flags, and it will
      be made available in the <tt>options</tt> object. Here's a task that uses
      the Node.js API to rebuild CoffeeScript's parser:
    </p>
    <%= codeFor('cake_tasks') %>
    <p>
      If you need to invoke one task before another &mdash; for example, running
      <tt>build</tt> before <tt>test</tt>, you can use the <tt>invoke</tt> function:
      <tt>invoke 'build'</tt>. Cake tasks are a minimal way to expose your
      CoffeeScript functions to the command line, so
      <a href="documentation/docs/cake.html">don't expect any fanciness built-in</a>.
      If you need dependencies, or async callbacks, it's best to put them in your
      code itself &mdash; not the cake task.
    </p>

    <h2>
      <span id="source-maps" class="bookmark"></span>
      Source Maps
    </h2>

    <p>
      CoffeeScript 1.6.1 and above include support for generating source maps,
      a way to tell your JavaScript engine what part of your CoffeeScript
      program matches up with the code being evaluated. Browsers that support it
      can automatically use source maps to show your original source code
      in the debugger. To generate source maps alongside your JavaScript files,
      pass the <tt>--map</tt> or <tt>-m</tt> flag to the compiler.
    </p>

    <p>
      For a full introduction to source maps, how they work, and how to hook
      them up in your browser, read the
      <a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">HTML5 Tutorial</a>.
    </p>

    <h2>
      <span id="scripts" class="bookmark"></span>
      "text/coffeescript" Script Tags
    </h2>

    <p>
      While it's not recommended for serious use, CoffeeScripts may be included
      directly within the browser using <tt>&lt;script type="text/coffeescript"&gt;</tt>
      tags. The source includes a compressed and minified version of the compiler
      (<a href="extras/coffee-script.js">Download current version here, 39k when gzipped</a>)
      as <tt>extras/coffee-script.js</tt>. Include this file on a page with
      inline CoffeeScript tags, and it will compile and evaluate them in order.
    </p>

    <p>
      In fact, the little bit of glue script that runs "Try CoffeeScript" above,
      as well as the jQuery for the menu, is implemented in just this way.
      View source and look at the bottom of the page to see the example.
      Including the script also gives you access to <tt>CoffeeScript.compile()</tt>
      so you can pop open Firebug and try compiling some strings.
    </p>

    <p>
      The usual caveats about CoffeeScript apply &mdash; your inline scripts will
      run within a closure wrapper, so if you want to expose global variables or
      functions, attach them to the <tt>window</tt> object.
    </p>

    <h2>
      <span id="resources" class="bookmark"></span>
      Books
    </h2>

    <p>
      There are a number of excellent resources to help you get
      started with CoffeeScript, some of which are freely available online.
    </p>

    <ul>
      <li>
        <a href="http://arcturo.github.com/library/coffeescript/">The Little Book on CoffeeScript</a>
        is a brief 5-chapter introduction to CoffeeScript, written with great
        clarity and precision by
        <a href="http://alexmaccaw.co.uk/">Alex MacCaw</a>.
      </li>
      <li>
        <a href="http://autotelicum.github.com/Smooth-CoffeeScript/">Smooth CoffeeScript</a>
        is a reimagination of the excellent book
        <a href="http://eloquentjavascript.net/">Eloquent JavaScript</a>, as if
        it had been written in CoffeeScript instead. Covers language features
        as well as the functional and object oriented programming styles. By
        <a href="https://github.com/autotelicum">E. Hoigaard</a>.
      </li>
      <li>
        <a href="http://pragprog.com/book/tbcoffee/coffeescript">CoffeeScript: Accelerated JavaScript Development</a>
        is <a href="http://trevorburnham.com/">Trevor Burnham</a>'s thorough
        introduction to the language. By the end of the book, you'll have built
        a fast-paced multiplayer word game, writing both the client-side and Node.js
        portions in CoffeeScript.
      </li>
      <li>
        <a href="http://www.packtpub.com/coffeescript-programming-with-jquery-rails-nodejs/book">CoffeeScript Programming with jQuery, Rails, and Node.js</a>
        is a new book by Michael Erasmus that covers CoffeeScript with an eye
        towards real-world usage both in the browser (jQuery) and on the server
        size (Rails, Node).
      </li>
      <li>
        <a href="http://ristrettolo.gy">CoffeeScript Ristretto</a>
        is a deep dive into CoffeeScript's semantics from simple functions up through
        closures, higher-order functions, objects, classes, combinators, and decorators.
        By <a href="http://braythwayt.com/">Reg Braithwaite</a>.
      </li>
      <li>
        <a href="https://efendibooks.com/minibooks/testing-with-coffeescript">Testing with CoffeeScript</a>
        is a succinct and freely downloadable guide to building testable
        applications with CoffeeScript and Jasmine.
      </li>
      <li>
        <a href="http://www.packtpub.com/coffeescript-application-development/book">CoffeeScript Application Development</a>
        is a new book from Packt Publishing that introduces CoffeeScript while
        walking through the process of building a demonstration web application.
      </li>
      <li>
        <a href="http://www.manning.com/lee/">CoffeeScript in Action</a>
        is a new book from Manning Publications that covers CoffeeScript syntax, composition techniques
        and application development.
      </li>
    </ul>

    <h2>
      Screencasts
    </h2>

    <ul>
      <li>
        <a href="http://coffeescript.codeschool.com">A Sip of CoffeeScript</a> is a <a href="http://www.codeschool.com">Code School Course</a>
        which combines 6 screencasts with in-browser coding to make learning fun.  The first level is free to try out.
      </li>
      <li>
        <a href="http://peepcode.com/products/coffeescript">Meet CoffeeScript</a>
        is a 75-minute long screencast by <a href="http://peepcode.com/">PeepCode</a>.
        Highly memorable for its animations which demonstrate transforming CoffeeScript
        into the equivalent JS.
      </li>
      <li>
        If you're looking for less of a time commitment, RailsCasts'
        <a href="http://railscasts.com/episodes/267-coffeescript-basics">CoffeeScript Basics</a>
        should have you covered, hitting all of the important notes about CoffeeScript
        in 11 minutes.
      </li>
    </ul>

    <h2>
      Examples
    </h2>

    <p>
      The <a href="https://github.com/languages/coffeescript">best list of
      open-source CoffeeScript examples</a> can be found on GitHub. But just
      to throw out few more:
    </p>

    <ul>
      <li>
        <b>github</b>'s <a href="http://hubot.github.com/">Hubot</a>,
        a friendly IRC robot that can perform any number of useful and useless tasks.
      </li>
      <li>
        <b>sstephenson</b>'s <a href="http://pow.cx/">Pow</a>,
        a zero-configuration Rack server, with comprehensive annotated source.
      </li>
      <li>
        <b>technoweenie</b>'s <a href="https://github.com/technoweenie/coffee-resque">Coffee-Resque</a>,
        a port of <a href="https://github.com/defunkt/resque">Resque</a> for Node.js.
      </li>
      <li>
        <b>assaf</b>'s <a href="http://zombie.labnotes.org/">Zombie.js</a>,
        a headless, full-stack, faux-browser testing library for Node.js.
      </li>
      <li>
        <b>jashkenas</b>' <a href="documentation/docs/underscore.html">Underscore.coffee</a>, a port
        of the <a href="http://documentcloud.github.com/underscore/">Underscore.js</a>
        library of helper functions.
      </li>
      <li>
        <b>stephank</b>'s <a href="https://github.com/stephank/orona">Orona</a>, a remake of
        the Bolo tank game for modern browsers.
      </li>
      <li>
        <b>josh</b>'s <a href="http://josh.github.com/nack/">nack</a>, a Node.js-powered
        <a href="http://rack.rubyforge.org/">Rack</a> server.
      </li>
    </ul>

    <h2>
      Resources
    </h2>

    <ul>
      <li>
        <a href="http://github.com/jashkenas/coffee-script/">Source Code</a><br />
        Use <tt>bin/coffee</tt> to test your changes,<br />
        <tt>bin/cake test</tt> to run the test suite,<br />
        <tt>bin/cake build</tt> to rebuild the CoffeeScript compiler, and <br />
        <tt>bin/cake build:parser</tt> to regenerate the Jison parser if you're
        working on the grammar. <br /><br />
        <tt>git checkout lib &amp;&amp; bin/cake build:full</tt> is a good command to run when you're working
        on the core language. It'll refresh the lib directory
        (in case you broke something), build your altered compiler, use that to
        rebuild itself (a good sanity test) and then run all of the tests. If
        they pass, there's a good chance you've made a successful change.
      </li>
      <li>
        <a href="http://github.com/jashkenas/coffee-script/issues">CoffeeScript Issues</a><br />
        Bug reports, feature proposals, and ideas for changes to the language belong here.
      </li>
      <li>
        <a href="https://groups.google.com/forum/#!forum/coffeescript">CoffeeScript Google Group</a><br />
        If you'd like to ask a question, the mailing list is a good place to get help.
      </li>
      <li>
        <a href="http://github.com/jashkenas/coffee-script/wiki">The CoffeeScript Wiki</a><br />
        If you've ever learned a neat CoffeeScript tip or trick, or ran into a gotcha &mdash; share it on the wiki.
        The wiki also serves as a directory of handy
        <a href="http://github.com/jashkenas/coffee-script/wiki/Text-editor-plugins">text editor extensions</a>,
        <a href="http://github.com/jashkenas/coffee-script/wiki/Web-framework-plugins">web framework plugins</a>,
        and general <a href="http://github.com/jashkenas/coffee-script/wiki/Build-tools">CoffeeScript build tools</a>.
      </li>
      <li>
        <a href="http://github.com/jashkenas/coffee-script/wiki/FAQ">The FAQ</a><br />
        Perhaps your CoffeeScript-related question has been asked before. Check the FAQ first.
      </li>
      <li>
        <a href="http://js2coffee.org">JS2Coffee</a><br />
        Is a very well done reverse JavaScript-to-CoffeeScript compiler. It's
        not going to be perfect (infer what your JavaScript classes are, when
        you need bound functions, and so on...) &mdash; but it's a great starting
        point for converting simple scripts.
      </li>
      <li>
        <a href="https://github.com/jashkenas/coffee-script/downloads">High-Rez Logo</a><br />
        The CoffeeScript logo is available in Illustrator, EPS and PSD formats, for use
        in presentations.
      </li>
    </ul>

    <h2>
      <span id="webchat" class="bookmark"></span>
      Web Chat (IRC)
    </h2>

    <p>
      Quick help and advice can usually be found in the CoffeeScript IRC room.
      Join <tt>#coffeescript</tt> on <tt>irc.freenode.net</tt>, or click the
      button below to open a webchat session on this page.
    </p>

    <p>
      <button id="open_webchat">click to open #coffeescript</button>
    </p>

    <h2>
      <span id="changelog" class="bookmark"></span>
      Change Log
    </h2>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.7.0...1.7.1">1.7.1</a>
        <span class="timestamp"> &ndash; <small>January 29, 2014</small></span>
      </b>
      <ul>
        <li>
          Fixed a typo that broke node module lookup when running a script directly with the <tt>coffee</tt> binary.
        </li>
      </ul>
    </p>
    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.6.3...1.7.0">1.7.0</a>
        <span class="timestamp"> &ndash; <small>January 28, 2014</small></span>
      </b>
      <ul>
        <li>
          When requiring CoffeeScript files in Node you must now explicitly register the compiler. This can be done with <tt>require 'coffee-script/register'</tt> or <tt>CoffeeScript.register()</tt>. Also for configuration such as Mocha's, use <b>coffee-script/register</b>.
        </li>
        <li>
          Improved error messages, source maps and stack traces. Source maps now use the updated <tt>//#</tt> syntax.
        </li>
        <li>
          Leading <tt>.</tt> now closes all open calls, allowing for simpler chaining syntax.
        </li>
      </ul>
      <%= codeFor('chaining') %>
      <ul>
        <li>
          Added <tt>**</tt>, <tt>//</tt> and <tt>%%</tt> operators and <tt>...</tt> expansion in parameter lists and destructuring expressions.
        </li>
        <li>
          Multiline strings are now joined by a single space and ignore all indentation. A backslash at the end of a line can denote the amount of whitespace between lines, in both strings and heredocs. Backslashes correctly escape whitespace in block regexes.
        </li>
        <li>
          Closing brackets can now be indented and therefore no longer cause unexpected error.
        </li>
        <li>
          Several breaking compilation fixes. Non-callable literals (strings, numbers etc.) don't compile in a call now and multiple postfix conditionals compile properly. Postfix conditionals and loops always bind object literals. Conditional assignment compiles properly in subexpressions. <tt>super</tt> is disallowed outside of methods and works correctly inside <tt>for</tt> loops.
        </li>
        <li>
          Formatting of compiled block comments has been improved.
        </li>
        <li>
          No more <tt>-p</tt> folders on Windows.
        </li>
        <li>
          The <tt>options</tt> object passed to CoffeeScript is no longer mutated.
        </li>
      </ul>
    </p>
    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.6.2...1.6.3">1.6.3</a>
        <span class="timestamp"> &ndash; <small>June 2, 2013</small></span>
      </b>
      <ul>
        <li>
          The CoffeeScript REPL now remembers your history between sessions.
          Just like a proper REPL should.
        </li>
        <li>
          You can now use <tt>require</tt> in Node to load <tt>.coffee.md</tt>
          Literate CoffeeScript files. In the browser,
          <tt>text/literate-coffeescript</tt> script tags.
        </li>
        <li>
          The old <tt>coffee --lint</tt> command has been removed. It was useful
          while originally working on the compiler, but has been surpassed by
          JSHint. You may now use <tt>-l</tt> to pass literate files in over
          <b>stdio</b>.
        </li>
        <li>
          Bugfixes for Windows path separators, <tt>catch</tt> without naming
          the error, and executable-class-bodies-with-
          prototypal-property-attachment.
        </li>
      </ul>
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.6.1...1.6.2">1.6.2</a>
        <span class="timestamp"> &ndash; <small>March 18, 2013</small></span>
      </b>
      <ul>
        <li>
          Source maps have been used to provide automatic line-mapping when
          running CoffeeScript directly via the <tt>coffee</tt> command, and
          for automatic line-mapping when running CoffeeScript directly in the
          browser. Also, to provide better error messages for semantic errors
          thrown by the compiler &mdash;
          <a href="http://cl.ly/NdOA">with colors, even</a>.
        </li>
        <li>
          Improved support for mixed literate/vanilla-style CoffeeScript projects,
          and generating source maps for both at the same time.
        </li>
        <li>
          Fixes for <b>1.6.x</b> regressions with overriding inherited bound
          functions, and for Windows file path management.
        </li>
        <li>
          The <tt>coffee</tt> command can now correctly <tt>fork()</tt>
          both <tt>.coffee</tt> and <tt>.js</tt> files. (Requires Node.js 0.9+)
        </li>
      </ul>
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.5.0...1.6.1">1.6.1</a>
        <span class="timestamp"> &ndash; <small>March 5, 2013</small></span>
      </b>
      <ul>
        <li>
          First release of <a href="#source-maps">source maps</a>. Pass the
          <tt>--map</tt> flag to the compiler, and off you go. Direct all your
          thanks over to <a href="http://github.com/jwalton">Jason Walton</a>.
        </li>
        <li>
          Fixed a 1.5.0 regression with multiple implicit calls against an
          indented implicit object. Combinations of implicit function calls
          and implicit objects should generally be parsed better now &mdash;
          but it still isn't good <i>style</i> to nest them too heavily.
        </li>
        <li>
          <tt>.coffee.md</tt> is now also supported as a Literate CoffeeScript
          file extension, for existing tooling.
          <tt>.litcoffee</tt> remains the canonical one.
        </li>
        <li>
          Several minor fixes surrounding member properties, bound methods and
          <tt>super</tt> in class declarations.
        </li>
      </ul>
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.4.0...1.5.0">1.5.0</a>
        <span class="timestamp"> &ndash; <small>Feb 25, 2013</small></span>
      </b>
      <ul>
        <li>
          First release of <a href="#literate">Literate CoffeeScript</a>.
        </li>
        <li>
          The CoffeeScript REPL is now based on the Node.js REPL, and should work
          better and more familiarly.
        </li>
        <li>
          Returning explicit values from constructors is now forbidden. If you want
          to return an arbitrary value, use a function, not a constructor.
        </li>
        <li>
          You can now loop over an array backwards, without having to manually
          deal with the indexes: <tt>for item in list by -1</tt>
        </li>
        <li>
          Source locations are now preserved in the CoffeeScript AST, although
          source maps are not yet being emitted.
        </li>
      </ul>
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.3.3...1.4.0">1.4.0</a>
        <span class="timestamp"> &ndash; <small>Oct 23, 2012</small></span>
      </b>
      <ul>
        <li>
          The CoffeeScript compiler now strips Microsoft's UTF-8 BOM if it
          exists, allowing you to compile BOM-borked source files.
        </li>
        <li>
          Fix Node/compiler deprecation warnings by removing <tt>registerExtension</tt>,
          and moving from <tt>path.exists</tt> to <tt>fs.exists</tt>.
        </li>
        <li>
          Small tweaks to splat compilation, backticks, slicing, and the
          error for duplicate keys in object literals.
        </li>
      </ul>
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.3.1...1.3.3">1.3.3</a>
        <span class="timestamp"> &ndash; <small>May 15, 2012</small></span>
      </b>
      <ul>
        <li>
          Due to the new semantics of JavaScript's strict mode, CoffeeScript no
          longer guarantees that constructor functions have names in all runtimes.
          See <a href="https://github.com/jashkenas/coffee-script/issues/2052">#2052</a>
          for discussion.
        </li>
        <li>
          Inside of a nested function inside of an instance method, it's now possible
          to call <tt>super</tt> more reliably (walks recursively up).
        </li>
        <li>
          Named loop variables no longer have different scoping heuristics than
          other local variables. (Reverts #643)
        </li>
        <li>
          Fix for splats nested within the LHS of destructuring assignment.
        </li>
        <li>
          Corrections to our compile time strict mode forbidding of octal literals.
        </li>
      </ul>
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.2.0...1.3.1">1.3.1</a>
        <span class="timestamp"> &ndash; <small>April 10, 2012</small></span>
      </b>
      <ul>
        <li>
          CoffeeScript now enforces all of JavaScript's <b>Strict Mode</b> early syntax
          errors at compile time. This includes old-style octal literals,
          duplicate property names in object literals, duplicate parameters in
          a function definition, deleting naked variables, setting the value of
          <tt>eval</tt> or <tt>arguments</tt>, and more.
          See a full discussion at
          <a href="https://github.com/jashkenas/coffee-script/issues/1547">#1547</a>.
        </li>
        <li>
          The REPL now has a handy new multi-line mode for entering large
          blocks of code. It's useful when copy-and-pasting examples into the
          REPL. Enter multi-line mode with <tt>Ctrl-V</tt>. You may also now
          pipe input directly into the REPL.
        </li>
        <li>
          CoffeeScript now prints a <tt>Generated by CoffeeScript VERSION</tt>
          header at the top of each compiled file.
        </li>
        <li>
          Conditional assignment of previously undefined variables
          <tt>a or= b</tt> is now considered a syntax error.
        </li>
        <li>
          A tweak to the semantics of <tt>do</tt>, which can now be used to
          more easily simulate a namespace: <tt>do (x = 1, y = 2) -> ...</tt>
        </li>
        <li>
          Loop indices are now mutable within a loop iteration, and immutable
          between them.
        </li>
        <li>
          Both endpoints of a slice are now allowed to be omitted for consistency,
          effectively creating a shallow copy of the list.
        </li>
        <li>
          Additional tweaks and improvments to <tt>coffee --watch</tt> under
          Node's "new" file watching API. Watch will now beep by default
          if you introduce a syntax error into a watched script. We also now
          ignore hidden directories by default when watching recursively.
        </li>
      </ul>
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.1.3...1.2.0">1.2.0</a>
        <span class="timestamp"> &ndash; <small>Dec. 18, 2011</small></span>
      </b>
      <ul>
        <li>
          Multiple improvements to <tt>coffee --watch</tt> and <tt>--join</tt>.
          You may now use both together, as well as add and remove
          files and directories within a <tt>--watch</tt>'d folder.
        </li>
        <li>
          The <tt>throw</tt> statement can now be used as part of an expression.
        </li>
        <li>
          Block comments at the top of the file will now appear outside of the
          safety closure wrapper.
        </li>
        <li>
          Fixed a number of minor 1.1.3 regressions having to do with trailing
          operators and unfinished lines, and a more major 1.1.3 regression that
          caused bound functions <i>within</i> bound class functions to have the incorrect
          <tt>this</tt>.
        </li>
      </ul>
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.1.2...1.1.3">1.1.3</a>
        <span class="timestamp"> &ndash; <small>Nov. 8, 2011</small></span>
      </b>
      <ul>
        <li>
          Ahh, whitespace. CoffeeScript's compiled JS now tries to space things
          out and keep it readable, as you can see in the examples on this page.
        </li>
        <li>
          You can now call <tt>super</tt> in class level methods in class bodies,
          and bound class methods now preserve their correct context.
        </li>
        <li>
          JavaScript has always supported octal numbers <tt>010 is 8</tt>,
          and hexadecimal numbers <tt>0xf is 15</tt>, but CoffeeScript now
          also supports binary numbers: <tt>0b10 is 2</tt>.
        </li>
        <li>
          The CoffeeScript module has been nested under a subdirectory to make
          it easier to <tt>require</tt> individual components separately, without
          having to use <b>npm</b>. For example, after adding the CoffeeScript
          folder to your path: <tt>require('coffee-script/lexer')</tt>
        </li>
        <li>
          There's a new "link" feature in Try CoffeeScript on this webpage. Use
          it to get a shareable permalink for your example script.
        </li>
        <li>
          The <tt>coffee --watch</tt> feature now only works on Node.js 0.6.0
          and higher, but now also works properly on Windows.
        </li>
        <li>
          Lots of small bug fixes from
          <b><a href="https://github.com/michaelficarra">@michaelficarra</a></b>,
          <b><a href="https://github.com/geraldalewis">@geraldalewis</a></b>,
          <b><a href="https://github.com/satyr">@satyr</a></b>, and
          <b><a href="https://github.com/trevorburnham">@trevorburnham</a></b>.
        </li>
      </ul>
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">
        <a href="https://github.com/jashkenas/coffee-script/compare/1.1.1...1.1.2">1.1.2</a>
        <span class="timestamp"> &ndash; <small>August 4, 2011</small></span>
      </b>
      Fixes for block comment formatting, <tt>?=</tt> compilation, implicit calls
      against control structures, implicit invocation of a try/catch block,
      variadic arguments leaking from local scope, line numbers in syntax errors
      following heregexes, property access on parenthesized number literals,
      bound class methods and super with reserved names, a REPL overhaul,
      consecutive compiled semicolons, block comments in implicitly called objects,
      and a Chrome bug.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">1.1.1
        <span class="timestamp"> &ndash; <small>May 10, 2011</small></span>
      </b>
      Bugfix release for classes with external constructor functions, see
      issue #1182.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">1.1.0
        <span class="timestamp"> &ndash; <small>May 1, 2011</small></span>
      </b>
      When running via the <tt>coffee</tt> executable, <tt>process.argv</tt> and
      friends now report <tt>coffee</tt> instead of <tt>node</tt>.
      Better compatibility with <b>Node.js 0.4.x</b> module lookup changes.
      The output in the REPL is now colorized, like Node's is.
      Giving your concatenated CoffeeScripts a name when using <tt>--join</tt> is now mandatory.
      Fix for lexing compound division <tt>/=</tt> as a regex accidentally.
      All <tt>text/coffeescript</tt> tags should now execute in the order they're included.
      Fixed an issue with extended subclasses using external constructor functions.
      Fixed an edge-case infinite loop in <tt>addImplicitParentheses</tt>.
      Fixed exponential slowdown with long chains of function calls.
      Globals no longer leak into the CoffeeScript REPL.
      Splatted parameters are declared local to the function.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">1.0.1
        <span class="timestamp"> &ndash; <small>Jan 31, 2011</small></span>
      </b>
      Fixed a lexer bug with Unicode identifiers. Updated REPL for compatibility
      with Node.js 0.3.7. Fixed requiring relative paths in the REPL. Trailing
      <tt>return</tt> and <tt>return undefined</tt> are now optimized away.
      Stopped requiring the core Node.js <tt>"util"</tt> module for
      back-compatibility with Node.js 0.2.5. Fixed a case where a
      conditional <tt>return</tt> would cause fallthrough in a <tt>switch</tt>
      statement. Optimized empty objects in destructuring assignment.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">1.0.0
        <span class="timestamp"> &ndash; <small>Dec 24, 2010</small></span>
      </b>
      CoffeeScript loops no longer try to preserve block scope when functions
      are being generated within the loop body. Instead, you can use the
      <tt>do</tt> keyword to create a convenient closure wrapper.
      Added a <tt>--nodejs</tt> flag for passing through options directly
      to the <tt>node</tt> executable.
      Better behavior around the use of pure statements within expressions.
      Fixed inclusive slicing through <tt>-1</tt>, for all browsers, and splicing
      with arbitrary expressions as endpoints.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.9.6
        <span class="timestamp"> &ndash; <small>Dec 6, 2010</small></span>
      </b>
      The REPL now properly formats stacktraces, and stays alive through
      asynchronous exceptions. Using <tt>--watch</tt> now prints timestamps as
      files are compiled. Fixed some accidentally-leaking variables within
      plucked closure-loops. Constructors now maintain their declaration
      location within a class body. Dynamic object keys were removed.
      Nested classes are now supported. Fixes execution context for naked
      splatted functions. Bugfix for inversion of chained comparisons.
      Chained class instantiation now works properly with splats.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.9.5
        <span class="timestamp"> &ndash; <small>Nov 21, 2010</small></span>
      </b>
      0.9.5 should be considered the first release candidate for CoffeeScript 1.0.
      There have been a large number of internal changes since the previous release,
      many contributed from <b>satyr</b>'s <a href="http://github.com/satyr/coco">Coco</a>
      dialect of CoffeeScript. Heregexes (extended regexes) were added. Functions
      can now have default arguments. Class bodies are now executable code.
      Improved syntax errors for invalid CoffeeScript. <tt>undefined</tt> now
      works like <tt>null</tt>, and cannot be assigned a new value.
      There was a precedence change with respect to single-line comprehensions:
      <tt>result = i for i in list</tt><br /> used to parse as <tt>result = (i for i in list)</tt>
      by default ... it now parses as <br /><tt>(result = i) for i in list</tt>.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.9.4
        <span class="timestamp"> &ndash; <small>Sep 21, 2010</small></span>
      </b>
      CoffeeScript now uses appropriately-named temporary variables, and recycles
      their references after use. Added <tt>require.extensions</tt> support for
      <b>Node.js 0.3</b>. Loading CoffeeScript in the browser now adds just a
      single <tt>CoffeeScript</tt> object to global scope.
      Fixes for implicit object and block comment edge cases.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.9.3
        <span class="timestamp"> &ndash; <small>Sep 16, 2010</small></span>
      </b>
      CoffeeScript <tt>switch</tt> statements now compile into JS <tt>switch</tt>
      statements &mdash; they previously compiled into <tt>if/else</tt> chains
      for JavaScript 1.3 compatibility.
      Soaking a function invocation is now supported. Users of the RubyMine
      editor should now be able to use <tt>--watch</tt> mode.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.9.2
        <span class="timestamp"> &ndash; <small>Aug 23, 2010</small></span>
      </b>
      Specifying the start and end of a range literal is now optional, eg. <tt>array[3..]</tt>.
      You can now say <tt>a not instanceof b</tt>.
      Fixed important bugs with nested significant and non-significant indentation (Issue #637).
      Added a <tt>--require</tt> flag that allows you to hook into the <tt>coffee</tt> command.
      Added a custom <tt>jsl.conf</tt> file for our preferred JavaScriptLint setup.
      Sped up Jison grammar compilation time by flattening rules for operations.
      Block comments can now be used with JavaScript-minifier-friendly syntax.
      Added JavaScript's compound assignment bitwise operators. Bugfixes to
      implicit object literals with leading number and string keys, as the subject
      of implicit calls, and as part of compound assignment.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.9.1
        <span class="timestamp"> &ndash; <small>Aug 11, 2010</small></span>
      </b>
      Bugfix release for <b>0.9.1</b>. Greatly improves the handling of mixed
      implicit objects, implicit function calls, and implicit indentation.
      String and regex interpolation is now strictly <tt>#{ ... }</tt> (Ruby style).
      The compiler now takes a <tt>--require</tt> flag, which specifies scripts
      to run before compilation.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.9.0
        <span class="timestamp"> &ndash; <small>Aug 4, 2010</small></span>
      </b>
      The CoffeeScript <b>0.9</b> series is considered to be a release candidate
      for <b>1.0</b>; let's give her a shakedown cruise. <b>0.9.0</b> introduces a massive
      backwards-incompatible change: Assignment now uses <tt>=</tt>, and object
      literals use <tt>:</tt>, as in JavaScript. This allows us to have implicit
      object literals, and YAML-style object definitions. Half assignments are
      removed, in favor of <tt>+=</tt>, <tt>or=</tt>, and friends.
      Interpolation now uses a hash mark <tt>#</tt> instead of the dollar sign
      <tt>$</tt> &mdash; because dollar signs may be part of a valid JS identifier.
      Downwards range comprehensions are now safe again, and are optimized to
      straight for loops when created with integer endpoints.
      A fast, unguarded form of object comprehension was added:
      <tt>for all key, value of object</tt>. Mentioning the <tt>super</tt> keyword
      with no arguments now forwards all arguments passed to the function,
      as in Ruby. If you extend class <tt>B</tt> from parent class <tt>A</tt>, if
      <tt>A</tt> has an <tt>extended</tt> method defined, it will be called, passing in <tt>B</tt> &mdash;
      this enables static inheritance, among other things. Cleaner output for
      functions bound with the fat arrow. <tt>@variables</tt> can now be used
      in parameter lists, with the parameter being automatically set as a property
      on the object &mdash; useful in constructors and setter functions.
      Constructor functions can now take splats.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.7.2
        <span class="timestamp"> &ndash; <small>Jul 12, 2010</small></span>
      </b>
      Quick bugfix (right after 0.7.1) for a problem that prevented <tt>coffee</tt>
      command-line options from being parsed in some circumstances.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.7.1
        <span class="timestamp"> &ndash; <small>Jul 11, 2010</small></span>
      </b>
      Block-style comments are now passed through and printed as JavaScript block
      comments -- making them useful for licenses and copyright headers. Better
      support for running coffee scripts standalone via hashbangs.
      Improved syntax errors for tokens that are not in the grammar.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.7.0
        <span class="timestamp"> &ndash; <small>Jun 28, 2010</small></span>
      </b>
      Official CoffeeScript variable style is now camelCase, as in JavaScript.
      Reserved words are now allowed as object keys, and will be quoted for you.
      Range comprehensions now generate cleaner code, but you have to specify <tt>by -1</tt>
      if you'd like to iterate downward. Reporting of syntax errors is greatly
      improved from the previous release. Running <tt>coffee</tt> with no arguments
      now launches the REPL, with Readline support. The <tt>&lt;-</tt> bind operator
      has been removed from CoffeeScript. The <tt>loop</tt> keyword was added,
      which is equivalent to a <tt>while true</tt> loop. Comprehensions that contain
      closures will now close over their variables, like the semantics of a <tt>forEach</tt>.
      You can now use bound function in class definitions (bound to the instance).
      For consistency, <tt>a in b</tt> is now an array presence check, and <tt>a of b</tt>
      is an object-key check. Comments are no longer passed through to the generated
      JavaScript.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.6.2
        <span class="timestamp"> &ndash; <small>May 15, 2010</small></span>
      </b>
      The <tt>coffee</tt> command will now preserve directory structure when
      compiling a directory full of scripts. Fixed two omissions that were preventing
      the CoffeeScript compiler from running live within Internet Explorer.
      There's now a syntax for block comments, similar in spirit to CoffeeScript's heredocs.
      ECMA Harmony DRY-style pattern matching is now supported, where the name
      of the property is the same as the name of the value: <tt>{name, length}: func</tt>.
      Pattern matching is now allowed within comprehension variables. <tt>unless</tt>
      is now allowed in block form. <tt>until</tt> loops were added, as the inverse
      of <tt>while</tt> loops. <tt>switch</tt> statements are now allowed without
      switch object clauses. Compatible
      with Node.js <b>v0.1.95</b>.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.6.1
        <span class="timestamp"> &ndash; <small>Apr 12, 2010</small></span>
      </b>
      Upgraded CoffeeScript for compatibility with the new Node.js <b>v0.1.90</b>
      series.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.6.0
        <span class="timestamp"> &ndash; <small>Apr 3, 2010</small></span>
      </b>
      Trailing commas are now allowed, a-la Python. Static
      properties may be assigned directly within class definitions,
      using <tt>@property</tt> notation.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.5.6
        <span class="timestamp"> &ndash; <small>Mar 23, 2010</small></span>
      </b>
      Interpolation can now be used within regular expressions and heredocs, as well as
      strings. Added the <tt>&lt;-</tt> bind operator.
      Allowing assignment to half-expressions instead of special <tt>||=</tt>-style
      operators. The arguments object is no longer automatically converted into
      an array. After requiring <tt>coffee-script</tt>, Node.js can now directly
      load <tt>.coffee</tt> files, thanks to <b>registerExtension</b>. Multiple
      splats can now be used in function calls, arrays, and pattern matching.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.5.5
        <span class="timestamp"> &ndash; <small>Mar 8, 2010</small></span>
      </b>
      String interpolation, contributed by
      <a href="http://github.com/StanAngeloff">Stan Angeloff</a>.
      Since <tt>--run</tt> has been the default since <b>0.5.3</b>, updating
      <tt>--stdio</tt> and <tt>--eval</tt> to run by default, pass <tt>--compile</tt>
      as well if you'd like to print the result.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.5.4
        <span class="timestamp"> &ndash; <small>Mar 3, 2010</small></span>
      </b>
      Bugfix that corrects the Node.js global constants <tt>__filename</tt> and
      <tt>__dirname</tt>. Tweaks for more flexible parsing of nested function
      literals and improperly-indented comments. Updates for the latest Node.js API.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.5.3
        <span class="timestamp"> &ndash; <small>Feb 27, 2010</small></span>
      </b>
      CoffeeScript now has a syntax for defining classes. Many of the core
      components (Nodes, Lexer, Rewriter, Scope, Optparse) are using them.
      Cakefiles can use <tt>optparse.coffee</tt> to define options for tasks.
      <tt>--run</tt> is now the default flag for the <tt>coffee</tt> command,
      use <tt>--compile</tt> to save JavaScripts. Bugfix for an ambiguity between
      RegExp literals and chained divisions.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.5.2
        <span class="timestamp"> &ndash; <small>Feb 25, 2010</small></span>
      </b>
      Added a compressed version of the compiler for inclusion in web pages as
      <br  /><tt>extras/coffee-script.js</tt>. It'll automatically run any script tags
      with type <tt>text/coffeescript</tt> for you. Added a <tt>--stdio</tt> option
      to the <tt>coffee</tt> command, for piped-in compiles.
    </p>


    <p>
      <b class="header" style="margin-top: 20px;">0.5.1
        <span class="timestamp"> &ndash; <small>Feb 24, 2010</small></span>
      </b>
      Improvements to null soaking with the existential operator, including
      soaks on indexed properties. Added conditions to <tt>while</tt> loops,
      so you can use them as filters with <tt>when</tt>, in the same manner as
      comprehensions.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.5.0
        <span class="timestamp"> &ndash; <small>Feb 21, 2010</small></span>
      </b>
      CoffeeScript 0.5.0 is a major release, While there are no language changes,
      the Ruby compiler has been removed in favor of a self-hosting
      compiler written in pure CoffeeScript.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.3.2
        <span class="timestamp"> &ndash; <small>Feb 8, 2010</small></span>
      </b>
      <tt>@property</tt> is now a shorthand for <tt>this.property</tt>.<br />
      Switched the default JavaScript engine from Narwhal to Node.js. Pass
      the <tt>--narwhal</tt> flag if you'd like to continue using it.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.3.0
        <span class="timestamp"> &ndash; <small>Jan 26, 2010</small></span>
      </b>
      CoffeeScript 0.3 includes major syntax changes:
      <br />
      The function symbol was changed to
      <tt>-></tt>, and the bound function symbol is now <tt>=></tt>.
      <br />
      Parameter lists in function definitions must now be wrapped in parentheses.
      <br />
      Added property soaking, with the <tt>?.</tt> operator.
      <br />
      Made parentheses optional, when invoking functions with arguments.
      <br />
      Removed the obsolete block literal syntax.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.2.6
        <span class="timestamp"> &ndash; <small>Jan 17, 2010</small></span>
      </b>
      Added Python-style chained comparisons, the conditional existence
      operator <tt>?=</tt>, and some examples from <i>Beautiful Code</i>.
      Bugfixes relating to statement-to-expression conversion, arguments-to-array
      conversion, and the TextMate syntax highlighter.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.2.5
        <span class="timestamp"> &ndash; <small>Jan 13, 2010</small></span>
      </b>
      The conditions in switch statements can now take multiple values at once &mdash;
      If any of them are true, the case will run. Added the long arrow <tt>==></tt>,
      which defines and immediately binds a function to <tt>this</tt>. While loops can
      now be used as expressions, in the same way that comprehensions can. Splats
      can be used within pattern matches to soak up the rest of an array.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.2.4
        <span class="timestamp"> &ndash; <small>Jan 12, 2010</small></span>
      </b>
      Added ECMAScript Harmony style destructuring assignment, for dealing with
      extracting values from nested arrays and objects. Added indentation-sensitive
      heredocs for nicely formatted strings or chunks of code.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.2.3
        <span class="timestamp"> &ndash; <small>Jan 11, 2010</small></span>
      </b>
      Axed the unsatisfactory <tt>ino</tt> keyword, replacing it with <tt>of</tt> for
      object comprehensions. They now look like: <tt>for prop, value of object</tt>.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.2.2
        <span class="timestamp"> &ndash; <small>Jan 10, 2010</small></span>
      </b>
      When performing a comprehension over an object, use <tt>ino</tt>, instead
      of <tt>in</tt>, which helps us generate smaller, more efficient code at
      compile time.
      <br />
      Added <tt>::</tt> as a shorthand for saying <tt>.prototype.</tt>
      <br />
      The "splat" symbol has been changed from a prefix asterisk <tt>*</tt>, to
      a postfix ellipsis <tt>...</tt>
      <br />
      Added JavaScript's <tt>in</tt> operator,
      empty <tt>return</tt> statements, and empty <tt>while</tt> loops.
      <br />
      Constructor functions that start with capital letters now include a
      safety check to make sure that the new instance of the object is returned.
      <br />
      The <tt>extends</tt> keyword now functions identically to <tt>goog.inherits</tt>
      in Google's Closure Library.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.2.1
        <span class="timestamp"> &ndash; <small>Jan 5, 2010</small></span>
      </b>
      Arguments objects are now converted into real arrays when referenced.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.2.0
        <span class="timestamp"> &ndash; <small>Jan 5, 2010</small></span>
      </b>
      Major release. Significant whitespace. Better statement-to-expression
      conversion. Splats. Splice literals. Object comprehensions. Blocks.
      The existential operator. Many thanks to all the folks who posted issues,
      with special thanks to
      <a href="http://github.com/liamoc">Liam O'Connor-Davis</a> for whitespace
      and expression help.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.1.6
        <span class="timestamp"> &ndash; <small>Dec 27, 2009</small></span>
      </b>
      Bugfix for running <tt>coffee --interactive</tt> and <tt>--run</tt>
      from outside of the CoffeeScript directory. Bugfix for nested
      function/if-statements.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.1.5
        <span class="timestamp"> &ndash; <small>Dec 26, 2009</small></span>
      </b>
      Array slice literals and array comprehensions can now both take Ruby-style
      ranges to specify the start and end. JavaScript variable declaration is
      now pushed up to the top of the scope, making all assignment statements into
      expressions. You can use <tt>\</tt> to escape newlines.
      The <tt>coffee-script</tt> command is now called <tt>coffee</tt>.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.1.4
        <span class="timestamp"> &ndash; <small>Dec 25, 2009</small></span>
      </b>
      The official CoffeeScript extension is now <tt>.coffee</tt> instead of
      <tt>.cs</tt>, which properly belongs to
      <a href="http://en.wikipedia.org/wiki/C_Sharp_(programming_language)">C#</a>.
      Due to popular demand, you can now also use <tt>=</tt> to assign. Unlike
      JavaScript, <tt>=</tt> can also be used within object literals, interchangeably
      with <tt>:</tt>. Made a grammatical fix for chained function calls
      like <tt>func(1)(2)(3)(4)</tt>. Inheritance and super no longer use
      <tt>__proto__</tt>, so they should be IE-compatible now.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.1.3
        <span class="timestamp"> &ndash; <small>Dec 25, 2009</small></span>
      </b>
      The <tt>coffee</tt> command now includes <tt>--interactive</tt>,
      which launches an interactive CoffeeScript session, and <tt>--run</tt>,
      which directly compiles and executes a script. Both options depend on a
      working installation of Narwhal.
      The <tt>aint</tt> keyword has been replaced by <tt>isnt</tt>, which goes
      together a little smoother with <tt>is</tt>.
      Quoted strings are now allowed as identifiers within object literals: eg.
      <tt>{"5+5": 10}</tt>.
      All assignment operators now use a colon: <tt>+:</tt>, <tt>-:</tt>,
      <tt>*:</tt>, etc.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.1.2
        <span class="timestamp"> &ndash; <small>Dec 24, 2009</small></span>
      </b>
      Fixed a bug with calling <tt>super()</tt> through more than one level of
      inheritance, with the re-addition of the <tt>extends</tt> keyword.
      Added experimental <a href="http://narwhaljs.org/">Narwhal</a>
      support (as a Tusk package), contributed by
      <a href="http://tlrobinson.net/">Tom Robinson</a>, including
      <b>bin/cs</b> as a CoffeeScript REPL and interpreter.
      New <tt>--no-wrap</tt> option to suppress the safety function
      wrapper.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.1.1
        <span class="timestamp"> &ndash; <small>Dec 24, 2009</small></span>
      </b>
      Added <tt>instanceof</tt> and <tt>typeof</tt> as operators.
    </p>

    <p>
      <b class="header" style="margin-top: 20px;">0.1.0
        <span class="timestamp"> &ndash; <small>Dec 24, 2009</small></span>
      </b>
      Initial CoffeeScript release.
    </p>

  </div>

  <script type="text/coffeescript">
    sourceFragment = "try:"

    # Set up the compilation function, to run when you stop typing.
    compileSource = ->
      source = $('#repl_source').val()
      window.compiledJS = ''
      try
        window.compiledJS = CoffeeScript.compile source, bare: on
        el = $('#repl_results')[0]
        if el.innerText
          el.innerText = window.compiledJS
        else
          $(el).text window.compiledJS
        $('#error').hide()
      catch {location, message}
        if location?
          message = "Error on line #{location.first_line + 1}: #{message}"
        $('#error').text(message).show()

      # Update permalink
      $('#repl_permalink').attr 'href', "##{sourceFragment}#{encodeURIComponent source}"

    # Listen for keypresses and recompile.
    $('#repl_source').keyup -> compileSource()

    # Eval the compiled js.
    evalJS = ->
      try
        eval window.compiledJS
      catch error then alert error

    # Load the console with a string of CoffeeScript.
    window.loadConsole = (coffee) ->
      $('#repl_source').val coffee
      compileSource()
      $('.navigation.try').addClass('active')
      false

    # Helper to hide the menus.
    closeMenus = ->
      $('.navigation.active').removeClass 'active'

    $('.minibutton.run').click -> evalJS()

    # Bind navigation buttons to open the menus.
    $('.navigation').click (e) ->
      return if e.target.tagName.toLowerCase() is 'a'
      return false if $(e.target).closest('.repl_wrapper').length
      if $(this).hasClass('active')
        closeMenus()
      else
        closeMenus()
        $(this).addClass 'active'
      false

    # Dismiss console if Escape pressed or click falls outside console
    # Trigger Run button on Ctrl-Enter
    $(document.body)
      .keydown (e) ->
        closeMenus() if e.which == 27
        evalJS() if e.which == 13 and (e.metaKey or e.ctrlKey) and $('.minibutton.run:visible').length
      .click (e) ->
        return false if $(e.target).hasClass('minibutton')
        closeMenus()

    $('#open_webchat').click ->
      $(this).replaceWith $('<iframe src="http://webchat.freenode.net/?channels=coffeescript" width="625" height="400"></iframe>')

    $("#repl_permalink").click (e) ->
        window.location = $(this).attr("href")
        false

    # If source code is included in location.hash, display it.
    hash = decodeURIComponent location.hash.replace(/^#/, '')
    if hash.indexOf(sourceFragment) == 0
        src = hash.substr sourceFragment.length
        loadConsole src

    compileSource()

  </script>

  <script src="documentation/vendor/jquery-1.6.4.js"></script>
  <script src="extras/coffee-script.js"></script>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-41753901-4', 'coffee-script.org');
    ga('send', 'pageview');
  </script>

</body>
</html>
