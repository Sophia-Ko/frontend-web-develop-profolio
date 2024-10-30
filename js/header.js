// 共用的html header
document.write(`
<!-- meta -->
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width,initial-scale=1.0, user-scalable=no">
<!-- SEO -->
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta property="og:url" content=""/>
<meta property="og:title" content="" />
<meta property="og:description" content="" /> 
<meta property="og:image" content=""/>
<meta name="theme-color" content="#000000">
<link rel="shortcut icon" href="img/webicon.ico"/>
<!-- css -->
<link rel="stylesheet" href="css/font.css" type="text/css">
<link rel="stylesheet" href="css/animate.min.css">
<link rel="stylesheet" href="css/main.css?v=${getCurrentVersion()}" type="text/css">
<!-- js -->
<script src="js/module/jquery-3.5.1.min.js"></script>
<script src="js/module/vue.js"></script>
<script src="js/module/wow.js"></script>
`);

function getCurrentVersion() {
  return "20241030"; // 版本號只需要在這裡更改一次
}
