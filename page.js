import Content from "../components/Content";
import Title from "../components/Title";
export default function Home(){

function goToNextPage(){}

  return (
    <div>
      <Title heading="MAKERERE BLOG" />
      <Content details="This is a very nice blog from MAK" />

      <br />

      <Title heading="UGANDA MARTYRS BLOG" />
      <Content details="This is a very nice blog from UMU" />
      <br />

      <Title heading="NDEJJE BLOG" />
      <Content details="This is a very nice blog from NDEJJE" />



    </div>
  );
}

