function addCSSRule(sheet, selector, rules, index) {
  if ("insertRule" in sheet) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  } else if ("addRule" in sheet) {
    sheet.addRule(selector, rules, index);
  }
}

var style = document.createElement("style");
document.head.appendChild(style);
const css = `
  
table .form-control {
    border: 1px solid #ced4da!important;
}

table{
    caption-side: bottom;
    border-collapse: collapse;
    overflow-x: auto;
    white-space: nowrap;
}

.table-responsive {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

table {
    caption-side: bottom;
    border-collapse: collapse;
}

ul.pagination {
    justify-content: end;
}

.table-bordered> :not(caption)>* {
    border-width: 1px 0;
}

table * {
    border: none !important;
}


.table tbody {
    background-color: #ffffff0a!important;
}

.table th {
    background-color: #037eff!important;
    color: #fff!important;
}


table.table-bordered.dataTable th, table.table-bordered.dataTable td {
    border: 1px solid #eee!important;
}

body {
    font-weight: 400;
    line-height: 1.429;
    color: rgb(87, 87, 87);
    background-color: rgb(229, 229, 229);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "PingFang SC", Helvetica, "Microsoft Yahei", Arial, sans-serif;
}

#app {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
}
.input{
    height: 3.2rem;
}
._dropdownmenu{
background: white;
    padding: 17px 19px;
    position: absolute;
    right: 0;
    list-style: none;
    line-height: 33px;
    border-radius: 6px;
    box-shadow: 2px 2px 11px 0px #00000073;
}
.content-main {
    overflow: auto;
    padding-bottom: 7rem;
}
.dropdown-toggle::after{
    display: none;
}
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
}

#app>.main {
    width: 1066px;
    background-color: white;
    position: relative;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background-color: #037eff;
}

.nav-pills .nav-link {
    height: 3rem;
    border-radius: 8px;    
    font-weight: 500;
}

#app>.main>header {
    position: fixed;
    background: #007dff;
    height: 4.5rem;
    width: inherit;
    z-index: 200;
}

#app>.main>.content {
    padding-top: 71px;
    height: 100%;
}


#app>.main>.content .side_bar>.wrapper .block-nav {
    padding: 0 12px 8px;
}

#app>.main>.content .side_bar>.wrapper .block-nav .side_item:hover {
    background-color: rgba(0, 0, 0, 0.04);
}

#app>.main>.content .side_bar>.wrapper .block-nav .side_item.active {
    color: #007dff !important;
    font-weight: 700;
}

#app>.main>.content .side_bar>.wrapper .block-nav .block-title {
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    height: 20px;
    margin-top: 15.5px;
    margin-bottom: 12px;
    padding-left: 16px;
    color: #606266;
}

#app>.main>.content .side_bar>.wrapper .block-nav .side_item {
    height: 45px;
    padding: 10px 16px;
    border-radius: 4px;
    font-size: 15px;
    line-height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    border: 0;
    outline: 0;
    background-color: white;
}


#app>.main>.content .side_bar>.wrapper .block-nav .side_item>.side-icon {
    margin-right: 12px;
}

#app>.main>.content .side_bar>.wrapper .block-nav .side_item,
#app>.main>.content .side_bar>.wrapper .block-nav .side_item:hover {
    color: #0c0d0f;
}

#app>.main>.content .side_bar>.wrapper .block-nav+.block-nav::before {
    content: "";
    display: block;
    height: 0.5px;
    background-color: rgba(12, 13, 15, 0.06);
    margin: 0px 12px 8px;
}


#app>.main>.content .side_bar>.wrapper {
    margin-top: 10px;
    padding-bottom: 5rem;
    width: 100%;
    position: relative;
    height: 90vh;
}

#app>.main>.content .side_bar>.wrapper>.block-nav .side_item>.openTab {
    width: auto;
    margin-left: auto;
    display: none;
}
#app>.main>.content .side_bar>.wrapper>.block-nav .side_item:hover>.openTab {
    display: block;
}

a {
    text-decoration: none;
}

.side_menu {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    margin-top: 7px;
}

.side_menu .sidelink {
    height: 45px;
    padding: 5px 46px;
    color: #777777;
    border-radius: 4px;
    font-size: 15px;
    line-height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.side_menu .sidelink>.side-icon {
    margin-right: 12px;
}

.side_menu .sidelink:hover {
    color: #007dff;
}

.toggle_side {
    border: 0;
    background: 0;
}

#app>.main>.content .side_bar.shows {
    width: 25%;
    left: 0;
}

#app>.main>.content .side_bar {
    border-right: 1px solid #d0d0d0;
    position: relative;
    height: 100%;
    transition: all .3s;
    width: 0px;
}


.fs-7 {
    font-size: 7px;
}

.fs-8 {
    font-size: 8px;
}

.fs-9 {
    font-size: 9px;
}

.fs-10 {
    font-size: 10px;
}

.fs-11 {
    font-size: 11px;
}

.fs-12 {
    font-size: 12px;
}

.fs-13 {
    font-size: 13px;
}

.fs-14 {
    font-size: 14px;
}

.fs-15 {
    font-size: 15px;
}

.fs-16 {
    font-size: 16px;
}

.fs-17 {
    font-size: 17px;
}

.fs-18 {
    font-size: 18px;
}

.fs-19 {
    font-size: 19px;
}

.fs-20 {
    font-size: 20px;
}

.fs-21 {
    font-size: 21px;
}

.fs-22 {
    font-size: 22px;
}

.fs-23 {
    font-size: 23px;
}

.fs-24 {
    font-size: 24px;
}

.fs-25 {
    font-size: 25px;
}

.fs-26 {
    font-size: 26px;
}

.fs-27 {
    font-size: 27px;
}

.fs-28 {
    font-size: 28px;
}

.fs-29 {
    font-size: 29px;
}

.fs-30 {
    font-size: 30px;
}

.fw-500 {
    font-weight: 500;
}

.fw-400 {
    font-weight: 400;
}

.alert-primary {
    --bs-alert-color: #007dff;
    --bs-alert-bg: #d0e7ff;
    --bs-alert-border-color: #d0e7ff;
    --bs-alert-link-color: #d0e7ff;
    font-weight: 500;
    line-height: 27px;
}
.alert-danger {
    --bs-alert-color: #fff;
    --bs-alert-bg: #ff1919;
    --bs-alert-border-color: #ff1919;
    --bs-alert-link-color: #ff1919;

}    

.btn-danger {
    --bs-btn-color: #fff;
    --bs-btn-bg: #ff5968;
    --bs-btn-border-color: #ff5968;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #ff5968;
    --bs-btn-hover-border-color: #ff5968;
    --bs-btn-focus-shadow-rgb: 225,83,97;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #ff5968;
    --bs-btn-active-border-color: #ff5968;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #ff5968;
    --bs-btn-disabled-border-color: #ff5968;
}
.alert-buy{
font-weight: 500;
    line-height: 27px;
    height: 7rem;
}

.reactions:checked+img {
    border: 3px solid #007dff;
    position: relative;
    /* top: -10px; */
    transform: scale(1.2);
}
.text-danger{
    color: #ff1919!important;
}
.bg-danger {
    background-color: #ff1919!important;
}

.styled-table {
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    width: 100%;
    white-space: nowrap;
}

.bg-success {
    --bs-bg-opacity: 1;
    background-color: #00d50e !important;
}
.styled-table thead tr {
    background-color: #d0e7ff;
    color: #007dff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #007dff;
}
.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #007dff;
}
`;
var rule = css;
var ruleList = rule.split("}");
ruleList.pop(); // Remove the empty item at the end

ruleList.forEach(function (rule) {
  var trimmedRule = rule.trim();
  if (trimmedRule) {
    var ruleParts = trimmedRule.split("{");
    if (ruleParts.length === 2) {
      var selector = ruleParts[0].trim();
      var rules = ruleParts[1].trim();
      addCSSRule(style.sheet, selector, rules);
    }
  }
});
