/**
 * Created by Alex on 2016/8/15.
 */


var pop_html = '<div class="marker"> <div class="ui two column divided grid">' +
    '<div class="row"><div class="column"><div class="ui image tiny">' +
    '<img src="image/cn.svg"></div></div><div class="column"><h4 class="currency_code">CNY</h4>' +
    '<span class="currency_name">ChineseYuan</span><h4 class="rate_value">15.05</h4></div></div></div></div></div>';

$(document).ready(function () {
    var earth = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);


    var content = "Hello World";
    var pop = `<b>${content}</b>`;

    var marker = WE.marker([35.86166, 104.195397]).addTo(earth);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 200, maxHeight: 150, closeButton: true}).openPopup();

    marker.bindPopup(pop_html,
        {maxWidth: 150, closeButton: true}).openPopup();



    var marker2 = WE.marker([30.058056, 31.228889]).addTo(earth);
    marker2.bindPopup("<b>Cairo</b><br>Rebuild!", {maxWidth: 120, closeButton: false});

    marker2.bindPopup("<b>Cairo</b><br>Rebuild", {maxWidth: 120, closeButton: false});

    earth.setView([51.505, 0], 2);
});