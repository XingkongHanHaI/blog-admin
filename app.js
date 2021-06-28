const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:3000'], // 所要允许跨域的ip
  methods: ['GET', 'POST'],
  alloweHeaders: ['Conten-Type', 'Authorization']
}));

app.post('/app/home', (req, res) => {
  res.send([])
})

app.post("/app/home/shareList", (req, res) => {
  let shareList = [
    {
      iconText: "#icon-QQ",
      url: "www.baidu.com"
    },
    {
      iconText: "#icon-weixin",
      url: "www.baidu.com"
    },
    {
      iconText: "#icon-twitter",
      url: "www.baidu.com"
    },
    {
      iconText: "#icon-github",
      url: "www.baidu.com"
    }
  ];
  res.send(shareList);
})
app.post("/app/blog/tags", (req, res) => {
  let tags = [
    {
      tagName: "HTML",
      tagColor: "#e44d2c"
    },
    {
      tagName: "CSS",
      tagColor: "#264de4"
    },
    {
      tagName: "JavaScript",
      tagColor: "#d1b514"
    },
    {
      tagName: "Vue",
      tagColor: "#41b883"
    },
    {
      tagName: "React",
      tagColor: "#07aedc"
    },
    {
      tagName: "WebPack",
      tagColor: "#75afcc"
    }
  ];
  res.send(tags);
})
app.post("/app/blog/list", (req, res) => {
  let blogList = [
    {
      blogLogoUrl: "http://iph.href.lu/440x320",
      blogTitle: "一文解决JavaScript数据换",
      blogAbstract: "在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有v",
      blogCreateTime: "2020-01-02",
      blogTag: {
        tagName: "JavaScript",
        tagColor: "#d1b514"
      },
      blogView: {
        views: 0,
        loves: 0
      }
    },
    {
      blogLogoUrl: "http://iph.href.lu/440x320",
      blogTitle: "一文解数据类型及转换",
      blogAbstract: "在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有v",
      blogCreateTime: "2020-01-02",
      blogTag: {
        tagName: "CSS",
        tagColor: "#264de4"
      },
      blogView: {
        views: 0,
        loves: 0
      }
    },
    {
      blogLogoUrl: "http://iph.href.lu/440x320",
      blogTitle: "一文Script数据类型及转换",
      blogAbstract: "在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有v",
      blogCreateTime: "2020-01-02",
      blogTag: {
        tagName: "HTML",
        tagColor: "#e44d2c"
      },
      blogView: {
        views: 0,
        loves: 0
      }
    }
  ];
  res.send(blogList);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})