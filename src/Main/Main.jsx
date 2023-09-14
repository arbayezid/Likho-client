
import Banner from "../pages/Banner/Banner";
import Developer from "../pages/Developer/Developer";
import ProductsLevelUI from "../pages/Home/ProductLevelUI/ProductsLevelUI";
import Review from "../pages/Home/Review/Review";
import Instruction from "../pages/Instruction/Instruction";
import MarqueeSection from "../pages/MarqueeSection/MarqueeSection";
import CreativeWorkShop from "../pages/Mesbah/CreativeWorkShop/CreativeWorkShop";
import NotesText from "../pages/NotesText/NotesText";
import ReadSection from "../pages/ReadSection/ReadSection";
import ChatContainer from "../pages/RealTimeChatInfo/ChatContainer";
import TemplateSection from "../pages/Template/TemplateSection";








const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <NotesText></NotesText>

            {/* <ResumeEditor></ResumeEditor> */}

            <TemplateSection></TemplateSection>
            <CreativeWorkShop></CreativeWorkShop>
            <ProductsLevelUI></ProductsLevelUI>
            <MarqueeSection></MarqueeSection>
            <ReadSection></ReadSection>
            <Instruction></Instruction>
            <Review></Review>
            <Developer></Developer>
            <ChatContainer></ChatContainer>


        </div>
    );
};

export default Main;
