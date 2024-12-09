import TopComponent from "@/components/TopComponent/Header";
import IngredientsComponent from "@/components/IngredientComponent/IngredientsComponent";
import VerifiedComponent from "@/components/VerifiedComponent/VerifiedComponent";
import LatestNews from "@/components/LatestNewsComponent/LatestNews";
import ContactUs from "@/components/ContactUsComponent/ContactUs";
import styles from "../styles/Home.module.css";

const Home = ()=> {
  return (
    <div className={styles.main}>
      <img src="/company.png" alt="comapny logo"/>
      <TopComponent/>
      <VerifiedComponent/>
      <IngredientsComponent/>
      <LatestNews/>
      <ContactUs/>
    </div>
  );
}

export default Home;
