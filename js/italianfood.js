var count2=0;
const imagenames2=['pizza.jpg','lasagna.jpg','ossobuco.jpg','gelato.jpg','panzanella.jpg','focaccia.jpg'];
const desc2=['Invented in Naples somewhere between the 18th and 19th centuries, Neapolitan pizza is basically a flatbread topped with tomatoes, mozzarella cheese, and extra virgin olive oil. In reality, making a true Pizza Napoletana is an art and requires much more than just 3 or 4 simple ingredients.<br>Price : 540',
'Although there are countless ways to prepare Garfield’s favorite food, the most popular variation remains the classic Lasagne alla Bolognese, made with ragù (meat-based Bolognese sauce), Béchamel sauce, and Parmigiano-Reggiano cheese. Lasagne Napoletana, on the other hand, contains meatballs, sausage, as well as ricotta and mozzarella cheese instead of Béchamel sauce, and is usually served in Naples during the Carnivale. Price : 400',
'A hearty, flavorful Milanese specialty, ossobuco consists of veal shanks cooked slowly in white wine, meat broth, and vegetables. The traditional recipe, born probably in the late 19th century in one of the city’s neighborhood osterie, doesn’t include tomatoes and is finished with gremolata, a fresh seasoning made with lemon zest, garlic, and parsley.<br>Price : 350',
'Italians haven’t invented the ice cream, but they certainly perfected the process over the centuries. The history of Italian gelato dates back to the Renaissance period, but who exactly created the creamy frozen dessert no one knows.<br>Price : 300',
'A staple of Tuscan cuisine, or better yet, Italy’s “cucina povera”, panzanella is a healthy, delicious bread and tomato salad usually served in central Italy during the hot summer months. A classic peasant dish, it has its origins in the green fields of Tuscany, where farmers had to rely on locally grown produce to feed themselves while working.<br> Price : 450',
'Although there are countless varieties throughout Italy, the classic focaccia alla Genovese (locally known as fugassa) found in Genoa and the villages along the Italian Riviera is said to be the best in the world. This is typically made with a combination of soft and hard wheat flour, yeast, water, salt, and high-quality extra virgin olive oil.<br>Price : 550']
function italianImages(){
    if(count2>imagenames2.length)
        count2=0;
    console.log("Count is:"+count2)
    document.getElementById("imgs2").src="images/FoodMenuImages/"+imagenames2[count2];
    document.getElementById('child4').innerHTML=desc2[count2];
    count2++;
}