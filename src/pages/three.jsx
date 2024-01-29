import { Link } from "react-router-dom";
const RecipeThreePage = () => {
  return (
    <div className=" bg-slate-200 shadow-2xl mb-10 p-6 flex  rounded max-w-6xl mx-auto mt-44">
      <div>
        <div className="flex ">
          <div>
            <p className="font-Handlee text-xl  px-10 mb-2 font-semibold">
              <u>Quinoa Salad</u>
            </p>

            <br></br>
            <p className="font-Handlee text-xl  px-10 font-semibold">
              Ingredients:
            </p>
            <p className="font-Handlee text-xl  px-10">
              1 cup quinoa <br></br>2 cups water or vegetable broth <br></br>1
              cup cherry tomatoes,<br></br> halved 1 cucumber, <br></br>diced 1
              bell pepper, diced<br></br> 1/4 cup red onion,<br></br> finely
              chopped 1/4 cup fresh parsley, <br></br>chopped 1/4 cup feta
              cheese, crumbled (optional)<br></br> 2 tablespoons olive oil{" "}
              <br></br>2 tablespoons lemon juice <br></br>Salt and pepper to
              taste
            </p>
          </div>
          <div>
            <img
              src="https://kristineskitchenblog.com/wp-content/uploads/2022/05/quinoa-salad-2.jpg"
              alt="img"
              className="rounded-2xl mx-80 mt-10 w-60 h-60"
            />
          </div>
        </div>

        <br></br>
        <p className="font-Handlee text-xl  px-10 font-semibold">
          Instructions:
        </p>
        <p className="font-Handlee text-xl  px-10 ">
          Rinse the quinoa under cold water using a fine mesh strainer to remove
          any bitterness. In a medium saucepan, combine the quinoa and water or
          vegetable broth. Bring to a boil, then reduce heat to low, cover, and
          simmer for 15-20 minutes, or until the quinoa is tender and the liquid
          is absorbed. Remove from heat and let it cool. In a large mixing bowl,
          combine the cooked quinoa, cherry tomatoes, cucumber, bell pepper, red
          onion, and parsley. In a small bowl, whisk together the olive oil,
          lemon juice, salt, and pepper to make the dressing. Pour the dressing
          over the quinoa salad and toss to coat everything evenly. If desired,
          sprinkle the crumbled feta cheese over the salad before serving. Serve
          chilled or at room temperature.
        </p>
        <br></br>
        <p className="font-Handlee text-xl  px-10 ">
          <p className="font-semibold">Nutrition Facts:</p>
          Serving Size: 1 cup<br></br> Calories: 220 <br></br>Total Fat: 9g{" "}
          <br></br>Saturated Fat: 2g<br></br>
          Trans Fat: 0g <br></br>Cholesterol: 5mg <br></br>Sodium: 220mg{" "}
          <br></br>Total Carbohydrate: 29g<br></br>
          Dietary Fiber: 4g <br></br>Sugars: 2g<br></br> Protein: 7g
        </p>
        <br></br>
        <Link to={"/recipes"}>
          <p className="underline font-Handlee text-xl  px-10">Go Back</p>
        </Link>
      </div>
    </div>
  );
};

export default RecipeThreePage;
