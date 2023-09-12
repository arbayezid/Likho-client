
import Counter from "../pages/Counting doc/Counter";
import Developer from "../pages/Developer/Developer";
import Drag from "../pages/Drag&Drop/Drag";
import EditDocs from "../pages/EditDocs/EditDocs";

import FAQ from "../pages/Home/FAQ/FAQ";
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
            <Drag></Drag>
            {/* <EditDocs></EditDocs> */}
            <NotesText></NotesText>
            <TemplateSection></TemplateSection>
            <CreativeWorkShop></CreativeWorkShop>
            <ProductsLevelUI></ProductsLevelUI>
            <MarqueeSection></MarqueeSection>
            <ReadSection></ReadSection>
            <Instruction></Instruction>
            <Review></Review>
            <Developer></Developer>
            <ChatContainer></ChatContainer>
            {/* <Counter></Counter> */}
            {/* <FAQ></FAQ> */}
            
        </div>
    );
};

export default Main;
