import Footer from "../../../shared/Footer";
import ContactSection from "./ContactSection/ContactSection";
import ExportCards from "./ExportCards/ExportCards";
import ExportPdfBanner from "./ExportPdfBanner";
import ExportTabs from "./ExportTabs/ExportTabs";
import ExportToPdfSection from "./ExportToPdfSection/ExportToPdfSection";
import ExportToWordSection from "./ExportToWordSection/ExportToWordSection";


const ExportToPdf = () => {
    return (
        <div>
           <ExportPdfBanner></ExportPdfBanner>
           <ExportCards></ExportCards>
           <ExportTabs></ExportTabs>
           <ExportToPdfSection></ExportToPdfSection>
           <ExportToWordSection></ExportToWordSection>
           <ContactSection></ContactSection>
           <Footer></Footer>
        </div>
    );
};

export default ExportToPdf;