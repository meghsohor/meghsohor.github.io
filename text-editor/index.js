//Fonts array
const fonts = [
    { "style": "Arial, Helvetica, sans-serif", "font": "Arial" },
    { "style": "'Arial Black', Gadget, sans-serif", "font": "Arial Black" },
    { "style": "'Comic Sans MS', cursive, sans-serif", "font": "Comic Sans MS" },
    { "style": "'Courier New', Courier, monospace", "font": "Courier New" },
    { "style": "Georgia, serif", "font": "Georgia" },
    { "style": "Impact, Charcoal, sans-serif", "font": "Impact" },
    { "style": "'Lucida Console', Monaco, monospace", "font": "Lucida Console" },
    { "style": "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", "font": "Lucida Sans Unicode" },
    { "style": "'Palatino Linotype', 'Book Antiqua', Palatino, serif", "font": "Palatino Linotype" },
    { "style": "Tahoma, Geneva, sans-serif", "font": "Tahoma" },
    { "style": "'Trebuchet MS', Helvetica, sans-serif", "font": "Trebuchet MS" },
    { "style": "Verdana, Geneva, sans-serif", "font": "Verdana" },
    { "style": "'Comic Sans MS', cursive, sans-serif", "font": "Comic Sans MS" },
    { "style": "Times New Roman", "font": "Times New Roman" }
  ];

//Font size array
const fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];

//Color Arrays
const color1 = [
    { "title": "White Background 1", "color": "#FFFFFF" },
    { "title": "Black, Text 1", "color": "#000000" },
    { "title": "Tan, Background 2", "color": "#EEECE1" },
    { "title": "Dark Blue, Text 2", "color": "#1F497D" },
    { "title": "Blue, Accent 1", "color": "#4F81BD" },
    { "title": "Red, Accent 2", "color": "#C0504D" },
    { "title": "Olive Green, Accent 3", "color": "#9BBB59" },
    { "title": "Purple, Accent 4", "color": "#8064A2" },
    { "title": "Aqua, Accent 5", "color": "#4BACC6" },
    { "title": "Orange, Accent 6", "color": "#F79646" }
  ];
const color2 = [
    { "title": "White Background 1, Background 5%", "color": "#F2F2F2" },
    { "title": "Black, Text 1, Background 50%", "color": "#7F7F7F" },
    { "title": "Tan, Background 2, Darker 10%", "color": "#DDD9C3" },
    { "title": "Dark Blue, Text 2, Lighter 80%", "color": "#C6D9F0" },
    { "title": "Red, Accent 2, Lighter 80%", "color": "#DBE5F1" },
    { "title": "Red, Accent 2, Lighter 80%", "color": "#F2DCDB" },
    { "title": "Olive Green, Accent 3, Lighter 80%", "color": "#EBF1DD" },
    { "title": "Purple, Accent 4, Lighter 80%", "color": "#E5E0EC" },
    { "title": "Aqua, Accent 5, Lighter 80%", "color": "#DBEEF3" },
    { "title": "Orange, Accent 6, Lighter 80%", "color": "#FDEADA" }
  ];
const color3 = [
    { "title": "White Background 1, Darker 15%", "color": "#D8D8D8" },
    { "title": "Black, Text 1, Lighter 35%", "color": "#595959" },
    { "title": "Tan, Background 2, Darker 25%", "color": "#C4BD97" },
    { "title": "Dark Blue, Text 2, Lighter 60%", "color": "#8DB3E2" },
    { "title": "Blue, Accent 1, Lighter 60%", "color": "#B8CCE4" },
    { "title": "Red, Accent 2, Lighter 60%", "color": "#E5B9B7" },
    { "title": "Olive Green, Accent 3, Lighter 60%", "color": "#D7E3BC" },
    { "title": "Purple, Accent 4, Lighter 60%", "color": "#CCC1D9" },
    { "title": "Aqua, Accent 5, Lighter 60%", "color": "#B7DDE8" },
    { "title": "Orange, Accent 6, Lighter 60%", "color": "#FBD5B5" }
  ];
const color4 = [
    { "title": "White Background 1, Darker 25%", "color": "#BFBFBF" },
    { 'title': "Black, Text 1, Lighter 25%", "color": "#3F3F3F" },
    { 'title': 'Tan, Background 2, Darker 50%', 'color': "#938953" },
    { 'title': "Dark Blue, Text 2, Lighter 40%", "color": "#548DD4" },
    { "title": "Blue, Accent 1, Lighter 40%", "color": "#95B3D7" },
    { "title": "Red, Accent 2, Lighter 40%", "color": "#D99694" },
    { "title": "Olive Green, Accent 3, Lighter 40%", "color": "#C3D69B" },
    { "title": "Purple, Accent 4, Lighter 40%", "color": "#B2A2C7" },
    { "title": "Aqua, Accent 5, Lighter 40%", "color": "#92CDDC" },
    { "title": "Orange, Accent 6, Lighter 40%", "color": "#FAC08F" }
  ];
const color5 = [
    { "title": "White Background 1, Darker 35%", "color": "#A5A5A5" },
    { "title": "Black, Text 1, Lighter 15%", "color": "#262626" },
    { "title": "Tan, Background 2, Darker 75%", "color": "#494429" },
    { "title": "Dark Blue, Text 2, Darker 25%", "color": "#17365D" },
    { "title": "Blue, Accent 1, Darker 25%", "color": "#366092" },
    { "title": "Red, Accent 2, Darker 25%", "color": "#953734" },
    { "title": "Olive Green, Accent 3, Darker 25%", "color": "#76923C" },
    { "title": "Purple, Accent 4, Darker 25%", "color": "#5F497A" },
    { "title": "Aqua, Accent 5, Darker 25%", "color": "#31859B" },
    { "title": "Orange, Accent 6, Darker 25%", "color": "#E36C09" }
  ];
const color6 = [
    { "title": "White Background 1, Darker 50%", "color": "#7F7F7F" },
    { "title": "Black, Text 1, Lighter 5%", "color": "#0C0C0C" },
    { "title": "Tan, Background 2, Darker 90%", "color": "#1D1B10" },
    { "title": "Dark Blue, Text 2, Darker 50%", "color": "#0F243E" },
    { "title": "Blue, Accent 1, Darker 50%", "color": "#244061" },
    { "title": "Red, Accent 2, Darker 50%", "color": "#632423" },
    { "title": "Olive Green, Accent 3, Darker 50%", "color": "#4F6128" },
    { "title": "Purple, Accent 4, Darker 50%", "color": "#3F3151" },
    { "title": "Aqua, Accent 5, Darker 50%", "color": "#205867" },
    { "title": "Orange, Accent 6, Darker 50%", "color": "#974806" }
  ];
const color7 = [
    { "title": "Dark red", "color": "#7F7F7F" },
    { "title": "red", "color": "#FF0000" },
    { "title": "Orange", "color": "#FFC000" },
    { "title": "Yellow", "color": "#FFFF00" },
    { "title": "Light Green", "color": "#92D050" },
    { "title": "Green", "color": "#00B050" },
    { "title": "Light Blue", "color": "#00B0F0" },
    { "title": "Blue", "color": "#0070C0" },
    { "title": "Dark Blue", "color": "#002060" },
    { "title": "Purple", "color": "#7030A0" }
  ];
//selecting fonts dropdown
const fontsDropdown = document.querySelector('#fontsDropdown');
//Fetching font list and pushing to fonts drop down
fonts.forEach(font => {
	fontsDropdown.innerHTML += `<li><a href="javascript:void(0)" title="${font.font}" style="font-family: ${font.style}">${font.font}</a></li>`
})
//selecting font size dropdown
const fontSizeDropdown = document.querySelector('#fontSizeDropdown');
//Fetching font size list and pushing to fontsize dropdown
fontSizes.forEach(fontSize => {
	fontSizeDropdown.innerHTML += `<li><a href="javascript:void(0)">${fontSize}</a></li>`
})


let colorsRow1='';
color1.forEach(color => {
	colorsRow1 += `<a title="${color.title}" style="background-color: ${color.color}"></a>`
})
let colorsRow2 = '';
color2.forEach(color => {
	colorsRow2 += `<a title="${color.title}" style="background-color: ${color.color}"></a>`
})
let colorsRow3 = '';
color3.forEach(color => {
	colorsRow3 += `<a title="${color.title}" style="background-color: ${color.color}"></a>`
})
let colorsRow4 = '';
color4.forEach(color => {
	colorsRow4 += `<a title="${color.title}" style="background-color: ${color.color}"></a>`
})
let colorsRow5 = '';
color5.forEach(color => {
	colorsRow5 += `<a title="${color.title}" style="background-color: ${color.color}"></a>`
})
let colorsRow6 = '';
color6.forEach(color => {
	colorsRow6 += `<a title="${color.title}" style="background-color: ${color.color}"></a>`
})
let colorsRow7 = '';
color7.forEach(color => {
	colorsRow7 += `<a title="${color.title}" style="background-color: ${color.color}"></a>`
})

const textColorPalette = document.querySelector('#textColorPalette');
const bgColorPalette = document.querySelector('#bgColorPalette');
const colorCodeHTML = 
	`
		<p>Theme Colors</p>
		<div class="colors-row mb-2">${colorsRow1}</div>
		<div class="colors-row">${colorsRow2}</div>
		<div class="colors-row">${colorsRow3}</div>
		<div class="colors-row">${colorsRow4}</div>
		<div class="colors-row">${colorsRow5}</div>
		<div class="colors-row mb-2">${colorsRow6}</div>
		<p>Standard Colors</p>
		<div id="colorsRow7" class="colors-row mb-2">${colorsRow7}</div>
	`;
[textColorPalette.innerHTML,bgColorPalette.innerHTML] = [colorCodeHTML,colorCodeHTML];


const dropdownToggler = document.querySelectorAll('.toolbar-btn-dropdown');
const dropdownMenu = document.querySelector('.toolbar-dropdown');


window.addEventListener('click', function() {
	dropdownToggler.forEach( toggler=> {
		toggler.classList.remove('active');
		toggler.nextSibling.nextSibling.classList.remove('show');
	});
})

dropdownToggler.forEach( toggler=> {
	toggler.addEventListener('click', function() {
		dropdownToggler.forEach( toggler=> {
			if(this != toggler)
			{
				toggler.classList.remove('active');
				toggler.nextSibling.nextSibling.classList.remove('show');
			}
		});
		console.log(event);
		console.log(this.offsetLeft);
		event.stopPropagation();
		this.classList.toggle('active');
		this.nextSibling.nextSibling.classList.toggle('show');
		this.nextSibling.nextSibling.style.left = `${this.offsetLeft}px`;
	})
});
