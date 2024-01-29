import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="font-Handlee text-xl flex  bg-slate-200 shadow-2xl mb-10 p-6 rounded max-w-6xl mx-auto mt-44">
      <div>
        <img
          src="https://c0.wallpaperflare.com/preview/1021/100/952/chef-cook-cooked-cooking.jpg"
          alt="img"
          className="rounded-2xl "
        />
        <img
          src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="img"
          className="rounded-2xl mt-2"
        />
      </div>
      <div className="px-8">
        <h4 className="text-2xl font-bold">About</h4>
        <br></br>
        <p className="mb-1 ">
          Welcome to Flavorful Journeys! We're thrilled to have you here and
          excited to share our passion for food with you.
        </p>

        <p className="mb-1">
          At Flavorful Journeys, we believe that food is more than just
          sustenance – it's an experience. It's about savoring every bite,
          exploring new flavors, and creating memories around the table. Our
          blog is dedicated to celebrating the art of cooking and the joy of
          sharing delicious meals with loved ones.
        </p>

        <p className="mb-1">
          But our journey with food goes beyond the kitchen. It's about
          discovering the stories behind each recipe, the cultural traditions
          that influence our cooking, and the connections we make through food.
          Whether we're recreating a beloved family recipe or experimenting with
          new ingredients, every dish we create has a story to tell.
        </p>

        <p className="mb-1">
          Flavorful Journeys is a place for food enthusiasts of all levels –
          from seasoned chefs to home cooks just starting out. We're here to
          inspire you with mouthwatering recipes, helpful cooking tips, and
          stories that celebrate the diversity of cuisines from around the
          world.
        </p>

        <p className="mb-1">
          But more than just a food blog, Flavorful Journeys is a community. We
          love hearing from our readers, sharing our culinary adventures, and
          learning from each other. So whether you're looking for weeknight
          dinner ideas, planning a special celebration, or simply seeking
          inspiration in the kitchen, you'll find a warm welcome here.
        </p>

        <p className="mb-1">
          Thank you for joining us on this flavorful journey. We can't wait to
          cook, eat, and explore with you!
        </p>

        <p className="mb-1">Happy cooking,</p>
        <br></br>
        <Link to={"/"}>
          <p className="underline">Go Back</p>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
