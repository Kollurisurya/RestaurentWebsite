var count=0;
const imgnames=['cbchicken.jfif','paratha.jpg','chickentikka.jpg','biryani.jfif','vegetablec.jfif','idali-dosa.jpg']
const desc=['Butter Chicken is among the best known Indian foods all over the world. Its gravy can be made as hot or mild as you like so it suits most palates.<br>Features:<br>i.Rich Taste<br>ii.Fresh <br>iii.Hygenic<br>Price:100',
'The paratha is an important part of a traditional breakfast from the Indian subcontinent. Traditionally, it is made using ghee but oil is also used. Some people may even bake it in the oven for health reasons.<br>Price:80',
'Chicken tikka is a chicken dish originating in the Indian subcontinent; the dish is popular among Muslims of India, Bangladesh and Pakistan.<br>Price : 250',
'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat usually that of chicken, goat, lamb, prawn, fish, and sometimes, in addition, eggs or vegetables such as potatoes in certain regional varieties.<br>Price : 200',
'Vegetable curry contains 3 g of saturated fat and 0 mg of cholesterol per serving. 240 g of Vegetable curry contains IU vitamin A, 28.1 mg of vitamin C and 0.00 mcg of vitamin D as well as 1.70 mg of iron, 50.40 mg of calcium and 686 mg of potassium. Vegetable curry belong to Vegetable dishes food category.<br>Price : 150',
'The common ingredients which make up the base of the batter are rice, urad dal, methi seeds and poha. These are soaked together and used to make idlis.To get really crispy dosas, we soak two additional lentils – chana dal and toor dal. This step is slightly uncommon, but it adds an amazing texture to dosas and makes them extra crispy.<br>Price : 300']

function reservePage(){
    window.open("reservation.html")
}
function changeImages(){
    if(count>imgnames.length)
        count=0;
    console.log("Count is:"+count)
    document.getElementById("imgs").src="images/FoodMenuImages/"+imgnames[count];
    document.getElementById('child2').innerHTML=desc[count];
    count++;
}
function save(){
    alert("Successfully Booked");
}