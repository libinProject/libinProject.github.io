(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{221:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"elk单机部署-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elk单机部署-linux"}},[s._v("#")]),s._v(" ELK单机部署-Linux")]),s._v(" "),t("h2",{attrs:{id:"jdk安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk安装配置"}},[s._v("#")]),s._v(" JDK安装配置")]),s._v(" "),t("h3",{attrs:{id:"卸载openjdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载openjdk"}},[s._v("#")]),s._v(" 卸载OpenJDK")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  已经存在了openjdk，查询需要卸载的内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" openjdk\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  据查询的要卸载的内容，使用命令rpm -e --nodeps进行卸载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps java-1.7.0-openjdk-headless-1.7.0.171-2.6.13.0.el7_4.x86_64\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"安装sunjdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装sunjdk"}},[s._v("#")]),s._v(" 安装SunJDK")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  首先到官网下载jdk-8u66-linux-x64.tar.gz")]),s._v("\nhttp://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  通过终端在/usr/local目录下新建java文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/java\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  解压")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf jdk-8u66-linux-x64.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  设置环境变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/vagrant/java/jdk1.8.0_172\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/jre/lib/rt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/lib/dt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/lib/tools.jar  \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/bin\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"安装elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装elasticsearch"}},[s._v("#")]),s._v(" 安装elasticsearch")]),s._v(" "),t("h3",{attrs:{id:"下载资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载资源"}},[s._v("#")]),s._v(" 下载资源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  新建资源目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/src\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.2.4.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"安装es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装es"}},[s._v("#")]),s._v(" 安装ES")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  安装命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh elasticsearch-6.1.0.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  创建用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" elasticsearch\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -g elasticsearch elasticsearch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"设置data目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置data目录"}},[s._v("#")]),s._v(" 设置data目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  创建/data/es-data目录，用于elasticsearch数据的存放 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data/es-data\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  修改该目录的拥有者为elasticsearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R elasticsearch:elasticsearch /data/es-data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"设置log的目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置log的目录"}},[s._v("#")]),s._v(" 设置log的目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  创建/data/es-log目录，用于elasticsearch日志的存放 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /log/es-log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  修改该目录的拥有者为elasticsearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R elasticsearch:elasticsearch /log/es-log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"修改配置文件elasticsearch-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件elasticsearch-yml"}},[s._v("#")]),s._v(" 修改配置文件elasticsearch.yml")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/elasticsearch/elasticsearch.yml\n\nvalue如下:\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置data存放的路径为/data/es-data")]),s._v("\npath.data: /data/es-data\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置logs日志的路径为/log/es-log")]),s._v("\npath.logs: /log/es-log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置内存不使用交换分区")]),s._v("\nbootstrap.memory_lock: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置了bootstrap.memory_lock为true时反而会引发9200不会被监听，原因不明")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置允许所有ip可以连接该elasticsearch")]),s._v("\nnetwork.host: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启监听的端口为9200")]),s._v("\nhttp.port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#增加新的参数，为了让elasticsearch-head插件可以访问es (5.x版本，如果没有可以自己手动加)")]),s._v("\nhttp.cors.enabled: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nhttp.cors.allow-origin: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h3",{attrs:{id:"启动elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动elasticsearch"}},[s._v("#")]),s._v(" 启动elasticsearch")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nsystemctl start elasticsearch\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nsystemctl status elasticsearch\n\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" elasticsearch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("ps(如果启动失败，可能是JAVA环境的问题)")]),s._v(" "),t("p",[s._v("vi /etc/sysconfig/elasticsearch")]),s._v(" "),t("p",[s._v("JAVA_HOME=/usr/local/java")]),s._v(" "),t("p",[s._v("sudo systemctl restart elasticsearch.service")])]),s._v(" "),t("h3",{attrs:{id:"开启9200端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启9200端口"}},[s._v("#")]),s._v(" 开启9200端口")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("firewall-cmd --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("/tcp --permanent\n\nfirewall-cmd --reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"安装logstash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装logstash"}},[s._v("#")]),s._v(" 安装logstash")]),s._v(" "),t("h3",{attrs:{id:"下载资源-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载资源-2"}},[s._v("#")]),s._v(" 下载资源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  新建资源目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/src\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://artifacts.elastic.co/downloads/logstash/logstash-6.2.4.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"安装logstash-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装logstash-2"}},[s._v("#")]),s._v(" 安装logstash")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh logstash-6.1.0.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"设置data目录-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置data目录-2"}},[s._v("#")]),s._v(" 设置data目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  创建/data/ls-data目录，用于logstash数据的存放")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data/ls-data\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  修改该目录的拥有者为logstash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R logstash:logstash /data/ls-data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"设置log的目录-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置log的目录-2"}},[s._v("#")]),s._v(" 设置log的目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  创建/data/ls-log目录，用于logstash日志的存放 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /log/ls-log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  修改该目录的拥有者为logstash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R logstash:logstash /log/ls-log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"修改配置文件logstash-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件logstash-yml"}},[s._v("#")]),s._v(" 修改配置文件logstash.yml")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/logstash/logstash.yml\n\nvalue:\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置数据的存储路径为/data/ls-data")]),s._v("\npath.data: /data/ls-data\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置管道配置文件路径为/etc/logstash/conf.d")]),s._v("\npath.config: /etc/logstash/conf.d\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置日志文件的存储路径为/log/ls-log")]),s._v("\npath.logs: /log/ls-log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"启动logstash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动logstash"}},[s._v("#")]),s._v(" 启动logstash")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nsystemctl start logstash\n\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nsystemctl status logstash\n\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动 ")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" logstash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  如果报错：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /usr/share/logstash/bin/system-install /etc/logstash/startup.options system\n\n自建JDK环境：\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/java/jdk1.8.0_221/bin/java /usr/bin/java\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"测试安装是否成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试安装是否成功"}},[s._v("#")]),s._v(" 测试安装是否成功")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看下logstash的安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ql logstash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  创建一个软连接，每次执行命令的时候不用在写安装路径（yum安装是在/usr/share下）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/share/logstash/bin/logstash /bin/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  执行logstash的命令")]),s._v("\nlogstash -e 'input "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" stdin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" output "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" stdout "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  等待片刻后出现“The stdin plugin is now waiting for input:”，输入“abc”回车，有返回的输出")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"配置spring-boot-日志监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置spring-boot-日志监控"}},[s._v("#")]),s._v(" 配置spring-boot 日志监控")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到安装目录  /usr/share/logstash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ql logstash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  创建conf 文件夹，在conf文件夹下创建文件logstash-springboot.conf")]),s._v("\ninput "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    tcp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4560")]),s._v("   //从本地的4560端口取日志。这里笔者将Logstash部署在了虚拟机192.168.226.132上，所以取的是本地地址。\n        codec "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" json_lines  //需要安装logstash-codec-json_lines插件\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\noutput"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  elasticsearch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" hosts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost:9200"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  //输出到ElasticSearch\n  stdout "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" codec "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" rubydebug "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  //若不需要在控制台中输出，此行可以删除\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  安装logstash-codec-json_lines插件")]),s._v("\nbin/logstash-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" logstash-codec-json_lines\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  启动端口监听")]),s._v("\n./bin/logstash -f config/logstash-sample.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  后台启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" /usr/share/logstash/bin/logstash -f /usr/share/logstash/conf/logstash-springboot.conf -w "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" -b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h2",{attrs:{id:"部署kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署kibana"}},[s._v("#")]),s._v(" 部署kibana")]),s._v(" "),t("h3",{attrs:{id:"下载资源-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载资源-3"}},[s._v("#")]),s._v(" 下载资源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  新建资源目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/src\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://artifacts.elastic.co/downloads/kibana/kibana-6.2.4-x86_64.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"安装kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装kibana"}},[s._v("#")]),s._v(" 安装Kibana")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh kibana-6.1.0-x86_64.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"修改kibana-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改kibana-yml"}},[s._v("#")]),s._v(" 修改kibana.yml")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  搜索rpm包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ql kibana\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  修改kibana的配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/kibana/kibana.yml\n\nvalue:\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#kibana页面映射在5601端口")]),s._v("\nserver.port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许所有ip访问5601端口")]),s._v("\nserver.host: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#elasticsearch所在的ip及监听的地址")]),s._v("\nelasticsearch.url: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:9200"')]),s._v("\nkibana.index: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".kibana"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"启动kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动kibana"}},[s._v("#")]),s._v(" 启动kibana")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 ")]),s._v("\nsystemctl start kibana\n\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态 ")]),s._v("\nsystemctl status kibana\n\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动 ")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kibana\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"开放端口5601"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开放端口5601"}},[s._v("#")]),s._v(" 开放端口5601")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("firewall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("add"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("permanent\n\nfirewall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);